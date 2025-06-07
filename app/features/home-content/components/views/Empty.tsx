import { Paragraph } from "@/app/features/home-content/types/types";

export default function ParagraphEmpty({ paragraph }: { paragraph: Paragraph }) {
    return (
        <div className={`cols pb-8 no-break ${paragraph.span === 1 ? 'half-width' : ''}`}>
            {/* Empty content, just a placeholder */}
        </div>
    )
}