// app/api/gallery-images/route.ts
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    const galleryDir = path.join(process.cwd(), 'public/assets/images/gallery');
    const imageFiles = fs.readdirSync(galleryDir);

    return NextResponse.json({ images: imageFiles });
}