import PageHeader from '../components/PageHeader';
import { FEATURES, PROJECT, STACK } from '../data/info';
import './ProjectPage.css';

function ProjectPage() {
  return (
    <main className="page">
      <PageHeader
        eyebrow={PROJECT.title}
        title="프로젝트 소개"
        description="AI는 럭셔리 경험을 어떻게 혁신할 수 있을까"
      />

      <section className="section">
        <h2 className="section__title">주제</h2>
        <p className="section__body">{PROJECT.problem}</p>
      </section>

      <section className="section">
        <h2 className="section__title">핵심 기능</h2>
        <ol className="feature-list">
          {FEATURES.map((feature) => (
            <li className="feature-item" key={feature.title}>
              <h3 className="feature-item__title">{feature.title}</h3>
              <p className="feature-item__detail">{feature.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section">
        <h2 className="section__title">기술 스택</h2>
        <ul className="stack-list">
          {STACK.map((tech) => (
            <li className="stack-tag" key={tech}>
              {tech}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default ProjectPage;
