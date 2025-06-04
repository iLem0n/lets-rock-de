'use client';

import Grid from "@mui/material/Grid";
import { styled } from "@mui/material";
import SideGallery from "@/app/features/tiles-gallery/components/SideGallery";
import { TilesGalleryProvider } from "@/app/features/tiles-gallery/TilesGalleryContext";
import Centerpiece from "@/app/features/tiles-gallery/components/Centerpiece";

export default function TilesGallery() {

    return (
        <TilesGalleryProvider>
            <div className="flex w-screen h-screen p-4">
                <SideGallery side="left" />

                <Centerpiece />

                <SideGallery side="right" />
            </div>
        </TilesGalleryProvider>
    );

    // return (
    //     <div className="flex w-screen h-screen bg-blue-300 p-4">
    //         <div className="main-container flex flex-row flex-wrap w-fit h-full bg-blue-400 columns-2">
    //             <div className="tile bg-amber-600 aspect-square"></div>
    //             <div className="tile bg-amber-600 aspect-square"></div>
    //             <div className="tile bg-amber-600 aspect-square"></div>
    //             <div className="tile bg-amber-600 aspect-square"></div>
    //             <div className="tile bg-amber-600 aspect-square"></div>
    //             <div className="tile bg-amber-600 aspect-square"></div>
    //             <div className="tile bg-amber-600 aspect-square"></div>
    //             <div className="tile bg-amber-600 aspect-square"></div>
    //         </div>
    //         <div className="main-container flex w-full h-full bg-blue-500"></div>
    //         <div className="main-container flex w-full h-full bg-blue-400">
    //             <div></div>
    //         </div>
    //         {/*<MainGrid container columns={5} spacing={2}>*/}
    //         {/*    /!*<FillerGrid />*!/*/}
    //         {/*    <SideGallerGrid className="side-gallery-grid-left">*/}
    //         {/*        {Array.from({ length: 8 }).map((_, index) => (*/}
    //         {/*            <Tile key={index}/>*/}
    //         {/*        ))}*/}
    //         {/*    </SideGallerGrid>*/}
    //         {/*    <MainImageGrid size={1} />*/}
    //         {/*    <SideGallerGrid className="side-gallery-grid-right">*/}
    //         {/*        {Array.from({ length: 8 }).map((_, index) => (*/}
    //         {/*            <Tile key={index} className="tile"/>*/}
    //         {/*        ))}*/}
    //         {/*    </SideGallerGrid>*/}
    //         {/*    /!*<FillerGrid />*!/*/}
    //         {/*</MainGrid>*/}
    //     </div>
    //         // <Grid container columns={3} spacing={1} justifyContent="stretch" alignItems="stretch" className="h-screen w-screen p-4">
    //         //     <SideGallery side="left" />
    //         //     <Centerpiece />
    //         //     <SideGallery side="right" />
    //         // </Grid>
    // )
}


const MainGrid = styled(Grid) (({ theme }) => ({
    backgroundColor: '#2292dc',
    height: '100%',
    width: '100%',
}));

const SideGallerGrid = styled(Grid) (({ theme }) => ({
    backgroundColor: '#70efe9',
    minWidth: 0,
    minHeight: 0,
}));

const MainImageGrid = styled(Grid) (({ theme }) => ({
    backgroundColor: '#3b36c0',
    minWidth: 0,
    minHeight: 0,
}));

const FillerGrid = styled(Grid) (({ theme }) => ({
    backgroundColor: '#1da6a1',
}));

const Tile = styled(Grid) (({ theme }) => ({
    aspectRatio: '1 / 1',
    backgroundColor: '#9a00d2',
}));