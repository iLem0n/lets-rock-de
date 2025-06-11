"use client";

import { Modal } from "@mui/material";
import { useTilesGallery } from "@/app/features/tiles-gallery/TilesGalleryContext";
import ImageGallery from "@/app/features/fullscreen-gallery-modal/gallery/Gallery";
import { GalleryProvider } from "@/app/features/fullscreen-gallery-modal/GalleryContext";
import { GALLERY_IMAGES } from "@/app/features/fullscreen-gallery-modal/data";

interface FullscreenGalleryModalProps {
    isOpen: boolean;
    imageId?: number;
    onClose: () => void;
}

export default function FullscreenGalleryModal({ isOpen, imageId, onClose }: FullscreenGalleryModalProps) {

    return (
        <Modal open={isOpen} onClose={onClose} className="fullscreen-modal">
            <GalleryProvider images={GALLERY_IMAGES} onClose={onClose} initialImageId={imageId}>
                <ImageGallery />
            </GalleryProvider>
        </Modal>
    );
}
