"use client";

import { useGalleryContext } from "@/app/features/fullscreen-gallery-modal/GalleryContext";
import { ArrowCircleLeftTwoTone, ArrowCircleRightTwoTone, FullscreenTwoTone, HomeTwoTone } from "@mui/icons-material";
import { Box, IconButton, Stack, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { GALLERY_CLOSE_EVENT } from "./Gallery";

export default function GalleryNavigation() {

    const {
        images,
        activeIndex,
        setActiveIndex,
        onClose
    } = useGalleryContext();

    // State to store the animated close handler
    const [animatedClose, setAnimatedClose] = useState<(() => void) | null>(null);

    // Listen for the gallery close event
    useEffect(() => {
        const handleGalleryCloseEvent = (event: CustomEvent) => {
            if (event.detail && event.detail.handleClose) {
                setAnimatedClose(() => event.detail.handleClose);
            }
        };

        // Add event listener
        window.addEventListener(GALLERY_CLOSE_EVENT, handleGalleryCloseEvent as EventListener);

        // Clean up
        return () => {
            window.removeEventListener(GALLERY_CLOSE_EVENT, handleGalleryCloseEvent as EventListener);
        };
    }, []);

    return (
        <RootBox>
            <Stack spacing={1} justifyContent="center" alignItems="center">
                <IconButton 
                    className="w-fit" 
                    onClick={animatedClose || onClose} 
                    aria-label="home"
                >
                    <HomeTwoTone sx={{ color: "white", fontSize: 54, opacity: .5, width: 'fit-content' }} />
                </IconButton>
                {/*<IconButton><FullscreenTwoTone sx={{ color: "white", fontSize: 54, opacity: .5 }}/></IconButton>*/}
                <Stack direction="row" spacing={1}>
                    <IconButton 
                        onClick={() => setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1)}
                        aria-label="previous image"
                    >
                        <ArrowCircleLeftTwoTone sx={{ color: "white", fontSize: 54, opacity: .5 }} />
                    </IconButton>
                    <IconButton 
                        onClick={() => setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1)}
                        aria-label="next image"
                    >
                        <ArrowCircleRightTwoTone sx={{ color: "white", fontSize: 54, opacity: .5 }} />
                    </IconButton>
                </Stack>
            </Stack>
        </RootBox>
    )
}

const RootBox = styled(Box) (({ theme }) => ({
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
}));
