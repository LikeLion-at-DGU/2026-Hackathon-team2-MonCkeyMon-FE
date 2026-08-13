import { useNavigate } from "react-router-dom";
import titleImage from "../assets/images/Title.png";
import diamondIcon from "../assets/images/Diamond.svg";
import stampImage from "../assets/images/Stamp.png";
import logoImage from "../assets/images/Logo.png";
import * as S from "./LandingPage.styled";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.Title src={titleImage} />

      <S.Divider>
        <S.Line />
        <S.Diamond src={diamondIcon} alt="" />
        <S.Line />
      </S.Divider>

      <S.Slogan>
        당신의 순간을 여행으로 만드는 경험,
        <br />
        지금 함께하세요!
      </S.Slogan>

      <S.ServiceLink type="button" onClick={() => navigate("/service")}>
        서비스 설명 {">"}
      </S.ServiceLink>

      <S.StartButton type="button" onClick={() => navigate("/intro")}>
        <S.Stamp src={stampImage} />
        START
        <S.Arrow>→</S.Arrow>
      </S.StartButton>

      <S.Logo src={logoImage} />
    </S.Wrapper>
  );
}

export default LandingPage;