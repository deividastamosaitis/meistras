import styled from "styled-components";

const Wrapper = styled.section`
  .popup-info {
    font-size: 14px;
    line-height: 1.4;
    margin-bottom: 12px;
    color: #333;

    p {
      margin: 4px 0;
    }

    .popup-description {
      background-color: #f9f9f9;
      padding: 8px;
      border-radius: 6px;
      margin-top: 6px;
      font-style: italic;
      color: #555;
    }
  }

  .popup-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
  }

  .popup-btn {
    background-color: #0aa1c0;
    color: white;
    padding: 6px 12px;
    border-radius: 6px;
    text-decoration: none;
    border: none;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #0784a3;
    }
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
