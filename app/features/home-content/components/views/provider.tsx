import { ParagraphType } from "@/app/features/home-content/types/constants";
import { ReactNode } from "react";
import ParagraphBreak from "@/app/features/home-content/components/views/Break";
import { Paragraph } from "@/app/features/home-content/types/types";
import ParagraphText from "@/app/features/home-content/components/views/Text";
import ParagraphImage from "@/app/features/home-content/components/views/Image";
import ParagraphEmpty from "@/app/features/home-content/components/views/Empty";

export function renderParagraph(paragraph: Paragraph, key?: string | number): ReactNode {
    switch (paragraph.type) {
        case ParagraphType.Break:
            return <ParagraphBreak key={key} />;
        case ParagraphType.Text:
            return <ParagraphText key={key} paragraph={paragraph}/>
        case ParagraphType.Image:
            return <ParagraphImage key={key} paragraph={paragraph} />
        case ParagraphType.Empty:
            return <ParagraphEmpty key={key} paragraph={paragraph} />;
        default:
            return null;
    }
}