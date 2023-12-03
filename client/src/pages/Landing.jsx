import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Objektų <span>sekimo</span> app'sas
          </h1>
          <p>
            Kol kas demo versija, bet pagrindinės funkcijos sudėtos:
            <b>
              {' '}
              objekto pridėjimas, redagavimas, žemėlapis, navigacija (Waze){' '}
            </b>
            <br />
            Greitu metu bus pridėta: <b>pagražinta viskas, gal kameros? </b>
          </p>
          <Link to="/register" className="btn register-link">
            Registracija
          </Link>
          <Link to="/login" className="btn ">
            Prisijungimas / Demo
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
