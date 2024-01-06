import Job from "./Job";
import Wrapper from "../assets/wrappers/JobsContainer";
import { useAllJobsContext } from "../pages/AllJobs";
import { useState } from "react";

const JobsContainer = () => {
  const { data } = useAllJobsContext();
  const { jobs } = data;
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeBtnBaigti, setActiveBtnBaigti] = useState(false);
  const [activeBtnMontavimas, setActiveBtnMontavimas] = useState(false);
  const [activeBtnMontavimasSkubu, setActiveBtnMontavimasSkubu] =
    useState(false);
  const [activeBtnEkspozicija, setActiveBtnEkspozicija] = useState(false);
  const [activeBtnAll, setActiveBtnAll] = useState(false);
  const ItemToFilter = jobs.filter((value) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return value.jobStatus === selectedCategory;
    }
  });
  const toggleActiveBtnBaigti = () => {
    setActiveBtnBaigti(!activeBtnBaigti);
  };
  const toggleActiveBtnMontavimas = () => {
    setActiveBtnMontavimas(!activeBtnMontavimas);
  };
  const toggleActiveBtnMontavimasSkubu = () => {
    setActiveBtnMontavimasSkubu(!activeBtnMontavimasSkubu);
  };
  const toggleActiveBtnEkspozicija = () => {
    setActiveBtnEkspozicija(!activeBtnEkspozicija);
  };
  const toggleActiveBtnAll = () => {
    setActiveBtnAll(!activeBtnAll);
  };
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>Nėra objektų...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div className="content-center-filters">
        <button
          className={
            activeBtnBaigti
              ? "btn filter-btn baigta-active"
              : "btn filter-btn baigta"
          }
          value="Baigta"
          onClick={(e) => (
            setSelectedCategory("Baigta"), toggleActiveBtnBaigti()
          )}
        >
          Baigta
        </button>
        <button
          className={
            activeBtnMontavimas
              ? "btn filter-btn montavimas-active"
              : "btn filter-btn montavimas"
          }
          value={"Montavimas"}
          onClick={(e) => (
            setSelectedCategory("Montavimas"), toggleActiveBtnMontavimas()
          )}
        >
          Montavimas
        </button>
        <button
          className={
            activeBtnMontavimasSkubu
              ? "btn filter-btn montavimas-SKUBU-active"
              : "btn filter-btn montavimas-SKUBU"
          }
          value={"Montavimas-SKUBU"}
          onClick={(e) => (
            setSelectedCategory("Montavimas-SKUBU"),
            toggleActiveBtnMontavimasSkubu()
          )}
        >
          Jopapa, darom greiciau
        </button>
        <button
          className={
            activeBtnEkspozicija
              ? "btn filter-btn ekspozicija-active"
              : "btn filter-btn ekspozicija"
          }
          value="Ekspozicija"
          onClick={(e) => (
            setSelectedCategory("Ekspozicija"), toggleActiveBtnEkspozicija()
          )}
        >
          Ekspozicija
        </button>
        <button
          className={activeBtnAll ? "btn filter-btn" : "btn filter-btn"}
          value="All"
          onClick={(e) => (setSelectedCategory("All"), toggleActiveBtnAll())}
        >
          Visi objektai
        </button>
      </div>
      <div className="jobs">
        {ItemToFilter.map((job) => <Job key={job._id} {...job} />)
          .sort()
          .reverse()}
      </div>
    </Wrapper>
  );
};
export default JobsContainer;
