import TilesGallery from "@/app/features/tiles-gallery/TilesGallery";
import HomeContent from "@/app/features/home-content/HomeContent";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <TilesGallery />
            <HomeContent />
        </main>
    );
}
