import { useEffect, useState } from "react";
import { useChatStore } from "../store/chatStore";
import { chatMessages } from "../data/chatData";

const MESSAGE_DELAY = 2000;
const MODAL_DELAY = 1000;

export const useChatSequence = ({ clampMin, clampMax, end, modalAt = end }) => {
    const { visibleMessages, advanceTo, clampTo } = useChatStore();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        clampTo(clampMin, clampMax);
    }, [clampTo, clampMin, clampMax]);

    useEffect(() => {
        if (visibleMessages >= end) return;
        const nextDelay = chatMessages[visibleMessages]?.delay ?? MESSAGE_DELAY;
        const timer = setTimeout(() => {
            advanceTo(visibleMessages + 1);
        }, nextDelay);
        return () => clearTimeout(timer);
    }, [visibleMessages, advanceTo, end]);

    useEffect(() => {
        if (visibleMessages !== modalAt) return;
        const timer = setTimeout(() => {
            setShowModal(true);
        }, MODAL_DELAY);
        return () => clearTimeout(timer);
    }, [visibleMessages, modalAt]);

    return { visibleMessages, showModal, setShowModal, advanceTo };
};
