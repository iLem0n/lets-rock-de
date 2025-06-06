import TopicView from "@/app/features/home-content/components/TopicView";
import { Topic } from "@/app/features/home-content/types/types";
import { ParagraphType } from "@/app/features/home-content/types/constants";
import { Container, Grid, Typography } from "@mui/material";
import { CONTACT } from "@/app/data-constants";
import Link from "next/link";

const topics: Topic[] = [
    {
        title: 'GERD KÖNIG aus Erding bei München ist ein vielseitiger Fotograf mit Meistertitel und Inhaber von www.LetsRock.de, der dank seinem langjährigen Know How und umfangreichen Equipment vielfältigste und weitgefächerte Aufgaben übernehmen kann.',
        paragraphs: [
            {
                text: 'Mit seinem breiten Portfolio deckt er verschiedene Genres wie Architekturaufnahmen, Baudokumentationen, Interiorfotografie, Industriefotografie, Luftbildfotografie, Messestandaufnahmen, Modellfotografie, Musterfotografie, Porträts und Sedcards, Produktaufnahmen, Werbeaufnahmen, Reportagen, Reproduktionen und Stillife ab.',
                type: ParagraphType.Text,
                span: 2
            },
            {
                text: 'Hinter jedem guten Bild steckt eine durchdachte Idee - das gilt für alle Formen der Fotografie. Einfach „drauflos zu knipsen" reicht nicht aus, um wirklich neue und überzeugende Bilder zu schaffen. Es braucht eine kreative Vision, eine gezielte Planung und oft auch die Fähigkeit, das Ungewöhnliche im Gewöhnlichen zu finden. Der fotografische Prozess beginnt nicht mit der Kamera, sondern mit einer klaren Vorstellung davon, was das Bild aussagen soll. Nur so lassen sich Emotionen und Geschichten auf ehrliche und nachhaltige Weise einfangen.',
                type: ParagraphType.Text,
                span: 2
            },
            { type: ParagraphType.Break, span: 2 },
            {
                text: 'Durch seine große Erfahrung mit Agenturen, Unternehmen, Behörden und Privatpersonen in Bayern, Deutschland und Europa hat er sich als „Allrounder“ der Fotografie etabliert, der es versteht, Emotionen und Geschichten visuell einzufangen.',
                type: ParagraphType.Text,
                span: 2
            },
            {
                image: '/assets/images/home/intro-woods.png',
                type: ParagraphType.Image,
                span: 2
            }
        ]
    },
    {
        title: 'GERD KÖNIG ist Fotografmeister und kreativer Ideengeber für innovative Bildkonzepte.',
        paragraphs: [
            {
                text: 'Für Werbung und Plakate zum Bühnenstück "Dracula" wurde ein außergewöhnliches Vorhaben umgesetzt. Die kreative Idee - eine Fotostrecke im einzigartigen schaurig-schönen Umfeld - wurde eindrucksvoll nach interessanter Motivsuche auf dem traditionsreichen Friedhof von St. Paul in Erding mit seinen zahlreichen künstlerisch wertvollen und historischen Grabdenkmälern, Gruftarkaden und freistehenden Einzel-Denkmälern mit Genehmigung durch Kirchenamt und Polizei zu später Stunde wirkungsvoll mit farbigen Lichtern, Perücke und viel Rauch auf 3 vorbereiteten Sets perfekt inszeniert.',
                type: ParagraphType.Text,
                span: 2
            },
            {
                image: '/assets/images/home/1.png',
                type: ParagraphType.Image,
                span: 1
            },
            {
                image: '/assets/images/home/2.png',
                type: ParagraphType.Image,
                span: 1
            },
            { type: ParagraphType.Break },
            {
                image: '/assets/images/home/3.png',
                type: ParagraphType.Image,
                span: 1
            },
            {
                image: '/assets/images/home/4.png',
                type: ParagraphType.Image,
                span: 1
            },{
                image: '/assets/images/home/5.png',
                type: ParagraphType.Image,
                span: 1
            },{
                image: '/assets/images/home/6.png',
                type: ParagraphType.Image,
                span: 1
            },
        ]
    },
    {
        title: '',
        paragraphs: [
            {
                image: '/assets/images/home/Screenshot 2025-06-05 at 23.41.45.png',
                type: ParagraphType.Image,
                span: 2
            },
            {
                text: 'Mit fundiertem Fachwissen und kreativer Vision entstehen beeindruckende Produktbilder, die Begehrlichkeit schaffen und so die beste Möglichkeit bieten, Kunden zu überzeugen und zu begeistern. Durch präzise Lichtführung, kreative Bildkomposition und professionelle Bildbearbeitung entstehen Bilder, die sowohl ästhetisch ansprechend als auch wirkungsvoll sind und im Gedächnis bleiben. Professionelle und authentische Bilder, die Ihr Unternehmen, Ihre Mitarbeiter und Ihre Produkte in bestem Licht präsentieren, stärken Ihre Marke und schaffen Vertrauen bei Kunden und Partnern.',
                type: ParagraphType.Text,
                span: 2
            },
            { type: ParagraphType.Break },
            {
                images: [
                    '/assets/images/home/Screenshot 2025-06-05 at 23.41.51.png',
                    '/assets/images/home/Screenshot 2025-06-05 at 23.41.57.png'
                ],
                type: ParagraphType.Image,
                span: 1
            },
            {
                text: 'Professionelle Fotografie und Business-Reportagen sind ein entscheidender Erfolgsfaktor für Ihr Unternehmen,  dem Erscheinungsbild und seiner Wahrnehmung. Investieren Sie in visuelle Konzepte, die beeindrucken: spannend, überraschend und stimmig. Denn Fotografie muss nicht nüchtern sein und soll mitwirken, Ihre Marke lebendig und unverwechselbar zu gestalten - ein Bild sagt mehr als 1000 Worte - und das ist die BESTE Werbung.',
                type: ParagraphType.Text,
                span: 1
            },
            { type: ParagraphType.Empty, span: 1 },
            {
                image: '/assets/images/home/Screenshot 2025-06-05 at 23.42.04.png',
                type: ParagraphType.Image,
                span: 1
            },
        ]
    },
    {
        title: 'Professionelle Fotografie für Bilder, die den Unterschied machen.',
        paragraphs: [
            {
                text: 'Die komplett mit Akkus und Konvertern betriebene mobile Ausrüstung ist nicht von Steckdosen abhängig ist. Deshalb ist der Einsatz grenzenlos - vor Ort, im Studio, on Location oder outdoor und selbst Nachts, in einem Kohlenkeller oder auf einem Gipfel. Das verwendete Studiolicht, das bei richtigem und gekonntem Einsatz natürlich wirkt, erzeugt kontrollierte und perfekt ausgeleuchtete Aufnahmen und erlaubt, meisterhafte und beeindruckende Bilder zu erschaffen.',
                type: ParagraphType.Text,
                span: 2
            },
            { type: ParagraphType.Break },
            {
                text: 'In unserer visuell geprägten digitalen Welt gewinnen ausdrucksstarke und hochwertige Bilder zunehmend an Bedeutung. Deshalb werden alle Aufträge, Konzepte und Ideen mit langjähriger Erfahrung und Können auf höchstem Niveau umgesetzt. Investieren Sie in Qualität und sehen Sie den Unterschied. Der umfassende Rundum-Service beinhaltet auch die professionelle EBV und Retusche: so kommt alles aus einer Hand, eben die optimale Lösung für hochwertige und einheitliche Ergebnisse.',
                type: ParagraphType.Text,
                span: 2
            },
        ]
    }
]


