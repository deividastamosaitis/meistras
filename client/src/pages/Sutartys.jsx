import React, { useState } from "react";
import Wrapper from "../assets/wrappers/SutartisForm";
import { Form, useNavigation, redirect, Link } from "react-router-dom";
import { FormRow, FormRowSelect } from "../components";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";

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
          <div className="form-center">
            <FormRow
              type="text"
              name="pavadinimas"
              defaultValue={"UAB Todesa"}
            />
            <FormRow type="text" name="VAT" defaultValue={123123123} />
            <FormRow type="text" name="asmuo" defaultValue={"Antanas Parts"} />
            <FormRow
              type="text"
              name="adresas"
              defaultValue={"Jonavos g. 204A, Kaunas"}
            />
            <FormRow
              type="text"
              name="patikslinimas"
              defaultValue={"Suma už valanda"}
            />
            <FormRow
              type="text"
              name="sutarimai"
              defaultValue={"Kiti sutarimai"}
            />
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
              <th>Pavadinimas</th>
              <th>Adresas</th>
              <th>Pasirašyta</th>
              <th>URL</th>
            </tr>
            {sutartys.map((sutartis) => (
              <tr>
                <td>{sutartis.pavadinimas}</td>
                <td>{sutartis.adresas}</td>
                <td>{sutartis.pasirasytas ? "Pasirašyta" : "Nepasirašyta"}</td>
                <td>
                  <Link
                    target="_blank"
                    to={`/../sutartis/${sutartis._id}`}
                    className="btn edit-btn"
                  >
                    URL
                  </Link>
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
