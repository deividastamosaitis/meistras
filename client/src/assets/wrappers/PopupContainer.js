import styled from "styled-components";

const Wrapper = styled.section`
  .popup {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
  }
  .aprasymas {
    border: solid 1px black;
    padding: 5px;
  }
  .redaguoti {
    justify-content: right;
  }
  .navigacija {
    justify-content: left;
  }
  .mygtukai button,
  .redaguoti {
    cursor: pointer;
    color: #fff;
    background: #2cb1bc;
    border: transparent;
    border-radius: 0.25rem;
    letter-spacing: 1px;
    padding: 0.375rem 0.75rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    transition: 0.3s ease-in-out all;
    text-transform: capitalize;
    display: inline-block;
  }
  .mygtukai {
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
  }
`;

export default Wrapper;
