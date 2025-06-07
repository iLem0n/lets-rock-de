import SideGallery from "@/app/features/tiles-gallery/components/SideGallery";
import { TilesGalleryProvider } from "@/app/features/tiles-gallery/TilesGalleryContext";
import Centerpiece from "@/app/features/tiles-gallery/components/Centerpiece";
import { Typography } from "@mui/material";
import useIsMobile from "@/app/hoks/isMobile";
import { useEffect, useState } from "react";

export default function TilesGallery() {
    const isMobile = useIsMobile();

    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
        const getInnerWidth = () => {
            setInnerWidth(window.innerWidth);
        };

        // Initial check
        getInnerWidth();

        // Add event listener for window resize
        window.addEventListener('resize', getInnerWidth);

        // Cleanup
        return () => window.removeEventListener('resize', getInnerWidth);
    }, []);

    return (
        <TilesGalleryProvider>
            <div className="absolute top-0 left-0 w-screen z-50 text-pink-600 font-black">
                <Typography variant="body1" className="text-center mb-4">
                    {isMobile ? "MOBILE" : "NOT MOBILE"}:&nbsp;{innerWidth}px
                </Typography>
            </div>
            {isMobile ? (
                // Mobile layout - stacked vertically in the specified order
                <div className="flex flex-col w-screen">
                    <div className="w-full">
                        <SideGallery side="left" />
                    </div>
                    <div className="w-full">
                        <SideGallery side="right" />
                    </div>
                    <div className="w-full">
                        <Centerpiece />
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
