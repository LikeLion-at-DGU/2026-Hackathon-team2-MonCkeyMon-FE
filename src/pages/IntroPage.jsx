import PageHeader from "../components/PageHeader/PageHeader";
import * as S from "./IntroPage.styled";
import video from "../assets/images/Video.png";
import { useNavigate } from "react-router-dom";
import { useChatSequence } from "../hooks/useChatSequence";
import Chat from "../components/Chat/Chat";

function IntroPage(){
    const navigate = useNavigate();

    const { showModal } = useChatSequence({ clampMin: 1, clampMax: 3, end: 3 });

    return(
        <S.Wrapper>
            <PageHeader />
            <S.Body>
                <Chat />
            </S.Body>

            <S.BottomModal $show={showModal}>
                <S.ModalContent>
                    <S.StartButton onClick={() => navigate("/camera")}><S.VideoImg src={video} />사진 제작하기</S.StartButton>
                </S.ModalContent>
            </S.BottomModal>
        </S.Wrapper>
    )
}

export default IntroPage;