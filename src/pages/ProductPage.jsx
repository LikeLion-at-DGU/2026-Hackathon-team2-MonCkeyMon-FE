import { Fragment, useState } from "react";
import { useExperienceStore } from "../store/experienceStore";
import { useChatSequence } from "../hooks/useChatSequence";
import { useProductFilter } from "../hooks/useProductFilter";
import { demoProduct } from "../data/demo_product";
import * as S from "./ProductPage.styled";
import Chat from "../components/Chat/Chat";
import PageHeader from "../components/PageHeader/PageHeader";
import ProductCard from "../components/ProductCard/ProductCard";
import upArrow from "../assets/images/UpArrow.svg"

function ProductPage() {
    const setProductId = useExperienceStore((state) => state.setProductId);
    const { showModal, setShowModal, advanceTo } = useChatSequence({
        clampMin: 3,
        clampMax: 3,
        end: 5,
    });

    const [expanded, setExpanded] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    const { top3 } = demoProduct;
    const { filtered, filterGroups } = useProductFilter();

    const handleConfirm = () => {
        setProductId(selectedId);
        setExpanded(false);
        setShowModal(false);
        advanceTo(6);
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
        </S.Wrapper>
    )
}

export default ProductPage;
