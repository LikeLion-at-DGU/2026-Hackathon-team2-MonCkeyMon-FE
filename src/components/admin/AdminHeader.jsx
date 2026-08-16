import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./AdminHeader.styled";

const TABS = [
    { path: "/admin/daily", name: "1일 데이터" },
    { path: "/admin/total", name: "누적 데이터" },
    { path: "/admin/stock", name: "매장 재고" },
    { path: "/admin/ai", name: "AI 수요 예측" },
    { path: "/admin/info", name: "정보" },
];

function AdminHeader({ children }) {
    const navigate = useNavigate();
    const location = useLocation();

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const date = String(today.getDate()).padStart(2, "0");
    const todayText = `${year}.${month}.${date}`;

    return (
        <S.Wrapper>
            <S.Header>
                <S.Title>Mapping Custom Moment</S.Title>
                <S.Info>
                    <S.StoreName>몽키몽백화점 팝업</S.StoreName>
                    <S.StoreSeason>26 SS</S.StoreSeason>
                    <S.DateTab>{todayText}</S.DateTab>
                </S.Info>
            </S.Header>

            <S.Middle>
                <S.Body>
                    {TABS.map((tab) => (
                        <S.LeftTab
                            key={tab.path}
                            type="button"
                            $isActive={location.pathname === tab.path}
                            onClick={() => navigate(tab.path)}
                        >
                            {tab.name}
                        </S.LeftTab>
                    ))}
                </S.Body>

                <S.Content>{children}</S.Content>
            </S.Middle>
        </S.Wrapper>
    );
}

export default AdminHeader;