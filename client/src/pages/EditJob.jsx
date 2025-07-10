import { useState, useCallback } from "react";
import { FormRow, FormRowSelect } from "../components";
import Wrapper from "../assets/wrappers/EditJobForm";
import { useLoaderData, useNavigation, redirect, Form } from "react-router-dom";
import { JOB_STATUS } from "../../../utils/constants";
import { AddressAutofill } from "@mapbox/search-js-react";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import { lt } from "date-fns/locale";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import customFetch from "../utils/customFetch";

export const loader = async ({ params }) => {
  try {
    const [jobRes, sutartysRes] = await Promise.all([
      customFetch.get(`/jobs/${params.id}`),
      customFetch.get(`/sutartys`),
    ]);
    return {
      job: jobRes.data.job,
      sutartys: sutartysRes.data.sutartys,
    };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect("/dashboard/all-jobs");
  }
};

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  try {
    await customFetch.patch(`/jobs/${params.id}`, formData);
    toast.success("Objektas redaguotas");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return null;
};

const EditJob = () => {
  const { job, sutartys } = useLoaderData();
  const [feature, setFeature] = useState({});
  const [lng, setLng] = useState(job.lng);
  const [lat, setLat] = useState(job.lat);
  const [fullAddress, setFullAddress] = useState(job.adresas);
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [selectedImage, setSelectedImage] = useState(null);
  const [localImages, setLocalImages] = useState(job.images || []);
  const laikas = format(startTime, "HH:mm");
  const data = format(startDate, "yyyy-MM-dd");
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const handleImageDelete = (url) => {
    const filtered = localImages.filter((img) => img !== url);
    setLocalImages(filtered);
  };

  const handleAddres = useCallback((res) => {
    const feature = res.features[0];
    setFeature(feature);
    setLng(feature.geometry.coordinates[0]);
    setLat(feature.geometry.coordinates[1]);
    setFullAddress(feature.properties.full_address);
  }, []);

  const cleanTel = String(job.telefonas).replace(/^\+?370|^0|^8/, "");
  const sutartis = sutartys.find((s) => {
    const sTel = String(s.telefonas).replace(/^\+?370|^0|^8/, "");
    return sTel === cleanTel;
  });

  let sutartiesBusena = "Sutartis nesukurta";
  if (sutartis)
    sutartiesBusena = sutartis.pdf ? "Pasirašyta" : "Laukiama pasirašymo";

  return (
    <Wrapper>
      <div className="image-gallery">
        {localImages.length > 0 ? (
          localImages.map((src, i) => (
            <div key={i} className="image-wrapper">
              <img
                src={src}
                alt={`img-${i}`}
                className="img"
                onClick={() => setSelectedImage(src)}
              />
              <button
                type="button"
                className="delete-img-btn"
                onClick={() => handleImageDelete(src)}
              >
                ✕
              </button>
            </div>
          ))
        ) : job.image ? (
          <div className="image-wrapper">
            <img
              src={job.image}
              alt="viena nuotrauka"
              className="img"
              onClick={() => setSelectedImage(job.image)}
            />
            <button
              type="button"
              className="delete-img-btn"
              onClick={() => handleImageDelete(job.image)}
            >
              ✕
            </button>
          </div>
        ) : (
          <p style={{ color: "#888" }}>Nuotraukos nepridėtos</p>
        )}
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} className="image-full" alt="padidinta" />
        </div>
      )}

      <Form method="post" encType="multipart/form-data">
        <h4 className="form-title">Redaguoti objektą</h4>

        <div className="sutarties-info">
          <strong>Sutartis:</strong>{" "}
          <span
            className={`sutartis-${sutartiesBusena
              .toLowerCase()
              .replaceAll(" ", "-")}`}
          >
            {sutartiesBusena}
          </span>
          {sutartis?.pdf && (
            <a
              href={`/${sutartis.pdf.filepath}`}
              className="sutartis-perziura"
              target="_blank"
              rel="noopener noreferrer"
            >
              Peržiūrėti
            </a>
          )}
        </div>

        <div className="form-center">
          <FormRow type="text" name="vardas" defaultValue={job.vardas} />
          <FormRow type="text" name="telefonas" defaultValue={job.telefonas} />
          <FormRow type="text" name="email" defaultValue={job.email} />

          <AddressAutofill
            accessToken="pk.eyJ1IjoiZnJpZGF5OTkiLCJhIjoiY2xqZWx6aHA1MHBqcjNlcjMydGR5OWdqYiJ9.PDiu8ZfBkoCT08_0z5FEYA"
            onRetrieve={handleAddres}
          >
            <FormRow
              type="text"
              labelText="Adresas"
              defaultValue={job.adresas}
            />
          </AddressAutofill>

          <input type="hidden" name="adresas" value={fullAddress} readOnly />
          <input type="hidden" name="lat" value={lat} readOnly />
          <input type="hidden" name="lng" value={lng} readOnly />

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
            <textarea
              name="info"
              className="form-textarea"
              defaultValue={job.info}
            ></textarea>
          </div>

          <div className="form-row">
            <label htmlFor="images" className="form-label">
              Pasirinkite nuotraukas (max 0.5MB kiekviena)
            </label>
            <input
              type="file"
              id="images"
              name="images"
              className="form-input"
              accept="image/*"
              multiple
            />
          </div>

          {/* Paslėpti laukeliai su likusiomis nuotraukomis */}
          {localImages.map((img, index) => (
            <input
              key={index}
              type="hidden"
              name="existingImages"
              value={img}
            />
          ))}

          <button
            type="submit"
            className="btn form-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Pridedama..." : "Redaguoti"}
          </button>
        </div>
      </Form>

      <div className="kalendorius">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="yyyy/MM/dd"
        />
        <DatePicker
          selected={startTime}
          onChange={(date) => setStartTime(date)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Laikas"
          dateFormat="h:mm aa"
          locale={lt}
        />
        <AddToCalendarButton
          label="Pridėti kalendoriuje"
          name={`${job.jobStatus}: ${job.vardas}`}
          options={["Google"]}
          startDate={data}
          startTime={laikas}
          endTime={laikas}
          timeZone="Europe/Vilnius"
          availability="busy"
          location={job.adresas}
          description={`telefonas: ${job.telefonas}, info: ${job.info}`}
        ></AddToCalendarButton>
      </div>
    </Wrapper>
  );
};

export default EditJob;
