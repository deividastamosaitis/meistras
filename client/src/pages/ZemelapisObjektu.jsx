import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import customFetch from "../utils/customFetch";
import { PopupContainer } from "../components";
import { useLoaderData, Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/ZemelapisObjektu";
import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/jobs");

    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const ZemelapisObjektuContext = createContext();

const ZemelapisObjektu = () => {
  const { data } = useLoaderData();
  const { jobs } = data;
  const wazeURL = `https://waze.com/ul?ll=`;
  const [statusai, setStatusai] = useState(jobs);
  const [popupInfo, setPopupInfo] = useState(null);
  const [tel, setTel] = useState();
  const [baigta, setBaigta] = useState(true);
  const navigate = useNavigate();

  const handleBaigta = () => {
    setBaigta(!baigta);
  };

  //trinam +370, 0, 370
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
      if (tel == job.telefonas) {
        console.log(job.vardas);
        navigate(`../edit-job/${job._id}`);
      } else {
      }
    });
  };

  const handleFilter = (e) => {
    let stat = e.target.value;

    if (stat === "All") {
      setStatusai(jobs);
    } else if (stat === "Ekspozicija") {
      const filtered = jobs.filter((job) => job.jobStatus === "Ekspozicija");
      setStatusai(filtered);
    } else if (stat === "Montavimas") {
      const filtered = jobs.filter((job) => job.jobStatus === "Montavimas");
      setStatusai(filtered);
    } else if (stat === "Montavimas-Skubu") {
      const filtered = jobs.filter(
        (job) => job.jobStatus === "Montavimas-SKUBU"
      );
      setStatusai(filtered);
    } else if (stat === "Ekspozicija-Rytoj") {
      const filtered = jobs.filter(
        (job) => job.jobStatus === "Ekspozicija-Rytoj"
      );
      setStatusai(filtered);
    } else if (stat === "Pasiulyta") {
      const filtered = jobs.filter((job) => job.jobStatus === "Pasiulyta");
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
        ></input>
        <button className=" btn" onClick={handleSearch}>
          Ieškoti
        </button>
      </Wrapper>
      {/* <Wrapper>
        <div className="objektu-mygtukai">
          <button className="visi-button" value="All" onClick={handleFilter}>
            <div className="visi-button-icon"></div>
            <span>Visi objektai</span>
          </button>
          <button
            className="ekspozicija-button"
            value="Ekspozicija"
            onClick={handleFilter}
          >
            <div className="ekspozicija-button-icon"></div>

            <span>Ekspozicija</span>
          </button>
          <button
            className="ekspozicija-rytoj-button"
            value="Ekspozicija-Rytoj"
            onClick={handleFilter}
          >
            <div className="ekspozicija-rytoj-button-icon"></div>

            <span>Ekspozicija rytoj</span>
          </button>
          <button
            className="montavimas-button"
            value="Montavimas"
            onClick={handleFilter}
          >
            <div className="montavimas-button-icon"></div>

            <span>Montavimas</span>
          </button>
          <button
            className="montavimas-skubu-button"
            value="Montavimas-Skubu"
            onClick={handleFilter}
          >
            <div className="montavimas-skubu-button-icon"></div>

            <span>Montavimas skubu</span>
          </button>
          <button
            className="pasiulyta-button"
            value="Pasiulyta"
            onClick={handleFilter}
          >
            <div className="pasiulyta-button-icon"></div>
            <span>Pasiulyta</span>
          </button>
        </div>
      </Wrapper> */}
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
              job.jobStatus === "Baigta" || job.prislopintas === true
                ? "65%"
                : "1";
            if (baigta == false || job.jobStatus != "Baigta") {
              return (
                <Marker
                  key={job._id}
                  latitude={job.lat}
                  longitude={job.lng}
                  style={{ opacity: baigtaStyle, cursor: "pointer" }}
                  onClick={(e) => {
                    e.originalEvent.stopPropagation();
                    // if (job.jobStatus != 'Baigta') {
                    setPopupInfo(job);
                    // }
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
            }
          })}
          {popupInfo && (
            <>
              <div>{popupInfo.adresas}</div>
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
                />
              </Popup>
            </>
          )}
        </Map>
      </ZemelapisObjektuContext.Provider>

      <div class="checkbox-wrapper-6 box">
        <label class="checkbox">Rodyti objektus baigti</label>
        <input
          class="tgl tgl-light"
          id="cb1-6"
          type="checkbox"
          onClick={handleBaigta}
        />
        <label class="tgl-btn" for="cb1-6" />
      </div>
    </>
  );
};
export const useZemelapisObjektuContext = () =>
  useContext(ZemelapisObjektuContext);
export default ZemelapisObjektu;
