export type LayoutIndex = {
    side: 'left' | 'right';
    index: number;
}

export type ImageRef = {
    id: number;
    src: string;
    layoutIndex: LayoutIndex;
}