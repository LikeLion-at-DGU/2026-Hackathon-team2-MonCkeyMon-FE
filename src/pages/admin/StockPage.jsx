import { useEffect, useState } from "react";
import AdminHeader from "../../components/admin/AdminHeader";
import { getProductSessionFiltered } from "../../apis/adminApi";
import { Stock } from "../../data/AdminStock";
import SearchImg from "../../assets/images/Search.png";
import * as S from "./StockPage.styled";

function StockPage() {
    const [activeTab, setActiveTab] = useState("new");
    const [keyword, setKeyword] = useState("");
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const params = {};
        if (keyword) params.search = keyword;
        if (activeTab === "new") params.is_new = true;

        getProductSessionFiltered(params).then((res) => setProducts(res.data));
    }, [keyword, activeTab]);

    return (
        <AdminHeader>
            <S.Wrapper>
                <S.Header>
                    <S.Title>매장 내 재고</S.Title>
                    <S.Text>가나다 정렬</S.Text>
                </S.Header>

                <S.Tab>
                    <S.TabBox>
                        <S.TabBtn type="button" $active={activeTab === "new"} onClick={() => setActiveTab("new")}>
                            신상
                        </S.TabBtn>
                        <S.TabBtn type="button" $active={activeTab === "data"} onClick={() => setActiveTab("data")}>
                            데이터 기반 상품
                        </S.TabBtn>
                    </S.TabBox>

                    <S.Search><S.SearchIcon src={SearchImg} />
                        <S.SearchText
                            type="text"
                            placeholder="검색하세요..."
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                        />
                    </S.Search>
                </S.Tab>

                {activeTab === "data" ? (
                    <S.NoData>해당 데이터가 없습니다.</S.NoData>
                ) : (
                    <>

                        <S.Middle>
                            <S.Name>제품명</S.Name>
                            <S.Color>색상</S.Color>
                            <S.Size>사이즈</S.Size>
                            <S.Stock>재고 수</S.Stock>
                        </S.Middle>

                        <S.Middle2>
                            {products.map((product) => (
                                <S.Detail key={product.id}>
                                    <S.Name2>{product.name}</S.Name2>
                                    <S.Color>{product.color}</S.Color>
                                    <S.Size>{product.size}</S.Size>
                                    <S.Stock2>{Stock[product.id] ?? "-"}</S.Stock2>
                                </S.Detail>
                            ))}
                        </S.Middle2>
                    </>
                )}
            </S.Wrapper>
        </AdminHeader>
    );
}

export default StockPage;