import { FormRow, FormRowSelect, AddAddress } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useOutletContext } from "react-router-dom";
import { JOB_STATUS, JOB_TYPE } from "../../../utils/constants";
import { Form, useNavigation, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { useState, useCallback } from "react";
import { AddressAutofill } from "@mapbox/search-js-react";
import customFetch from "../utils/customFetch";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(formData);
  try {
    await customFetch.post("/jobs", data);
    toast.success("Objektas pridėtas");
    return redirect("all-jobs");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AddJob = () => {
  //adresas
  const [feature, setFeature] = useState({});
  const [lng, setLng] = useState();
  const [lat, setLat] = useState();
  const [fullAddress, setFullAddress] = useState();
  console.log(lng, lat);
  console.log(feature);
  const handleAddres = useCallback(
    (res) => {
      const feature = res.features[0];
      setFeature(feature);
      setLng(feature.geometry.coordinates[0]);
      setLat(feature.geometry.coordinates[1]);
      setFullAddress(feature.properties.full_address);
    },
    [setFeature],
    [setLng],
    [setLat],
    [setFullAddress]
  );
  const { user } = useOutletContext();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "pridedama";
  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">Pridėti objektą</h4>
        <div className="form-center">
          <FormRow type="text" name="vardas" />
          <FormRow type="number" name="telefonas" />
          <FormRow type="text" name="email" />
          <AddressAutofill
            accessToken="pk.eyJ1IjoiZnJpZGF5OTkiLCJhIjoiY2xqZWx6aHA1MHBqcjNlcjMydGR5OWdqYiJ9.PDiu8ZfBkoCT08_0z5FEYA"
            onRetrieve={handleAddres}
          >
            <FormRow type="text" labelText={"adresas"} />
          </AddressAutofill>
          <div className="lat-lng">
            <FormRow name="adresas" defaultValue={fullAddress}></FormRow>
            <FormRow name="lat" defaultValue={lat} />
            <FormRow name="lng" defaultValue={lng} />
          </div>

          <FormRowSelect
            labelText="Statusas"
            name="jobStatus"
            defaultValue={JOB_STATUS.PENDING}
            list={Object.values(JOB_STATUS)}
          />
          <div className="form-row">
            <label htmlFor="info" className="form-label">
              Papildoma info
            </label>
            <textarea name="info" className="form-input"></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-block form-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "pridedama" : "prideti"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};
export default AddJob;
