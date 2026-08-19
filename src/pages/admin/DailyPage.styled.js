import styled from "styled-components";

export const CardRow = styled.div`
    display: flex;
    gap: 24px;
    width: 930px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.greySand};
    margin-bottom: 12px;
    padding-bottom: 12px;
`;

export const MiniBox = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 120px;
    width: 294px;
    padding: 20px 24px;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.lightSand};
    
`;

export const MiniTitle = styled.p`
    color: ${({ theme }) => theme.colors.lightBrown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 18px;
    font-weight: 400;
`;

export const MiniCount = styled.strong`
    margin-top: 12px;
    color: ${({ theme }) => theme.colors.brown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 36px;
    font-weight: 700;
`;

export const ProductTable = styled.div`
    width: 930px;
    padding-bottom: 12px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.greySand};
    margin-bottom: 12px;
`;

export const RankRow = styled.div`
    display: flex;
    gap: 24px;
    margin-top: 16px;
    padding-bottom: 12px;
    margin-bottom: 12px;
    width: 930px;
`;