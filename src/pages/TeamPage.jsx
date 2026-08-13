import PageHeader from '../components/PageHeader';
import { MEMBERS, TEAM } from '../data/info';
import './TeamPage.css';

function TeamPage() {
  return (
    <main className="page">
      <PageHeader
        eyebrow={`${TEAM.hackathon} ${TEAM.number}팀`}
        title="팀 소개"
        description="Team 몽키몽입니다."
      />

      <section className="section">
        <h2 className="section__title">우리 팀</h2>
        <p className="section__lead">
          {TEAM.university} {TEAM.name}
        </p>
      </section>

      <section className="section">
        <h2 className="section__title">팀원과 역할</h2>
        <ul className="member-list">
          {MEMBERS.map((member) => (
            <li className="member-row" key={member.name}>
              <span className="member-row__name">{member.name}</span>
              <span className="member-row__role">{member.role}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default TeamPage;
