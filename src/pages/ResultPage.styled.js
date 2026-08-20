import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 375px;
    min-height: 812px;
    padding-bottom: 32px;
    background-color: ${({ theme }) => theme.colors.cream};

    & > * {
        flex-shrink: 0;
    }
`;

export const HeaderLogo = styled.img`
    width: 56px;
    height: 44px;
    aspect-ratio: 14/11;
    margin: 9px 0px;
`;


export const Divider = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    margin:12px 0px;
`;

export const HeaderLine = styled.div`
    width: 135px;
    height: 1px;
    background: ${({ theme }) => theme.colors.camelBrown};
`;

export const Diamond = styled.img`
    width: 10px;
    height: 14px;
`;

export const Photo = styled.video`
    width: 343px;
    height: 193px;
    aspect-ratio: 343/193;
    object-fit: cover;
`;

export const PhotoLine = styled.div`
    width: 100px;
    height: 1px;
    margin: 0px 16px;
    background: ${({ theme }) => theme.colors.camelBrown};
`;

export const DividerText = styled.p`
    color: ${({ theme }) => theme.colors.lightBrown};
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const IconSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6px;
    margin-bottom: 24px;
`

export const IconDiv = styled.div`
    display: flex;
    width: 80px;
    height: 80px;
    padding: 10px 10.5px 10px 9.5px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.lightSand} ;
`;

export const Icon = styled.img`
    width: 60px;
    height: 60px;
    flex-shrink: 0;
    aspect-ratio: 1/1;
`;

export const IconInfo = styled.p`
    color: ${({ theme }) => theme.colors.lightBrown};
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const IconData = styled.p`
    color: ${({ theme }) => theme.colors.lightBrown};
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

export const IconDataDetail = styled.p`
    color: ${({ theme }) => theme.colors.lightBrown};
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

export const DownloadBtn = styled.button`
    display: flex;
    width: 270px;
    height: 60px;
    padding: 14px 42px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.greySand} ;
    color: ${({ theme }) => theme.colors.cream};
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    gap: 6px;
    text-decoration: none;
`;

export const BtnImg = styled.img`
    width: 32px;
    height: 32px;
`;

export const LinkBtn = styled.button`
    display: flex;
    width: 270px;
    height: 60px;
    padding: 14px 42px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 2px solid ${({ theme }) => theme.colors.greySand};
    background-color: ${({ theme }) => theme.colors.cream} ;
    color: ${({ theme }) => theme.colors.greySand};
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    gap: 6px;
    margin-top: 12px;
    text-decoration: none;
`;