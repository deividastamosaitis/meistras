import Job from './Job';
import Wrapper from '../assets/wrappers/JobsContainer';
import { useAllJobsContext } from '../pages/AllJobs';
import { useState } from 'react';

const JobsContainer = () => {
  const { data } = useAllJobsContext();
  const { jobs } = data;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeBtn, setActiveBtn] = useState(5);

  const handleActiveBtn = (buttonId) => {
    setActiveBtn(buttonId);
  };

  const ItemToFilter = jobs.filter((value) => {
    if (selectedCategory === 'All') {
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
          className={activeBtn === 5 ? 'btn filter-btn visi' : 'btn filter-btn'}
          value="All"
          onClick={(e) => (setSelectedCategory('All'), handleActiveBtn(5))}
        >
          Visi objektai
        </button>
        <button
          className={
            activeBtn === 4
              ? 'btn filter-btn ekspozicija-active'
              : 'btn filter-btn ekspozicija'
          }
          value="Ekspozicija"
          onClick={(e) => (
            setSelectedCategory('Ekspozicija'), handleActiveBtn(4)
          )}
        >
          Ekspozicija
        </button>
        <button
          className={
            activeBtn === 2
              ? 'btn filter-btn montavimas-active'
              : 'btn filter-btn montavimas'
          }
          value={'Montavimas'}
          onClick={(e) => (
            setSelectedCategory('Montavimas'), handleActiveBtn(2)
          )}
        >
          Montavimas
        </button>
        <button
          className={
            activeBtn === 3
              ? 'btn filter-btn montavimas-SKUBU-active'
              : 'btn filter-btn montavimas-SKUBU'
          }
          value={'Montavimas-SKUBU'}
          onClick={(e) => (
            setSelectedCategory('Montavimas-SKUBU'), handleActiveBtn(3)
          )}
        >
          Jopapa, darom greiciau
        </button>
        <button
          className={
            activeBtn === 6
              ? 'btn filter-btn pasiulyta-active'
              : 'btn filter-btn pasiulyta'
          }
          value={'Pasiulyta'}
          onClick={(e) => (
            setSelectedCategory('Pasiulyta'), handleActiveBtn(6)
          )}
        >
          Pasiūlyta
        </button>
        <button
          className={
            activeBtn === 1
              ? 'btn filter-btn baigta-active'
              : 'btn filter-btn baigta'
          }
          value="Baigta"
          onClick={(e) => (setSelectedCategory('Baigta'), handleActiveBtn(1))}
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
