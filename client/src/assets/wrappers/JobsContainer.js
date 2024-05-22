import styled from "styled-components";

const Wrapper = styled.section`
  margin-top: 4rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
  .jobs {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  .content-center-filters {
    display: grid;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    grid-template-columns: 1fr;
    row-gap: 1.5rem;
    align-items: center;
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
  }
  .baigta-darbai {
    background: #525252;
    box-shadow: 2px 2px 3px #525252;
  }
  .ekspozicija-darbai {
    background: #064704;
    box-shadow: 2px 2px 3px #064704;
  }
  .ekspozicija_rytoj-darbai {
    background: #ba298a;
    box-shadow: 2px 2px 3px #ba298a;
  }
  .pasiulyta-darbai {
    background: #fcba05;
    box-shadow: 2px 2px 3px #fcba05;
  }
  .montavimas-darbai {
    background: #d66a6a;
    box-shadow: 2px 2px 3px #d66a6a;
  }
  .montavimas-SKUBU-darbai {
    background: #802b2b;
    box-shadow: 2px 2px 3px #802b2b;
  }
  .baigta-active-darbai {
    background: #525252 !important;
    color: #fff !important;
    box-shadow: var(--shadow-2);
  }
  .ekspozicija-active-darbai {
    background: #064704 !important;
    color: #fff !important;
    box-shadow: var(--shadow-2);
  }
  .ekspozicija_rytoj-active-darbai {
    background: #ba298a !important;
    color: #fff !important;
    box-shadow: var(--shadow-2);
  }
  .pasiulyta-active-darbai {
    background: #fcba05 !important;
    color: #fff !important;
    box-shadow: var(--shadow-2);
  }
  .montavimas-active-darbai {
    background: #d66a6a !important;
    color: #fff !important;
    box-shadow: var(--shadow-2);
  }
  .montavimas-SKUBU-active-darbai {
    background: #802b2b !important;
    color: #fff !important;
    box-shadow: var(--shadow-2);
  }
  .filter-btn {
    margin-right: 0.5rem;
    background: #fff;
    color: #000;
    font-weight: 600;
    border: 1px solid #525252;
  }
  @media (min-width: 1120px) {
    .jobs {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }
`;
export default Wrapper;
