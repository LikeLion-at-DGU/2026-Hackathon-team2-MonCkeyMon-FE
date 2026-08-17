import * as S from "./Top5.styled";

function Top5({ title, items }) {
    return (
        <S.Wrapper>
            <S.Title>{title}</S.Title>

            {items.map((item, index) => (
                <S.Row key={index}>
                    <S.Rank>{index + 1}</S.Rank>
                    <S.Name>{item.name}</S.Name>
                    <S.Count>{item.count}</S.Count>
                </S.Row>
            ))}
        </S.Wrapper>
    );
}

export default Top5;