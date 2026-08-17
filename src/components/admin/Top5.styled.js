import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 453px;
    height: 271px;
    padding: 10px;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.lightSand};
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.colors.brown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 12px;
    margin-top: 5px;
    padding-left: 15px;
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 6px 18px;
`;

export const Rank = styled.span`
    color: ${({ theme }) => theme.colors.camelBrown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 24px;
    font-weight: 400;
`;

export const Name = styled.span`
    flex: 1;
    color: ${({ theme }) => theme.colors.lightBrown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 20px;
    font-weight: 500;
`;

export const Count = styled.span`
    color: ${({ theme }) => theme.colors.lightBrown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 20px;
    font-weight: 400;
`;