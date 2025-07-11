// EditJob.jsx
import { useState, useCallback } from "react";
import { FormRow, FormRowSelect } from "../components";
import Wrapper from "../assets/wrappers/EditJobForm";
import {
  useLoaderData,
  useNavigation,
  redirect,
  Form,
  useNavigate,
} from "react-router-dom";
import { JOB_STATUS } from "../../../utils/constants";
import { AddressAutofill } from "@mapbox/search-js-react";
import { toast } from "react-toastify";
import { format } from "date-fns";
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
  const [selectedImage, setSelectedImage] = useState(null);
  const [localImages, setLocalImages] = useState(job.images || []);
  const [prislopintas, setPrislopintas] = useState(job.prislopintas);
  const [showCoordsModal, setShowCoordsModal] = useState(false);
  const navigation = useNavigation();
  const navigate = useNavigate();
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

  const handleSutartis = () => {
    navigate("/dashboard/sutartys", {
      state: {
        pavadinimas: job.vardas,
        telefonas: job.telefonas,
        email: job.email,
        adresas: job.adresas,
      },
    });
  };

  return (
    <Wrapper>
      <Form method="post" encType="multipart/form-data" className="form">
        <h4 className="form-title">Redaguoti objektą</h4>

        <div className="form-section">
          <div className="form-row checkbox-row">
            <label htmlFor="prislopintas" className="form-label">
              Prislopinti
            </label>
            <input
              type="checkbox"
              id="prislopintas"
              name="prislopintas"
              checked={prislopintas}
              onChange={(e) => setPrislopintas(e.target.checked)}
              className="checkbox-input"
            />
          </div>
        </div>

        <div className="form-section">
          <div className="sutarties-info">
            <strong>Sutartis:</strong>{" "}
            <span
              className={`sutartis-${sutartiesBusena
                .toLowerCase()
                .replaceAll(" ", "-")}`}
            >
              {sutartiesBusena}
            </span>
            {sutartis ? (
              <>
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
                <button
                  type="button"
                  className="btn sutartis-btn"
                  onClick={() => {
                    const url = `http://sutartys.todesa.lt/sutartis/${sutartis._id}`;
                    navigator.clipboard.writeText(url);
                    toast.success("Sutarties nuoroda nukopijuota!");
                  }}
                >
                  Kopijuoti nuorodą klientui
                </button>
              </>
            ) : (
              <button
                type="button"
                className="btn sutartis-btn"
                onClick={handleSutartis}
              >
                Sudaryti sutartį
              </button>
            )}
          </div>
        </div>

        <div className="form-section">
          <div className="form-center">
            <FormRow type="text" name="vardas" defaultValue={job.vardas} />
            <FormRow
              type="text"
              name="telefonas"
              defaultValue={job.telefonas}
            />
            <FormRow type="text" name="email" defaultValue={job.email} />

            <div className="form-row">
              <label className="form-label">Adresas</label>
              <input
                type="text"
                name="adresas"
                className="form-input"
                value={fullAddress}
                readOnly
              />
              <button
                type="button"
                className="btn"
                onClick={() => setShowCoordsModal(true)}
              >
                Keisti koordinates
              </button>
            </div>

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
          </div>
        </div>

        {localImages.map((img, index) => (
          <input key={index} type="hidden" name="existingImages" value={img} />
        ))}

        <button type="submit" className="btn form-btn" disabled={isSubmitting}>
          {isSubmitting ? "Pridedama..." : "Redaguoti"}
        </button>
      </Form>

      <div className="form-section">
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
          ) : (
            <p style={{ color: "#888" }}>Nuotraukos nepridėtos</p>
          )}
        </div>
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} className="image-full" alt="padidinta" />
        </div>
      )}

      {showCoordsModal && (
        <div className="image-modal" onClick={() => setShowCoordsModal(false)}>
          <div className="popup-innera" onClick={(e) => e.stopPropagation()}>
            <h3>Keisti koordinates</h3>
            <label>Adresas</label>
            <input
              type="text"
              className="form-input"
              value={fullAddress}
              onChange={(e) => setFullAddress(e.target.value)}
            />
            <label>Lat</label>
            <input
              type="text"
              className="form-input"
              value={lat}
              onChange={(e) => setLat(e.target.value)}
            />
            <label>Lng</label>
            <input
              type="text"
              className="form-input"
              value={lng}
              onChange={(e) => setLng(e.target.value)}
            />
            <button
              className="btn form-btn"
              onClick={() => setShowCoordsModal(false)}
            >
              Išsaugoti
            </button>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default EditJob;
