import Image from "next/image";
import TilesGallery from "@/app/features/tiles-gallery/TilesGallery";
import Grid from "@mui/material/Grid";
import SideGallery from "@/app/features/tiles-gallery/components/SideGallery";
import Centerpiece from "@/app/features/tiles-gallery/components/Centerpiece";
import { TilesGalleryProvider } from "@/app/features/tiles-gallery/TilesGalleryContext";
import Tile from "@/app/features/tiles-gallery/components/Tile";
import { clsx } from "clsx";

export default function Home() {
    return (
        // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        //     <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <main className="flex min-h-screen flex-col items-center justify-between">
            <TilesGallery />
        </main>
    );
}
