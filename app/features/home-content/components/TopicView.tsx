"use client";

import { Topic } from "@/app/features/home-content/types/types";
import { Container, Typography} from "@mui/material";
import { motion } from "framer-motion";

import './styles.css';
import NewspaperLayout from "@/app/components/NewspaperLayout";
import { renderParagraph } from "@/app/features/home-content/components/views/provider";
import useIsMobile from "@/app/hooks/isMobile";

interface TopicViewProps {
    topic: Topic;
}

export default function TopicView({ topic }: TopicViewProps) {
    const isMobile = useIsMobile();

    return (
        <div className="topic-view mb-16">
            <Container maxWidth="xl">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={titleVariants}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            textAlign: isMobile ? 'left' : 'justify',
                        }}
                    >
                        {topic.title}
                    </Typography>
                </motion.div>
                <NewspaperLayout>
                    {topic.paragraphs.map(renderParagraph)}
                </NewspaperLayout>
            </Container>
        </div>
    );
}

const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut"
        }
    }
};