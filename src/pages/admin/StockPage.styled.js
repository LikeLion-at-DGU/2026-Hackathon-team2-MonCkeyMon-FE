import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 933px;
    border-radius: 10px;
    min-height: 700px;
    background: ${({ theme }) => theme.colors.lightSand};
    margin: 0 auto;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 28px;
    margin-bottom: 8px;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.orangedark};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 24px;
    font-weight: 500;
`;

export const Text = styled.div`
    color: ${({ theme }) => theme.colors.orangedark};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 12px;
    font-weight: 500;
`;

export const Tab = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
    padding: 0 20px;
`;

export const TabBox = styled.div`
    display: flex;
    width: 400px;
    height: 50px;
    align-items: center;
    gap: 11px;
    border-radius: 99px;
    background: ${({ theme }) => theme.colors.sand};
`;

export const TabBtn = styled.button`
    flex: 1;
    height: 100%;
    border-radius: 99px;
    background: ${({ theme, $active }) => ($active ? theme.colors.lightBrown : "transparent")};
    color: ${({ theme, $active }) => ($active ? theme.colors.white : theme.colors.active)};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 20px;
    font-weight: 500;
`;

export const Search = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    height: 50px;
    width: 437px;
    padding: 10px 20px;
    border-radius: 99px;
    background: ${({ theme }) => theme.colors.sand};
`;

export const SearchText = styled.input`
    flex: 1;
    background: none;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.colors.lightBrown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 20px;
    font-weight: 400;

    &::placeholder {
        color: ${({ theme }) => theme.colors.lightBrown};
    }
`;

export const SearchIcon = styled.img`
    display: flex;
    width: 20px;
    margin-right: 36px;
`;

export const Middle = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 16px;
    margin-left: 10px;
    color: ${({ theme }) => theme.colors.orangedark};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 16px;
    font-weight: 400;
`;

export const NoData = styled.p`
    display: flex;
    padding: 60px 0;
    text-align: center;
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 20px;
    font-weight: 500;
    justify-content: center;
    margin-top: 190px;

`;

export const Middle2 = styled.div`
    display: flex;
    flex-direction: column;
        margin-left: 10px;

`;

export const Detail = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 15px 16px;
    color: ${({ theme }) => theme.colors.lightBrown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 16px;
    font-weight: 400;
    border-top: 1px solid ${({ theme }) => theme.colors.greySand};
    &:first-child {
        border-top: none;
    }
`;

export const Name = styled.span`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const Name2 = styled(Name)`
    font-size: 20px;
    font-weight: 600;
`;

export const Color = styled.span`
    width: 150px;
`;

export const Size = styled.span`
    width: 100px;
`;

export const Stock = styled.span`
    width: 100px;
`;

export const Stock2 = styled(Stock)`
    font-size: 20px;
    font-weight: 600;
`;