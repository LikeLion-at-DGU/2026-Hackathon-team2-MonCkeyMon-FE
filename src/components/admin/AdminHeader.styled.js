import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: ${({ theme }) => theme.size.adminWidth};
    height: ${({ theme }) => theme.size.adminHeight};
    background: ${({ theme }) => theme.colors.cream};
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 89px;
    flex-shrink: 0;
    padding: 0 24px 0 28px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.greySand};
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.lightBrown};
    font-family: ${({ theme }) => theme.fonts.admin};
    font-size: 40px;
    font-weight: 800;
`;

export const Info = styled.div`
    display: flex;
    align-items: center;
    gap: 17px;
`;

export const Dropdown = styled.div`
    position: relative;
`;

export const StoreTab = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 20px;
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.lightBrown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 24px;
    font-weight: 500;
`;

export const DateTab = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    height: 52px;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.lightSand};
    color: ${({ theme }) => theme.colors.brown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 24px;
    font-weight: 400;
`;

export const Arrow = styled.span`
    font-size: 16px;
`;

export const OptionList = styled.div`
    position: absolute;
    right: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    padding: 6px;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

export const Option = styled.button`
    white-space: nowrap;
    text-align: left;
    padding: 10px 14px;
    border-radius: 6px;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme, $isSelected }) =>
        $isSelected ? theme.colors.white : theme.colors.brown};
    background: ${({ theme, $isSelected }) =>
        $isSelected ? theme.colors.active : "transparent"};
`;

export const Middle = styled.div`
    display: flex;
    flex: 1;
    min-height: 0;
`;

export const Body = styled.nav`
    display: flex;
    flex-direction: column;
    width: 200px;
    background: ${({ theme }) => theme.colors.lightSand};
`;

export const LeftTab = styled.button`
    text-align: left;
    padding: 18px 0 18px 24px;
    color: ${({ theme }) => theme.colors.lightBrown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 20px;
    font-weight: 500;
    border-bottom: 1px solid ${({ theme }) => theme.colors.greySand};
    background-color: ${({ theme, $isActive }) =>
        $isActive ? theme.colors.cream : theme.colors.lightSand};


    &:active{
        transform: scale(0.94);
    }
`;

export const Content = styled.main`
    flex: 1;
    padding: 18px 12px 24px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 3px;
    }
    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.greySand};
        border-radius: 2px;
    }

    &::-webkit-scrollbar-track {
        margin: 50px 0;
    }
`;