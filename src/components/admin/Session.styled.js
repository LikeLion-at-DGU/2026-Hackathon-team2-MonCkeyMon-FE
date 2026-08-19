import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 930px;
    padding: 20px;
    border-radius: 20px;
    background: ${({ theme }) => theme.colors.lightSand};
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.colors.orangedark};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 24px;
    font-weight: 500;
    margin-left: 10px;
`;

export const Total = styled.span`
    color: ${({ theme }) => theme.colors.brown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 22px;
    font-weight: 500;
`;

export const ScrollBox = styled.div`
    overflow-x: auto;
    padding-bottom: 8px;

    &::-webkit-scrollbar {
        height: 3px;
    }
    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.greySand};
        border-radius: 2px;
    }
    &::-webkit-scrollbar-track {
        margin: 0 10px;
    }
`;

export const BarBox = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 24px;
    height: 160px;
    width: ${({ $count }) => `${$count * 60}px`};
`;

export const Graph = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 110px;
    height: 100%;
    justify-content: flex-end;
    gap: 6px;
    flex-shrink: 0;
`;

export const Count = styled.span`
    color: ${({ theme }) => theme.colors.lightBrown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 16px;
    font-weight: 400;
`;

export const Bar = styled.div`
    width: 100%;
    height: ${({ $ratio }) => `${$ratio}%`};
    min-height: 4px;
    background: ${({ theme }) => theme.colors.brown};
    border-radius: 3px 3px 0 0;
`;

export const Label = styled.span`
    color: ${({ theme }) => theme.colors.lightBrown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 18px;
    font-weight: 400;
    white-space: nowrap;
`;