import { GalleryImageRef } from "@/app/features/fullscreen-gallery-modal/types/GalleryImageRef";

export const GALLERY_IMAGES: GalleryImageRef[] = [
    {
        anchorImageId: 1,
        images: [
            { src: '/assets/images/gallery/slider 01 a.jpg' },
            { src: '/assets/images/gallery/slider 01 b.jpg' },
        ],
        layout: 'splitscreen',
    },
    {
        anchorImageId: 2,
        images: [
            { src: '/assets/images/gallery/slider 02 a.jpg' },
            { src: '/assets/images/gallery/slider 02 b.jpg' },
        ],
        layout: 'splitscreen',
        layoutOptions: {
            gridProps: {
                sx: {
                    justifyContent: 'space-evenly'
                }
            }
        }
    },
    {
        anchorImageId: 9,
        images: [
            { src: '/assets/images/gallery/slider 03 a.jpg' },
            { src: '/assets/images/gallery/slider 03 b.jpg' },
        ],
        layout: 'splitscreen',
        layoutOptions: {
            gridProps: {
                sx: {
                    justifyContent: 'space-evenly'
                }
            }
        }
    },
    {
        images: [
            { src: '/assets/images/gallery/slider 04 a.jpg' },
            { src: '/assets/images/gallery/slider 04 b.jpg' },
        ],
        layout: 'splitscreen',
        layoutOptions: {
            gridProps: {
                sx: {
                    justifyContent: 'space-evenly'
                }
            }
        }
    },
    {
        anchorImageId: 10,
        images: [
            { src: '/assets/images/gallery/slider 05 a.jpg' },
            { src: '/assets/images/gallery/slider 05 b.jpg' },
        ],
        layout: 'splitscreen',
        layoutOptions: {
            gridItemProps: [
                {
                    size: 3,
                    sx: {
                        height: undefined,
                        marginTop: '30vh',
                    }
                }
            ]
        }
    },
    {
        anchorImageId: 3,
        images: [
            { src: '/assets/images/gallery/slider 06.jpg' },
        ],
        layout: 'fullscreen',
    },
    {
        images: [
            { src: '/assets/images/gallery/slider 07.jpg' },
        ],
        layout: 'fullscreen',
    },
    {
        images: [
            { src: '/assets/images/gallery/slider 08.jpg' },
        ],
        layout: 'fullscreen',
    },
    {
        images: [
            { src: '/assets/images/gallery/slider 09.jpg' },
        ],
        layout: 'fullscreen',
    },
    {
        images: [
            { src: '/assets/images/gallery/slider 10 a.jpg' },
            { src: '/assets/images/gallery/slider 10 b.jpg' },
        ],
        layout: 'splitscreen',
        layoutOptions: {
            gridItemProps: [
                {},
                {
                    size: 4,
                    sx: {
                        height: undefined,
                    }
                }
            ]
        }
    },
    {
        images: [
            { src: '/assets/images/gallery/slider 11 a.jpg' },
            { src: '/assets/images/gallery/slider 11 b.jpg' },
            { src: '/assets/images/gallery/slider 11 c.jpg' },
            { src: '/assets/images/gallery/slider 11 d.jpg' },
        ],
        layout: 'grid',
        layoutOptions: {
            gridProps: {
                sx: {
                    height: undefined,
                }
            },
            gridItemProps: [
                { size: 6, display: 'flex', flex: "0 1 35%", justifyItems: 'flex-end' },
                { size: 6, display: 'flex', flex: "0 1 35%", justifyItems: 'flex-start' },
                { size: 6, display: 'flex', flex: "0 1 35%", justifyItems: 'flex-end' },
                { size: 6, display: 'flex', flex: "0 1 35%", justifyItems: 'flex-start' },
            ]
        }
    },
    {
        anchorImageId: 4,
        images: [
            { src: '/assets/images/gallery/slider 12.jpg' },
        ],
        layout: 'fullscreen',
    },
    {
        images: [
            { src: '/assets/images/gallery/slider 13.jpg' },
        ],
        layout: 'fullscreen',
    },
    {
        images: [
            { src: '/assets/images/gallery/slider 14.jpg' },
        ],
        layout: 'fullscreen',
    },
    {
        images: [
            { src: '/assets/images/gallery/slider 15 a.jpg' },
            { src: '/assets/images/gallery/slider 15 b.jpg' },
        ],
        layout: 'splitscreen',
        layoutOptions: {
            gridProps: {
                sx: {
                    justifyContent: 'space-evenly'
                }
            }
        }
    },
    {
        anchorImageId: 11,
        images: [
            { src: '/assets/images/gallery/slider 16 a.jpg' },
            { src: '/assets/images/gallery/slider 16 b.jpg' },
        ],
        layout: 'splitscreen',
        layoutOptions: {
            gridProps: {
                sx: {
                    justifyContent: 'space-evenly'
                }
            }
        }
    },
    {
        images: [
            { src: '/assets/images/gallery/slider 17.jpg' },
        ],
        layout: 'fullscreen',
    },
    {
        images: [
            { src: '/assets/images/gallery/slider 18.jpg' },
        ],
        layout: 'fullscreen',
    },
    {
        anchorImageId: 12,
        images: [
            { src: '/assets/images/gallery/slider 19.jpg' },
        ],
        layout: 'fullscreen',
    },
    {
        images: [
            { src: '/assets/images/gallery/slider 20 a.jpg' },
            { src: '/assets/images/gallery/slider 20 b.jpg' },
        ],
        layout: 'splitscreen',
        layoutOptions: {
            gridProps: {
                sx: {
                    justifyContent: 'space-evenly'
                }
            }
        }
    },
    {
        images: [
            { src: '/assets/images/gallery/slider 22.jpg' },
        ],
        layout: 'fullscreen',
    },
    {
        anchorImageId: 5,
        images: [
            { src: '/assets/images/gallery/slider 23.jpg' },
        ],
        layout: 'fullscreen',
    },
    {
        images: [
            { src: '/assets/images/gallery/slider 24.jpg' },
        ],
        layout: 'fullscreen',
    },
    {
        images: [
            { src: '/assets/images/gallery/slider 25 a.jpg' },
            { src: '/assets/images/gallery/slider 25 b.jpg' },
        ],
        layout: 'splitscreen',
        layoutOptions: {
            gridProps: {
                sx: {
                    justifyContent: 'space-evenly'
                }
            }
        }
    },
    {
        images: [
            { src: '/assets/images/gallery/slider 26.jpg' },
        ],
        layout: 'fullscreen',
    },
    {
        images: [
            { src: '/assets/images/gallery/slider 27.jpg' },
        ],
        layout: 'fullscreen',
    },
    {
        anchorImageId: 6,
        images: [
            { src: '/assets/images/gallery/slider 28.jpg' },
        ],
        layout: 'fullscreen',
    },
    {
        images: [
            { src: '/assets/images/gallery/slider 29 a.jpg' },
            { src: '/assets/images/gallery/slider 29 b.jpg' },
        ],
        layout: 'splitscreen',
        layoutOptions: {
            gridProps: {
                sx: {
                    justifyContent: 'space-evenly'
                }
            }
        }
    },
    {
        anchorImageId: 13,
        images: [
            { src: '/assets/images/gallery/slider 30 a.jpg' },
            { src: '/assets/images/gallery/slider 30 b.jpg' },
        ],
        layout: 'splitscreen',
        layoutOptions: {
            gridItemProps: [
                {},
                {
                    size: 4,
                    sx: {
                        height: undefined,
                    }
                }
            ]
        }
    },
    {
        images: [
            { src: '/assets/images/gallery/slider 31.jpg' },
        ],
        layout: 'fullscreen',
    },
    {
        images: [
            { src: '/assets/images/gallery/slider 32 a.jpg' },
            { src: '/assets/images/gallery/slider 32 b.jpg' },
        ],
        layout: 'splitscreen',
        layoutOptions: {
            gridItemProps: [
                {},
                {
                    size: 4,
                    sx: {
                        height: undefined,
                        marginBottom: '20vh',
                    }
                }
            ]
        }
    },
    {
        images: [
            { src: '/assets/images/gallery/slider 33.jpg' },
        ],
        layout: 'fullscreen',
    },
    {
        images: [
            { src: '/assets/images/gallery/slider 34.jpg' },
        ],
        layout: 'fullscreen',
    },
    {
        images: [
            { src: '/assets/images/gallery/slider 35 a.jpg' },
            { src: '/assets/images/gallery/slider 35 b.jpg' },
        ],
        layout: 'splitscreen',
        layoutOptions: {
            gridItemProps: [
                {},
                {
                    size: 4,
                    sx: {
                        height: undefined,
                    }
                }
            ]
        }
    },
    {
        images: [
            { src: '/assets/images/gallery/slider 36.jpg' },
        ],
        layout: 'fullscreen',
    },
    {
        images: [
            { src: '/assets/images/gallery/slider 37 a.jpg' },
        ],
        layout: 'fullscreen',
    },
    {
        images: [
            { src: '/assets/images/gallery/slider 38.jpg' },
        ],
        layout: 'fullscreen',
    },
    {
        anchorImageId: 14,
        images: [
            { src: '/assets/images/gallery/slider 39 a.jpg' },
            { src: '/assets/images/gallery/slider 39 b.jpg' },
        ],
        layout: 'splitscreen',
        layoutOptions: {
            gridItemProps: [
                {
                    size: 4,
                    sx: {
                        height: undefined,
                    }
                }
            ]
        }
    },
    {
        images: [
            { src: '/assets/images/gallery/slider 40.jpg' },
        ],
        layout: 'fullscreen',
    },
    {
        images: [
            { src: '/assets/images/gallery/slider 42 a.jpg' },
            { src: '/assets/images/gallery/slider 42 b.jpg' },
        ],
        layout: 'splitscreen',
        layoutOptions: {
            gridItemProps: [
                {
                    size: 4,
                    sx: {
                        height: undefined,
                    }
                }
            ]
        }
    },
]
