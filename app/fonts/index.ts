import { Work_Sans } from 'next/font/google';

// Using Work Sans as a system font similar to Futura
// This will be preloaded and self-hosted, not depending on external servers at runtime
export const futura = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-futura',
  display: 'swap',
});
