import styled from "styled-components";

const Wrapper = styled.nav`
  .objektu-mygtukai {
    display: grid;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    grid-template-columns: 1fr 1fr;
    row-gap: 1rem;
    align-items: center;
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
  }
  .objektu-mygtukai span {
    vertical-align: middle;
    margin: auto;
  }

  /* CSS */
  .visi-button {
    margin: 10px;
    padding: 15px 30px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    border-radius: 10px;
    display: flex;
    border: 0px;
    font-weight: 700;
    box-shadow: 0px 0px 14px -7px #f09819;
    background-image: linear-gradient(
      45deg,
      #ff512f 0%,
      #f09819 51%,
      #ff512f 100%
    );
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  .visi-button:hover,
  .ekspozicija-button:hover,
  .ekspozicija-rytoj-button:hover,
  .montavimas-button:hover,
  .montavimas-skubu-button:hover,
  .pasiulyta-button:hover {
    background-position: right center;
    /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }

  .visi-button:active,
  .ekspozicija-button:active,
  .ekspozicija-rytoj-button:active,
  .montavimas-button:active,
  .montavimas-skubu-button:active,
  .pasiulyta-button:active {
    transform: scale(0.95);
  }
  .ekspozicija-button {
    margin: 10px;
    padding: 15px 30px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    border-radius: 10px;
    display: flex;
    border: 0px;
    font-weight: 700;
    box-shadow: 0px 0px 14px -7px #19f040;
    background-image: linear-gradient(
      45deg,
      #67ff2f 0%,
      #19f040 51%,
      #2fff7b 100%
    );
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }
  .ekspozicija-rytoj-button {
    margin: 10px;
    padding: 15px 30px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    border-radius: 10px;
    display: flex;
    border: 0px;
    font-weight: 700;
    box-shadow: 0px 0px 14px -7px #f914d9;
    background-image: linear-gradient(
      45deg,
      #d914ff 0%,
      #f914d9 51%,
      #f41389 100%
    );
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }
  .montavimas-button {
    margin: 10px;
    padding: 15px 30px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    border-radius: 10px;
    display: flex;
    border: 0px;
    font-weight: 700;
    box-shadow: 0px 0px 14px -7px #f03519;
    background-image: linear-gradient(
      45deg,
      #ff2f2f 0%,
      #f03519 51%,
      #c63704 100%
    );
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }
  .montavimas-skubu-button {
    margin: 10px;
    padding: 15px 30px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    border-radius: 10px;
    display: flex;
    border: 0px;
    font-weight: 700;
    box-shadow: 0px 0px 14px -7px #a81c07;
    background-image: linear-gradient(
      45deg,
      #e00000 0%,
      #a81c07 51%,
      #8a2501 100%
    );
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }
  .pasiulyta-button {
    margin: 10px;
    padding: 15px 30px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    border-radius: 10px;
    display: flex;
    border: 0px;
    font-weight: 700;
    box-shadow: 0px 0px 14px -7px #ffc114;
    background-image: linear-gradient(
      45deg,
      #f9f614 0%,
      #ffc114 51%,
      #f4d313 100%
    );
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  .visi-button-icon {
    background-image: url("/montavimas2.png");
    background-size: cover;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
  }
  .ekspozicija-button-icon {
    background-image: url("/ekspozicija.png");
    background-size: cover;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
  }
  .ekspozicija-rytoj-button-icon {
    background-image: url("/ekspozicija-rytoj.png");
    background-size: cover;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
  }
  .montavimas-button-icon {
    background-image: url("/montavimas2.png");
    background-size: cover;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
  }
  .montavimas-skubu-button-icon {
    background-image: url("/montavimas-skubu.png");
    background-size: cover;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
  }
  .pasiulyta-button-icon {
    background-image: url("/pasiulyta.png");
    background-size: cover;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
  }
  .sutarties-busena {
    margin-top: 10px;
    font-size: 14px;
  }

  .sutartis-pasiras {
    color: green;
    font-weight: bold;
  }

  .sutartis-laukiama {
    color: orange;
    font-weight: bold;
  }

  .sutartis-nera {
    color: #999;
    font-style: italic;
  }
`;

export default Wrapper;
