'use client';

import { createContext, ReactNode, useContext, useState } from "react";
import { TileIndex } from "@/app/features/tiles-gallery/types/types";

interface TilesGalleryContextType {
    hoverIndex: TileIndex | null;
    setHoverIndex: (hoverIndex: TileIndex | null) => void;
    centerpieceReady: boolean;
    setCenterpieceReady: (ready: boolean) => void;
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

    return (
        <TilesGalleryContext.Provider value={{ 
            hoverIndex, 
            setHoverIndex, 
            centerpieceReady, 
            setCenterpieceReady 
        }}>
            {children}
        </TilesGalleryContext.Provider>
    );
}
