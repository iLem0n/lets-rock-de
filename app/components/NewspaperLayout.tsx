import { Box, BoxProps } from "@mui/material";

export default function NewspaperLayout<T>({ children, ...rest }: BoxProps) {
    return (
        <Box
            sx={{
                columnCount: { sm: 1, md: 2 },
                columnGap: '2rem',
                // columnRule: '1px solid rgba(255, 255, 255, 0.1)',
                textAlign: 'justify',
                mt: 4,
                px: 2,
                '& h1, & h2, & h3': {
                    breakAfter: 'avoid',
                    columnSpan: 'none'
                },
                '& table': {
                    display: 'block',
                    width: '100%',
                    overflowX: 'auto'
                }
            }}
            {...rest}
        >
            {children}
        </Box>
    )
}