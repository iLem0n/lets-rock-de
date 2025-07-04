'use client';

import Image from "next/image";
import { ImageRef, TileImageRef } from "../types/types";
import { useTilesGallery } from "@/app/features/tiles-gallery/TilesGalleryContext";
import { MouseEventHandler, useEffect, useMemo, useRef, useState } from "react";
import '../styles.css';
import { clsx } from "clsx";
import isEqual from 'lodash/isEqual';

interface TileProps {
    imageRef: TileImageRef;
}

export default function Tile({ imageRef }: TileProps) {

    const {
        hoverIndex,
        setHoverIndex,
        centerpieceReady,
        openGallery
    } = useTilesGallery();

    const [animationPlayState, setAnimationPlayState] = useState<'paused' | 'running'>('paused');
    const resetTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Run the animation only when centerpiece is ready
    useEffect(() => {
        if (centerpieceReady) {
            setAnimationPlayState('running');
        }
    }, [centerpieceReady]);

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
        if (isEqual(hoverIndex, imageRef.layoutIndex)) return 'highlight';
        return 'background';
    }, [hoverIndex]);

    const animationWave = useMemo((): number => {
        const isRightColumn = imageRef.layoutIndex.side === 'right';
        const isLeftSide = imageRef.layoutIndex.side === 'left';

        // Base delay value - no row-based delay
        let waveValue;

        // Animate columns simultaneously:
        // 1. Right column of left gallery and left column of right gallery animate together
        // 2. Left column of left gallery and right column of right gallery animate together
        if ((isLeftSide && isRightColumn) || (!isLeftSide && !isRightColumn)) {
            // 2nd tile on left (right column) and 1st tile on right (left column) - animate first
            waveValue = 1; // All tiles in this group start at the same time
        } else {
            // 1st tile on left (left column) and 2nd tile on right (right column) - animate second
            waveValue = 2; // All tiles in this group start at the same time
        }

        return waveValue;
    }, [imageRef.layoutIndex]);

    // Calculate animation delay based on tile index and side
    // Use a very small delay for more simultaneous animation with just a hint of sequence
    const animationDelay = `${animationWave * 0.1}s`;

    const setHovering: MouseEventHandler<HTMLDivElement> = () => {
        setHoverIndex(imageRef.layoutIndex!);
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
                'highlight': imageRef.layoutIndex.side === 'right' && highlightType === 'highlight',
                'highlight2': imageRef.layoutIndex.side === 'left' && highlightType === 'highlight',
                'background': highlightType === 'background',
            })}
            onMouseEnter={setHovering}
            onMouseLeave={resetHovering}
            style={{ 
                animationDelay, 
                animationPlayState,
                borderWidth: imageRef.layoutIndex.side === 'left' && imageRef.layoutIndex.index !== 4 ? 0 : '3px',
            }}
            onClick={() => openGallery(imageRef.id!)}
        >
            <Image
                src={imageRef.src}
                alt=""
                width={400}
                height={400}
                className="w-full h-full object-cover"
                style={{ objectPosition: imageRef.position || 'center center' }}
                priority
            />
        </div>
    );
}
