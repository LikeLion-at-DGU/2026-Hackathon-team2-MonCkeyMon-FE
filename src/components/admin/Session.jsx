import * as S from "./Session.styled";

const DAY_NAMES = ["일", "월", "화", "수", "목", "금", "토"];

function Session({ dailyCounts }) {
    const days = [];

    for (let i = 6; i >= 0; i--) {
        const day = new Date();
        day.setDate(day.getDate() - i);

        const year = day.getFullYear();
        const month = String(day.getMonth() + 1).padStart(2, "0");
        const date = String(day.getDate()).padStart(2, "0");
        const dateText = `${year}-${month}-${date}`;

        const found = dailyCounts.find((item) => item.date === dateText);

        days.push({
            date: dateText,
            label: i === 0 ? "오늘" : DAY_NAMES[day.getDay()],
            count: found ? found.count : 0,
        });
    }

    const maxCount = Math.max(...days.map((day) => day.count), 1);

    return (
        <S.Wrapper>
            <S.Title>7일 세션 수 추이</S.Title>

            <S.BarBox>
                {days.map((day) => (
                    <S.BarGraph key={day.date}>
                        <S.Count>{day.count}</S.Count>
                        <S.Bar $ratio={(day.count / maxCount) * 30} />
                        <S.Label>{day.label}</S.Label>
                    </S.BarGraph>
                ))}
            </S.BarBox>
        </S.Wrapper>
    );
}

export default Session;