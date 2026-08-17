import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 930px;
    height: 235px;
    padding: 20px;
    border-radius: 20px;
    background: ${({ theme }) => theme.colors.lightSand};
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.colors.orangedark};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 20px;
    padding-left: 10px;
`;

export const BarBox = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 20px;
    height: 200px;
    padding: 0 40px;
`;

export const BarGraph = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    height: 100%;
    justify-content: flex-end;
    gap: 6px;
`;

export const Count = styled.span`
    color: ${({ theme }) => theme.colors.lightBrown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 14px;
    font-weight: 400;
`;

export const Bar = styled.div`
    width: 100%;
    height: ${({ $ratio }) => `${$ratio}%`};
    min-height: 4px;
    background: ${({ theme }) => theme.colors.brown};
`;

export const Label = styled.span`
    color: ${({ theme }) => theme.colors.lightBrown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 16px;
    font-weight: 400;
`;