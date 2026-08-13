import diamondIcon from "../assets/images/Diamond.svg";
import logoImage from "../assets/images/Logo.png";
import step1Image from "../assets/images/Step1.png";
import step2Image from "../assets/images/Step2.png";
import step3Image from "../assets/images/Step3.png";
import step4Image from "../assets/images/Step4.png";
import * as S from "./ServicePage.styled";

const STEPS = [
    {
        id: 1,
        title: "사진 촬영",
        text: "AI 영상이 잘 제작될 수 있게 \n정면, 전신으로 서 촬영합니다.",
        image: step1Image,
    },

    {
        id: 2,
        title: "배경 선택",
        text: "가고 싶은 여행지를 골라, \n여행의 기분을 만끽하세요!",
        image: step2Image,
    },

    {
        id: 3,
        title: "제품 선택",
        text: "MCM만의 아이코닉한 제품으로, \n신나는 여행을 함께해요!",
        image: step3Image,
    },

    {
        id: 4,
        title: "가이드 선택 및 제작",
        text: "원하는 포즈가 있나요? 선택하고 \n버튼을 누르면, 어느새 여행지에 있는 \n나를 볼 수 있습니다.",
        image: step4Image,
    },

];

function ServicePage() {
    return (
        <S.Wrapper>
            <S.Title>서비스 소개</S.Title>
            <S.Box1>
                <S.Text1>
                    여행가방 하나로 시작해 지금까지 자유롭게 세상을 오가는 사람들, 디지털 노마드와 함께하는 <br/>MCM!
                    <br/>그런데 정작 국내에서는 그 이야기가 잘 전해지지 못했죠. 그래서 이 서비스를 만들었습니다. 
                    <br/><span>당신이 고른 나라와 MCM 가방이 당신과 만나 짧은 영상 속 하나의 여행 순간이 됩니다.</span>
                    <br/>MCM을 다시 보게 되는 경험. 지금, 첫 여정을 시작해 보세요.
                </S.Text1>
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