'use client';

import { createContext, ReactNode, useContext, useState } from "react";
import { ImageRef, LayoutIndex } from "@/app/features/tiles-gallery/types/types";
import FullscreenGalleryModal from "@/app/features/fullscreen-gallery-modal/FullscreenGalleryModal";

interface TilesGalleryContextType {
    images: ImageRef[];
    hoverIndex: LayoutIndex | null;
    setHoverIndex: (hoverIndex: LayoutIndex | null) => void;
    centerpieceReady: boolean;
    setCenterpieceReady: (ready: boolean) => void;
    openGallery?: () => void;
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
}: Readonly<{ children: ReactNode }>) {

    const leftImageSources: Omit<ImageRef, 'id'>[] = Array.from({ length: 8 }).map((_, index) => ({
        src: `/assets/images/left/${index + 1}.png`,
        layoutIndex: { index, side: 'left' },
    }));

    const rightImageSources: Omit<ImageRef, 'id'>[] = Array.from({ length: 8 }).map((_, index) => ({
        src: `/assets/images/right/${index + 1}.png`,
        layoutIndex: { index, side: 'right' },
    }));


    const images: ImageRef[] = [
        ...leftImageSources,
        ...rightImageSources,
    ].map((ref, index) => ({
        id: index,
        src: ref.src,
        layoutIndex: ref.layoutIndex,
    }));

    const [hoverIndex, setHoverIndex] = useState<LayoutIndex | null>(null);
    const [centerpieceReady, setCenterpieceReady] = useState<boolean>(false);

    const [isGalleryOpen, setIsGalleryOpen] = useState<boolean>(false);

    const openGallery = () => {
        setIsGalleryOpen(true);
    }

    return (
        <TilesGalleryContext.Provider value={{ 
            hoverIndex, 
            setHoverIndex, 
            centerpieceReady, 
            setCenterpieceReady,
            openGallery,
            images
        }}>
            {children}
            <FullscreenGalleryModal
                isOpen={isGalleryOpen}
                onClose={() => setIsGalleryOpen(false)}
            />
        </TilesGalleryContext.Provider>
    );
}
