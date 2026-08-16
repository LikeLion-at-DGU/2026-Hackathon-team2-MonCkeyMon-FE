import styled from "styled-components";

export const Card = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px;
    border-radius: 12px;
    border: 2px solid ${({ $selected, theme }) =>
        $selected ? theme.colors.camelBrown : "transparent"};
    background: ${({ theme }) => theme.colors.cardBg};
    box-shadow: 1px 1px 4px 0 rgba(97, 85, 74, 0.40);
    width: 205px;
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
    line-height: normal;
`;

export const CardMeta = styled.p`
    width: 100%;
    margin-top: 6px;
    color: ${({ theme }) => theme.colors.lightBrown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 12px;
    font-weight: 400;
    text-align: left;
    line-height: normal;
`;
