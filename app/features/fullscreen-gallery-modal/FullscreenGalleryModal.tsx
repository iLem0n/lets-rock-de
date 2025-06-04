import { Modal } from "@mui/material";
import { useTilesGallery } from "@/app/features/tiles-gallery/TilesGalleryContext";
import ImageGallery from "@/app/features/fullscreen-gallery-modal/gallery/Gallery";
import { GalleryProvider } from "@/app/features/fullscreen-gallery-modal/GalleryContext";

interface FullscreenGalleryModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function FullscreenGalleryModal({ isOpen, onClose }: FullscreenGalleryModalProps) {
    const { images,  } = useTilesGallery();

    console.log("FullscreenGalleryModal images:", images);
    return (
        <Modal open={isOpen} onClose={onClose} className="fullscreen-modal">
            <GalleryProvider images={images}>
                <ImageGallery images={images} onClose={onClose}/>
            </GalleryProvider>
        </Modal>
    );
}