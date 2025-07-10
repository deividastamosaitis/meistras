import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import customFetch from "../utils/customFetch";
import { PopupContainer } from "../components";
import { useLoaderData } from "react-router-dom";
import Wrapper from "../assets/wrappers/ZemelapisObjektu";
import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const loader = async () => {
  try {
    const [jobsRes, sutartysRes] = await Promise.all([
      customFetch.get("/jobs"),
      customFetch.get("/sutartys"),
    ]);
    return {
      data: jobsRes.data,
      sutartys: sutartysRes.data.sutartys,
    };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const ZemelapisObjektuContext = createContext();

const ZemelapisObjektu = () => {
  const { data, sutartys } = useLoaderData();
  const { jobs } = data;

  const [statusai, setStatusai] = useState(jobs);
  const [popupInfo, setPopupInfo] = useState(null);
  const [tel, setTel] = useState("");
  const [baigta, setBaigta] = useState(false);
  const navigate = useNavigate();

  const handleBaigta = () => {
    setBaigta(!baigta);
  };

  const filtruotiTelefonus = (numeris) => {
    return String(numeris).replace(/^(\+370|370|0|8)/, "");
  };

  const isfiltruotiTelefonai = statusai.map((job) => ({
    ...job,
    telefonas: filtruotiTelefonus(job.telefonas),
  }));

  const handleSearch = (e) => {
    e.preventDefault();
    isfiltruotiTelefonai.map((job) => {
      if (tel === job.telefonas) {
        navigate(`../edit-job/${job._id}`);
      }
    });
  };

  const handleFilter = (e) => {
    let stat = e.target.value;

    if (stat === "All") {
      setStatusai(jobs);
    } else {
      const filtered = jobs.filter((job) => job.jobStatus === stat);
      setStatusai(filtered);
    }
  };

  return (
    <>
      <Wrapper className="search-box">
        <input
          className="input"
          type="text"
          value={tel}
          placeholder="6208164"
          onChange={(e) => setTel(e.target.value)}
        />
        <button className="btn" onClick={handleSearch}>
          Ieškoti
        </button>
      </Wrapper>

      <ZemelapisObjektuContext.Provider value={{ data }}>
        <Map
          mapboxAccessToken="pk.eyJ1IjoiZnJpZGF5OTkiLCJhIjoiY2xqZWx6aHA1MHBqcjNlcjMydGR5OWdqYiJ9.PDiu8ZfBkoCT08_0z5FEYA"
          initialViewState={{
            longitude: 23.97472,
            latitude: 55.28833,
            zoom: 6,
          }}
          style={{ width: "100%", height: "700px" }}
          mapStyle="mapbox://styles/mapbox/streets-v10"
        >
          {statusai.map((job) => {
            const baigtaStyle =
              job.jobStatus === "Baigta" || job.prislopintas ? "65%" : "1";

            if (!baigta && job.jobStatus === "Baigta") return null;

            return (
              <Marker
                key={job._id}
                latitude={Number(job.lat)}
                longitude={Number(job.lng)}
                style={{ opacity: baigtaStyle, cursor: "pointer" }}
                onClick={(e) => {
                  e.originalEvent.stopPropagation();
                  setPopupInfo(job);
                }}
                color={
                  job.jobStatus === "Montavimas"
                    ? "red"
                    : job.jobStatus === "Baigta"
                    ? "black"
                    : job.jobStatus === "Montavimas-SKUBU"
                    ? "#802b2b"
                    : job.jobStatus === "Ekspozicija-Rytoj"
                    ? "#ba298a"
                    : job.jobStatus === "Pasiulyta"
                    ? "#fcba05"
                    : "green"
                }
              >
                <div
                  className={
                    job.jobStatus === "Montavimas"
                      ? "montavimas"
                      : job.jobStatus === "Baigta"
                      ? "baigta"
                      : job.jobStatus === "Montavimas-SKUBU"
                      ? "montavimas-skubu"
                      : job.jobStatus === "Ekspozicija-Rytoj"
                      ? "ekspozicija-rytoj"
                      : job.jobStatus === "Pasiulyta"
                      ? "pasiulyta"
                      : "ekspozicija"
                  }
                ></div>
              </Marker>
            );
          })}
          {popupInfo && (
            <Popup
              anchor="top"
              longitude={Number(popupInfo.lng)}
              latitude={Number(popupInfo.lat)}
              onClose={() => setPopupInfo(null)}
            >
              <PopupContainer
                vardas={popupInfo.vardas}
                telefonas={popupInfo.telefonas}
                info={popupInfo.info}
                _id={popupInfo._id}
                lat={popupInfo.lat}
                lng={popupInfo.lng}
                updatedAt={popupInfo.updatedAt}
                createdAt={popupInfo.createdAt}
                createdUser={popupInfo.createdUser}
                sutartys={sutartys}
              />
            </Popup>
          )}
        </Map>
      </ZemelapisObjektuContext.Provider>

      <div className="checkbox-wrapper-6 box">
        <label className="checkbox">Rodyti objektus baigtus</label>
        <input
          className="tgl tgl-light"
          id="cb1-6"
          type="checkbox"
          onClick={handleBaigta}
        />
        <label className="tgl-btn" htmlFor="cb1-6" />
      </div>
    </>
  );
};

export const useZemelapisObjektuContext = () =>
  useContext(ZemelapisObjektuContext);

export default ZemelapisObjektu;
