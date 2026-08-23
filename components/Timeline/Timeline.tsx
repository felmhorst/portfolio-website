import {LifeChapter, LifeChapterProps} from "@/components/LifeChapter/LifeChapter";
import {useLocale} from "next-intl";
import {Link} from "@/components/ui/Link/Link";

const chapters: Record<string, LifeChapterProps[]> = {
    de: [
        {
            start: "2026",
            title: <>
                Entwickler bei <Link
                    label={"MUUUH!"}
                    href={"https://www.muuuh.de/"}
                    target={"_blank"}/>, Osnabrück
            </>,
            description: "Momentan arbeite ich als Fullstack Developer und entwickle eine Vielzahl an Webseiten und " +
                "Webapps.",
        },
        {
            start: "2024",
            end: "2025",
            title: <>
                M.Sc. Computer Science (Conversion) in <Link
                    label={"UCD"}
                    href={"https://www.ucd.ie/"}
                    target={"_blank"}/>, Dublin
            </>,
            description: "Um mein Wissen zu erweitern, bin ich für den Master nach Informatik gezogen. Neben " +
                "verschiedenen Programmiersprachen habe ich auch über Netzwerke, Cyber Sicherheit, Datenanalyse, " +
                "Computerarchitektur und mehr gelernt.",
        },
        {
            start: "2024",
            end: "2024",
            title: <>
                Prof.Cert. Mathematics for Data Analytics and Statistics in <Link
                    label={"UCD"}
                    href={"https://www.ucd.ie/"}
                    target={"_blank"}/>, Dublin
            </>,
            description: "Als Vorbereitung für meinen Master habe ich meine Skills in Mathematik und Statistik verbessert."
        },
        {
            start: "2021",
            end: "2024",
            title: <>
                Frontend Entwickler bei <Link
                    label={"ISCOPE"}
                    href={"https://iscope.de/"}
                    target={"_blank"}/>, Osnabrück
            </>,
            description: "Ich habe während meines Studiums angefangen bei ISCOPE zu arbeiten und habe in verschiedenen " +
                "Projekten mitgearbeitet - Mobile Apps mit Augmented Reality, Experimentelle Projekte mit Kinect, sowie " +
                "hochinteraktive Web Apps."
        },
        {
            start: "2019",
            end: "2023",
            title: <>
                <Link
                    label={"B.A. Media & Interaction Design"}
                    href={"https://www.hs-osnabrueck.de/studium/studienangebot/bachelor/media-interaction-design-ba/"}
                    target={"_blank"}/> an der Hochschule Osnabrück
            </>,
            description: "In meinem Bachelor habe ich gelernt, Konzepte zu entwerfen, zu Nutzeroberflächen zu gestalten " +
                "und wissenschaftlich zu evaluieren."
        }
    ],
    en: [
        {
            start: "2026",
            title: <>
                Developer at <Link
                label={"MUUUH!"}
                href={"https://www.muuuh.de/"}
                target={"_blank"}/>, Osnabrück
            </>,
            description: "Currently I am working as a fullstack developer and work on a number of websites and " +
                "webapps.",
        },
        {
            start: "2024",
            end: "2025",
            title: <>
                M.Sc. Computer Science (Conversion) at <Link
                label={"UCD"}
                href={"https://www.ucd.ie/"}
                target={"_blank"}/>, Dublin
            </>,
            description: "Looking to expand on my knowledge with a formal education, I moved to Ireland. Besides " +
                "different programming languages I learned about networks, cyber security, data analytics, " +
                "computer architecture and more."
        },
        {
            start: "2024",
            end: "2024",
            title: <>
                Prof.Cert. Mathematics for Data Analytics and Statistics at <Link
                label={"UCD"}
                href={"https://www.ucd.ie/"}
                target={"_blank"}/>, Dublin
            </>,
            description: "As a preparation for my masters, I brushed up on mathematics and statistics."
        },
        {
            start: "2021",
            end: "2024",
            title: <>
                Frontend Developer at <Link
                label={"ISCOPE"}
                href={"https://iscope.de/"}
                target={"_blank"}/>, Osnabrück
            </>,
            description: "I began working at ISCOPE while I was studying and worked in a variety of projects, " +
                "ranging from mobile apps with augmented reality, over experimental projects with the Kinect, to " +
                "highly interactive web apps."
        },
        {
            start: "2019",
            end: "2023",
            title: <>
                <Link
                    label={"B.A. Media & Interaction Design"}
                    href={"https://www.hs-osnabrueck.de/en/study/study-offerings/bachelor/media-interaction-design-ba/"}
                    target={"_blank"}/> at University of Applied Sciences, Osnabrück
            </>,
            description: "In my undergraduate degree, I learned conceptualizing, designing, and evaluating user " +
                "interfaces and processes."
        }
    ],
}

export const Timeline = () => {
    const locale = useLocale();

    return (
        <div>
            {chapters[locale].map((chapter, index) => (
                <LifeChapter
                    key={index}
                    {...chapter}/>
            ))}
        </div>
    );
};