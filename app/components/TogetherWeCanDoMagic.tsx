import { motion } from "framer-motion";
import { Typography } from "@mui/material";

export default function TogetherWeCanDoMagic() {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
            style={{
                marginTop: '64px',
            }}
        >
            <Typography variant="h1" className="text-center w-full">together we can do magic</Typography>
        </motion.div>
    )
}

const variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8,
            delay: 0.3,
            ease: "easeOut"
        }
    }
};