'use client';

import Image from "next/image";
import NewspaperLayout from "@/app/components/NewspaperLayout";
import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Markdown from "@/app/components/Markdown";
import ParagraphText from "@/app/features/home-content/components/views/Text";
import { ParagraphType } from "@/app/features/home-content/types/constants";
import TopicView from "@/app/features/home-content/components/TopicView";
import TogetherWeCanDoMagic from "@/app/components/TogetherWeCanDoMagic";

export default function Details() {

    const [introText, setIntroText] = useState<string>("");

    useEffect(() => {
        fetch('/markdown/details/intro.md')
            .then(response => response.text())
            .then(text => setIntroText(text));
    }, []);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-gray-100">
            <div className="flex w-full justify-between">
                <Image
                    src="/assets/images/details/Intro.png"
                    alt=""
                    width={1024}
                    height={900}
                    className="w-full h-auto"
                />
            </div>
            <Container maxWidth="xl" style={{ color: '#000', padding: '2rem' }}>
                <NewspaperLayout>
                    <Markdown>{introText}</Markdown>
                </NewspaperLayout>
                <Image
                    src="/assets/images/details/catacombs.png"
                    alt=""
                    width={1024}
                    height={900}
                    className="w-full h-auto mt-16"
                />
                <TopicView
                    className="mt-16"
                    topic={{
                        title: "Professionelle Fotografie für Bilder, die den Unterschied machen.",
                        paragraphs: [
                            {
                                type: ParagraphType.Text,
                                text: "In unserer visuell geprägten digitalen Welt gewinnen ausdrucksstarke und hochwertige Bilder zunehmend an Bedeutung. Deshalb werden alle Aufträge, Konzepte und Ideen mit langjähriger Erfahrung und Können auf höchstem Niveau umgesetzt.",
                                span: 2,
                            },
                            {
                                type: ParagraphType.Text,
                                text: "Investieren Sie in Qualität und sehen Sie den Unterschied. Der umfassende Rundum-Service beinhaltet auch die professionelle EBV und Retusche: so kommt alles aus einer Hand, eben die optimale Lösung für hochwertige und einheitliche Ergebnisse.",
                                span: 2
                            }
                        ]
                    }}
                />

                <NewspaperLayout>
                    <Image src="/assets/images/details/behind-the-scenes.png" alt="" width={1024} height={900} className="w-full h-auto pl-6" />
                    <Typography
                        variant="body1"
                        className="pb-8 text-center"
                        color="red"
                        sx={{
                            mt: 8,
                            ml: 4,
                        }}
                    >
                        L e t s  R o c k - immer voller Einsatz für das beste Bild - und Freude auf kreative Zusammenarbeit.
                    </Typography>
                    <Typography
                        variant="body2"
                        className="pb-8 text-center"
                        sx={{
                            ml: 4,
                        }}
                    >
                        Nehmen Sie unverbindlich Kontakt zu mir auf -
                    </Typography>
                    <TogetherWeCanDoMagic />
                    <Image src="/assets/images/details/magician.png" alt="" width={1024} height={900} className="w-full h-auto mt-16 pl-6" />
                </NewspaperLayout>
            </Container>
        </main>
    );
}