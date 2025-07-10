// styled-component: EditJobForm.js

import styled from "styled-components";

const Wrapper = styled.section`
  border-radius: var(--border-radius);
  width: 100%;
  background: var(--background-secondary-color);
  padding: 3rem 2rem 4rem;

  .form-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
    color: var(--primary-500);
    text-align: center;
    width: 100%;
  }

  .form {
    max-width: 100%;
    margin: 0 auto;
  }

  .form-center {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  .form-row {
    display: flex;
    flex-direction: column;
  }

  .form-label {
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .form-input,
  .form-textarea {
    padding: 0.75rem;
    font-size: 1rem;
    border-radius: var(--border-radius);
    border: 1px solid var(--grey-300);
    background: var(--white);
  }

  .form-textarea {
    min-height: 120px;
  }

  .form-btn {
    background-color: var(--primary-500);
    color: white;
    border: none;
    padding: 0.75rem;
    font-weight: bold;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  }

  .form-btn:hover {
    background-color: var(--primary-700);
  }

  .img {
    width: 100%;
    max-height: 400px;
    object-fit: contain;
    border-radius: var(--border-radius);
    margin-bottom: 2rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  }

  .kalendorius {
    margin-top: 2rem;
    text-align: center;
  }

  .sutarties-info {
    margin-bottom: 1rem;
    font-size: 1rem;
    font-weight: 500;
    color: var(--grey-700);
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
    color: #888;
    font-style: italic;
  }

  .sutartis-perziura {
    display: inline-block;
    margin-left: 1rem;
    font-size: 0.9rem;
    color: var(--primary-600);
    text-decoration: underline;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    .form-center {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1100px) {
    .form-center {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .image-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.85);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  .image-full {
    max-width: 90%;
    max-height: 90%;
    border-radius: var(--border-radius);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
    cursor: zoom-out;
  }
  .image-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: var(--border-radius);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
  }
  .image-wrapper {
    position: relative;
    overflow: hidden;
    border-radius: var(--border-radius);
  }

  .delete-img-btn {
    position: absolute;
    top: 6px;
    right: 6px;
    background: rgba(0, 0, 0, 0.6);
    border: none;
    color: white;
    font-size: 14px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s ease-in-out;
  }

  .delete-img-btn:hover {
    background: rgba(255, 0, 0, 0.8);
  }
`;

export default Wrapper;
