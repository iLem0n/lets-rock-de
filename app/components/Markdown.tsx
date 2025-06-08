'use client';

import { CSSProperties, styled, Theme } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import rehypeRaw from 'rehype-raw';

const remarkPlugins = [remarkGfm, remarkBreaks]
const rehypePlugins = [rehypeRaw]

const getTypographyStyle = (theme: Theme, name: string): object =>
    theme.typography[name as keyof typeof theme.typography] as object

const StyledMarkdownContainer = styled('div')<{
    typographyName: string
    fontAttributes?: CSSProperties
}>(({ theme, typographyName, fontAttributes }) => ({
    ...getTypographyStyle(theme, typographyName),
    ...fontAttributes,
    '& a': {
        color: theme.palette.primary.main,
        ':hover': { color: theme.palette.primary.light }
    },
    '& p:not(:first-of-type)': { marginTop: '1.5rem' },
    '& h1': getTypographyStyle(theme, 'h1'),
    '& h2': getTypographyStyle(theme, 'h2'),
    '& h3': getTypographyStyle(theme, 'h3'),
    '& h4': getTypographyStyle(theme, 'h4'),
    '& h5': getTypographyStyle(theme, 'h5'),
    '& h6': getTypographyStyle(theme, 'h6'),
    '& ul, & ol': {
        paddingLeft: '1.5rem',
        marginTop: '0.75rem'
    },
    '& ul': { listStyleType: 'disc' },
    '& ol': { listStyleType: 'decimal' },
    '& li': { marginBottom: '0.25rem' }
}))

export default function Markdown({
    children,
    typographyName = 'body2',
    fontAttributes = {}
}: {
    children: string
    typographyName?: string
    fontAttributes?: CSSProperties
}) {
    return (
        <StyledMarkdownContainer
            typographyName={typographyName}
            fontAttributes={fontAttributes}
        >
            <ReactMarkdown
                remarkPlugins={remarkPlugins}
                rehypePlugins={rehypePlugins}
            >
                {children}
            </ReactMarkdown>
        </StyledMarkdownContainer>
    )
}