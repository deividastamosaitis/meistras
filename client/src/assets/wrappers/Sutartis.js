import styled from "styled-components";

const Wrapper = styled.section`
  .sutartis-container {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
  .sutartis-signature-box {
    width: 100%;
  }
  .sutartis-pdf-box {
    background-color: white;
    overflow: auto;
    padding: 10px;
    height: 100vh;
  }
  .sutartis-title {
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
    font-weight: bold;
  }
  .sutartis-numeris {
    font-weight: bold;
    margin-left: 5px;
  }
  .title-under {
    display: flex;
    justify-content: space-between;
  }
  .kaunas {
    margin-left: 12px;
  }
  .data {
    margin-right: 12px;
  }
  .paragraph {
    width: 100%;
    padding: 12px;
    text-align: justify;
  }
  .input {
    font-weight: bold;
  }
  .ikainiai {
    margin-top: 10px;
    margin-left: 28px;
  }
  .susitarimai {
    margin-top: 10px;
    padding: 12px;
    text-align: justify;
    display: flex;
  }
  .susitarimai span {
    font-weight: bold;
    margin-left: 10px;
  }
  .sutartis-footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 32px;
  }
  .sutartis-footer span {
    font-weight: bold;
  }
  .vykdytojas {
    margin-left: 28px;
    padding: 12px;
  }
  .vykdytojas-info {
    margin-top: 10px;
  }
  .uzsakovas {
    margin-left: 28px;
    padding: 12px;
  }
  .uzsakovas-info {
    margin-top: 10px;
  }
`;

export default Wrapper;
