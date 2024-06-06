import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/PopupContainer";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
day.extend(advancedFormat);

const PopupContainer = ({
  vardas,
  telefonas,
  info,
  _id,
  lat,
  lng,
  createdAt,
  updatedAt,
  createdUser,
}) => {
  const date = day(createdAt).format("YYYY-MM-DD");
  const edit = day(updatedAt).format("YYYY-MM-D H:m");
  const wazeURL = `https://waze.com/ul?ll=`;
  return (
    <Wrapper>
      <div className="popup">
        <div>
          <span>Vardas: </span> <b>{vardas}</b>
        </div>
        <div>
          <span>Telefonas: </span>
          <b>{telefonas}</b>
        </div>
        <div>
          <span>Sukurta: </span>
          <b>
            {date}, {createdUser}
          </b>
        </div>
        <div>
          <span>Redaguota: </span>
          <b>{edit}</b>
        </div>
      </div>
      <div className="aprasymas">
        <span>Aprašymas: </span>
        <div className="info-tekstas">
          <b> {info}</b>
        </div>
      </div>

      <div className="mygtukai">
        <Link to={`../edit-job/${_id}`} className="redaguoti">
          Redaguoti
        </Link>
        <a
          href={`${wazeURL}${lat},${lng}'&navigate=yes'`}
          className="redaguoti"
        >
          Navigacija
        </a>
      </div>
    </Wrapper>
  );
};

export default PopupContainer;
