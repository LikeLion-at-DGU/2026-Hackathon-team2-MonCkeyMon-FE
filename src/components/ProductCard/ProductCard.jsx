import checkIcon from "../../assets/images/Check.svg";
import * as S from "./ProductCard.styled";

function ProductCard({ product, selected, onSelect }) {
    return (
        <S.Card
            as={onSelect ? "button" : "div"}
            type={onSelect ? "button" : undefined}
            $selected={selected}
            onClick={onSelect ? () => onSelect(product.id) : undefined}
        >
            <S.CardBox>
                <S.CardImg src={product.image} alt={product.name} />
                {selected && <S.CheckIcon src={checkIcon} />}
            </S.CardBox>
            <S.CardName>{product.name}</S.CardName>
            <S.CardMeta>{product.color} / {product.size}</S.CardMeta>
        </S.Card>
    );
}

export default ProductCard;
