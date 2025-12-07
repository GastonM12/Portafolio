import { useState, useEffect } from 'react';
import { PRELOADER_DURATION, EXIT_ANIMATION_DURATION } from '../services/preloaderData';

export const usePreloaderLogic = (onComplete: () => void) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
            setTimeout(onComplete, EXIT_ANIMATION_DURATION);
        }, PRELOADER_DURATION);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return { show };
};
