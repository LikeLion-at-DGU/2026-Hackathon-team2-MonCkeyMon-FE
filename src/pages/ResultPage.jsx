import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useExperienceStore } from "../store/experienceStore";
import { getShare } from "../apis/shareApi";
import { getBackgrounds } from "../apis/backgroundApi";
import { getProducts } from "../apis/productApi";
import * as S from "./ResultPage.styled";
import Logo from "../assets/images/Logo.png"
import diamondIcon from "../assets/images/Diamond.svg";
import MapIcon from "../assets/images/Map.png"
import Picture from "../assets/images/Picture.png"
import Link from "../assets/images/Link.png"
import Post from "../assets/videos/Post.mp4"

function ResultPage() {
    const { sessionId: sessionIdParam } = useParams();
    const storedSessionId = useExperienceStore((state) => state.sessionId);
    const sessionId = sessionIdParam ?? storedSessionId;

    const [share, setShare] = useState(null);
    const [backgroundName, setBackgroundName] = useState("");
    const [productDetail, setProductDetail] = useState("");

    useEffect(() => {
        if (!sessionId) return;

        getShare(sessionId)
            .then((res) => setShare(res.data))
            .catch((error) => console.error(error));
    }, [sessionId]);

    // share 응답에 배경 이름과 제품 색상/사이즈가 없어 목록 API에서 채운다
    useEffect(() => {
        if (!share) return;

        getBackgrounds()
            .then((res) => {
                const backgrounds = [...(res.data.top3 ?? []), ...(res.data.backgrounds ?? [])];
                const found = backgrounds.find((background) => background.id === share.background_id);
                setBackgroundName(found?.name ?? "");
            })
            .catch((error) => console.error(error));

        getProducts()
            .then((res) => {
                const products = [...(res.data.top3 ?? []), ...(res.data.products ?? [])];
                const found = products.find((product) => product.id === share.product_id);
                setProductDetail(found ? `${found.color} / ${found.size}` : "");
            })
            .catch((error) => console.error(error));
    }, [share]);

    return(
        <S.Wrapper>
            <S.HeaderLogo src={Logo} />
            <S.Divider>
                <S.HeaderLine />
                    <S.Diamond src={diamondIcon} alt="" />
                <S.HeaderLine />
            </S.Divider>
            <S.Photo src={Post} autoPlay loop muted playsInline />
            <S.Divider>
                <S.PhotoLine />
                    <S.DividerText>사진 정보</S.DividerText>
                <S.PhotoLine />
            </S.Divider>
            <S.IconSection>
                <S.IconDiv>
                    <S.Icon src={MapIcon} />
                </S.IconDiv>
                <S.IconInfo>여행 배경</S.IconInfo>
                <S.IconData>{backgroundName}</S.IconData>
            </S.IconSection>
            <S.IconSection>
                <S.IconDiv>
                    <S.Icon src={MapIcon} />
                </S.IconDiv>
                <S.IconInfo>선택 제품</S.IconInfo>
                <S.IconData>{share?.product_name}</S.IconData>
                <S.IconDataDetail>{productDetail}</S.IconDataDetail>
            </S.IconSection>
            <S.DownloadBtn
                as="a"
                href={share?.composite_image_url}
                download
                target="_blank"
                rel="noreferrer"
            >
                <S.BtnImg src={Picture} />사진 다운로드 받기
            </S.DownloadBtn>
            {share?.product_purchase_url && (
                <S.LinkBtn as="a" href={share.product_purchase_url} target="_blank" rel="noreferrer">
                    <S.BtnImg src={Link} />방금 본 상품 구매 링크
                </S.LinkBtn>
            )}
        </S.Wrapper>
    )
}

export default ResultPage;
