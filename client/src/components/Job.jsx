import {
  FaLocationArrow,
  FaPhoneSquareAlt,
  FaCalendarAlt,
  FaInfoCircle,
  FaRegEdit,
} from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { Link, Form } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Job';
import JobInfo from './JobInfo';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
day.extend(advancedFormat);

const Job = ({
  _id,
  vardas,
  email,
  telefonas,
  createdAt,
  jobStatus,
  adresas,
  info,
  createdUser,
}) => {
  const date = day(createdAt).format('YYYY-MM-D');
  return (
    <Wrapper>
      <header>
        <div
          className={`main-icon ${
            jobStatus === 'Ekspozicija'
              ? 'ekspozicija'
              : jobStatus === 'Baigta'
              ? 'baigta'
              : jobStatus === 'Montavimas-SKUBU'
              ? 'montavimas-skubu'
              : 'montavimas'
          }`}
        >
          {jobStatus.charAt(0)}
        </div>
        <div className="info">
          <h5>{vardas}</h5>
          <a href={`tel: ${telefonas}`} className="telefonas">
            <JobInfo icon={<FaPhoneSquareAlt />} text={telefonas} />
          </a>
          <a href={`mailto: ${email}`} className="email">
            <JobInfo icon={<IoIosMail />} text={email} />
          </a>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={adresas} />
          <JobInfo icon={<FaCalendarAlt />} text={`Registruota: ${date}`} />
          <JobInfo icon={<FaInfoCircle />} text={info} />
          <JobInfo
            icon={<FaRegEdit />}
            text={createdUser ? createdUser : 'Demo'}
          />
        </div>
        <div className={`status ${jobStatus}`}>{jobStatus}</div>
        <footer className="actions">
          <Link to={`../edit-job/${_id}`} className="btn edit-btn">
            Redaguoti
          </Link>
          {/* <Link to={`../detail-job/${_id}`} className="btn edit-btn">
            Daugiau info
          </Link> */}
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
