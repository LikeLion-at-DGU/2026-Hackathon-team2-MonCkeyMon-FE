import { useMemo } from "react";
import * as S from "./Chat.styled";
import profile from "../../assets/images/Profile.png";
import { chatMessages } from "../../data/chatData";
import { useChatStore } from "../../store/chatStore";

function Chat() {
    const { visibleMessages } = useChatStore();

    const groups = useMemo(
        () =>
            chatMessages
                .slice(0, visibleMessages)
                .reduce((acc, message, index) => {
                    const isMine = Boolean(message.isMine);
                    const lastGroup = acc[acc.length - 1];

                    if (lastGroup && lastGroup.isMine === isMine) {
                        lastGroup.messages.push(message);
                    } else {
                        acc.push({ isMine, startIndex: index, messages: [message] });
                    }

                    return acc;
                }, []),
        [visibleMessages]
    );

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
                            </S.Bubble>
                        ))}
                    </S.MessageContent>
                </S.ChatMessage>
            ))}
        </S.ChatList>
    );
}

export default Chat;
