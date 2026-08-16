import { useNavigate } from "react-router-dom";
import Title2Image from "../../assets/images/Title2.png";
import * as S from "./CoverPage.styled";

function CoverPage() {
    const navigate = useNavigate();

    return (
        <S.Wrapper>
            <S.SubTitle>여행의 순간, MCM과 함께!</S.SubTitle>
            <S.Logo src={Title2Image} />
            <S.SubTitle>MCM 시즌별 이벤트 팝업 관리자 페이지</S.SubTitle>
            <S.StartBtn type="button" onClick={() => navigate("/admin/daily")}>
                시작하기
            </S.StartBtn>
        </S.Wrapper>
    );
}

export default CoverPage;