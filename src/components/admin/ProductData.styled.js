import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 930px;
    padding: 10px;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.lightSand};
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
    margin-top: 5px;
`;

export const TitleBox = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding-left: 15px;
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.colors.brown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 24px;
    font-weight: 500;
`;

export const Note = styled.span`
    color: ${({ theme }) => theme.colors.lightBrown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 14px;
    font-weight: 400;
    display: flex;
    align-items: center;
`;

export const InfoIcon = styled.img`
    width: 20px;
`;

export const MoreBtn = styled.button`
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${({ theme }) => theme.colors.greySand};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 16px;
    font-weight: 400;
`;

export const Arrow = styled.img`
    width: 20px;
    transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "none")};
`;

export const ColumnRow = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 12px;
    color: ${({ theme }) => theme.colors.orangedark};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 16px;
    font-weight: 400;
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    color: ${({ theme }) => theme.colors.lightBrown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 18px;
    font-weight: 400;
    border-top: 1px solid ${({ theme }) => theme.colors.greySand};

    &:first-child {
        border-top: none;
    }
`;

export const RowBox = styled.div`
    max-height: ${({ $isOpen }) => ($isOpen ? "420px" : "none")};
    overflow-y: ${({ $isOpen }) => ($isOpen ? "auto" : "visible")};

    &::-webkit-scrollbar {
        width: 4px;
    }
    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.greySand};
        border-radius: 2px;
    }
`;

export const Rank = styled.span`
    width: 30px;
    color: ${({ theme }) => theme.colors.camelBrown};
`;

export const Name = styled.span`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const Color = styled.span`
    width: 150px;
`;

export const Size = styled.span`
    width: 100px;
`;

export const Count = styled.span`
    width: 100px;
    text-align: right;
`;