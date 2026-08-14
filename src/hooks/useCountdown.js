import { useEffect, useRef, useState } from "react";

export const useCountdown = (seconds, onComplete) => {
    const [count, setCount] = useState(null);
    const callbackRef = useRef(onComplete);
    const isRunning = count !== null;

    useEffect(() => {
        callbackRef.current = onComplete;
    }, [onComplete]);

    const start = () => setCount(seconds);

    useEffect(() => {
        if (count === null) return;

        if (count === 0) {
            callbackRef.current();
            setCount(null);
            return;
        }

        const timer = setTimeout(() => setCount(count - 1), 1000);
        return () => clearTimeout(timer);
    }, [count]);

    return { count, isRunning, start };
};