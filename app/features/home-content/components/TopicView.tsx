"use client";

import { Topic } from "@/app/features/home-content/types/types";
import { Container, Typography, Fab } from "@mui/material";
import { ParagraphType } from "@/app/features/home-content/types/constants";
import { KeyboardArrowUpTwoTone } from "@mui/icons-material";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import './styles.css';
import NewspaperLayout from "@/app/components/NewspaperLayout";
import { renderParagraph } from "@/app/features/home-content/components/views/provider";

interface TopicViewProps {
    topic: Topic;
}

export default function TopicView({ topic }: TopicViewProps) {
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
                            textAlign: 'justify',
                            pb: 8,
                            paddingX: { md: 4, xs: 2 },
                        }}>
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