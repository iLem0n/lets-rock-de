'use client';

import { Grid, Paper, styled } from "@mui/material";
import { useEffect, useMemo } from "react";
import Image from "next/image";
import { useGalleryContext } from "@/app/features/fullscreen-gallery-modal/GalleryContext";

export default function ImageGallery() {
    const {
        images,
        activeIndex,
        setActiveIndex,
        onClose
    } = useGalleryContext();

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
                    onClose();
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [activeIndex]);

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

    return (
        <RootPaper>
            {/*<ActiveImageContainer>*/}
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
                                    priority={true}
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
            {/*</ActiveImageContainer>*/}

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
                            priority={true}
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
