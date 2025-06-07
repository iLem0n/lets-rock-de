import { Paragraph } from "@/app/features/home-content/types/types";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ParagraphImage({ paragraph }: {  paragraph: Paragraph }) {
    return (
        <div className={`pb-8 no-break ${paragraph.span === 1 ? 'half-width' : ''}`}>
            {paragraph.images && paragraph.images.length > 0 && (
                <span>
                    {paragraph.images.map((image, imgIndex) => (
                        <motion.div
                            key={imgIndex}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={variants}
                        >
                            <Image
                                src={image}
                                alt=""
                                className="topic-image"
                                width={800}
                                height={600}
                                style={{
                                    border: '2px solid gray'
                                }}
                            />
                        </motion.div>
                    ))}
                </span>
            )}
            {paragraph.image && (
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={variants}
                >
                    <Image
                        src={paragraph.image!}
                        alt=""
                        className="topic-image"
                        width={800}
                        height={600}
                        style={{
                            border: '2px solid gray'
                        }}
                    />
                </motion.div>
            )}
        </div>
    )
}

const variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};