import { Topic } from "@/app/features/home-content/types/types";
import { Container, Grid, Typography } from "@mui/material";
import { GalleryProvider } from "@/app/features/fullscreen-gallery-modal/GalleryContext";

interface TopicViewProps {
    topic: Topic;
}

export default function TopicView({ topic }: TopicViewProps) {
    return (
        <div className="topic-view width-screen">
            <Container maxWidth="xl">
            <Grid container columns={4} spacing={2} direction="column">
                {topic.paragraphs.map((paragraph, index) => (
                    <Grid key={index} size={paragraph.span || 2}>
                        {paragraph.type === "text" && <Typography variant="body1">{paragraph.text}</Typography>}
                        {paragraph.type === "image" && (
                            <img src={paragraph.image} alt={paragraph.text} className="topic-image" />
                        )}
                    </Grid>
                ))}
            </Grid>
            </Container>
        </div>
    );

}