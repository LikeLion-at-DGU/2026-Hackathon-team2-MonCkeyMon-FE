import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${({ theme }) => theme.size.adminWidth};
    height: ${({ theme }) => theme.size.adminHeight};
    background: ${({ theme }) => theme.colors.lightSand};
`;

export const SubTitle = styled.p`
    color: ${({ theme }) => theme.colors.lightBrown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 24px;
    font-weight: 500;
    margin-top: 128px;
`;

export const Logo = styled.img`
    display: flex;
    width: 562px;
    margin-top: 5px;
`;

export const StartBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 600px;
    height: 100px;
    margin-top: 16px;
    border-radius: 20px;
    background: ${({ theme }) => theme.colors.lightBrown};
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 28px;
    font-weight: 500;

    &:active{
        transform: scale(0.94);
    }
`;