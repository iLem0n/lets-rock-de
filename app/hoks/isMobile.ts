
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material";

export default function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);
    const theme = useTheme();

    useEffect(() => {
        const checkIfMobile = () => {
            console.log("isMobile.values", window.innerWidth, theme.breakpoints.values.md, window.innerWidth < theme.breakpoints.values.md);
            setIsMobile(window.innerWidth < theme.breakpoints.values.md); // Common breakpoint for mobile
        };

        // Initial check
        checkIfMobile();

        // Add event listener for window resize
        window.addEventListener('resize', checkIfMobile);

        // Cleanup
        return () => window.removeEventListener('resize', checkIfMobile);
    }, [theme.breakpoints.values.md]);

    return isMobile;
}
