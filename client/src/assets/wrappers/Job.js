import styled from "styled-components";

const Wrapper = styled.article`
  background: var(--background-secondary-color);
  border-radius: var(--border-radius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);
  header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-100);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
  }
  .main-icon {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    background: var(--primary-500);
    border-radius: var(--border-radius);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white);
    margin-right: 2rem;
  }
  .baigta {
    background: #525252;
  }
  .ekspozicija {
    background: #064704;
  }
  .montavimas {
    background: #d66a6a;
  }
  .montavimas-skubu {
    background: #802b2b;
  }
  .Montavimas-SKUBU {
    background: #802b2b;
  }
  .Pasiulyta {
    background: #fcba05;
  }
  .info {
    h5 {
      margin-bottom: 0.5rem;
    }
    p {
      margin: 0;
      text-transform: capitalize;
      letter-spacing: var(--letter-spacing);
      color: var(--text-secondary-color);
    }
  }
  .content {
    padding: 1rem 1.5rem;
  }
  .content-center {
    display: grid;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    grid-template-columns: 1fr;
    row-gap: 1.5rem;
    align-items: center;
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
    }
  }
  .status {
    border-radius: var(--border-radius);
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    text-align: center;
    width: 120px;
    font-weight: 500;
    height: 30px;
    display: grid;
    align-items: center;
  }
  .actions {
    margin-top: 1rem;
    display: flex;
    align-items: center;
  }
  .edit-btn,
  .delete-btn {
    height: 30px;
    font-size: 0.85rem;
    display: flex;
    align-items: center;
  }
  .edit-btn {
    margin-right: 0.5rem;
  }
  .popupa {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .popup-innera {
    background-color: white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    width: 40%;
  }

  .popup-innera h2 {
    margin-top: 0;
  }

  .popup-innera label {
    display: block;
    margin-bottom: 10px;
  }

  .popup-innera input {
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
  }

  .popup-innera button[type="submit"],
  .popup-innera button[type="button"] {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-right: 10px;
    cursor: pointer;
    border-radius: 5px;
  }

  .popup-innera button[type="submit"]:hover,
  .popup-innera button[type="button"]:hover {
    background-color: #45a049;
  }

  .popup-innera button[type="submit"] {
    margin-top: 20px;
  }

  .popup-innera button[type="button"] {
    margin-top: 20px;
    background-color: #f44336;
  }

  .popup-innera button[type="button"]:hover {
    background-color: #da190b;
  }

  .popup-innera button[type="submit"]:disabled {
    background-color: #bfbfbf;
    color: #ffffff;
    cursor: not-allowed;
  }

  .popup-innera button[type="button"]:disabled {
    background-color: #bfbfbf;
    color: #ffffff;
    cursor: not-allowed;
  }
`;

export default Wrapper;
