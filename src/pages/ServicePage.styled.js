import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${({ theme }) => theme.size.frameWidth};
    height: ${({ theme }) => theme.size.frameHeight};
    background: ${({ theme }) => theme.colors.lightSand};
`;

export const Title = styled.div`
    display: flex;
    margin-top: 32px;
    color: ${({ theme }) => theme.colors.lightBrown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 36px;
    font-weight: 600;
    line-height: normal;
`;

export const Box1 = styled.div`
    display: flex;
    height: 183px;
    width: 772px;
    margin-top: 24px;
    padding: 20px 23px 19px 23px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.colors.greySand};
    background: ${({ theme }) => theme.colors.cream};
`;

export const Text1 = styled.p`
    color: ${({ theme }) => theme.colors.lightBrown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 20px;
    font-weight: 400;
    line-height: 1.4;
    text-align: center;
    width: 726px;

    span {
        font-weight: 500;
    }
`;

export const SubTitle = styled.div`
    display: flex;
    margin-top: 24px;
    color: ${({ theme }) => theme.colors.lightBrown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 28px;
    font-weight: 600;
    line-height: normal;
`;

export const Divider = styled.div`
    display: flex;
    align-items: center;
    gap: 11px;
    margin-top: 20px;
`;

export const Line = styled.div`
    width: 150px;
    height: 1px;
    background: ${({ theme }) => theme.colors.camelBrown};
`;

export const Diamond = styled.img`
    width: 18px;
    height: 21px;
`;

export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px 48px;
    margin-top: 24px;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 270px;
    height: 320px;
    padding: 20px 16px;
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.colors.greySand};
    background: ${({ theme }) => theme.colors.cream};
`;

export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
`;

export const StepId = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.camelBrown};
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 20px;
    font-weight: 400;
    flex-shrink: 0;
`;

export const CardTitle = styled.h3`
    color: ${({ theme }) => theme.colors.lightBrown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 20px;
    font-weight: 500;
`;

export const CardText = styled.p`
    margin-top: 3px;
    color: ${({ theme }) => theme.colors.lightBrown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 12px;
    font-weight: 400;
    text-align: left;
    width: 100%;
    padding-left: 42px;
    white-space: pre-line;
`;

export const CardImage = styled.img`
    height: 180px;
    margin-top: 15px;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: contain;
`;


export const Logo = styled.img`
    margin-top: auto;
    margin-bottom: 22px;
`;