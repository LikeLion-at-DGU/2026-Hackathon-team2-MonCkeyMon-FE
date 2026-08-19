import styled, { keyframes } from "styled-components";
import bgImage from "../assets/images/LandingPage.png";
import StartBtnImage from "../assets/images/StartBtn.png";

const float = keyframes`
    0%, 100% {
        transform: translateY(0px) rotate(0deg);
    }
    50% {
        transform: translateY(-14px) rotate(4deg);
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: ${({ theme }) => theme.size.frameWidth};
    height: ${({ theme }) => theme.size.frameHeight};
    background-image: url(${bgImage});
    background-size: cover;
`;

export const Title = styled.img`
    width: 488px;
    margin-top: 180px;
`;

export const Divider = styled.div`
    display: flex;
    align-items: center;
    gap: 11px;
    margin-top: 15px;
`;

export const Line = styled.div`
    width: 150px;
    height: 1px;
    background: ${({ theme }) => theme.colors.camelBrown};
`;

export const Diamond = styled.img`
    width: 18px;
    height: 21px;
`;

export const Slogan = styled.p`
    color: ${({ theme }) => theme.colors.lightBrown};
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    margin-top: 30px;
`;

export const ServiceLink = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 40px;
    color: ${({ theme }) => theme.colors.lightBrown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 20px;
    font-weight: 400;
    &:active{
        transform: scale(0.94);
    }
`;

export const StartButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 450px;
    height: 100px;
    margin-top: 250px;
    background-image: url(${StartBtnImage});
    background-size: contain;
    background-repeat: no-repeat;
    color: ${({ theme }) => theme.colors.white};
    filter: drop-shadow(0 1px 1px #000000);
    padding: 0 35px;

    &:active{
        transform: scale(0.94);
    }
`;

export const Stamp = styled.img`
    width: 85px;
    height: 85px;
    transform: rotate(6.165deg);
`;

export const Arrow = styled.span`
    font-size: 40px;
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: 200;
    width: 85px;
`;

export const Logo = styled.img`
    margin-top: auto;
    margin-bottom: 22px;
`;

export const FloatItem = styled.img`
    position: absolute;
    animation: ${float} ease-in-out infinite;
`;