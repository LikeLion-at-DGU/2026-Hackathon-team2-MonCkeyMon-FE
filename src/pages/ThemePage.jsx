import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useExperienceStore } from "../store/experienceStore"
import { demoTheme } from "../data/demo_theme";
import PageHeader from "../components/PageHeader/PageHeader";
import checkIcon from "../assets/images/Check.svg";
import * as S from "./ThemePage.styled";

function ThemePage() {
    const navigate = useNavigate();
    const setBackgroundId = useExperienceStore((state) => state.setBackgroundId);

    const [activeTab, setActiveTab] = useState("나라 별");
    const [selectedId, setSelectedId] = useState(null);

    const { top3, backgrounds } = demoTheme;
    const filtered = backgrounds.filter((background) => background.type === activeTab);

    const handleSelect = () => {
        setBackgroundId(selectedId);
        navigate("/product");
    };

    const renderCard = (background) => (
        <S.Card
            key={background.id}
            type="button"
            $selected={selectedId === background.id}
            onClick={() => setSelectedId(background.id)}
        >
            <S.CardBox>
                <S.CardImg src={background.image} alt={background.name} />
                {selectedId === background.id && <S.CheckIcon src={checkIcon} />}
            </S.CardBox>
            <S.CardName>{background.name}</S.CardName>
            <S.CardTags>{background.tags.map((t) => `#${t}`).join(" ")}</S.CardTags>
        </S.Card>
    );

    return (
        <S.Wrapper>
            <PageHeader />

            <S.Box>
                <S.Title1>이달의 테마 TOP 3</S.Title1>
                <S.Top>{top3.map(renderCard)}</S.Top>

                <S.Title2>전체 테마</S.Title2>
                <S.TabBar>
                    <S.Tab type="button" $active={activeTab === "나라 별"} onClick={() => setActiveTab("나라 별")}>
                        나라 별
                    </S.Tab>
                    <S.TabDivider />
                    <S.Tab type="button" $active={activeTab === "큐레이션룸"} onClick={() => setActiveTab("큐레이션룸")}>
                        큐레이션룸
                    </S.Tab>
                </S.TabBar>

                <S.Theme>{filtered.map(renderCard)}</S.Theme>
            </S.Box>

            {selectedId && (
                <S.SelectBtn type="button" onClick={handleSelect}>
                    선택하기
                </S.SelectBtn>
            )}
        </S.Wrapper>
    );
}


export default ThemePage;