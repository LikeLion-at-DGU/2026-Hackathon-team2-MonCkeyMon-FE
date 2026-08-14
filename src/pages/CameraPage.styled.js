import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    width: ${({ theme }) => theme.size.frameWidth};
    height: ${({ theme }) => theme.size.frameHeight};
    background: ${({ theme }) => theme.colors.black};
`;

export const CamArea = styled.div`
    position: relative;
    flex: 1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scaleX(-1);
`;

export const Countdown = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

export const Count = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 150px;
    border: 2px solid ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 50px;
`;

export const CountText = styled.p`
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 20px;
    font-weight: 400;
`;

export const ErrorText = styled.p`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.white};
`;

export const Flash = styled.div`
    position: absolute;
    inset: 0;
    background: ${({ theme }) => theme.colors.white};
    z-index: 10;
`;

export const CamButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    gap: 12px;
    width: 450px;
    height: 100px;
    bottom: 35px;
    border-radius: 20px;
    background: ${({ theme }) => theme.colors.camelBrown};
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 35px;
    font-weight: 500;
`;

export const CamIcon = styled.img`
    width: 61px;
    height: 61px;
`;