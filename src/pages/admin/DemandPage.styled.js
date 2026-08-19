import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 930px;
    margin: 0 auto;
`;

export const Header = styled.div`
    display: flex;
    gap: 50px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.greySand};
    padding-bottom: 15px;
`;

export const HeaderBox = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 20px 24px;
    border-radius: 10px;
    width: 442px;
    height: 140px;
    background: ${({ theme }) => theme.colors.lightSand};
`;

export const HeaderBox2 = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 20px 24px;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.lightSand};
`;

export const Title = styled.p`
    color: ${({ theme }) => theme.colors.lightBrown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 10px;
`;

export const Detail = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: auto;
`;

export const Name = styled.p`
    color: ${({ theme }) => theme.colors.lightBrown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 24px;
    font-weight: 500;
`;

export const Score = styled.strong`
    color: ${({ theme }) => theme.colors.lightBrown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 30px;
    font-weight: 500;
`;

export const Middle = styled.div`
    margin-top: 15px;
    width: 930px;
    padding: 10px;    
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.lightSand};
`;

export const Header2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
    padding: 0 16px;
`;

export const Header2Box = styled.div`
    display: flex;
    align-items: baseline;
    gap: 8px;
`;

export const CatName = styled.div`
    display: flex;
    color: ${({ theme }) => theme.colors.lightBrown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 30px;
`;

export const Title2 = styled.h2`
    color: ${({ theme }) => theme.colors.orangedark};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 24px;
    font-weight: 500;
    margin-top: 10px;
`;

export const Text = styled.span`
    color: ${({ theme }) => theme.colors.orangedark};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 16px;
    font-weight: 400;
    margin-left: 8px;
`;

export const Detail2 = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 16px;
    color: ${({ theme }) => theme.colors.orangedark};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 16px;
    font-weight: 600;
`;

export const DetailBox = styled.div`
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

export const Row = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 20px 16px;
    color: ${({ theme }) => theme.colors.lightBrown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 18px;
    font-weight: 400;
    border-top: 1px solid ${({ theme }) => theme.colors.greySand};

    &:first-child {
        border-top: none;
    }
`;

export const Rank = styled.span`
    width: 30px;
    color: ${({ theme }) => theme.colors.camelBrown};
    font-weight: 500;
    font-size: 24px;
`;

export const ProdName = styled.span`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    font-weight: 400;
`;

export const ProdName2 = styled.div`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 20px;
    font-weight: 600;
`;

export const Session = styled.span`
    width: 80px;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
`;

export const LinkReceived = styled.span`
    width: 80px;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
`;

export const LinkClick = styled.span`
    width: 80px;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
`;

export const TotalScore = styled.span`
    width: 80px;
    text-align: center;
    font-weight: 400;
`;

export const TotalScore2 = styled.div`
    width: 80px;
    text-align: center;
    font-weight: 600;
`;

export const Divider = styled.div`
    width: 930px;
    height: 1px;
    margin-top: 15px;
    background: ${({ theme }) => theme.colors.greySand};
`;

export const RecommendBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 930px;
    padding: 10px;
    border-radius: 10px;
    margin-top: 15px;
    background: ${({ theme }) => theme.colors.lightSand};
`;

export const Header3 = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
    padding: 8px 16px 0;
`;

export const Title3 = styled.h2`
    color: ${({ theme }) => theme.colors.orangedark};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 24px;
    font-weight: 500;
`;

export const MoreBtn = styled.button`
    display: flex;
    align-items: center;
    gap: 13px;
    color: ${({ theme }) => theme.colors.camelBrown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 16px;
    font-weight: 400;
`;

export const RecBox = styled.div`
    display: flex;
    align-items: center;
    padding: 8px 16px;
    color: ${({ theme }) => theme.colors.orangedark};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 16px;
    font-weight: 400;
`;

export const RecRow = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 16px;
    color: ${({ theme }) => theme.colors.lightBrown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 18px;
    font-weight: 400;
    border-top: 1px solid ${({ theme }) => theme.colors.greySand};

    &:first-child {
        border-top: none;
    }
`;

export const RecName = styled.span`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    font-weight: 400;
`;


export const RecName2 = styled.span`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 20px;
    font-weight: 600;
`;

export const RecReason = styled.span`
    width: 260px;
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.black};
`;

export const RecTag = styled.span`
    width: 140px;
`;

export const RecDir = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 140px;
    padding: 6px 0;
    border-radius: 10px;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 14px;
    font-weight: 500;

    background: ${({ theme, $type }) => {
        if ($type === "up") return "#94C1A0";
        if ($type === "down") return "#E1A39F";
        return theme.colors.sand;
    }};

    color: ${({ theme, $type }) => {
        if ($type === "up") return "#054B1A";
        if ($type === "down") return "#DA2C20";
        return theme.colors.brown;
    }};
`;

export const RecDetailBox = styled.div`
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

export const Arrow = styled.img`
    width: 23px;
    transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "none")};
`;