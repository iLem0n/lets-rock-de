'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { styled } from "@mui/material";

export default function TestPage() {
    return (
        <RootContainer className="root-container flex max-h-screen gap-4 p-4">
            <GapFiller className="gap-filler"/>
            <SideGallery side='left' />
            <Centerpiece />
            <SideGallery side='right' />
            <GapFiller className="gap-filler"/>
        </RootContainer>
    );
}

function Centerpiece() {
    return (
        <CenterpieceContainer className="centerpiece">
            <Image
                src="/assets/images/centerpiece.png"
                alt=""
                width={800}
                height={1080}
                priority
                style={{
                    objectFit: 'contain',
                    maxHeight: '100%',
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    aspectRatio: 'attr(width) / attr(height)',
                }}
            />
        </CenterpieceContainer>
    )
}

interface SideGalleryProps {
    side: 'left' | 'right';
}

function SideGallery({ side }: SideGalleryProps) {
    const [windowSize, setWindowSize] = useState<{ width: number, height: number } | null>(null);

    useEffect(() => {
        function getWindowSize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        getWindowSize();
    }, []);

    return (
        <SideGalleryContainer className={`side-gallery-${side}`}>
            {windowSize && (
                <div className="text-sm mb-2 absolute top-0 left-0 p-4">
                    Window Size: {windowSize.width} x {windowSize.height}
                </div>
            )}
            {Array.from({ length: 8 }, (_, i) => (
                <div
                    key={i}
                    className="aspect-square"
                    style={{
                        // maxHeight: 'calc(calc(100vh - 16px - 16px - calc(16px * 4)) / 4)',
                        aspectRatio: '1 / 1',
                    }}>
                    <Image
                        src={`/assets/images/${side}/${i + 1}.png`}
                        alt=""
                        width={400}
                        height={400}
                        style={{
                            display: 'block',
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            aspectRatio: '1 / 1',
                            maxHeight: 'calc(calc(100vh - 16px - 16px - calc(16px * 4)) / 4)',
                        }}
                    />
                </div>
            ))}
        </SideGalleryContainer>
    )
}

//flex max-h-screen gap-4 p-4
const RootContainer = styled('div') (({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    width: '100vw',
    height: '100vh',
    minHeight: '100vh',
    maxHeight: '100vh',
    overflow: 'hidden',
    gap: theme.spacing(2),
    padding: theme.spacing(2),
}));

const CenterpieceContainer = styled('div') (({ theme }) => ({
    display: 'flex',
    flex:  '0 1 auto',
    height: 'auto',
    maxHeight: '100vh',
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    paddingY: theme.spacing(2),
}));

const SideGalleryContainer = styled('div') (({ theme }) => ({
    display: 'grid',
    height: '100%',
    maxHeight: '100vh',
    width: 'auto',
    overflow: 'hidden',
    flexShrink: 1,
    gridTemplateRows: 'repeat(4, 1fr)',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: theme.spacing(2),
}));

const GapFiller = styled('div') (({ theme }) => ({
    flexGrow: 1,
    flexShrink: 1,
    minWidth: 0,
}));