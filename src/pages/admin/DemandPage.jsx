import { useEffect, useState } from "react";
import AdminHeader from "../../components/admin/AdminHeader";
import { getProductInterest } from "../../apis/adminApi";
import DownArrow from "../../assets/images/DownArrow.svg"
import * as S from "./DemandPage.styled";

function DemandPage() {
    const [interestList, setInterestList] = useState([]);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    useEffect(() => {
        getProductInterest().then((res) => setInterestList(res.data));
    }, []);

    const top1 = interestList[0];

    const categoryTop = {};
    interestList.forEach((item) => {
        if (!categoryTop[item.category] || item.total_score > categoryTop[item.category].total_score) {
            categoryTop[item.category] = item;
        }
    });
    const categoryTopList = Object.values(categoryTop).sort((a, b) => b.total_score - a.total_score);
    const categoryTop1 = categoryTopList[0];

    const shownList = isOpen1 ? interestList : interestList.slice(0, 5);
    const shownRecList = isOpen2 ? interestList : interestList.slice(0, 5);

    const avgScore = interestList.length > 0
        ? interestList.reduce((sum, item) => sum + item.total_score, 0) / interestList.length
        : 0;

    const upperLine = avgScore * 1.2;
    const lowerLine = avgScore * 0.8;

    const getRecommendation = (score) => {
        if (score >= upperLine) return { text: "재고 확대 검토", type: "up" };
        if (score <= lowerLine) return { text: "재고 축소 검토", type: "down" };
        return { text: "현상 유지", type: "same" };
    };

    const getReason = (score) => {
        if (score >= upperLine) return "관심도 지수 높음";
        if (score <= lowerLine) return "관심도 지수 낮음";
        return "관심도 지수 보통";
    };

    return (
        <AdminHeader>
            <S.Wrapper>
                <S.Header>
                    <S.HeaderBox>
                        <S.Title>전체 관심도 1위</S.Title>
                        {top1 && (
                            <S.Detail>
                                <S.Name>
                                    {top1.product_name}<br/> {top1.color}/ {top1.size}
                                </S.Name>
                                <S.Score>{top1.total_score}</S.Score>
                            </S.Detail>
                        )}
                    </S.HeaderBox>

                    <S.HeaderBox2>
                        <S.Title>카테고리 관심도 1위</S.Title>
                        {categoryTop1 && (
                            <S.Detail>
                                <S.CatName>{categoryTop1.category}</S.CatName>
                                <S.Score>{categoryTop1.total_score}</S.Score>
                            </S.Detail>
                        )}
                    </S.HeaderBox2>
                </S.Header>
                <S.Middle>
                    <S.Header2>
                        <S.Header2Box>
                            <S.Title2>관심도 지수 계산</S.Title2>
                            <S.Text>가중치 체험 1 / 링크받기 3 / 링크 접속 5 합산 계산</S.Text>
                        </S.Header2Box>
                        <S.MoreBtn type="button" onClick={() => setIsOpen1(!isOpen1)}>
                            {isOpen1 ? "접기" : "전체보기"}
                            <S.Arrow src={DownArrow} $isOpen1={isOpen1} />
                        </S.MoreBtn>
                    </S.Header2>

                    <S.Detail2>
                        <S.Rank />
                        <S.ProdName>제품명</S.ProdName>
                        <S.Session>세션 수</S.Session>
                        <S.LinkReceived>링크 수신</S.LinkReceived>
                        <S.LinkClick>링크 접속</S.LinkClick>
                        <S.TotalScore>총 점수</S.TotalScore>
                    </S.Detail2>

                    <S.DetailBox $isOpen={isOpen1}>
                        {shownList.map((item) => (
                            <S.Row key={item.product_id}>
                                <S.Rank>{item.rank}</S.Rank>
                                <S.ProdName2>
                                    {item.product_name}/ {item.color}/ {item.size}
                                </S.ProdName2>
                                <S.Session>{item.session_count}</S.Session>
                                <S.LinkReceived>{item.link_received_count}</S.LinkReceived>
                                <S.LinkClick>{item.link_click_count}</S.LinkClick>
                                <S.TotalScore2>{item.total_score}</S.TotalScore2>
                            </S.Row>
                        ))}
                    </S.DetailBox>
                </S.Middle>

                <S.Divider />

                <S.RecommendBox>
                    <S.Header3>
                        <S.Title3>재고 관련 추천</S.Title3>
                        <S.MoreBtn type="button" onClick={() => setIsOpen2(!isOpen2)}>
                            {isOpen2 ? "접기" : "전체보기"}
                            <S.Arrow src={DownArrow} $isOpen2={isOpen2} />
                        </S.MoreBtn>
                    </S.Header3>

                    <S.RecBox>
                        <S.RecName>상품명</S.RecName>
                        <S.RecReason>요인</S.RecReason>
                        <S.RecTag>추천 방향성</S.RecTag>
                    </S.RecBox>

                    <S.RecDetailBox $isOpen={isOpen2}>
                        {shownRecList.map((item) => {
                            const recommendation = getRecommendation(item.total_score);
                            return (
                                <S.RecRow key={item.product_id}>
                                    <S.RecName2>
                                        {item.product_name}/ {item.color}/ {item.size}
                                    </S.RecName2>
                                    <S.RecReason>{getReason(item.total_score)}</S.RecReason>
                                    <S.RecDir $type={recommendation.type}>
                                        {recommendation.text}
                                    </S.RecDir>
                                </S.RecRow>
                            );
                        })}
                    </S.RecDetailBox>
                </S.RecommendBox>
            </S.Wrapper>
        </AdminHeader>
    );
}

export default DemandPage;