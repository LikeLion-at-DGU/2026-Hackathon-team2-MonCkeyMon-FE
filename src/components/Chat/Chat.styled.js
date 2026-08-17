import styled, { keyframes } from "styled-components";

export const ChatList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    flex: 1;
    gap: 30px;
`;

const riseIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(60px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const ChatMessage = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-start;
    gap: 10px;

    animation: ${riseIn} 0.45s ease-out;

    ${({ $mine }) =>
        $mine &&
        `
        justify-content: flex-end;
    `}
`;

export const Loading = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 14px;
    margin-top: auto;

    align-items: center;
`;

export const LoadingIcon = styled.img`
    width: 38px;
    height: 48px;

    flex-shrink: 0;
    aspect-ratio: 38/48;
`;

export const LoadingText = styled.span`
    font-size: 20px;
    color: ${({ theme }) => theme.colors.camelBrown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: 500;
`;

export const Profile = styled.div`
    display: flex;
    width: 55px;
    height: 55px;
    padding: 8px;
    border-radius: 20px;

    background-color: ${({ theme }) => theme.colors.sand};

    justify-content: center;
    align-items: center;
`;

export const ProfileImg = styled.img`
    width: 38px;
    height: 39px;

    flex-shrink: 0;
    aspect-ratio: 38/39;
`;

export const MessageContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    gap: 10px;
    padding-left: 10px;

    ${({ $mine }) =>
        $mine &&
        `
        align-items: flex-end;
        padding-left: 0;
    `}
`;

export const Nickname = styled.span`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.brown};
    font-family: ${({ theme }) => theme.fonts.body};
`;

export const BubbleProduct = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 14px;
`;

export const Bubble = styled.div`
    position: relative;

    width: fit-content;

    padding: 18px 26px;

    background-color: ${({ theme }) => theme.colors.cardBg};
    border-radius: 20px;

    font-size: 20px;
    line-height: normal;

    color: ${({ theme }) => theme.colors.brown};
    font-family: ${({ theme }) => theme.fonts.body};

    filter: drop-shadow(
        0 1px 2px rgba(97, 85, 74, 0.3)
    );

    &::before {
        content: "";

        position: absolute;
        top: 20px;
        left: -15px;

        width: 0;
        height: 0;

        border-top: 10px solid
            ${({ theme }) => theme.colors.cardBg};

        border-left: 20px solid transparent;

        transform: rotate(10deg);
    }

    ${({ $mine, theme }) =>
        $mine &&
        `
        align-self: flex-end;
        background-color: ${theme.colors.sand};

        &::before {
            left: auto;
            right: -15px;

            border-top: 10px solid ${theme.colors.sand};
            border-left: none;
            border-right: 20px solid transparent;
            
            transform: rotate(-10deg);
        }
    `}
`;