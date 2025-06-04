'use client';

import Image from "next/image";
import '../styles.css';
import { useEffect, useState } from "react";
import { useTilesGallery } from "../TilesGalleryContext";
import { useSafariDetection } from "@/app/helper/isSafari";
import { clsx } from "clsx";

export default function Centerpiece() {
    const [animationPlayState, setAnimationPlayState] = useState<'paused' | 'running'>('paused');
    const { setCenterpieceReady } = useTilesGallery();
    const isSafari = useSafariDetection();

    // Start the animation after a slight delay
    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimationPlayState('running');

            // Signal that the centerpiece animation is complete after it finishes
            const animationDuration = 1000; // 1.5s in milliseconds
            setTimeout(() => {
                setCenterpieceReady(true);
            }, animationDuration);
        }, 200); // 500ms delay before starting the animation

        return () => clearTimeout(timer);
    }, [setCenterpieceReady]);

    return (
        <div
            className={clsx(
                'centerpiece-container-base', {
                    'centerpiece-container-safari': isSafari,
                }
            )}
        >
            <div 
                className="centerpiece-image-wrapper"
                style={{ animationPlayState }}
            >
                <Image
                    src="/assets/images/centerpiece.png"
                    alt=""
                    fill
                    style={{ objectFit: 'contain' }}
                    priority
                />
            </div>
        </div>
    );
}
