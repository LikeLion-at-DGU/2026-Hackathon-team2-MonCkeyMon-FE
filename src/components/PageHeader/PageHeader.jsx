import { useGoBack } from "../../hooks/useGoBack";
import logoImage from "../../assets/images/Logo.png";
import backbtn from "../../assets/images/BackIcon.svg";
import * as S from "./PageHeader.styled";

function PageHeader({ showBack = true }) {
    const goBack = useGoBack();

    return (
        <S.Header>
            {showBack && (
                <S.BackButton type="button" onClick={goBack} aria-label="뒤로 가기">
                    <S.BackIcon src={backbtn} />
                </S.BackButton>
            )}
            <S.Logo src={logoImage} />
        </S.Header>
    );
}

export default PageHeader;