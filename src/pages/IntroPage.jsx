import PageHeader from "../components/PageHeader/PageHeader";
import * as S from "./IntroPage.styled";
import profile from "../assets/images/Profile.png";
import video from "../assets/images/Video.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function IntroPage(){
    const navigate = useNavigate();

    const messages = [(
        <>
            안녕하세요! 고객님의 여정을 응원하는<br />
            MonkeyMong입니다!
        </>
    ),(
        <>
        Mapping Custom Moment는<br /> 당신의 순간을 여행의 한 장면으로 만드는 AI 서비스입니다.
        </>
    ),(
        <>
        사진 한 장과 MCM의 아이코닉한 제품을 만나면,<br />새로운 여행의 순간이 시작됩니다.<br />지금 바로 떠나볼까요?
        </>
    ),];

    const [visibleMessages, setVisibleMessages] = useState(1);
    const [showModal, setShowModal] = useState(false);

    useEffect(()=>{
        if(visibleMessages >= messages.length) return;

        const timer = setTimeout(()=>{
            setVisibleMessages((prev)=>prev+1);
        },4000);

        return () => clearTimeout(timer);
    }, [visibleMessages, messages.length]);

    useEffect(()=>{
        if(visibleMessages !== messages.length) return;

        const timer = setTimeout(()=>{
            setShowModal(true);
        }, 1000);

        return ()=>clearTimeout(timer);
    }, [visibleMessages, messages.length]);

    return(
        <S.Wrapper>
            <PageHeader />
            <S.Body>
                <S.ChatMessage>
                    <S.Profile>
                        <S.ProfileImg src={profile} />
                    </S.Profile>
                    <S.MessageContent>
                        <S.Nickname>MonkeyMong</S.Nickname>
                        {messages.slice(0, visibleMessages).map((message, index) => (
                            <S.Bubble key={index}>
                                {message}
                            </S.Bubble>
                        ))}
                    </S.MessageContent>
                </S.ChatMessage>
            </S.Body>

            <S.BottomModal $show={showModal}>
                <S.ModalContent>
                    <S.StartButton onClick={() => navigate("/camera")}><S.VideoImg src={video} />영상 제작하기</S.StartButton>
                </S.ModalContent>
            </S.BottomModal>
        </S.Wrapper>
    )
}

export default IntroPage;