import { useNavigate } from 'react-router-dom';
import './PageHeader.css';

function PageHeader({ eyebrow, title, description }) {
  const navigate = useNavigate();

  return (
    <header className="page-header">
      <button className="page-header__back" type="button" onClick={() => navigate('/')}>
        ← 홈으로
      </button>

      {eyebrow && <p className="page-header__eyebrow">{eyebrow}</p>}
      <h1 className="page-header__title">{title}</h1>
      {description && <p className="page-header__description">{description}</p>}
    </header>
  );
}

export default PageHeader;
