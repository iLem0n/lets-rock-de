'use client';

import { createContext, ReactNode, useContext, useState } from "react";
import { TileIndex } from "@/app/features/tiles-gallery/types/types";
import FullscreenGalleryModal from "@/app/features/fullscreen-gallery-modal/FullscreenGalleryModal";

interface TilesGalleryContextType {
    hoverIndex: TileIndex | null;
    setHoverIndex: (hoverIndex: TileIndex | null) => void;
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
    const [hoverIndex, setHoverIndex] = useState<TileIndex | null>(null);
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
        }}>
            {children}
            <FullscreenGalleryModal
                isOpen={isGalleryOpen}
                onClose={() => setIsGalleryOpen(false)}
            />
        </TilesGalleryContext.Provider>
    );
}
