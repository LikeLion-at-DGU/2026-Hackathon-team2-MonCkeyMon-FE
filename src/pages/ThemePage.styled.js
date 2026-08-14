import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: ${({ theme }) => theme.size.frameWidth};
    height: ${({ theme }) => theme.size.frameHeight};
    background: ${({ theme }) => theme.colors.lightSand};
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 740px;
    margin-top: 24px;
    padding: 32px;
    border-radius: 20px 20px 0 0;
    background: ${({ theme }) => theme.colors.cream};
    overflow: hidden;
`;

export const Title1 = styled.h2`
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 28px;
    font-weight: 500;
`;

export const Top = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-top: 16px;
`;

export const Title2 = styled.h2`
    margin-top: 22px;
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 28px;
    font-weight: 500;
`;

export const TabBar = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    margin-top: 16px;
`;

export const Tab = styled.button`
    width: 295px;
    height: 50px;
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.colors.camelBrown};
    background: ${({ $active, theme }) =>
        $active ? theme.colors.camelBrown : "transparent"};
    color: ${({ $active, theme }) =>
        $active ? theme.colors.cream : theme.colors.camelBrown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 20px;
    font-weight: 500;
`;

export const TabDivider = styled.div`
    width: 2px;
    height: 68px;
    background: ${({ theme }) => theme.colors.greySand};
`;

export const Theme = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-top: 20px;
    flex: 1;
    overflow-y: auto;
    padding-right: 8px;

    &::-webkit-scrollbar {
        width: 8px;
    }
    &::-webkit-scrollbar-thumb {
        background: #BCBCBC;
        border-radius: 4px;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
    }
`;

export const Card = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px;
    border-radius: 12px;
    border: 2px solid ${({ $selected, theme }) =>
        $selected ? theme.colors.camelBrown : "transparent"};
    background: ${({ theme }) => theme.colors.white};
    text-align: left;
    box-shadow: 1px 1px 4px 0 rgba(97, 85, 74, 0.40);
    width: 210px;
    height: 275px;
`;

export const CardBox = styled.div`
    position: relative;
    width: 180px;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    overflow: hidden;
`;

export const CardImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const CheckIcon = styled.img`
    position: absolute;
    top: 8px;
    right: 8px;
    width: 28px;
    height: 28px;
`;

export const CardName = styled.p`
    width: 100%;
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.lightBrown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 16px;
    font-weight: 500;
    text-align: left;
`;

export const CardTags = styled.p`
    color: ${({ theme }) => theme.colors.lightBrown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 12px;
    font-weight: 400;
    margin-top: 6px;
`;

export const SelectBtn = styled.button`
    position: absolute;
    bottom: 35px;
    left: 50%;
    transform: translateX(-50%);
    width: 678px;
    height: 100px;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.camelBrown};
    color: ${({ theme }) => theme.colors.cream};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 30px;
    font-weight: 500;
`;