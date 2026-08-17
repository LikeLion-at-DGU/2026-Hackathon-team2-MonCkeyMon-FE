import styled from "styled-components";
import title from "../assets/images/Title.png";

export const Wrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    width: ${({ theme }) => theme.size.frameWidth};
    height: ${({ theme }) => theme.size.frameHeight};
    background: ${({ theme }) => theme.colors.lightSand};
    overflow: hidden;
    &::before{
        content: "";
        position: absolute;
        inset: 0;
        background-image: url(${title});
        background-repeat: no-repeat;
        background-position: center;
        opacity: 0.4;
        pointer-events: none;
    }
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    flex: 1;
    padding: 60px 25px;
    box-sizing: border-box;
`;

export const BottomModal = styled.div`
    position: absolute;
    left: 50%;
    bottom: 0;

    width: 740px;
    height: ${({ $expanded, $selected }) => {
        if ($expanded) return "1060px";
        return $selected ? "470px" : "360px";
    }};

    transform: translate(-50%, 100%);
    transition:
        transform 0.7s ease-out,
        height 0.4s ease-out;

    z-index: 10;
    box-sizing: border-box;

    ${({ $show }) =>
        $show &&
        `
        transform: translate(-50%, 0);
    `}
`;

export const ModalContent = styled.div`
    width: 100%;
    height: 100%;

    box-sizing: border-box;
    padding: 18px 32px 18px 30px;

    background-color: #fff;

    display: flex;
    flex-direction: column;
    overflow: hidden;

    border-radius: 20px 20px 0 0;
`;

export const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    flex-shrink: 0;
`;

export const ModalTitle = styled.h2`
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 28px;
    font-weight: 400;
`;

export const ArrowBtn = styled.img`
    width: 40px;
    cursor: pointer;
`;

export const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    align-content: start;
    flex-shrink: 0;

    padding-top: 16px;
`;

export const SectionTitle = styled.h2`
    margin-top: 18px;
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 28px;
    font-weight: 400;
    flex-shrink: 0;
`;

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    flex-shrink: 0;
    margin-top: ${({ $gap }) => $gap || "14px"};
    background: ${({ $light, theme }) =>
        $light ? theme.colors.lightSand : theme.colors.greySand};
`;

export const DiamondDivider = styled.div`
    width: 100%;
    flex-shrink: 0;
    margin-top: 16px;

    display: flex;
    align-items: center;
    gap: 14px;
`;

export const DiamondLine = styled.div`
    flex: 1;
    height: 1px;
    background: ${({ theme }) => theme.colors.greySand};
`;

export const Diamond = styled.div`
    width: 10px;
    height: 10px;
    flex-shrink: 0;
    transform: rotate(45deg);
    border: 1.5px solid ${({ theme }) => theme.colors.greySand};
    background: transparent;
`;

export const FilterRow = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 14px;

    width: 100%;
    flex-shrink: 0;

    overflow-x: auto;
    overflow-y: hidden;

    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }

    & > * {
        flex-shrink: 0;
    }
`;

export const FilterLabel = styled.span`
    display: flex;
    height: 50px;
    padding: 12px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: ${({ theme }) => theme.colors.brown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const FilterBtn = styled.button`
    flex: 1;
    height: 50px;
    padding: 12px 20px;
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.colors.camelBrown};
    background: ${({ $active, theme }) =>
        $active ? theme.colors.camelBrown : "transparent"};
    color: ${({ $active, theme }) =>
        $active ? theme.colors.cream : theme.colors.camelBrown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 20px;
    font-weight: 500;
    font-style: normal;
    line-height: normal;
    white-space: nowrap;
    cursor: pointer;
`;

export const ProductList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    align-content: start;

    margin-top: 16px;
    flex: 1;
    min-height: 0;
    overflow-y: auto;

    padding-bottom: ${({ $hasSelectBtn }) => ($hasSelectBtn ? "116px" : "0")};

    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const EmptyText = styled.p`
    grid-column: 1 / -1;
    padding-top: 40px;
    text-align: center;
    color: ${({ theme }) => theme.colors.greySand};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 18px;
    font-weight: 400;
`;

export const SelectBtn = styled.button`
    position: absolute;
    left: 30px;
    right: 32px;
    bottom: 18px;

    display: flex;
    width: 678px;
    height: 100px;
    padding: 32px 0;
    justify-content: center;
    align-items: center;

    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.greySand};

    background: ${({ theme }) => theme.colors.camelBrown};
    color: ${({ theme }) => theme.colors.cream};

    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 30px;
    font-weight: 500;

    cursor: pointer;
    z-index: 5;
`;