export default async function HomeContent() {
    return (
        <div className="mt-8">
            {topics.map((topic, index) => (
                <TopicView key={index} topic={topic} />
            ))}
            <Container maxWidth="xl" className="mb-32">
                <div className="two-column-container">
                    <Typography variant="body1" className="text-left pb-8" color="red">
                        L e t s  R o c k - immer voller Einsatz für das beste Bild - und Freude auf kreative Zusammenarbeit.
                    </Typography>
                    <Grid container spacing={2} rowSpacing={0} columns={2}>
                        <Grid size={1} textTransform="uppercase">
                            <Typography variant="body1">
                                {CONTACT.firstName}&nbsp;{CONTACT.lastName}
                            </Typography>
                        </Grid>
                        <Grid size={1}>
                            <Link href={`tel:${CONTACT.phone.number}`}>
                                <Typography variant="body1" sx={{ textAlign: 'right' }}>
                                    {CONTACT.phone.label}
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid size={1}>
                            <Typography variant="body1">
                                {CONTACT.nameAffix}
                            </Typography>
                        </Grid>
                        <Grid size={1}>
                            <Link href={`mailto:${CONTACT.email}`}>
                                <Typography variant="body1"sx={{ textAlign: 'right' }}>
                                    {CONTACT.email}
                                </Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </div>

                <Typography variant="h1" className="text-center w-full">together we can do magic</Typography>
            </Container>
        </div>
    )
}