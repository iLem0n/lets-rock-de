'use client';

import { KeyboardArrowUpTwoTone } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { useEffect, useState } from "react";

export default function BackToTopButton() {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show button when user scrolls down 300px from the top
            if (window.scrollY > 300) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <Fab
            color="primary"
            size="medium"
            aria-label="back to top"
            onClick={scrollToTop}
            sx={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
                zIndex: 1000,
                backgroundColor: 'secondary',
                opacity: showBackToTop ? 1 : 0,
                visibility: showBackToTop ? 'visible' : 'hidden',
                transform: showBackToTop ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 300ms, visibility 300ms, transform 300ms',
                '&:hover': {
                    backgroundColor: 'secondary.dark',
                }
            }}
        >
            <KeyboardArrowUpTwoTone />
        </Fab>
    )
}