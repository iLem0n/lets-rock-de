'use client';

import { forwardRef, HTMLAttributes, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { styled } from "@mui/material";
import SideGallery from "@/app/(tmp)/test/SideGallery";

export default function TestPage() {

    const sideGalleryRef = useRef<HTMLDivElement | null>(null);

    const [sideGalleryHeight, setSideGalleryHeight] = useState<number>(0);
    const [centerPieceWidth, setCenterPieceWidth] = useState<number>(0);

    useEffect(() => {
        const updateSideGalleryHeight = () => {
            if (sideGalleryRef.current) {
                const height = sideGalleryRef.current.clientHeight;
                setCenterPieceWidth(1164 * height / 1750); // 32px for padding (16px on each side)
                setSideGalleryHeight(height);
            }
        };

        // get max width based on aspect ratio of 1164 / 1750
        // Initial height update
        updateSideGalleryHeight();

        // Update height on window resize
        window.addEventListener('resize', updateSideGalleryHeight);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('resize', updateSideGalleryHeight);
        };
    }, []);


    return (
        <RootContainer className="root-container flex max-h-screen gap-4 p-4">
            <div className="absolute top-2 text-pink-600 font-bold">
                {sideGalleryHeight}x{centerPieceWidth}
            </div>
            <GapFiller className="gap-filler"/>
            <SideGallery ref={sideGalleryRef} side='left' />
            <Centerpiece style={{ maxHeight: `${sideGalleryHeight}px`, maxWidth: `${centerPieceWidth}px` }} />
            <SideGallery side='right' />
            <GapFiller className="gap-filler"/>
        </RootContainer>
    );
}

function Centerpiece({ ...rest }: HTMLAttributes<HTMLDivElement>) {
    return (
        <CenterpieceContainer className="centerpiece" {...rest}>
            <Image
                src="/assets/images/centerpiece.png"
                alt=""
                width={800}
                height={1080}
                priority
                style={{
                    objectFit: 'contain',
                    maxHeight: '100%',
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    aspectRatio: 'attr(width) / attr(height)',
                }}
            />
        </CenterpieceContainer>
    )
}

// interface SideGalleryProps {
//     side: 'left' | 'right';
// }

// const SideGallery = forwardRef<HTMLDivElement, SideGalleryProps>(
//     ({ side }, ref) => {
//     // const [windowSize, setWindowSize] = useState<{ width: number, height: number } | null>(null);
//     //
//     // useEffect(() => {
//     //     function getWindowSize() {
//     //         setWindowSize({
//     //             width: window.innerWidth,
//     //             height: window.innerHeight
//     //         });
//     //     }
//     //     getWindowSize();
//     // }, []);
//
//     return (
//         <SideGalleryContainer ref={ref} className={`side-gallery-${side}`}>
//             {Array.from({ length: 8 }, (_, i) => (
//                 <div
//                     key={i}
//                     className="aspect-square"
//                     style={{
//                         // maxHeight: 'calc(calc(100vh - 16px - 16px - calc(16px * 4)) / 4)',
//                         aspectRatio: '1 / 1',
//                     }}>
//                     <Image
//                         src={`/assets/images/${side}/${i + 1}.png`}
//                         alt=""
//                         width={400}
//                         height={400}
//                         style={{
//                             display: 'block',
//                             width: '100%',
//                             height: '100%',
//                             objectFit: 'cover',
//                             aspectRatio: '1 / 1',
//                             maxHeight: 'calc(calc(100vh - 16px - 16px - calc(16px * 4)) / 4)',
//                         }}
//                     />
//                 </div>
//             ))}
//         </SideGalleryContainer>
//     )
// });

//flex max-h-screen gap-4 p-4
const RootContainer = styled('div') (({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    width: '100vw',
    height: '100vh',
    minHeight: '100vh',
    maxHeight: '100vh',
    overflow: 'hidden',
    gap: theme.spacing(2),
    padding: theme.spacing(2),
}));

const CenterpieceContainer = styled('div') (({ theme }) => ({
    display: 'flex',
    flex:  '1 1 100%',
    height: 'auto',
    maxHeight: '100vh',
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    paddingY: theme.spacing(2),
}));

// const SideGalleryContainer = styled('div') (({ theme }) => ({
//     display: 'grid',
//     height: 'fit-content',
//     maxHeight: '100vh',
//     width: 'auto',
//     overflow: 'hidden',
//     flexShrink: 1,
//     gridTemplateRows: 'repeat(4, 1fr)',
//     gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
//     gap: theme.spacing(2),
// }));

const GapFiller = styled('div') (({ theme }) => ({
    flexGrow: 1,
    flexShrink: 1,
    minWidth: 0,
}));