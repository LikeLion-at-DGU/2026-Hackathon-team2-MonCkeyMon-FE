import { useState } from "react";
import * as S from "./ProductData.styled";
import DownArrow from "../../assets/images/DownArrow.svg"
import Info from "../../assets/images/Info.png"


function ProductData({ note, products }) {
    const [isOpen, setIsOpen] = useState(false);
    const viewProducts = isOpen ? products : products.slice(0, 5);

    return (
        <S.Wrapper>
            <S.Header>
                <S.TitleBox>
                    <S.Title>상품 데이터</S.Title>
                    <S.Note><S.InfoIcon src={Info} /> {note}</S.Note>
                </S.TitleBox>
                <S.MoreBtn type="button" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "접기" : "전체보기"}
                    <S.Arrow src={DownArrow} $isOpen={isOpen} />
                </S.MoreBtn>
            </S.Header>

            <S.ColumnRow>
                <S.Rank />
                <S.Name>제품명</S.Name>
                <S.Color>색상</S.Color>
                <S.Size>사이즈</S.Size>
                <S.Count>세션 수</S.Count>
            </S.ColumnRow>

            <S.RowBox $isOpen={isOpen}>
                {viewProducts.map((product, index) => (
                    <S.Row key={product.id}>
                        <S.Rank>{index + 1}</S.Rank>
                        <S.Name>{product.name}</S.Name>
                        <S.Color>{product.color}</S.Color>
                        <S.Size>{product.size}</S.Size>
                        <S.Count>{product.session_count}</S.Count>
                    </S.Row>
                ))}
            </S.RowBox>
        </S.Wrapper>
    );
}

export default ProductData;