import { useState, useEffect } from 'react';

export function useSafariDetection(): boolean {
    const [isSafari, setIsSafari] = useState(false);

    useEffect(() => {
        // Only run in the browser
        if (typeof window !== 'undefined') {
            const userAgent = navigator.userAgent.toLowerCase();
            setIsSafari(
                userAgent.includes('safari') &&
                !userAgent.includes('chrome') &&
                !userAgent.includes('chromium') &&
                !userAgent.includes('firefox')
            );
        }
    }, []);

    return isSafari;
}