import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link, Form } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Job';
import JobInfo from './JobInfo';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
day.extend(advancedFormat);

const Job = ({ _id, vardas, telefonas, createdAt, jobStatus, adresas }) => {
  const date = day(createdAt).format('YYYY-MM-D');
  return (
    <Wrapper>
      <header>
        <div className="main-icon">V</div>
        <div className="info">
          <h5>{vardas}</h5>
          <p>{telefonas}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={adresas} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <div className={`status ${jobStatus}`}>{jobStatus}</div>
        </div>
        <footer className="actions">
          <Link to={`../edit-job/${_id}`} className="btn edit-btn">
            Redaguoti
          </Link>
          <Form method="post" action={`../delete-job/${_id}`}>
            <button type="submit" className="btn delete-btn">
              Ištrinti
            </button>
          </Form>
        </footer>
      </div>
    </Wrapper>
  );
};
export default Job;
