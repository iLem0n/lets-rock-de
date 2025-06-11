import { ImageRef } from "@/app/features/tiles-gallery/types/types";
import { createContext, ReactNode, useContext, useState } from "react";
import GalleryNavigation from "@/app/features/fullscreen-gallery-modal/gallery/GalleryNavigation";
import { GalleryImageRef } from "@/app/features/fullscreen-gallery-modal/types/GalleryImageRef";

interface GalleryContextType {
    images: GalleryImageRef[];
    activeIndex: number;
    setActiveIndex: (index: number) => void;
    onClose: () => void;
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
    images: GalleryImageRef[];
    initialImageId?: number;
    onClose: () => void;
}

export function GalleryProvider({
    children,
    images,
    initialImageId,
    onClose,
}: GalleryProviderProps) {

    const initialImage = images.find(i => i.anchorImageId === initialImageId);
    const initialImageIndex =  initialImageId && initialImage ? images.indexOf(initialImage) : 0;

    const [activeIndex, setActiveIndex] = useState(initialImageIndex);

    return (
        <GalleryContext.Provider value={{ images, onClose, activeIndex, setActiveIndex }}>
            {children}
            <GalleryNavigation />
        </GalleryContext.Provider>
    );
}