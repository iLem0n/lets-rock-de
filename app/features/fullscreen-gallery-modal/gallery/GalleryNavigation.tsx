import { useGalleryContext } from "@/app/features/fullscreen-gallery-modal/GalleryContext";
import { ArrowCircleLeftTwoTone, ArrowCircleRightTwoTone, FullscreenTwoTone, HomeTwoTone } from "@mui/icons-material";
import { Box, IconButton, Stack, styled } from "@mui/material";

export default function GalleryNavigation() {

    const {
        images,
        activeIndex,
        setActiveIndex
    } = useGalleryContext();

    return (
        <RootBox>
            <Stack spacing={1}>
                <IconButton><HomeTwoTone sx={{ color: "white", fontSize: 54, opacity: .5 }} /></IconButton>
                <IconButton><FullscreenTwoTone sx={{ color: "white", fontSize: 54, opacity: .5 }}/></IconButton>
                <Stack direction="row" spacing={1}>
                    <IconButton onClick={() => setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1)}>
                        <ArrowCircleLeftTwoTone sx={{ color: "white", fontSize: 54, opacity: .5 }} />
                    </IconButton>
                    <IconButton onClick={() => setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1)}>
                        <ArrowCircleRightTwoTone sx={{ color: "white", fontSize: 54, opacity: .5 }} />
                    </IconButton>
                </Stack>
            </Stack>
        </RootBox>
    )
}

const RootBox = styled(Box) (({ theme }) => ({
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
}));