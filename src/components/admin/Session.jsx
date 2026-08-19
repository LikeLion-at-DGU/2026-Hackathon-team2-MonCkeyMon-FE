import * as S from "./Session.styled";

function Session({ dailyCounts, totalCount }) {
    const startDate = new Date(2026, 7, 3);
    const today = new Date();

    const days = [];
    const cursor = new Date(startDate);

    while (cursor <= today) {
        const year = cursor.getFullYear();
        const month = String(cursor.getMonth() + 1).padStart(2, "0");
        const date = String(cursor.getDate()).padStart(2, "0");
        const dateText = `${year}-${month}-${date}`;

        const found = dailyCounts.find((item) => item.date === dateText);

        days.push({
            date: dateText,
            label: `${month}.${date}`,
            count: found ? found.count : 0,
        });

        cursor.setDate(cursor.getDate() + 1);
    }

    const maxCount = Math.max(...days.map((day) => day.count), 1);

    return (
        <S.Wrapper>
            <S.Header>
                <S.Title>누적 세션 수 추이</S.Title>
                <S.Total>{totalCount}건</S.Total>
            </S.Header>

            <S.ScrollBox>
                <S.BarBox $count={days.length}>
                    {days.map((day) => (
                        <S.Graph key={day.date}>
                            <S.Count>{day.count}</S.Count>
                            <S.Bar $ratio={(day.count / maxCount) * 50} />
                            <S.Label>{day.label}</S.Label>
                        </S.Graph>
                    ))}
                </S.BarBox>
            </S.ScrollBox>
        </S.Wrapper>
    );
}

export default Session;