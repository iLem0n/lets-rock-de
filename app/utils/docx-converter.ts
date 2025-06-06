import mammoth from 'mammoth';
import fs from 'fs';
import path from 'path';

export async function convertDocxToHtml(docxFilePath: string) {
    try {
        const buffer = fs.readFileSync(path.join(process.cwd(), docxFilePath));

        // Define conversion options for better HTML output
        const options = {
            styleMap: [
                "p[style-name='Heading 1'] => h1:fresh",
                "p[style-name='Heading 2'] => h2:fresh",
                "p[style-name='Heading 3'] => h3:fresh",
                "p[style-name='Title'] => h1.title:fresh",
                "p[style-name='Subtitle'] => h2.subtitle:fresh",
                "r[style-name='Strong'] => strong",
                "r[style-name='Emphasis'] => em"
            ]
        };

        const result = await mammoth.convertToHtml({ buffer }, options);
        return result.value;
    } catch (error) {
        console.error('Error converting DOCX to HTML:', error);
        return '';
    }
}
