import { useMemo } from "react";
import * as S from "./Chat.styled";
import profile from "../../assets/images/Profile.png";
import threeDiamond from "../../assets/images/ThreeDiamond.svg";
import { chatMessages } from "../../data/chatData";
import { useChatStore } from "../../store/chatStore";
import { useExperienceStore } from "../../store/experienceStore";
import ProductCard from "../ProductCard/ProductCard";

function Chat() {
    const { visibleMessages } = useChatStore();
    const selectedProduct = useExperienceStore((state) => state.product);

    const { groups, showLoading } = useMemo(() => {
        const visible = chatMessages.slice(0, visibleMessages);

        const lastScreenStart = visible.findLastIndex((message) => message.startsNewScreen);
        const anchor = Math.max(lastScreenStart, 0);
        const screen = visible.slice(anchor);

        return {
            showLoading: screen.some((message) => message.withLoading),
            groups: screen.reduce((acc, message, index) => {
                const isMine = Boolean(message.isMine);
                const lastGroup = acc[acc.length - 1];

                if (lastGroup && lastGroup.isMine === isMine) {
                    lastGroup.messages.push(message);
                } else {
                    acc.push({ isMine, startIndex: anchor + index, messages: [message] });
                }

                return acc;
            }, []),
        };
    }, [visibleMessages]);

    return (
        <S.ChatList>
            {groups.map((group) => (
                <S.ChatMessage key={group.startIndex} $mine={group.isMine}>
                    {!group.isMine && (
                        <S.Profile>
                            <S.ProfileImg src={profile} />
                        </S.Profile>
                    )}

                    <S.MessageContent $mine={group.isMine}>
                        {!group.isMine && <S.Nickname>MonkeyMong</S.Nickname>}

                        {group.messages.map((message, index) => (
                            <S.Bubble
                                key={group.startIndex + index}
                                $mine={group.isMine}
                            >
                                {message.content}

                                {message.withProduct && selectedProduct && (
                                    <S.BubbleProduct>
                                        <ProductCard product={selectedProduct} />
                                    </S.BubbleProduct>
                                )}
                            </S.Bubble>
                        ))}
                    </S.MessageContent>
                </S.ChatMessage>
            ))}

            {showLoading && (
                <S.Loading>
                    <S.LoadingIcon src={threeDiamond} />
                    <S.LoadingText>AI가 아름다운 사진을 제작 중입니다...</S.LoadingText>
                </S.Loading>
            )}
        </S.ChatList>
    );
}

export default Chat;
