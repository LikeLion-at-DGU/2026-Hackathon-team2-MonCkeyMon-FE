import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useExperienceStore } from "../store/experienceStore";
import { useChatSequence } from "../hooks/useChatSequence";
import { useProductFilter } from "../hooks/useProductFilter";
import { selectProduct, receiveLink } from "../apis/experienceApi";
import { createComposite } from "../apis/compositeApi";
import * as S from "./ProductPage.styled";
import Chat from "../components/Chat/Chat";
import PageHeader from "../components/PageHeader/PageHeader";
import ProductCard from "../components/ProductCard/ProductCard";
import upArrow from "../assets/images/UpArrow.svg"
import Search from "../assets/images/Search.png"
const CHAT_ON_ENTER = 3;     
const CHAT_BEFORE_SELECT = 5;
const CHAT_AFTER_SELECT = 7; 
const RESULT_MODAL_DELAY = 1000;

function ProductPage() {
    const navigate = useNavigate();

    const sessionId = useExperienceStore((state) => state.sessionId);
    const setProductId = useExperienceStore((state) => state.setProductId);
    const setProduct = useExperienceStore((state) => state.setProduct);
    const setCompositeImage = useExperienceStore((state) => state.setCompositeImage);
    const compositeImage = useExperienceStore((state) => state.compositeImage);

    const [chatEnd, setChatEnd] = useState(CHAT_BEFORE_SELECT);
    const { visibleMessages, showModal, setShowModal, advanceTo } = useChatSequence({
        clampMin: CHAT_ON_ENTER,
        clampMax: CHAT_ON_ENTER,
        end: chatEnd,
        modalAt: CHAT_BEFORE_SELECT,
    });

    const [expanded, setExpanded] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [showResultModal, setShowResultModal] = useState(false);
    const [showQRModal, setShowQRModal] = useState(false);
    const [linkChoice, setLinkChoice] = useState(null);

    useEffect(() => {
        if (!compositeImage || visibleMessages < CHAT_AFTER_SELECT) return;
        const timer = setTimeout(() => {
            setShowResultModal(true);
        }, RESULT_MODAL_DELAY);
        return () => clearTimeout(timer);
    }, [compositeImage, visibleMessages]);

    const { top3, filtered, filterGroups, loading } = useProductFilter();

    const handleConfirm = async () => {
        const selected =
            [...top3, ...filtered].find((product) => product.id === selectedId) ?? null;

        try {
            await selectProduct(sessionId, selectedId);
        } catch (error) {
            console.error(error);
        }

        setProductId(selectedId);
        setProduct(selected);
        setExpanded(false);
        setShowModal(false);
        setChatEnd(CHAT_AFTER_SELECT);
        advanceTo(CHAT_BEFORE_SELECT + 1); 

        try {
            const res = await createComposite(sessionId);
            setCompositeImage(res.data.image_url);
        } catch (error) {
            console.error(error);
        }
    };

    const handleLinkChoice = async (choice) => {
        if (linkChoice === choice) return;
        setLinkChoice(choice);

        if (choice !== "yes") return;

        try {
            await receiveLink(sessionId);
        } catch (error) {
            console.error(error);
            setLinkChoice(null);
        }
    };

    const handleDownload = () => {
        if (!sessionId) return;
        navigate(`/share/${sessionId}`);
    };

    const renderCard = (product) => (
        <ProductCard
            key={product.id}
            product={product}
            selected={selectedId === product.id}
            onSelect={setSelectedId}
        />
    );

    return (
        <S.Wrapper>
            <PageHeader />
            <S.Body>
                <Chat />
            </S.Body>

            <S.BottomModal $show={showModal} $expanded={expanded} $selected={selectedId !== null}>
                <S.ModalContent>
                    <S.ModalHeader>
                        <S.ModalTitle>인기 TOP 3</S.ModalTitle>
                        {!expanded && (
                            <S.ArrowBtn
                                type="button"
                                onClick={() => setExpanded(true)}
                                src={upArrow}
                            >
                            </S.ArrowBtn>
                        )}
                    </S.ModalHeader>

                    <S.ProductGrid>{top3.map(renderCard)}</S.ProductGrid>

                    {expanded && (
                        <>
                            <S.Divider $gap="20px" />

                            <S.SectionTitle>전체 상품</S.SectionTitle>

                            {filterGroups.map((group, index) => (
                                <Fragment key={group.key}>
                                    {index > 0 && <S.Divider $light />}
                                    <S.FilterRow>
                                        <S.FilterLabel>{group.label}</S.FilterLabel>
                                        {group.options.map((option) => (
                                            <S.FilterBtn
                                                key={option}
                                                type="button"
                                                $small={group.small}
                                                $active={group.value === option}
                                                onClick={() => group.onChange(option)}
                                            >
                                                {option}
                                            </S.FilterBtn>
                                        ))}
                                    </S.FilterRow>
                                </Fragment>
                            ))}

                            <S.DiamondDivider>
                                <S.DiamondLine />
                                <S.Diamond />
                                <S.DiamondLine />
                            </S.DiamondDivider>

                            <S.ProductList $hasSelectBtn={selectedId !== null}>
                                {loading && <S.EmptyText>상품을 불러오는 중입니다...</S.EmptyText>}
                                {!loading && filtered.length === 0 && (
                                    <S.EmptyText>해당 조건의 상품이 없습니다.</S.EmptyText>
                                )}
                                {!loading && filtered.map(renderCard)}
                            </S.ProductList>
                        </>
                    )}

                    {selectedId !== null && (
                        <S.SelectBtn type="button" onClick={handleConfirm}>
                            선택하기
                        </S.SelectBtn>
                    )}
                </S.ModalContent>
            </S.BottomModal>

            <S.ResultOverlay $show={showResultModal}>
                <S.ResultModal $show={showResultModal}>
                    <S.ResultTitle>여행의 순간, 제작 완료!</S.ResultTitle>
                    <S.ResultSubTitle>실제 여행에서, 사진 속 아름다운 모습을 실현해보세요!</S.ResultSubTitle>
                    <S.VideoSection>
                        <S.ImagePreview src={compositeImage} />
                        <S.QRSection>
                            <S.QRTitle>QR 코드를 통해 사진과<br />구매링크를 받아보실 수 있습니다.</S.QRTitle>
                            <S.QRPreview>QR</S.QRPreview>
                            <S.QRButton onClick={() => setShowQRModal(true)}>
                                <S.QRSearch src={Search} />
                                <S.QRExpand>크게 보기</S.QRExpand>
                            </S.QRButton>
                            <S.QRNotice>*링크는 24시간동안 유효합니다.</S.QRNotice>
                        </S.QRSection>
                    </S.VideoSection>
                    <S.ResultInfo>예쁜 사진이네요! 제품 정보가 궁금하신가요?</S.ResultInfo>
                    <S.InfoCheckSection>
                        <S.InfoCheckLabel>
                            네, 링크를 보내주세요
                            <S.InfoCheck
                                type="checkbox"
                                checked={linkChoice === "yes"}
                                onChange={() => handleLinkChoice("yes")}
                            />
                        </S.InfoCheckLabel>
                        <S.InfoCheckLabel>
                            아니요, 오늘은 구경만 할게요
                            <S.InfoCheck
                                type="checkbox"
                                checked={linkChoice === "no"}
                                onChange={() => handleLinkChoice("no")}
                            />
                        </S.InfoCheckLabel>
                    </S.InfoCheckSection>
                    <S.DownloadBtn type="button" onClick={handleDownload}>이미지 받기</S.DownloadBtn>
                </S.ResultModal>
            </S.ResultOverlay>

            <S.QROverlay $show={showQRModal} onClick={() => setShowQRModal(false)}>
                <S.QRModal $show={showQRModal} onClick={(e) => e.stopPropagation()} >
                    <S.QRModalTitle>QR 코드를 통해 사진과<br />구매링크를 받아보실 수 있습니다.</S.QRModalTitle>
                    <S.QRModalPreview>QR</S.QRModalPreview>
                    <S.QRModalNotice>*링크는 24시간동안 유효합니다.</S.QRModalNotice>
                </S.QRModal>
            </S.QROverlay>
        </S.Wrapper>
    )
}

export default ProductPage;