import PageHeader from "../components/PageHeader/PageHeader";
import * as S from "./IntroPage.styled";
import video from "../assets/images/Video.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useChatStore } from "../store/chatStore";
import Chat from "../components/Chat/Chat";

function IntroPage(){
    const navigate = useNavigate();

    const {visibleMessages, advanceTo, clampTo} = useChatStore();
    const [showModal, setShowModal] = useState(false);

    useEffect(()=>{
        clampTo(1, 3);
    }, [clampTo]);

    useEffect(()=>{
        if (visibleMessages >= 3) return;
        const timer = setTimeout(()=>{
            advanceTo(visibleMessages + 1);
        }, 3000);
        return () => clearTimeout(timer);
    }, [visibleMessages, advanceTo]);

    useEffect(()=>{
        if(visibleMessages !== 3) return;

        const timer = setTimeout(()=>{
            setShowModal(true);
        }, 1000);

        return ()=>clearTimeout(timer);
    }, [visibleMessages]);

    return(
        <S.Wrapper>
            <PageHeader />
            <S.Body>
                <Chat />
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