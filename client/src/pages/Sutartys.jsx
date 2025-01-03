import React, { useState } from "react";
import Wrapper from "../assets/wrappers/SutartisForm";
import { Form, useNavigation, redirect, Link } from "react-router-dom";
import { FormRow, FormRowSelect } from "../components";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import day from "dayjs";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(formData);
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
  const [seen, setSeen] = useState(false);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "pridedama";

  const togglePopup = () => {
    setSeen(!seen);
  };

  return (
    <Wrapper>
      <button type="button" className="btn" onClick={togglePopup}>
        Pasirašyti sutarti
      </button>
      {seen ? (
        <Form method="post" className="form">
          <div className="form-center sutarties-forma">
            <FormRow
              type="text"
              name="pavadinimas"
              labelText={"Įmonės/Ūkio pavadinimas"}
            />
            <FormRow type="text" name="VAT" labelText={"Įmonės kodas"} />
            <FormRow type="text" name="asmuo" labelText={"Atsakingas asmuo"} />
            <FormRow type="text" name="adresas" />
            <FormRow type="text" name="telefonas" />
            <FormRow type="text" name="email" labelText={"El. paštas"} />
            <FormRow type="text" name="sutarimai" />
          </div>
          <button
            type="submit"
            className="btn btn-block form-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "pridedama" : "prideti"}
          </button>
        </Form>
      ) : (
        <>
          <table>
            <tr>
              <th>Data</th>
              <th>Pavadinimas</th>
              <th>Įmonės kodas</th>
              <th>Adresas</th>
              <th>Telefonas</th>
              <th>El. paštas</th>
              <th>Pasirašyta</th>
              <th>URL</th>
            </tr>
            {sutartys.map((sutartis) => (
              <tr>
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
                      Peržiūrėti sutartį
                    </Link>
                  ) : (
                    <Link
                      target="_blank"
                      to={`/../sutartis/${sutartis._id}`}
                      className="btn edit-btn"
                    >
                      URL
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </table>
        </>
      )}
    </Wrapper>
  );
};

export default Sutartys;
