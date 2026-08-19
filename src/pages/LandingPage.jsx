import { useNavigate } from "react-router-dom";
import { useChatStore } from "../store/chatStore";
import titleImage from "../assets/images/Title.png";
import diamondIcon from "../assets/images/Diamond.svg";
import logoImage from "../assets/images/Logo.png";
import airplaneImage from "../assets/images/Airplane.png";
import ticketImage from "../assets/images/Ticket.png";
import stickerImage from "../assets/images/Sticker.png";
import * as S from "./LandingPage.styled";

import { useExperienceStore } from "../store/experienceStore";
import { createExperience } from "../apis/experienceApi";

function LandingPage() {
  const navigate = useNavigate();
  const setSessionId = useExperienceStore((state) => state.setSessionId);

  const handleStart = async () => {
    const res = await createExperience();
    setSessionId(res.data.id);
    navigate("/intro");
  };

  return (
    <S.Wrapper>
      <S.Title src={titleImage} />
      <S.FloatItem
        src={stickerImage}
        style={{ width: "260px", top: "25px", left: "20px", animationDuration: "4s", transform: "rotate(-7.003deg)" }}
      />
      <S.FloatItem
        src={airplaneImage}
        style={{ width: "400px", top: "10px", right: "10px", animationDuration: "5s", animationDelay: "0.5s" }}
      />
      <S.FloatItem
        src={ticketImage}
        style={{ width: "330px", bottom: "250px", left: "0", animationDuration: "3.5s", animationDelay: "1s" }}
      />

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

      <S.StartButton type="button" onClick={handleStart}></S.StartButton>

      <S.Logo src={logoImage} />
    </S.Wrapper>
  );
}

export default LandingPage;