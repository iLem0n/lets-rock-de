# Font Integration

This directory contains the font configuration for the project.

## Current Setup

The project is configured to use Work Sans (a geometric sans-serif font similar to Futura) as the default font. The font is loaded from Google Fonts but is preloaded and self-hosted by Next.js, so it doesn't depend on external servers at runtime.

## Font Configuration

The font configuration is defined in the `index.ts` file with the following settings:

1. Font: Work Sans (similar to Futura in style)
2. Weights: 400 (regular) and 700 (bold)
3. Subset: Latin (for better performance)
4. CSS Variable: `--font-futura` (for backward compatibility)
5. Display: Swap (for better user experience)

## How to Use Actual Futura Font

If you want to use the actual Futura font instead of Work Sans:

1. Obtain the Futura font files from a licensed source
2. Convert them to WOFF2 format if necessary
3. Place the font files in this directory
4. Update the `index.ts` file to use `localFont` from 'next/font/local' instead of the current Google Font implementation

## Font Loading

The fonts are loaded using Next.js's font system in the `index.ts` file. If you need to add additional font weights or styles, update this file accordingly.

## Legal Considerations

If you decide to use the actual Futura font, ensure you have the proper license to use it in your project. Futura is a commercial font, and you need to purchase a license to use it legally.
