import SideGallery from "@/app/features/tiles-gallery/components/SideGallery";
import { TilesGalleryProvider } from "@/app/features/tiles-gallery/TilesGalleryContext";
import Centerpiece from "@/app/features/tiles-gallery/components/Centerpiece";

export default async function TilesGallery() {

    return (
        <TilesGalleryProvider>
            <div className="flex w-screen h-screen p-4" style={{display: '-webkit-flex'}}>
                <div className="gap-filler"></div>
                <SideGallery side="left" />
                <Centerpiece />
                <SideGallery side="right" />
                <div className="gap-filler"></div>
            </div>
        </TilesGalleryProvider>
    );
}