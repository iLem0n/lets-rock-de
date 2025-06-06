import { Typography, Container, Box, Paper, Grid } from "@mui/material";
import Link from "next/link";
import { CONTACT } from "@/app/data-constants";

export default function Impressum() {
    return (
        <>
            <Container maxWidth="xl" component="main" sx={{ py: 8 }}>
                <Paper elevation={3} sx={{ p: 6, borderRadius: 2, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                    <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 4 }}>
                        Impressum
                    </Typography>

                    <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
                        Angaben gemäß § 5 TMG
                    </Typography>
                    <Typography variant="body2" component="p">
                        {CONTACT.firstName}&nbsp;{CONTACT.lastName}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Singldinger Str. 2a
                    </Typography>
                    <Typography variant="body2" component="p">
                        85435 Erding
                    </Typography>
                    <br />
                    <Typography variant="body2" component="p">
                        www.letsrock.de
                    </Typography>
                    <Typography variant="body2" component="p">
                        together@letsrock.de
                    </Typography>
                    <Typography variant="body2" component="p">
                        +49 152 3420 4691
                    </Typography>

                    <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
                        Haftung für Inhalte
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ textAlign: 'justify' }}>
                        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                    </Typography>

                    <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
                        Datenschutz
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ textAlign: 'justify' }}>
                        Die Betreiber dieser Seiten  nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht  möglich.
                    </Typography>

                    <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
                        Recht auf Auskunft, Löschung, Sperrung
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ textAlign: 'justify' }}>
                        Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
                    </Typography>

                    <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
                        Design & Programmierung
                    </Typography>
                    <Grid container spacing={2} rowSpacing={0} columns={2} sx={{ mb: 4 }}>
                        <Grid size={1}>
                            <Typography variant="body1" component="p" sx={{ textAlign: 'justify' }}>
                                Design:
                            </Typography>
                        </Grid>
                        <Grid size={1}>
                            <Typography variant="body1" component="p" sx={{ textAlign: 'justify' }}>
                                {CONTACT.firstName}&nbsp;{CONTACT.lastName}
                            </Typography>
                        </Grid>
                        <Grid size={1}>
                            <Typography variant="body1" component="p" sx={{ textAlign: 'justify' }}>
                                Entwicklung:
                            </Typography>
                        </Grid>
                        <Grid size={1}>
                            <Typography variant="body1" component="p" sx={{ textAlign: 'justify' }}>
                                Peter C. Glade (<Link href="https://www.petercglade.de" target="_blank" rel="noopener noreferrer">petercglade.de</Link>)
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography variant="body1" component="p" sx={{ textAlign: 'justify' }}>
                        Alle Bilder dieser Seite sind durch das Urheberrecht und das Persönlichkeitsrecht geschützt und dürfen NICHT kopiert oder irgendwie sonst verwendet oder weitergegeben werden.
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ textAlign: 'justify' }}>
                        © GERD KÖNIG 2025
                    </Typography>

                    <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
                        Haftung der Links
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ textAlign: 'justify' }}>
                        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                    </Typography>

                    <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
                        Urheberrecht
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ textAlign: 'justify' }}>
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                    </Typography>

                    <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
                        Server-Log-Files
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ textAlign: 'justify' }}>
                        Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log Files, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage. Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Wir behalten uns vor, diese Daten nachträglich zu prüfen, wenn uns konkrete Anhaltspunkte für eine rechtswidrige Nutzung bekannt werden.
                    </Typography>

                    <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
                        Browser Plugin
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ textAlign: 'justify' }}>
                        Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log Files, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage. Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Wir behalten uns vor, diese Daten nachträglich zu prüfen, wenn uns konkrete Anhaltspunkte für eine rechtswidrige Nutzung bekannt werden.
                    </Typography>

                    <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
                        SSL-Verschlüsselung
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ textAlign: 'justify' }}>
                        Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel der Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
                    </Typography>

                    <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
                        Widerspruch Werbe-Mails
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ textAlign: 'justify' }}>
                        Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor. Quelle: <Link href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer">https://www.e-recht24.de</Link>
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
