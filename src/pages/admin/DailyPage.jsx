import { useEffect, useState } from "react";
import AdminHeader from "../../components/admin/AdminHeader";
import Top5 from "../../components/admin/Top5";
import ProductData from "../../components/admin/ProductData";
import { getProductSession, getCategoryTop5, getChooseCountTop5, getVisitorCount, } from "../../apis/adminApi";
import * as S from "./DailyPage.styled";

function DailyPage() {
    const [products, setProducts] = useState([]);
    const [categoryTop5, setCategoryTop5] = useState([]);
    const [backgroundTop5, setBackgroundTop5] = useState([]);
    const [visitorCount, setVisitorCount] = useState(0);

    useEffect(() => {
        getProductSession().then((res) => setProducts(res.data));
        getCategoryTop5().then((res) => setCategoryTop5(res.data));
        getChooseCountTop5().then((res) => setBackgroundTop5(res.data.backgrounds));
        getVisitorCount().then((res) => setVisitorCount(res.data.total_visitor_count));
    }, []);

    return (
        <AdminHeader>
            <S.CardRow>
                <S.MiniBox>
                    <S.MiniTitle>금일 세션 수</S.MiniTitle>
                    <S.MiniCount>{visitorCount}</S.MiniCount>
                </S.MiniBox>

                <S.MiniBox>
                    <S.MiniTitle>금일 링크 받기 수</S.MiniTitle>
                    <S.MiniCount>0</S.MiniCount>
                </S.MiniBox>

                <S.MiniBox>
                    <S.MiniTitle>금일 링크 접속 수</S.MiniTitle>
                    <S.MiniCount>0</S.MiniCount>
                </S.MiniBox>
            </S.CardRow>

            <S.ProductTable>
                <ProductData note="당일 기준" products={products} />
            </S.ProductTable>

            <S.RankRow>
                <Top5
                    title="카테고리 TOP 5"
                    items={categoryTop5.map((item) => ({
                        name: item.category,
                        count: item.session_count,
                    }))}
                />
                <Top5
                    title="배경 선택 TOP 5"
                    items={backgroundTop5.map((item) => ({
                        name: item.name,
                        count: item.choose_count,
                    }))}
                />
            </S.RankRow>
        </AdminHeader>
    );
}
export default DailyPage;