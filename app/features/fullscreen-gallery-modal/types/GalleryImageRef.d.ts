import { ImageRef } from "@/app/features/tiles-gallery/types/types";
import { GridProps } from "@mui/material";

export type GalleryImageRef = {
    anchorImageId?: number;
    images: ImageRef[];
    layout: 'fullscreen' | 'splitscreen' | 'grid';
    layoutOptions?: {
        gridProps?: GridProps & {
            sx?: Record<string, any>;
        };
        gridItemProps?: GridProps[];
        justifyContent?: string;
    }
}
