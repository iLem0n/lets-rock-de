import { ImageRef } from "@/app/features/tiles-gallery/types/types";
import { createContext, ReactNode, useContext, useState } from "react";
import GalleryNavigation from "@/app/features/fullscreen-gallery-modal/gallery/GalleryNavigation";

interface GalleryContextType {
    images: ImageRef[];
    activeIndex: number;
    setActiveIndex: (index: number) => void;
}

const GalleryContext = createContext<GalleryContextType | undefined>(undefined);

export function useGalleryContext() {
    const context = useContext(GalleryContext);
    if (!context) {
        throw new Error("useGalleryContext must be used within a GalleryProvider");
    }
    return context;
}

interface GalleryProviderProps {
    children: ReactNode;
    images: ImageRef[];
}

export function GalleryProvider({
    children,
    images,
}: GalleryProviderProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <GalleryContext.Provider value={{ images, activeIndex, setActiveIndex }}>
            {children}
            <GalleryNavigation />
        </GalleryContext.Provider>
    );
}