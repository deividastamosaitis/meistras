import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import customFetch from '../utils/customFetch';
import { useLoaderData, Link } from 'react-router-dom';
import { useContext, createContext, useState } from 'react';

export const loader = async () => {
  try {
    const { data } = await customFetch.get('/jobs');

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
  const [popupInfo, setPopupInfo] = useState(null);
  return (
    <ZemelapisObjektuContext.Provider value={{ data }}>
      <Map
        mapboxAccessToken="pk.eyJ1IjoiZnJpZGF5OTkiLCJhIjoiY2xqZWx6aHA1MHBqcjNlcjMydGR5OWdqYiJ9.PDiu8ZfBkoCT08_0z5FEYA"
        initialViewState={{
          longitude: 23.97472,
          latitude: 55.28833,
          zoom: 6,
        }}
        style={{ width: '100%', height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v10"
      >
        {jobs.map((job) => {
          return (
            <Marker
              key={job._id}
              latitude={job.lat}
              longitude={job.lng}
              onClick={(e) => {
                e.originalEvent.stopPropagation();
                setPopupInfo(job);
              }}
              color={
                job.jobStatus === 'Montavimas'
                  ? 'red'
                  : job.jobStatus === 'Baigta'
                  ? 'black'
                  : 'green'
              }
            ></Marker>
          );
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
              <div className="popup">
                {popupInfo.vardas} | {popupInfo.telefonas}
                <div className="info-tekstas">{popupInfo.info}</div>
              </div>
              <Link
                to={`../edit-job/${popupInfo._id}`}
                className="btn edit-btn"
              >
                Redaguoti
              </Link>
              <a
                href={`${wazeURL}${popupInfo.lat},${popupInfo.lng}'&navigate=yes'`}
              >
                <button className="btn edit-btn">Navigacija</button>
              </a>
            </Popup>
          </>
        )}
      </Map>
    </ZemelapisObjektuContext.Provider>
  );
};
export const useZemelapisObjektuContext = () =>
  useContext(ZemelapisObjektuContext);
export default ZemelapisObjektu;
