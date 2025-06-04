'use client';

import Image from "next/image";
import { TileIndex } from "../types/types";
import { useTilesGallery } from "@/app/features/tiles-gallery/TilesGalleryContext";
import { MouseEventHandler, useEffect, useMemo, useRef, useState } from "react";
import '../styles.css';
import { clsx } from "clsx";

interface TileProps {
    imageSrc: string;
    tileIndex: TileIndex;
}

export default function Tile({ imageSrc, tileIndex }: TileProps) {

    const { hoverIndex, setHoverIndex } = useTilesGallery();
    const [animationPlayState, setAnimationPlayState] = useState<'paused' | 'running'>('paused');
    const resetTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Run the animation only once on initial render
    useEffect(() => {
        setAnimationPlayState('running');
    }, []);

    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (resetTimeoutRef.current) {
                clearTimeout(resetTimeoutRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!!hoverIndex) {
            if (resetTimeoutRef.current) {
                clearTimeout(resetTimeoutRef.current);
                resetTimeoutRef.current = null;
            }
        }
    }, [hoverIndex]);

    const highlightType: 'highlight' | 'background' | null = useMemo(() => {
        if (hoverIndex === null) return null;
        if (hoverIndex === tileIndex) return 'highlight';
        return 'background';
    }, [hoverIndex]);

    const animationWave = useMemo((): number => {
        const waveMap = {
            left: [
                4,  // top-left
                1,  // top-right
                3,  // second row, left
                2,  // second row, right
                3,  // third row, left
                2,  // third row, right
                4,  // bottom-left
                1   // bottom-right
            ],
            right: [
                1,   // top-left of right side
                4,  // top-right
                2,  // second row, left
                3,  // second row, right
                2,  // third row, left
                3,  // third row, right
                1,  // bottom-left
                4   // bottom-right
            ]
        };

        return waveMap[tileIndex.side]?.[tileIndex.index] || 0;
    }, [tileIndex]);

    // Calculate animation delay based on tile index and side
    // Use a smaller delay for smoother sequential animation
    const animationDelay = `${animationWave * .5}s`;

    const setHovering: MouseEventHandler<HTMLDivElement> = () => {
        setHoverIndex(tileIndex);
    }

    const resetHovering: MouseEventHandler<HTMLDivElement> = () => {
        // Add a slight delay before resetting the hover state
        resetTimeoutRef.current = setTimeout(() => {
            setHoverIndex(null);
            resetTimeoutRef.current = null;
        }, 150); // 1500ms delay, adjust as needed
    }

    return (
        <div
            className={clsx("tile-container", {
                'highlight': highlightType === 'highlight',
                'background': highlightType === 'background',
            })}
            onMouseEnter={setHovering}
            onMouseLeave={resetHovering}
            style={{ 
                animationDelay, 
                animationPlayState 
            }}
        >
            <Image
                src={imageSrc}
                alt=""
                width={400}
                height={400}
                className="w-full h-full object-cover"
            />
        </div>
    );
}
