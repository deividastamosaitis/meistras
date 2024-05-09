import { Link, useRouteError } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/images/not-found.svg';

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Puslapis nerastas</h3>
          <p>Nėra tokio puslapio</p>
          <Link to="/dashboard">Pagrindinis</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h3>Kažkas atsitiko, bandykite per naują</h3>
      </div>
    </Wrapper>
  );
};
export default Error;
