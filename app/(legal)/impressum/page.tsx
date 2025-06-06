import { Typography, Container, Box, Paper } from "@mui/material";
import Link from "next/link";

export default function Impressum() {
    return (
        <>
            <Container maxWidth="md" component="main" sx={{ py: 8 }}>
                <Paper elevation={3} sx={{ p: 6, borderRadius: 2, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                    <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 4 }}>
                        Impressum
                    </Typography>

                    <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
                        Angaben gemäß § 5 TMG
                    </Typography>
                    <Typography variant="body1" component="p">
                        Hier steht das Impressum.
                    </Typography>

                    <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
                        Kontakt
                    </Typography>
                    <Typography variant="body1" component="p">
                        Weitere Informationen folgen in Kürze.
                    </Typography>

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
