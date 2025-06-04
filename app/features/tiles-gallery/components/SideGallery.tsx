'use client';

import Tile from "@/app/features/tiles-gallery/components/Tile";
import { useTilesGallery } from "@/app/features/tiles-gallery/TilesGalleryContext";

interface SideGalleryProps {
    side: 'left' | 'right';
}

export default function SideGallery({ side }: SideGalleryProps) {

    const { images } = useTilesGallery();

    const sortedSideImages = images
        .filter(image => image.layoutIndex.side === side)
        .sort((a, b) => a.layoutIndex.index - b.layoutIndex.index);

    return (
        // <div className="grid grid-cols-2 grid-rows-4 gap-4 /*h-fit*/ flex-grow">
        <div className="site-gallery-container">
            {sortedSideImages.map((image, index) => (
                <Tile
                    key={index}
                    imageRef={image}
                />
            ))}
        </div>
    );
}
