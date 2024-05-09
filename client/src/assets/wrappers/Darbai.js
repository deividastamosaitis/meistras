import styled from "styled-components";

const Wrapper = styled.section`
  body {
    width: 50%;
    margin: 0 auto;
  }

  header {
    text-align: center;
  }

  header h1 {
    font-size: 100px;
    color: #2c3e50;
    font-weight: 200;
  }

  input {
    font-size: 20px;
    color: #2c3e50;
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 1px solid #2c3e50;
    padding: 5px;
  }

  .task {
    background-color: #34495e;
    padding: 15px;
    margin: 5px;
    overflow-x: hidden;
    border-radius: 5px;
    cursor: pointer;
  }

  .task span {
    color: #ffffff;
  }

  .icon {
    float: right;
    margin-right: 20px;
  }

  article {
    display: grid;
  }

  .edit-todo {
    width: 85%;
    font-size: 16px;
    color: #ffffff;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #ffffff;
  }

  .button {
    margin: 0 10px;
    padding: 10px;
    font-size: 14px;
    color: #6c6777;
    background-color: #fff;
    border: none;
    cursor: pointer;
    width: 100px;
    border-radius: 5px;
    margin-top: 15px;
  }

  .button.selected {
    color: #fff;
    background-color: #6c6777;
  }

  .button.clear {
    float: right;
    color: #fff;
    background-color: #ee1630;
    width: 170px;
  }
`;

export default Wrapper;
