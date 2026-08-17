import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useExperienceStore } from "../store/experienceStore"
import PageHeader from "../components/PageHeader/PageHeader";
import checkIcon from "../assets/images/Check.svg";
import * as S from "./ThemePage.styled";

import { getBackgrounds } from "../apis/backgroundApi";
import { selectBackground, uploadPhoto } from "../apis/experienceApi";

const dataUrlToFile = (dataUrl, fileName) => {
    const [header, base64] = dataUrl.split(",");
    const mimeType = header.match(/:(.*?);/)[1];
    const binary = atob(base64);

    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }

    return new File([bytes], fileName, { type: mimeType });
};

function ThemePage() {
    const navigate = useNavigate();
    const sessionId = useExperienceStore((state) => state.sessionId);
    const setBackgroundId = useExperienceStore((state) => state.setBackgroundId);
    const photo = useExperienceStore((state) => state.photo); 

    const [activeTab, setActiveTab] = useState("나라 별");
    const [selectedId, setSelectedId] = useState(null);
    const [top3, setTop3] = useState([]);
    const [backgrounds, setBackgrounds] = useState([]);
    const filtered = backgrounds.filter((background) => background.type === activeTab);

    useEffect(() => {
        getBackgrounds().then((res) => {
            setTop3(res.data.top3);
            setBackgrounds(res.data.backgrounds);
        });
    }, []);

    const handleSelect = async () => {
        await selectBackground(sessionId, selectedId);

        const photoFile = dataUrlToFile(photo, "person.png");
        const formData = new FormData();
        formData.append("person_image", photoFile);

        await uploadPhoto(sessionId, formData);
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
                <S.CardImg src={background.image} />
            </S.CardBox>
            {selectedId === background.id && <S.CheckIcon src={checkIcon} />}
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