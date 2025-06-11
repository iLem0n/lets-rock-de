'use client';

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ImageRef, LayoutIndex, TileImageRef } from "@/app/features/tiles-gallery/types/types";
import FullscreenGalleryModal from "@/app/features/fullscreen-gallery-modal/FullscreenGalleryModal";
import { leftTitleImageDef, rightTitleImageDef } from "@/app/features/tiles-gallery/data/data";

interface TilesGalleryContextType {
    images: TileImageRef[];
    hoverIndex: LayoutIndex | null;
    setHoverIndex: (hoverIndex: LayoutIndex | null) => void;
    centerpieceReady: boolean;
    setCenterpieceReady: (ready: boolean) => void;
    openGallery: (imageId: number) => void;
}

const TilesGalleryContext = createContext<TilesGalleryContextType | undefined>(undefined);

export function useTilesGallery() {
    const context = useContext(TilesGalleryContext);
    if (!context) {
        throw new Error("useTilesGallery must be used within a TilesGalleryProvider");
    }
    return context;
}

export function TilesGalleryProvider({
    children,
}: Readonly<{
    children: ReactNode,
}>) {
    const leftImageSources: Omit<TileImageRef, 'id'>[] = leftTitleImageDef.map((imageDef, index) => ({
        src: `/assets/images/gallery/${imageDef.name}`,
        position: imageDef.position,
        layoutIndex: { index, side: 'left' },
    }));

    const rightImageSources: Omit<TileImageRef, 'id'>[] = rightTitleImageDef.map((imageDef, index) => ({
        src: `/assets/images/gallery/${imageDef.name}`,
        position: imageDef.position,
        layoutIndex: { index, side: 'right' },
    }));

    const titleImages: TileImageRef[] = [
        ...leftImageSources,
        ...rightImageSources,
    ].map((ref, index) => ({
        id: index + 1,
        ...ref
    }));

    const [hoverIndex, setHoverIndex] = useState<LayoutIndex | null>(null);
    const [centerpieceReady, setCenterpieceReady] = useState<boolean>(false);

    const [fullscreenGalleryImageId, setFullscreenGalleryImageId] = useState<number | null>(null);

    const openGallery = (imageId: number) => {
        setFullscreenGalleryImageId(imageId);
    }

    return (
        <TilesGalleryContext.Provider value={{ 
            hoverIndex, 
            setHoverIndex, 
            centerpieceReady, 
            setCenterpieceReady,
            openGallery,
            images: titleImages,
        }}>
            {children}
            <FullscreenGalleryModal
                isOpen={!!fullscreenGalleryImageId}
                imageId={fullscreenGalleryImageId ?? undefined}
                onClose={() => setFullscreenGalleryImageId(null)}
            />
        </TilesGalleryContext.Provider>
    );
}
