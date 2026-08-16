import { useEffect } from "react";
import { useChatStore } from "../store/chatStore";
import * as S from "./ProductPage.styled";
import Chat from "../components/Chat/Chat";
import PageHeader from "../components/PageHeader/PageHeader";

function ProductPage() {
    const { visibleMessages, advanceTo, clampTo } = useChatStore();

    useEffect(()=>{
        clampTo(3, 3);
    }, [clampTo]);

    useEffect(()=>{
        if (visibleMessages >= 5) return;
        const timer = setTimeout(()=>{
            advanceTo(visibleMessages + 1);
        }, 3000);
        return () => clearTimeout(timer);
    }, [visibleMessages, advanceTo]);

    return (
        <S.Wrapper>
            <PageHeader />
            <S.Body>
                <Chat />
            </S.Body>
        </S.Wrapper>
    )
}

export default ProductPage;