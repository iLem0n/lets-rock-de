'use client';

import Image from "next/image";
import '../styles.css';
import { useEffect, useState } from "react";
import { useTilesGallery } from "../TilesGalleryContext";
import { useSafariDetection } from "@/app/hooks/isSafari";
import { clsx } from "clsx";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import { CONTACT } from "@/app/data-constants";

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
                <Stack spacing={2} className="absolute bottom-2 left-auto right-auto justify-center">
                    <Typography variant="h1" className="text-center">
                        <Link href={`tel:${CONTACT.phone.number}`}>{CONTACT.phone.label}</Link>
                    </Typography>

                    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
                        <Typography variant="body2">
                            <Link href="/impressum">Impressum</Link>
                        </Typography>
                        <Link href="/details">
                            <Image src="/assets/images/logo.png" alt="" width={100} height={100} />
                        </Link>
                        <Typography variant="body2">
                            <Link href="/agb">Rechtliches</Link>
                        </Typography>
                    </Stack>
                </Stack>
            </div>
        </div>
    );
}
