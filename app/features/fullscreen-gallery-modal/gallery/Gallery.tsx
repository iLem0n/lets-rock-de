'use client';

import { Paper, styled } from "@mui/material";
import { useEffect } from "react";
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

    return (
        <RootPaper>
            <ActiveImageContainer>
                <Image
                    src={images[activeIndex].src}
                    alt=""
                    width={1080}
                    height={900}
                    style={{
                        justifyContent: "center",
                        border: '2px solid gray'
                    }}
                />
            </ActiveImageContainer>
        </RootPaper>
    )
}

const RootPaper = styled(Paper) (({ theme }) => ({
    height: '100vh',
    width: '100vw',
    backgroundColor: '#323232CC',
    padding: theme.spacing(4, 4),
}));

const ActiveImageContainer = styled('div')(({ theme }) => ({
    display: "flex",
    flex: "1 1 0%",
    flexGrow: 1,
    maxHeight: "100%",
    maxWidth: "100%",
    padding: theme.spacing(1),
    justifyContent: "center",
}))

