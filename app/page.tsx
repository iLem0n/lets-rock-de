import TilesGallery from "@/app/features/tiles-gallery/TilesGallery";
import HomeContent from "@/app/features/home-content/HomeContent";
import { Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
    return (
        <>
        <main className="flex min-h-screen flex-col items-center justify-between">
            <TilesGallery />
            <HomeContent />
        </main>
        <footer>
            <Typography variant="body2" fontSize={18} color="text.secondary" align="center" sx={{ padding: 2 }}>
                <Link href="https://petercglade.dev" target="_blank">Crafted with ❤️ by PCG</Link>
            </Typography>
        </footer>
        </>
    );
}
