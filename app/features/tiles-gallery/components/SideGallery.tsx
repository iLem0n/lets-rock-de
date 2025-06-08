'use client';

import Tile from "@/app/features/tiles-gallery/components/Tile";
import { useTilesGallery } from "@/app/features/tiles-gallery/TilesGalleryContext";
import { clsx } from "clsx";
import { useSafariDetection } from "@/app/hoks/isSafari";

interface SideGalleryProps {
    side: 'left' | 'right';
}

export default function SideGallery({ side }: SideGalleryProps) {

    const { images } = useTilesGallery();
    const isSafari = useSafariDetection();

    const sortedSideImages = images
        .filter(image => image.layoutIndex.side === side)
        .sort((a, b) => a.layoutIndex.index - b.layoutIndex.index);

    return (
        // <div className="grid grid-cols-2 grid-rows-4 gap-4 /*h-fit*/ flex-grow">
        <div
            className={clsx(
                'site-gallery-container-base', {
                    'site-gallery-container-safari': isSafari,
                }
            )}
        >
            {sortedSideImages.map((image, index) => (
                <Tile
                    key={index}
                    imageRef={image}
                />
            ))}
        </div>
    );
}
