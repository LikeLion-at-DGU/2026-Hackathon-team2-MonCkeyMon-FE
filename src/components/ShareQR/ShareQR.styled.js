import styled from "styled-components";

export const Frame = styled.div`
    display: flex;
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    padding: ${({ $padding }) => $padding}px;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1/1;
    border-radius: ${({ $radius }) => $radius}px;
    background: ${({ theme }) => theme.colors.white};
`;

export const Placeholder = styled.p`
    color: ${({ theme }) => theme.colors.greySand};
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ $fontSize }) => $fontSize}px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
