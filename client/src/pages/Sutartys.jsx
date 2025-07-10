import React, { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/SutartisForm";
import {
  Form,
  useNavigation,
  redirect,
  Link,
  useLocation,
} from "react-router-dom";
import { FormRow } from "../components";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import day from "dayjs";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/sutartys", data);
    toast.success("Sukurta sutartis");
    return redirect("../zemelapis-objektu");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/sutartys");
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Sutartys = () => {
  const { data } = useLoaderData();
  const { sutartys } = data;
  const location = useLocation();
  const defaultData = location.state || {};

  const [seen, setSeen] = useState(false);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  // Jei buvo perduoti duomenys, atidaryti formą automatiškai
  useEffect(() => {
    if (defaultData.vardas || defaultData.telefonas || defaultData.adresas) {
      setSeen(true);
    }
  }, [defaultData]);

  const togglePopup = () => {
    setSeen((prev) => !prev);
  };

  return (
    <Wrapper>
      <button type="button" className="btn" onClick={togglePopup}>
        {seen ? "Uždaryti formą" : "Pasirašyti sutartį"}
      </button>

      {seen ? (
        <Form method="post" className="form">
          <div className="form-center sutarties-forma">
            <FormRow
              type="text"
              name="pavadinimas"
              labelText={"Įmonės/Ūkio pavadinimas"}
              defaultValue={defaultData.vardas || ""}
            />
            <FormRow type="text" name="VAT" labelText={"Įmonės kodas"} />
            <FormRow type="text" name="asmuo" labelText={"Atsakingas asmuo"} />
            <FormRow
              type="text"
              name="adresas"
              defaultValue={defaultData.adresas || ""}
            />
            <FormRow
              type="text"
              name="telefonas"
              defaultValue={defaultData.telefonas || ""}
            />
            <FormRow type="text" name="email" labelText={"El. paštas"} />
            <FormRow
              type="text"
              name="sutarimai"
              labelText={"Papildomi susitarimai"}
            />
          </div>
          <button
            type="submit"
            className="btn btn-block form-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Pridedama..." : "Pridėti"}
          </button>
        </Form>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Data</th>
                <th>Pavadinimas</th>
                <th>Įmonės kodas</th>
                <th>Adresas</th>
                <th>Telefonas</th>
                <th>El. paštas</th>
                <th>Pasirašyta</th>
                <th>Veiksmas</th>
              </tr>
            </thead>
            <tbody>
              {sutartys.map((sutartis) => (
                <tr key={sutartis._id}>
                  <td>{day(sutartis.createdAt).format("YYYY-MM-DD")}</td>
                  <td>{sutartis.pavadinimas}</td>
                  <td>{sutartis.VAT}</td>
                  <td>{sutartis.adresas}</td>
                  <td>{sutartis.telefonas}</td>
                  <td>{sutartis.email}</td>
                  <td>
                    {sutartis.pdf ? (
                      <span className="pasirasyta">Pasirašyta</span>
                    ) : (
                      <span className="nepasirasyta">Laukiama</span>
                    )}
                  </td>
                  <td>
                    {sutartis.pdf ? (
                      <Link
                        target="_blank"
                        to={`../${sutartis.pdf.filepath}`}
                        className="btn edit-btn"
                      >
                        Peržiūrėti PDF
                      </Link>
                    ) : (
                      <Link
                        target="_blank"
                        to={`/sutartis/${sutartis._id}`}
                        className="btn edit-btn"
                      >
                        Pasirašyti
                      </Link>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </Wrapper>
  );
};

export default Sutartys;
