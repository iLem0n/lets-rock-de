import SideGallery from "@/app/features/tiles-gallery/components/SideGallery";
import { TilesGalleryProvider } from "@/app/features/tiles-gallery/TilesGalleryContext";
import Centerpiece from "@/app/features/tiles-gallery/components/Centerpiece";
import useIsMobile from "@/app/hooks/isMobile";

export default function TilesGallery() {
    const isMobile = useIsMobile();

    return (
        <TilesGalleryProvider>
            {isMobile ? (
                // Mobile layout - stacked vertically in the specified order
                <div className="flex flex-col w-screen mt-4">
                    <div className="w-full">
                        <Centerpiece />
                    </div>
                    <div className="w-full">
                        <SideGallery side="left" />
                    </div>
                    <div className="w-full">
                        <SideGallery side="right" />
                    </div>
                </div>
            ) : (
                <div className="flex w-screen h-screen p-4" style={{display: '-webkit-flex'}}>
                    <div className="gap-filler"></div>
                    <SideGallery side="left" />
                    <Centerpiece />
                    <SideGallery side="right" />
                    <div className="gap-filler"></div>
                </div>
            )}
        </TilesGalleryProvider>
    );
}
