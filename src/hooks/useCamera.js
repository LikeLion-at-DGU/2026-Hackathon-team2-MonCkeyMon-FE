import { useEffect, useRef, useState } from "react";

export const useCamera = () => {
    const videoRef = useRef(null);
    const camStreamRef = useRef(null);
    const [isReady, setIsReady] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const startCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: {
                        facingMode: "user",
                        width: { ideal: 1080 },
                        height: { ideal: 1440 },
                    },
                    audio: false,
                });

                camStreamRef.current = stream;
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    videoRef.current.onloadedmetadata = () => setIsReady(true);
                }
            } catch (err) {
                setError(err);
            }
        };

        startCamera();

        return () => {
            if (camStreamRef.current) {
                camStreamRef.current.getTracks().forEach((track) => track.stop());
                camStreamRef.current = null;
            }
            if (videoRef.current) {
                videoRef.current.srcObject = null;
            }
        };
    }, []);

    const capture = () => {

        const canvas = document.createElement("canvas");
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(videoRef.current, 0, 0);

        return canvas.toDataURL("image/png");
    };

    return { videoRef, isReady, error, capture };
}