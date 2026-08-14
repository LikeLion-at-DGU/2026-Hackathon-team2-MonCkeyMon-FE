import { useNavigate } from "react-router-dom";
import { useExperienceStore } from "../store/experienceStore";
import PageHeader from "../components/PageHeader/PageHeader";
import * as S from "./PhotoPage.styled";


function PhotoPage() {
    const navigate = useNavigate();
    const photo = useExperienceStore((state) => state.photo);

    return (
        <S.Wrapper>
            <PageHeader />
            <S.PhotoBox>
                {photo && <S.Photo src={photo} />}
            </S.PhotoBox>
            <S.Text>• 얼굴이 정면으로 나와야 보다 정밀한 영상이 제작됩니다.</S.Text>

            <S.Button>
                <S.ReBtn type="button" onClick={() => navigate("/camera")}>
                    다시 찍기
                </S.ReBtn>
                <S.NextBtn type="button" onClick={() => navigate("/theme")}>
                    배경 선택하기
                </S.NextBtn>
            </S.Button>
        </S.Wrapper>
    );
}
export default PhotoPage;