import React, { useCallback, useState } from "react";
import { FormRow } from "../components";
import { Form } from "react-router-dom";
import { AddressAutofill } from "@mapbox/search-js-react";

const AddressContainer = () => {
  const [feature, setFeature] = useState({});
  const [coordinates, setCoordinates] = useState();
  const handleAddres = useCallback(
    (res) => {
      const feature = res.features[0];
      setFeature(feature);
      setCoordinates(feature.geometry.coordinates);
    },
    [setFeature],
    [setCoordinates]
  );
  return (
    <Form>
      <AddressAutofill
        accessToken="pk.eyJ1IjoiZnJpZGF5OTkiLCJhIjoiY2xqZWx6aHA1MHBqcjNlcjMydGR5OWdqYiJ9.PDiu8ZfBkoCT08_0z5FEYA"
        onRetrieve={handleAddres}
      >
        <FormRow type="text" name="adresas" />
        {/* <input
          type="text"
          className="form-input"
          name="adresas"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoComplete="address-line1"
        /> */}
      </AddressAutofill>
    </Form>
  );
};

export default AddressContainer;
