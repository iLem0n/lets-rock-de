import { Typography, Container, Box, Paper } from "@mui/material";
import Link from "next/link";

export default function Privacy() {
    return (
        <>
            <Container maxWidth="md" component="main" sx={{ py: 8 }}>
                <Paper elevation={3} sx={{ p: 6, borderRadius: 2, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                    <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 4 }}>
                        Privacy Policy
                    </Typography>

                    <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
                        Introduction
                    </Typography>
                    <Typography variant="body1" paragraph>
                        This is a placeholder for the privacy policy introduction. Please replace it with your actual privacy policy content.
                    </Typography>

                    <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
                        Data Collection
                    </Typography>
                    <Typography variant="body1" paragraph>
                        This is a placeholder for information about data collection. Please replace it with your actual privacy policy content.
                    </Typography>

                    <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
                        Use of Information
                    </Typography>
                    <Typography variant="body1" paragraph>
                        This is a placeholder for information about how collected data is used. Please replace it with your actual privacy policy content.
                    </Typography>

                    <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
                        Contact Information
                    </Typography>
                    <Typography variant="body1" paragraph>
                        If you have any questions about this Privacy Policy, please contact us.
                    </Typography>

                    <Box sx={{ mt: 6, pt: 2, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                        <Typography variant="body2" color="text.secondary" align="center">
                            Last updated: {new Date().toLocaleDateString()}
                        </Typography>
                    </Box>
                </Paper>
            </Container>

            <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto' }}>
                <Typography variant="body2" color="text.secondary" align="center">
                    <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Return to Home
                    </Link>
                </Typography>
            </Box>
        </>
    );
}
