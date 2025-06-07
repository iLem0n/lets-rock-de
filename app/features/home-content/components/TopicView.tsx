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

interface TopicViewProps {
    topic: Topic;
}

// Animation variants
const textVariants = {
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

const imageVariants = {
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

export default function TopicView({ topic }: TopicViewProps) {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show button when user scrolls down 300px from the top
            if (window.scrollY > 300) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="topic-view width-screen mb-16">
            <Container maxWidth="xl">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={titleVariants}
                >
                    <Typography variant="h2" className="text-left pb-8" sx={{ textAlign: 'justify' }}>{topic.title}</Typography>
                </motion.div>
                <NewspaperLayout>
                    {topic.paragraphs.map((paragraph, index) => {
                        switch (paragraph.type) {
                            case ParagraphType.Text:
                                return (
                                    <div
                                        key={index}
                                        className={`pb-8 no-break ${paragraph.span === 1 ? 'half-width' : ''}`}
                                    >
                                        <motion.div
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true, margin: "-50px" }}
                                            variants={textVariants}
                                        >
                                            <Typography variant="body1" color="textPrimary">{paragraph.text}</Typography>
                                        </motion.div>
                                    </div>
                                );
                            case ParagraphType.Image:
                                return (
                                    <div key={index} className={`pb-8 no-break ${paragraph.span === 1 ? 'half-width' : ''}`}>
                                        {paragraph.images && paragraph.images.length > 0 && (
                                            <span>
                                                {paragraph.images.map((image, imgIndex) => (
                                                    <motion.div
                                                        key={imgIndex}
                                                        initial="hidden"
                                                        whileInView="visible"
                                                        viewport={{ once: true, margin: "-50px" }}
                                                        variants={imageVariants}
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
                                                variants={imageVariants}
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
                            case ParagraphType.Break:
                                return <div key={index} className="column-break"></div>;
                            default:
                                return null;
                        }
                    })}
                </NewspaperLayout>
                <div className="two-column-container">

                </div>
            </Container>

            <Fab
                color="primary"
                size="medium"
                aria-label="back to top"
                onClick={scrollToTop}
                sx={{
                    position: 'fixed',
                    bottom: '2rem',
                    right: '2rem',
                    zIndex: 1000,
                    backgroundColor: 'background.paper',
                    opacity: showBackToTop ? 1 : 0,
                    visibility: showBackToTop ? 'visible' : 'hidden',
                    transform: showBackToTop ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 300ms, visibility 300ms, transform 300ms',
                    '&:hover': {
                        backgroundColor: 'background.default',
                    }
                }}
            >
                <KeyboardArrowUpTwoTone />
            </Fab>
        </div>
    );
}
