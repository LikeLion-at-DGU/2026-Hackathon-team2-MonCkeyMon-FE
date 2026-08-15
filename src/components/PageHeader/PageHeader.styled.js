import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100px;
    padding: 0 44px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.greySand};
    background: ${({ theme }) => theme.colors.lightSand};
`;

export const BackButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 44px;

`;

export const BackIcon = styled.img`
    width: 18.543px;
    height: 37px;
`;

export const Logo = styled.img`
    height: 75px;
    width: 95px;
`;
