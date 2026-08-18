import { Fragment, useEffect, useState } from "react";
import { useExperienceStore } from "../store/experienceStore";
import { useChatSequence } from "../hooks/useChatSequence";
import { useProductFilter } from "../hooks/useProductFilter";
import { demoProduct } from "../data/demo_product";
import * as S from "./ProductPage.styled";
import Chat from "../components/Chat/Chat";
import PageHeader from "../components/PageHeader/PageHeader";
import ProductCard from "../components/ProductCard/ProductCard";
import upArrow from "../assets/images/UpArrow.svg"

const CHAT_ON_ENTER = 3;     
const CHAT_BEFORE_SELECT = 5;
const CHAT_AFTER_SELECT = 7; 
const RESULT_MODAL_DELAY = 1000;

function ProductPage() {
    const setProductId = useExperienceStore((state) => state.setProductId);

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

    useEffect(() => {
        if (visibleMessages < CHAT_AFTER_SELECT) return;
        const timer = setTimeout(() => {
            setShowResultModal(true);
        }, RESULT_MODAL_DELAY);
        return () => clearTimeout(timer);
    }, [visibleMessages]);

    const { top3 } = demoProduct;
    const { filtered, filterGroups } = useProductFilter();

    const handleConfirm = () => {
        setProductId(selectedId);
        setExpanded(false);
        setShowModal(false);
        setChatEnd(CHAT_AFTER_SELECT);
        advanceTo(CHAT_BEFORE_SELECT + 1); 
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
                                {filtered.length > 0
                                    ? filtered.map(renderCard)
                                    : <S.EmptyText>해당 조건의 상품이 없습니다.</S.EmptyText>}
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
                    
                </S.ResultModal>
            </S.ResultOverlay>
        </S.Wrapper>
    )
}

export default ProductPage;
