import styled from "styled-components";

const Wrapper = styled.section`
  border-radius: var(--border-radius);
  width: 100%;
  background: var(--background-secondary-color);
  padding: 3rem 2rem 4rem;
  .form-title {
    margin-bottom: 2rem;
  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 1rem;
  }
  .form-btn {
    align-self: end;
    margin-top: 1rem;
    display: grid;
    place-items: center;
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
  .true {
    opacity: 30%;
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
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
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  @media (max-width: 700px) {
    .popup-innera {
      background-color: white;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
      width: 80%;
    }
  }
`;

export default Wrapper;
