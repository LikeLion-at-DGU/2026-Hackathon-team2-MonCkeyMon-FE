import styled from "styled-components";
import title from "../assets/images/Title.png";

export const Wrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    width: ${({ theme }) => theme.size.frameWidth};
    height: ${({ theme }) => theme.size.frameHeight};
    background: ${({ theme }) => theme.colors.lightSand};
    overflow: hidden;
    &::before{
        content: "";
        position: absolute;
        inset: 0;
        background-image: url(${title});
        background-repeat: no-repeat;
        background-position: center;
        opacity: 0.4;
        pointer-events: none;
    }
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    flex: 1;
    padding: 60px 25px;
    box-sizing: border-box;
`;

export const BottomModal = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;

    width: 100%;
    height: 200px;

    transform: translateY(100%);
    transition: transform 0.7s ease-out;

    z-index: 10;

    ${({ $show }) =>
        $show &&
        `
        transform: translateY(0);
    `}

    box-sizing: border-box;
    white-space: nowrap;
`;

export const ModalContent = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;

    width: 100%;
    height: 200px;

    box-sizing: border-box;
    padding: 40px;

    background-color: ${({ theme }) => theme.colors.cream};
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 20px 20px 0px 0px;
`;

export const StartButton = styled.button`
    display: flex;
    width: 540px;
    height: 120px;
    padding: 30px 141px 30px 142px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    background-color: ${({ theme }) => theme.colors.camelBrown};
    border-radius: 20px;
    color: #FFF;
    text-align: center;
    font-family: Pretendard;
    font-size: 35px;
    line-height: normal;

    &:active{
        transform: scale(1.03);
    }
`;

export const VideoImg = styled.img`
    width: 60px;
    height: 60px;
`;