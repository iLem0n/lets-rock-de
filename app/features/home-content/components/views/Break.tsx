import useIsMobile from "@/app/hooks/isMobile";

export default function ParagraphBreak() {
    const isMobile = useIsMobile();
    console.log("isMobile", isMobile);
    if (isMobile) {
        return null;
    } else {
        return (
            <div className="column-break"></div>
        )
    }
}