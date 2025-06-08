import { Paragraph } from "@/app/features/home-content/types/types";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";

export default function ParagraphText({ paragraph }: { paragraph: Paragraph }) {
    return (
        <div className={`cols pb-8 no-break ${paragraph.span === 1 ? 'half-width' : ''}`}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={variants}
            >
                <Typography variant="body1" color="textPrimary">{paragraph.text}</Typography>
            </motion.div>
        </div>
    );
}

const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};