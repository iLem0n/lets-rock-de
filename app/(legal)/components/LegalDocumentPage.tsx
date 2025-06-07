import { Typography, Container, Box, Paper } from "@mui/material";
import Link from "next/link";
import { convertDocxToHtml } from "@/app/utils/docx-converter";
import { cache } from 'react';

import '../styles.css';

// Create a generic document content fetcher that can be reused with different document paths
const getDocumentContent = cache(async (docPath: string) => {
  return await convertDocxToHtml(docPath);
});

interface LegalDocumentPageProps {
  title: string;
  documentPath: string;
}

export default async function LegalDocumentPage({ title, documentPath }: LegalDocumentPageProps) {
  const htmlContent = await getDocumentContent(documentPath);

  return (
    <>
      <Container maxWidth="xl" component="main" sx={{ py: 8 }}>
        <Paper elevation={3} sx={{ p: 6, borderRadius: 2, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
          <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 4 }}>
            {title}
          </Typography>

          {/* Two-column layout with CSS columns instead of manual splitting */}
          <Box
            className="legal-content"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
            sx={{
              columnCount: { sm: 1, md: 2 },
              columnGap: '2rem',
              columnRule: '1px solid rgba(255, 255, 255, 0.1)',
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
          />

          <Box sx={{ mt: 6, pt: 2, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <Typography variant="body2" color="text.secondary" align="center">
              Stand: {new Date().toLocaleDateString()}
            </Typography>
          </Box>
        </Paper>
      </Container>

      <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto' }}>
        <Typography variant="body2" color="text.secondary" align="center">
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Zurück zur Startseite
          </Link>
        </Typography>
      </Box>
    </>
  );
}
