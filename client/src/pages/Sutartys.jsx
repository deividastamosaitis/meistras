import React, { useState } from "react";
import Wrapper from "../assets/wrappers/SutartisForm";
import { Form, useNavigation, redirect } from "react-router-dom";
import { FormRow, FormRowSelect } from "../components";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

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

const Sutartys = () => {
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
        <>nera</>
      )}
    </Wrapper>
  );
};

export default Sutartys;
