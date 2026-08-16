import { useMemo, useState } from "react";
import { demoProduct, productFilters } from "../data/demo_product";

export const useProductFilter = () => {
    const [gender, setGender] = useState("여성");
    const [line, setLine] = useState("신상");
    const [category, setCategory] = useState("전체");

    const filtered = useMemo(
        () =>
            demoProduct.products.filter(
                (product) =>
                    product.gender === gender &&
                    product.line === line &&
                    (category === "전체" || product.category === category)
            ),
        [gender, line, category]
    );

    const filterGroups = [
        {
            key: "gender",
            label: "성별",
            options: productFilters.genders,
            value: gender,
            onChange: setGender,
        },
        {
            key: "line",
            label: "신상",
            options: productFilters.lines,
            value: line,
            onChange: setLine,
        },
        {
            key: "category",
            label: "카테고리",
            options: productFilters.categories,
            value: category,
            onChange: setCategory,
            small: true,
        },
    ];

    return { filtered, filterGroups };
};
