import * as S from "./ResultPage.styled";
import Logo from "../assets/images/Logo.png"
import diamondIcon from "../assets/images/Diamond.svg";
import Video from "../assets/videos/Post.mp4"
import MapIcon from "../assets/images/Map.png"
import Picture from "../assets/images/Picture.png"
import Link from "../assets/images/Link.png"
function ResultPage() {
    return(
        <S.Wrapper>
            <S.HeaderLogo src={Logo} />
            <S.Divider>
                <S.HeaderLine />
                    <S.Diamond src={diamondIcon} alt="" />
                <S.HeaderLine />
            </S.Divider>
            <S.Video src={Video} controls/>
            <S.Divider>
                <S.VideoLine />
                    <S.DividerText>영상 정보</S.DividerText>
                <S.VideoLine />
            </S.Divider>
            <S.IconSection>
                <S.IconDiv>
                    <S.Icon src={MapIcon} />
                </S.IconDiv>
                <S.IconInfo>여행 배경</S.IconInfo>
                <S.IconData>파리, 프랑스</S.IconData>
            </S.IconSection>
            <S.IconSection>
                <S.IconDiv>
                    <S.Icon src={MapIcon} />
                </S.IconDiv>
                <S.IconInfo>선택 제품</S.IconInfo>
                <S.IconData>AREN 비세토스 E/W 숄더백</S.IconData>
                <S.IconDataDetail>Pink / S</S.IconDataDetail>
            </S.IconSection>
            <S.DownloadBtn><S.BtnImg src={Picture} />사진 다운로드 받기</S.DownloadBtn>
            <S.LinkBtn><S.BtnImg src={Link} />방금 본 상품 구매 링크</S.LinkBtn>
        </S.Wrapper>
    )
}

export default ResultPage;