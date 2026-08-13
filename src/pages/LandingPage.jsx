import { Link } from 'react-router-dom';
import { TEAM } from '../data/info';
import './LandingPage.css';

function LandingPage() {
  return (
    <main className="landing">
      <p className="landing__team">
        {TEAM.university} · {TEAM.hackathon} {TEAM.number}팀
      </p>

      <h1 className="landing__title">{TEAM.name}</h1>
      <p className="landing__slogan">{TEAM.slogan}</p>

      <nav className="landing__nav" aria-label="주요 페이지">
        <ul>
          <li>
            <Link to="/team">팀 소개 페이지</Link>
          </li>
          <li>
            <Link to="/project">프로젝트 소개 페이지</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}

export default LandingPage;
