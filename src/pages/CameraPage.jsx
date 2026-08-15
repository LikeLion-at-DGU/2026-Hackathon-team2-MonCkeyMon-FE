import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCamera } from "../hooks/useCamera";
import { useCountdown } from "../hooks/useCountdown";
import PageHeader from "../components/PageHeader/PageHeader";
import cameraIcon from "../assets/images/Camera.png";
import * as S from "./CameraPage.styled";
import { useExperienceStore } from "../store/experienceStore";

const COUNT_MESSAGES = {
    5: "곧 촬영이 시작됩니다.",
    4: "정면 얼굴이 나와야 더 좋은 영상이 제작됩니다.",
    3: "정면 얼굴이 나와야 더 좋은 영상이 제작됩니다.",
    2: "곧 촬영이 시작됩니다.",
    1: "곧 촬영이 시작됩니다.",
};

function CameraPage() {
    const navigate = useNavigate();
    const { videoRef, isReady, error, capture } = useCamera();
    const [isFlashing, setIsFlashing] = useState(false);
    const setPhoto = useExperienceStore((state) => state.setPhoto);


    const handleCapture = () => {
        const photo = capture();
        setPhoto(photo);
        setIsFlashing(true);
        setTimeout(() => navigate("/photo"), 1000);
    };

    const { count, isRunning, start } = useCountdown(5, handleCapture);

    return (
        <S.Wrapper>
            <PageHeader />

            <S.CamArea>
                <S.Video ref={videoRef} autoPlay playsInline muted />

                {isRunning && (
                    <S.Countdown>
                        <S.Count>{count}</S.Count>
                        <S.CountText>{COUNT_MESSAGES[count]}</S.CountText>
                    </S.Countdown>
                )}

                {error && <S.ErrorText>카메라를 사용할 수 없습니다.</S.ErrorText>}
            </S.CamArea>

            {!isRunning && (
                <S.CamButton type="button" onClick={start} disabled={!isReady}>
                    <S.CamIcon src={cameraIcon} />
                    사진 촬영하기
                </S.CamButton>
            )}

            {isFlashing && <S.Flash />}
        </S.Wrapper>
    );
}

export default CameraPage;