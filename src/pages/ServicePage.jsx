import { useNavigate } from "react-router-dom";
import backIcon from "../assets/images/BackIcon.svg";
import diamondIcon from "../assets/images/Diamond.svg";
import logoImage from "../assets/images/Logo.png";
import step1Image from "../assets/images/Step1.png";
import step2Image from "../assets/images/Step2.png";
import step3Image from "../assets/images/Step3.png";
import step4Image from "../assets/images/Step4.png";
import PostImage from "../assets/images/Post.png";
import AttachImage from "../assets/images/Attach.png";
import ServicePic from "../assets/images/ServicePic.png";
import * as S from "./ServicePage.styled";

const STEPS = [
    {
        id: 1,
        title: "사진 촬영",
        text: "카메라 앞에 서 예쁘게 사진을 찍습니다. \n*서비스 특성 상 정면, 전신으로 찍는 것을 추천드립니다.",
        image: step1Image,
    },

    {
        id: 2,
        title: "배경 선택",
        text: "꼭 가보고 싶은 여행지를 고르시면, \n바로 그 곳에 있는 것처럼 제작해드립니다! \nMCM과 지금 콜라보 중인 큐레이션룸도 선택 가능합니다.",
        image: step2Image,
    },

    {
        id: 3,
        title: "제품 선택",
        text: "MCM에서만 볼 수 있는 아이코닉한 제품으로, \n당신의 신나는 여행을 함께하세요!",
        image: step3Image,
    },

    {
        id: 4,
        title: "이미지 제작",
        text: "고객님의 선택을 바탕으로, 멋진 이미지가 제작됩니다. \n제품이 더 궁금하시다면, 구매 링크를 받아보세요!",
        image: step4Image,
    },

];

function ServicePage() {
    const navigate = useNavigate();

    return (
        <S.Wrapper>
            <S.BackBtn type="button" onClick={() => navigate(-1)}>
                <S.BackIcon src={backIcon} />
            </S.BackBtn>
            <S.Title>서비스 소개</S.Title>
            <S.Box1>
                <S.PostImg src={PostImage} />
                <S.BoxInner>
                    <S.Stamp src={AttachImage} />
                    <S.Text1>POSTCARD<br />FROM MCM</S.Text1>
                    <S.Text2>TO. YOU</S.Text2>
                    <S.Text2>FROM. MCM</S.Text2>

                    <S.Text3>
                        여행가방 하나로 시작해 지금까지 자유롭게 세상을 오가는 사람들,
                        <br />디지털 노마드와 함께하는 MCM!
                    </S.Text3>

                    <S.ServiceImage src={ServicePic} />

                    <S.Text4>
                        그런데 정작 국내에서는 그 이야기가 잘 전해지지 못했죠.
                        <br />그래서 이 서비스를 만들었습니다.
                        <br /><span>선택한 나라와 MCM 가방이, 당신과 만나 하나의 여행 속 순간이 됩니다.</span>
                        <br />MCM을 다시 보게 되는 경험. 지금, 첫 여정을 시작해 보세요!
                    </S.Text4>
                </S.BoxInner>
            </S.Box1>

            <S.SubTitle>서비스 순서</S.SubTitle>

            <S.Divider>
                <S.Line />
                <S.Diamond src={diamondIcon} />
                <S.Line />
            </S.Divider>

            <S.CardGrid>
                {STEPS.map((step) => (
                    <S.Card key={step.id}>
                        <S.CardHeader>
                            <S.StepId>{step.id}</S.StepId>
                            <S.CardTitle>{step.title}</S.CardTitle>
                        </S.CardHeader>
                        <S.CardText>{step.text}</S.CardText>
                        <S.CardImage src={step.image} />
                    </S.Card>
                ))}
            </S.CardGrid>

            <S.Logo src={logoImage} />

        </S.Wrapper>
    );
}

export default ServicePage;