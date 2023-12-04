import { FormRow, FormRowSelect } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useLoaderData, useParams } from "react-router-dom";
import { JOB_STATUS, JOB_TYPE } from "../../../utils/constants";
import { Form, useNavigation, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/jobs/${params.id}`);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect("/dashboard/all-jobs");
  }
};
export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.patch(`/jobs/${params.id}`, data);
    toast.success("Objektas redaguotas");
    return redirect("/dashboard/all-jobs");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const EditJob = () => {
  const { job } = useLoaderData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "pridedama";
  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">Redaguoti objektą</h4>
        <div className="form-center">
          <FormRow type="text" name="vardas" defaultValue={job.vardas} />
          <FormRow type="text" name="telefonas" defaultValue={job.telefonas} />
          <FormRow type="text" name="email" defaultValue={job.email} />
          <FormRow
            type="text"
            name="adresas"
            labelText="Adresas"
            defaultValue={job.adresas}
          />
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
            {isSubmitting ? "pridedama..." : "redaguoti"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};
export default EditJob;
