import { ParagraphType } from "@/app/features/home-content/types/constants";

export type Topic = {
    title: string;
    paragraphs: Paragraph[];
}

export type Paragraph = {
    text?: string;
    image?: string;
    images?: string[];
    type: ParagraphType;
    span?: 1 | 2;
}