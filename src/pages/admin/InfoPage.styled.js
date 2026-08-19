import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 930px;
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.colors.lightBrown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 24px;
    padding-left: 44px;
    margin-top: 19px;
`;

export const Info = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    margin-bottom: 12px;
    padding-left: 40px;
    padding-right: 40px;
`;

export const Name = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 60px;
    padding: 12px 20px;
    border-radius: 20px;
    background: ${({ theme }) => theme.colors.lightBrown};
    color: ${({ theme }) => theme.colors.cream};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 20px;
    font-weight: 500;
`;

export const Detail = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    height: 60px;
    width: 600px;
    padding: 12px 20px;
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.colors.lightBrown};
    color: ${({ theme }) => theme.colors.lightBrown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 20px;
    font-weight: 400;
`;

export const Divider = styled.div`
    margin: 10px;
`;