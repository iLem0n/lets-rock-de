import { Modal } from "@mui/material";

interface FullscreenGalleryModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function FullscreenGalleryModal({ isOpen, onClose }: FullscreenGalleryModalProps) {

    return (
        <Modal open={isOpen} onClose={onClose} className="fullscreen-modal">

            <div className="size-full">
                <button onClick={onClose}>Close</button>
            </div>
        </Modal>
    );
}