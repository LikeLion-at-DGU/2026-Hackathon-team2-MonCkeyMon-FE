import { useGoBack } from "../../hooks/useGoBack";
import * as S from "./PageHeader.styled";

function PageHeader({ showBack = true }) {
    const goBack = useGoBack();

    return (
        <S.Header>
            {showBack && (
                <S.BackButton type="button" onClick={goBack} aria-label="뒤로 가기">
                    ←
                </S.BackButton>
            )}
        </S.Header>
    );
}

export default PageHeader;