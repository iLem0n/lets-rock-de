import React, { forwardRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { styled } from '@mui/material';

interface SideGalleryProps {
    side: 'left' | 'right';
}

const SideGallery = forwardRef<HTMLDivElement, SideGalleryProps>(
    ({ side }, ref) => {
        // const [windowSize, setWindowSize] = useState<{ width: number; height: number } | null>(null);
        //
        // useEffect(() => {
        //     setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        // }, []);

        return (
            <SideGalleryContainer ref={ref} className={`side-gallery-${side}`}>
                {Array.from({ length: 8 }, (_, i) => (
                    <div key={i} className="aspect-square" style={{ aspectRatio: '1 / 1' }}>
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
                                maxHeight: 'calc(calc((100vh - 64px) / 4) - 4px)',
                            }}
                        />
                    </div>
                ))}
            </SideGalleryContainer>
        );
    }
);

export default SideGallery;

const SideGalleryContainer = styled('div') (({ theme }) => ({
    display: 'grid',
    height: 'fit-content',
    maxHeight: '100vh',
    width: 'auto',
    overflow: 'hidden',
    flexShrink: 1,
    gridTemplateRows: 'repeat(4, 1fr)',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: theme.spacing(2),
}));