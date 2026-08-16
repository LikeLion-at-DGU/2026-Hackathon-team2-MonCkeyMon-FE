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

export const StoreName = styled.span`
    color: ${({ theme }) => theme.colors.lightBrown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 24px;
    font-weight: 500;
`;

export const StoreSeason = styled.span`
    color: ${({ theme }) => theme.colors.lighBrown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 24px;
    font-weight: 500;
`;

export const DateTab = styled.span`
    padding: 12px 24px;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.lightSand};
    color: ${({ theme }) => theme.colors.brown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 24px;
    font-weight: 400;
`;

export const Middle = styled.div`
    display: flex;
    flex: 1;
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
`;