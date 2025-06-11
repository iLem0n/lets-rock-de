'use client';

import { Grid, Paper, styled } from "@mui/material";
import { useEffect, useMemo, useState, useCallback } from "react";
import Image from "next/image";
import { useGalleryContext } from "@/app/features/fullscreen-gallery-modal/GalleryContext";
import "@/app/features/tiles-gallery/styles.css";

// Custom event for gallery close animation
export const GALLERY_CLOSE_EVENT = 'gallery-close-animation';

export default function ImageGallery() {
    const {
        images,
        activeIndex,
        setActiveIndex,
        onClose: contextOnClose
    } = useGalleryContext();

    // Animation states
    const [isOpening, setIsOpening] = useState(true);
    const [isClosing, setIsClosing] = useState(false);
    const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);
    const [prevIndex, setPrevIndex] = useState(activeIndex);

    // Handle gallery closing
    const handleClose = useCallback(() => {
        setIsClosing(true);

        // Wait for closing animation to complete before actually closing
        setTimeout(() => {
            contextOnClose();
        }, 500); // Match the animation duration
    }, [contextOnClose]);

    // Handle gallery opening animation and setup close event
    useEffect(() => {
        // Set opening animation when component mounts
        setIsOpening(true);

        // Reset opening animation after it completes
        const timer = setTimeout(() => {
            setIsOpening(false);
        }, 500); // Match the animation duration

        // Create and dispatch custom event for close animation
        const closeEvent = new CustomEvent(GALLERY_CLOSE_EVENT, {
            detail: { handleClose }
        });
        window.dispatchEvent(closeEvent);

        return () => {
            clearTimeout(timer);
            // Clean up event when component unmounts
            window.removeEventListener(GALLERY_CLOSE_EVENT, () => {});
        };
    }, [handleClose]);

    // Handle image transitions when activeIndex changes
    useEffect(() => {
        if (prevIndex !== activeIndex) {
            // Determine slide direction based on index change
            if (
                (prevIndex < activeIndex && !(prevIndex === 0 && activeIndex === images.length - 1)) || 
                (prevIndex === images.length - 1 && activeIndex === 0)
            ) {
                setSlideDirection('right');
            } else {
                setSlideDirection('left');
            }

            // Reset slide direction after animation completes
            const timer = setTimeout(() => {
                setSlideDirection(null);
                setPrevIndex(activeIndex);
            }, 400); // Match the animation duration

            return () => clearTimeout(timer);
        }
    }, [activeIndex, prevIndex, images.length]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            switch (event.key) {
                case 'ArrowLeft':
                    setPreviousIndex();
                    break;
                case 'ArrowRight':
                    setNextIndex();
                    break;
                case 'Escape':
                    handleClose();
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [activeIndex, handleClose]);

    const setPreviousIndex = () => {
        if (activeIndex === 0) {
            setActiveIndex(images.length - 1)
        } else {
            setActiveIndex(activeIndex - 1)
        }
    }

    const setNextIndex = () => {
        if (activeIndex === images.length - 1) {
            setActiveIndex(0);
        } else {
            setActiveIndex(activeIndex + 1);
        }
    }

    const activeGalleryImagesRef = images[activeIndex];

    // Calculate indices for preloading adjacent images
    const preloadIndices = useMemo(() => {
        const prevIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
        const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
        return [prevIndex, nextIndex];
    }, [activeIndex, images.length]);

    // Determine animation classes for the gallery container
    const galleryAnimationClass = useMemo(() => {
        if (isOpening) return 'gallery-opening';
        if (isClosing) return 'gallery-closing';
        return '';
    }, [isOpening, isClosing]);

    // Determine animation classes for the images
    const imageAnimationClass = useMemo(() => {
        if (slideDirection === 'right') return 'slide-in-right';
        if (slideDirection === 'left') return 'slide-in-left';
        return '';
    }, [slideDirection]);

    return (
        <RootPaper className={galleryAnimationClass}>
            <Grid
                container
                spacing={2}
                sx={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    maxHeight: '100vh',
                    maxWidth: '100vw',
                    justifyContent: 'center',
                    alignItems: 'center',
                    ...activeGalleryImagesRef.layoutOptions?.gridProps?.sx,
                }}
                className={imageAnimationClass}
            >
                {images[activeIndex].images.map((image, index) => {
                    return (
                        <Grid
                            key={index}
                            sx={{
                                height: '100%',
                            }}
                            {...activeGalleryImagesRef.layoutOptions?.gridItemProps?.[index] || {}}
                        >
                            <Image
                                src={image.src}
                                alt=""
                                width={1080}
                                height={900}
                                priority
                                style={{
                                    border: '2px solid gray',
                                    height: '100%',
                                    width: 'auto',
                                }}
                            />
                        </Grid>
                    )
                }
                )}
            </Grid>

            {/* Preload adjacent images */}
            <div style={{ display: 'none' }}>
                {preloadIndices.map(index => 
                    images[index].images.map((image, imgIndex) => (
                        <Image 
                            key={`preload-${index}-${imgIndex}`}
                            src={image.src}
                            alt=""
                            width={1080}
                            height={900}
                            priority
                        />
                    ))
                )}
            </div>
        </RootPaper>
    )
}

const RootPaper = styled(Paper) (({ theme }) => ({
    height: '100vh',
    width: '100vw',
    backgroundColor: '#323232CC',
    padding: theme.spacing(4, 4),
    justifyItems: 'center',
    alignContent: 'center',
}));
