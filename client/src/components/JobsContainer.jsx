import Job from './Job';
import Wrapper from '../assets/wrappers/JobsContainer';
import { useAllJobsContext } from '../pages/AllJobs';
import { useState } from 'react';

const JobsContainer = () => {
  const { data } = useAllJobsContext();
  const { jobs } = data;
  const [selectedCategory, setSelectedCategory] = useState('All');
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
      <div className="content-center">
        <button
          className="btn filter-btn baigta"
          value="Baigta"
          onClick={(e) => setSelectedCategory('Baigta')}
        >
          Baigta
        </button>
        <button
          className="btn filter-btn montavimas"
          value="Montavimas"
          onClick={(e) => setSelectedCategory('Montavimas')}
        >
          Montavimas
        </button>
        <button
          className="btn filter-btn ekspozicija"
          value="Ekspozicija"
          onClick={(e) => setSelectedCategory('Ekspozicija')}
        >
          Ekspozicija
        </button>
        <button
          className="btn filter-btn"
          value="All"
          onClick={(e) => setSelectedCategory('All')}
        >
          Visi objektai
        </button>
      </div>
      <div className="jobs">
        {ItemToFilter.map((job) => (
          <Job key={job._id} {...job} />
        ))}
      </div>
    </Wrapper>
  );
};
export default JobsContainer;
