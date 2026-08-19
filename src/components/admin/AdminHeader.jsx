import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import * as S from "./AdminHeader.styled";

const TABS = [
    { path: "/admin/daily", name: "1일 데이터" },
    { path: "/admin/total", name: "누적 데이터" },
    { path: "/admin/stock", name: "매장 재고" },
    { path: "/admin/ai", name: "AI 수요 예측" },
    { path: "/admin/info", name: "정보" },
];

const STORES = ["몽키몽 백화점 팝업 · 26 SS"];

function AdminHeader({ children }) {
    const navigate = useNavigate();
    const location = useLocation();

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const date = String(today.getDate()).padStart(2, "0");
    const todayText = `${year}.${month}.${date}`;

    const [isStoreOpen, setIsStoreOpen] = useState(false);
    const [selectedStore, setSelectedStore] = useState(STORES[0]);


    return (
        <S.Wrapper>
            <S.Header>
                <S.Title>Mapping Custom Moment</S.Title>

                <S.Info>
                    <S.Dropdown>
                        <S.StoreTab
                            type="button"
                            onClick={() => setIsStoreOpen(!isStoreOpen)}>
                            {selectedStore}
                        </S.StoreTab>

                        {isStoreOpen && (
                            <S.OptionList>
                                {STORES.map((store) => (
                                    <S.Option
                                        key={store}
                                        type="button"
                                        $isSelected={store === selectedStore}
                                        onClick={() => {
                                            setSelectedStore(store);
                                            setIsStoreOpen(false);
                                        }}
                                    >
                                        {store === selectedStore && "✓ "}
                                        {store}
                                    </S.Option>
                                ))}
                            </S.OptionList>
                        )}
                    </S.Dropdown>

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