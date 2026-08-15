import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${({ theme }) => theme.size.frameWidth};
    height: ${({ theme }) => theme.size.frameHeight};
    background: ${({ theme }) => theme.colors.lightSand};
`;

export const PhotoBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 600px;
    height: 800px;
    margin-top: 53px;
    border-radius: 20px;
    background: ${({ theme }) => theme.colors.white};
    overflow: hidden;
`;

export const Photo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scaleX(-1);
`;

export const Text = styled.p`
    margin-top: 12px;
    color: ${({ theme }) => theme.colors.lightBrown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 20px;
    text-align: center;
    font-weight: 400;
`;

export const Button = styled.div`
    display: flex;
    gap: 24px;
    margin-top: 45px;
    align-items: center;
`;

export const ReBtn = styled.button`
    width: 200px;
    height: 100px;
    border-radius: 10px;
    justify-content: center;
    border: 1px solid ${({ theme }) => theme.colors.greySand};
    background: ${({ theme }) => theme.colors.cream};
    color: ${({ theme }) => theme.colors.greySand};
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: 500;
    font-size: 30px;
`;

export const NextBtn = styled.button`
    width: 376px;
    height: 100px;
    border-radius: 10px;
    justify-content: center;
    background: ${({ theme }) => theme.colors.camelBrown};
    border: 1px solid ${({ theme }) => theme.colors.greySand};
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.body};
    text-align: center;
    font-weight: 500;
    font-size: 30px;
`;