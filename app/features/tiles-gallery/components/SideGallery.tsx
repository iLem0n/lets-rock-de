'use client';

import Tile from "@/app/features/tiles-gallery/components/Tile";

interface SideGalleryProps {
    side: 'left' | 'right';
}

export default function SideGallery({ side }: SideGalleryProps) {

    return (
        <div className="grid grid-cols-2 grid-rows-4 gap-4 h-fit">
            {Array.from({ length: 8 }).map((_, index) => (
                <Tile
                    key={index}
                    tileIndex={{ side, index }}
                    imageSrc={`/assets/images/${side}/${index + 1}.png`}
                />
            ))}
        </div>
    );
}
