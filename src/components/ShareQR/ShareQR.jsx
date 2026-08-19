import { QRCodeSVG } from "qrcode.react";
import { theme } from "../../styles/theme";
import { getShareUrl } from "../../utils/shareUrl";
import Logo from "../../assets/images/Logo.png";
import * as S from "./ShareQR.styled";

const ERROR_CORRECTION_LEVEL = "H";
const QUIET_ZONE_MODULES = 4;
const LOGO_RATIO = 0.18;

function ShareQR({ sessionId, size = 200, radius = 10 }) {
    const shareUrl = getShareUrl(sessionId);

    const padding = Math.round(size * 0.04);
    const codeSize = size - padding * 2;
    const logoSize = Math.round(codeSize * LOGO_RATIO);

    return (
        <S.Frame $size={size} $padding={padding} $radius={radius}>
            {shareUrl ? (
                <QRCodeSVG
                    value={shareUrl}
                    size={codeSize}
                    level={ERROR_CORRECTION_LEVEL}
                    marginSize={QUIET_ZONE_MODULES}
                    bgColor={theme.colors.white}
                    fgColor={theme.colors.brown}
                    title="사진과 구매 링크를 받는 QR 코드"
                    imageSettings={{
                        src: Logo,
                        width: logoSize,
                        height: Math.round(logoSize * (44 / 56)),
                        excavate: true,
                    }}
                />
            ) : (
                <S.Placeholder $fontSize={Math.round(size * 0.08)}>
                    QR 코드를<br />준비하고 있습니다
                </S.Placeholder>
            )}
        </S.Frame>
    );
}

export default ShareQR;
