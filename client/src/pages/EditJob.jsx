import { FormRow, FormRowSelect } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useLoaderData, useParams } from 'react-router-dom';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';
import { Form, useNavigation, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useState, useCallback } from 'react';
import { AddressAutofill } from '@mapbox/search-js-react';
import customFetch from '../utils/customFetch';

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/jobs/${params.id}`);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect('/dashboard/all-jobs');
  }
};
export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.patch(`/jobs/${params.id}`, data);
    toast.success('Objektas redaguotas');
    return redirect('/dashboard/all-jobs');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const EditJob = () => {
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

  const { job } = useLoaderData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'pridedama';
  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">Redaguoti objektą</h4>
        <div className="form-center">
          <FormRow type="text" name="vardas" defaultValue={job.vardas} />
          <FormRow type="text" name="telefonas" defaultValue={job.telefonas} />
          <FormRow type="text" name="email" defaultValue={job.email} />
          {/* <FormRow
            type="text"
            name="adresas"
            labelText="Adresas"
            defaultValue={job.adresas}
          /> */}

          <AddressAutofill
            accessToken="pk.eyJ1IjoiZnJpZGF5OTkiLCJhIjoiY2xqZWx6aHA1MHBqcjNlcjMydGR5OWdqYiJ9.PDiu8ZfBkoCT08_0z5FEYA"
            onRetrieve={handleAddres}
          >
            <FormRow
              type="text"
              labelText={'adresas'}
              defaultValue={job.adresas}
            />
          </AddressAutofill>

          <div className="lat-lng">
            <FormRow name="adresas" defaultValue={job.adresas}></FormRow>
            <FormRow name="lat" defaultValue={job.lat} />
            <FormRow name="lng" defaultValue={job.lng} />
          </div>

          <FormRowSelect
            name="jobStatus"
            labelText="Statusas"
            defaultValue={job.jobStatus}
            list={Object.values(JOB_STATUS)}
          />
          <div className="form-row">
            <label htmlFor="info" className="form-label">
              Papildoma info
            </label>
            <textarea name="info" className="form-input">
              {job.info}
            </textarea>
          </div>
          <button
            type="submit"
            className="btn btn-block form-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'pridedama...' : 'redaguoti'}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};
export default EditJob;
