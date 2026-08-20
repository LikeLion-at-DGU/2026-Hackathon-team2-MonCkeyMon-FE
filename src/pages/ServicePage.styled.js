import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${({ theme }) => theme.size.frameWidth};
    height: ${({ theme }) => theme.size.frameHeight};
    background: ${({ theme }) => theme.colors.lightSand};
    position: relative;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 25px;
    }

    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.greySand};
        border-radius: 200px;
        border: 10px solid transparent;
        background-clip: padding-box;
    }

    &::-webkit-scrollbar-track {
        margin: 50px 0;
    }
`;

export const BackBtn = styled.button`
    position: absolute;
    top: 40px;
    left: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
`;

export const BackIcon = styled.img`
    width: 20px;
`;

export const Title = styled.div`
    display: flex;
    margin-top: 32px;
    color: ${({ theme }) => theme.colors.lightBrown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 36px;
    font-weight: 600;
    line-height: normal;
    margin-left: 22px;
`;

export const Box1 = styled.div`
    position: relative;
    flex-shrink: 0;
    width: 760px;
    height: 851px;
    margin-top: 24px;
    margin-left: 22px;
`;

export const PostImg = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
`;

export const BoxInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

export const Stamp = styled.img`
    position: absolute;
    top: 45px;
    right: 60px;
    width: 230px;
    height: 240px;
`;

export const Text1 = styled.p`
    margin-left: 49px;
    padding-top: 60px;
    margin-bottom: 50px;
    color: ${({ theme }) => theme.colors.lightBrown};
    font-family: ${({ theme }) => theme.fonts.admin};
    font-size: 50px;
    font-weight: 400;
    line-height: 40px;
`;

export const Text2 = styled.p`
    width: 274px;
    margin-left: 49px;
    margin-bottom: 20px;
    padding-bottom: 2px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightBrown};
    color: ${({ theme }) => theme.colors.lightBrown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 20px;
    font-weight: 300;
    line-height: 28px;
`;

export const Text3 = styled.p`
    width: 726px;
    margin: 40px auto 0;
    color: ${({ theme }) => theme.colors.lightBrown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    text-align: center;
`;

export const ServiceImage = styled.img`
    display: block;
    width: 478px;
    height: 263px;
    margin: 24px auto 0;
    border-radius: 10px;
    object-fit: cover;
`;

export const Text4 = styled.p`
    width: 672px;
    margin: 24px auto 0;
    color: ${({ theme }) => theme.colors.lightBrown};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    text-align: center;

    span {
        font-weight: 700;
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
    margin-left: 22px;
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
    margin-left: 22px;
`;

export const Diamond = styled.img`
    width: 18px;
    height: 21px;
    margin-left: 22px;
`;

export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 13px 12px;
    margin-top: 24px;
    margin-left: 22px;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    height: 300px;
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
    margin-top: 8px;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-start;
    margin-left: 43px;
    object-fit: contain;
`;


export const Logo = styled.img`
    margin-top: auto;
    margin-bottom: 20px;
    margin-top: 40px;
    margin-left: 22px;

`;