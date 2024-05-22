import Job from "./Job";
import Wrapper from "../assets/wrappers/JobsContainer";
import { useAllJobsContext } from "../pages/AllJobs";
import { useState } from "react";

const JobsContainer = () => {
  const { data } = useAllJobsContext();
  const { jobs } = data;
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeBtn, setActiveBtn] = useState(5);

  const handleActiveBtn = (buttonId) => {
    setActiveBtn(buttonId);
  };

  const ItemToFilter = jobs.filter((value) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return value.jobStatus === selectedCategory;
    }
  });

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
          className={activeBtn === 5 ? "btn filter-btn visi" : "btn filter-btn"}
          value="All"
          onClick={(e) => (setSelectedCategory("All"), handleActiveBtn(5))}
        >
          Visi objektai
        </button>
        <button
          className={
            activeBtn === 4
              ? "btn filter-btn ekspozicija-active-darbai"
              : "btn filter-btn ekspozicija-darbai"
          }
          value="Ekspozicija"
          onClick={(e) => (
            setSelectedCategory("Ekspozicija"), handleActiveBtn(4)
          )}
        >
          Ekspozicija
        </button>
        <button
          className={
            activeBtn === 7
              ? "btn filter-btn ekspozicija_rytoj-active-darbai"
              : "btn filter-btn ekspozicija_rytoj-darbai"
          }
          value="Ekspozicija-Rytoj"
          onClick={(e) => (
            setSelectedCategory("Ekspozicija-Rytoj"), handleActiveBtn(7)
          )}
        >
          Ekspozicija rytoj
        </button>
        <button
          className={
            activeBtn === 2
              ? "btn filter-btn montavimas-active-darbai"
              : "btn filter-btn montavimas-darbai"
          }
          value={"Montavimas"}
          onClick={(e) => (
            setSelectedCategory("Montavimas"), handleActiveBtn(2)
          )}
        >
          Montavimas
        </button>
        <button
          className={
            activeBtn === 3
              ? "btn filter-btn montavimas-SKUBU-active-darbai"
              : "btn filter-btn montavimas-SKUBU-darbai"
          }
          value={"Montavimas-SKUBU"}
          onClick={(e) => (
            setSelectedCategory("Montavimas-SKUBU"), handleActiveBtn(3)
          )}
        >
          Jopapa, darom greiciau
        </button>
        <button
          className={
            activeBtn === 6
              ? "btn filter-btn pasiulyta-active-darbai"
              : "btn filter-btn pasiulyta-darbai"
          }
          value={"Pasiulyta"}
          onClick={(e) => (
            setSelectedCategory("Pasiulyta"), handleActiveBtn(6)
          )}
        >
          Pasiūlyta
        </button>
        <button
          className={
            activeBtn === 1
              ? "btn filter-btn baigta-active-darbai"
              : "btn filter-btn baigta-darbai"
          }
          value="Baigta"
          onClick={(e) => (setSelectedCategory("Baigta"), handleActiveBtn(1))}
        >
          Baigta
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
