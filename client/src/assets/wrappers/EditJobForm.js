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
  }

  .form {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .form-section {
    padding-top: 1.5rem;
    margin-top: 1rem;
    border-top: 1px solid var(--grey-200);
  }

  .section-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--primary-600);
  }

  .form-center {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.5rem;
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
    resize: vertical;
  }

  .form-btn {
    background-color: var(--primary-500);
    color: white;
    border: none;
    padding: 0.75rem 2rem;
    font-weight: bold;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    margin-top: 2rem;
    align-self: flex-end;
  }

  .form-btn:hover {
    background-color: var(--primary-700);
  }

  .checkbox-row {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin: 0.5rem 0;
  }

  .checkbox-input {
    transform: scale(1.3);
    cursor: pointer;
  }

  .image-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .image-wrapper {
    position: relative;
    overflow: hidden;
    border-radius: var(--border-radius);
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
  }

  .delete-img-btn:hover {
    background: rgba(255, 0, 0, 0.8);
  }

  .sutarties-info {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
    font-size: 1rem;
    font-weight: 500;
    color: var(--grey-700);
    margin-bottom: 1rem;
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
    font-size: 0.9rem;
    color: var(--primary-600);
    text-decoration: underline;
    cursor: pointer;
  }

  .sutartis-btn {
    background-color: var(--primary-500);
    color: white;
    border: none;
    padding: 0.4rem 1rem;
    font-size: 0.85rem;
    border-radius: var(--border-radius);
    cursor: pointer;
  }

  .sutartis-btn:hover {
    background-color: var(--primary-700);
  }

  .image-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .popup-innera {
    background: var(--white);
    padding: 2rem;
    border-radius: var(--border-radius);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
    width: 90%;
    max-width: 500px;
    position: relative;
  }

  .popup-innera h3 {
    margin-bottom: 1rem;
    font-size: 1.25rem;
    text-align: center;
    color: var(--primary-600);
  }

  .popup-innera label {
    display: block;
    margin-bottom: 0.25rem;
    font-weight: 500;
  }

  .popup-innera input {
    width: 100%;
    margin-bottom: 1rem;
    padding: 0.75rem;
    font-size: 1rem;
    border: 1px solid var(--grey-300);
    border-radius: var(--border-radius);
    background: var(--white);
  }

  .popup-innera .form-btn {
    width: 100%;
    margin-top: 1rem;
  }

  .kalendorius {
    text-align: center;
    margin-top: 2rem;
  }

  @media (max-width: 768px) {
    .form-btn {
      width: 100%;
    }

    .sutarties-info {
      flex-direction: column;
      align-items: flex-start;
    }

    .form-center {
      grid-template-columns: 1fr;
    }
  }
`;

export default Wrapper;
