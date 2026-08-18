import AdminHeader from "../../components/admin/AdminHeader";
import * as S from "./InfoPage.styled";

const INFO1 = [
    { name: "팝업 매장 명", detail: "몽키몽 백화점 중앙해커톤점 4F" },
    { name: "시즌", detail: "26 SS 시즌" },
    { name: "팝업 회차", detail: "1회차" },
    { name: "팝업 기간", detail: "26.08.03 - 26.09.02" },
];

const INFO2 = [
    { name: "관심도 지수 산정 기준", detail: "26.08.03 - 26.09.02" },
    { name: "데이터 집계 기준", detail: "새로고침 시, 직전 데이터 반영" },
];

function InfoPage() {
    return (
        <AdminHeader>
            <S.Wrapper>
                <S.Title>기본 정보</S.Title>
                {INFO1.map((item) => (
                    <S.Info key={item.name}>
                        <S.Name>{item.name}</S.Name>
                        <S.Detail>{item.detail}</S.Detail>
                    </S.Info>
                ))}
                <S.Divider></S.Divider>
                <S.Title>팝업 데이터 관련 정보</S.Title>
                {INFO2.map((item) => (
                    <S.Info key={item.name}>
                        <S.Name>{item.name}</S.Name>
                        <S.Detail>{item.detail}</S.Detail>
                    </S.Info>
                ))}
            </S.Wrapper>
        </AdminHeader>
    );
}

export default InfoPage;