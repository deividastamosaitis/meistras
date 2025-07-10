import React from "react";
import { Link, useNavigate } from "react-router-dom";
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
  sutartys = [],
}) => {
  const navigate = useNavigate();
  const date = day(createdAt).format("YYYY-MM-DD");
  const edit = day(updatedAt).format("YYYY-MM-D H:mm");
  const wazeURL = `https://waze.com/ul?ll=${lat},${lng}&navigate=yes`;

  // 🌟 Svarbiausia: čia ieškom pagal telefono numerį
  const cleanTel = String(telefonas).replace(/^(\+370|370|0|8)/, "");
  const sutartis = sutartys.find((s) => {
    const sTel = String(s.telefonas).replace(/^(\+370|370|0|8)/, "");
    return sTel === cleanTel;
  });

  let sutartiesBusena = "Sutartis nesukurta";
  if (sutartis) {
    sutartiesBusena = sutartis.pdf ? "Pasirašyta" : "Laukiama pasirašymo";
  }

  const handleCreateContract = () => {
    navigate("/dashboard/sutartys", {
      state: {
        vardas,
        telefonas,
        adresas: info,
      },
    });
  };

  return (
    <Wrapper>
      <div className="popup-info">
        <p>
          <strong>Vardas:</strong> {vardas}
        </p>
        <p>
          <strong>Telefonas:</strong> {telefonas}
        </p>
        <p>
          <strong>Sukurta:</strong> {date}, {createdUser}
        </p>
        <p>
          <strong>Redaguota:</strong> {edit}
        </p>
        <p>
          <strong>Aprašymas:</strong>
        </p>
        <div className="popup-description">{info}</div>

        <p>
          <strong>Sutartis:</strong>{" "}
          <span
            className={
              sutartiesBusena === "Pasirašyta"
                ? "sutartis-pasiras"
                : sutartiesBusena === "Laukiama pasirašymo"
                ? "sutartis-laukiama"
                : "sutartis-nera"
            }
          >
            {sutartiesBusena}
          </span>
        </p>
      </div>

      <div className="popup-actions">
        <Link to={`../edit-job/${_id}`} className="popup-btn">
          Redaguoti
        </Link>
        <a
          href={wazeURL}
          className="popup-btn"
          target="_blank"
          rel="noreferrer"
        >
          Navigacija
        </a>
        <button onClick={handleCreateContract} className="popup-btn">
          Sudaryti sutartį
        </button>
      </div>
    </Wrapper>
  );
};

export default PopupContainer;
