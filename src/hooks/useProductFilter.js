import { useEffect, useMemo, useState } from "react";
import { getProducts } from "../apis/productApi";

const ALL_CATEGORY = "전체";

const GENDER_OPTIONS = [
    { label: "여성", value: "FEMALE" },
    { label: "남성", value: "MALE" },
];

const LINE_OPTIONS = [
    { label: "신상", value: true },
    { label: "그외", value: false },
];

const unique = (values) => [...new Set(values)];

export const useProductFilter = () => {
    const [top3, setTop3] = useState([]);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([ALL_CATEGORY]);
    const [loading, setLoading] = useState(true);

    const [gender, setGender] = useState("여성");
    const [line, setLine] = useState("신상");
    const [category, setCategory] = useState(ALL_CATEGORY);

    useEffect(() => {
        getProducts()
            .then((res) => {
                const { top3: topProducts = [], products: allProducts = [], filters } = res.data;

                setTop3(topProducts);
                setProducts(allProducts);
                setCategories([
                    ALL_CATEGORY,
                    ...unique(filters?.categories ?? allProducts.map((product) => product.category)),
                ]);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    const filtered = useMemo(() => {
        const genderValue = GENDER_OPTIONS.find((option) => option.label === gender)?.value;
        const isNew = LINE_OPTIONS.find((option) => option.label === line)?.value;

        return products.filter(
            (product) =>
                product.gender === genderValue &&
                product.is_new === isNew &&
                (category === ALL_CATEGORY || product.category === category)
        );
    }, [products, gender, line, category]);

    const filterGroups = [
        {
            key: "gender",
            label: "성별",
            options: GENDER_OPTIONS.map((option) => option.label),
            value: gender,
            onChange: setGender,
        },
        {
            key: "line",
            label: "신상",
            options: LINE_OPTIONS.map((option) => option.label),
            value: line,
            onChange: setLine,
        },
        {
            key: "category",
            label: "카테고리",
            options: categories,
            value: category,
            onChange: setCategory,
            small: true,
        },
    ];

    return { top3, filtered, filterGroups, loading };
};
