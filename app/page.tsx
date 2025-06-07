"use client";

import TilesGallery from "@/app/features/tiles-gallery/TilesGallery";
import HomeContent from "@/app/features/home-content/HomeContent";
import { Typography } from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";

const footerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
            duration: 0.5,
            ease: "easeOut",
            delay: 0.2
        }
    }
};

export default function Home() {
    return (
        <>
        <main className="flex min-h-screen flex-col items-center justify-between">
            <TilesGallery />
            <HomeContent />
        </main>
        <motion.footer
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerVariants}
        >
            <Typography variant="body2" fontSize={18} color="text.secondary" align="center" sx={{ padding: 2 }}>
                <Link href="https://petercglade.dev" target="_blank">Crafted with ❤️ by PCG</Link>
            </Typography>
        </motion.footer>
        </>
    );
}
