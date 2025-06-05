import TopicView from "@/app/features/home-content/components/TopicView";
import { Topic } from "@/app/features/home-content/types/types";
import { ParagraphType } from "@/app/features/home-content/types/constants";

const topics: Topic[] = [
    {
        title: 'GERD KÖNIG aus Erding bei München ist ein vielseitiger Fotograf mit Meistertitel und Inhaber von www.LetsRock.de, der dank seinem langjährigen Know How und umfangreichen Equipment vielfältigste und weitgefächerte Aufgaben übernehmen kann.',
        paragraphs: [
            {
                text: 'Mit seinem breiten Portfolio deckt er verschiedene Genres wie Architekturaufnahmen, Baudokumentationen, Interiorfotografie, Industriefotografie, Luftbildfotografie, Messestandaufnahmen, Modellfotografie, Musterfotografie, Porträts und Sedcards, Produktaufnahmen, Werbeaufnahmen, Reportagen, Reproduktionen und Stillife ab.',
                type: ParagraphType.Text
            },
            {
                text: 'Hinter jedem guten Bild steckt eine durchdachte Idee - das gilt für alle Formen der Fotografie. Einfach „drauflos zu knipsen" reicht nicht aus, um wirklich neue und überzeugende Bilder zu schaffen. Es braucht eine kreative Vision, eine gezielte Planung und oft auch die Fähigkeit, das Ungewöhnliche im Gewöhnlichen zu finden. Der fotografische Prozess beginnt nicht mit der Kamera, sondern mit einer klaren Vorstellung davon, was das Bild aussagen soll. Nur so lassen sich Emotionen und Geschichten auf ehrliche und nachhaltige Weise einfangen.',
                type: ParagraphType.Text
            },
            {
                text: 'Mit seinem umfangreichen Equipment und seiner langjährigen Erfahrung kann er vielfältigste und weitgefächerte Aufgaben übernehmen. Von der Architektur- und Baudokumentation über die Luftbildfotografie bis hin zu Stillife-Aufnahmen - Gerd König ist der Fotograf, der es versteht, jede Herausforderung kreativ zu meistern.',
                type: ParagraphType.Text
            },
            {
                text: 'Durch seine große Erfahrung mit Agenturen, Unternehmen, Behörden und Privatpersonen in Bayern, Deutschland und Europa hat er sich als „Allrounder“ der Fotografie etabliert, der es versteht, Emotionen und Geschichten visuell einzufangen.',
                type: ParagraphType.Text
            },
            {
                image: '/assets/home/intro-woods.png',
                type: ParagraphType.Image
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
                image: '/assets/home/intro-woods.png',
                type: ParagraphType.Image,
                span: 1
            },
            {
                image: '/assets/home/intro-woods.png',
                type: ParagraphType.Image,
                span: 1
            },
            {
                image: '/assets/home/intro-woods.png',
                type: ParagraphType.Image,
                span: 1
            },
            {
                image: '/assets/home/intro-woods.png',
                type: ParagraphType.Image,
                span: 1
            },
            {
                image: '/assets/home/intro-woods.png',
                type: ParagraphType.Image,
                span: 1
            },
            {
                image: '/assets/home/intro-woods.png',
                type: ParagraphType.Image,
                span: 1
            },
        ]
    }
]


export default async function HomeContent() {
    return (
        <>
            {topics.map((topic, index) => (
                <div key={index}>
                    <TopicView topic={topic} />
                    <hr className="divider" />
                </div>
            ))}
        </>
    )
}