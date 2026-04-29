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
            description: "Momentan arbeite ich als Web Entwickler, während ich nebenbei eine Vielzahl an Bots betreue " +
                "und weiterentwickle.",
        },
        {
            start: "2024",
            end: "2025",
            title: <>
                <Link
                    label={"M.Sc. Computer Science (Conversion)"}
                    href={"https://www.ucd.ie/courses/msc-computer-science-conversion"}
                    target={"_blank"}/> in UCD, Dublin
            </>,
            description: "Ich habe mich nach einer formalen Ausbildung für einen Master in Informatik bewegt. Neben " +
                "verschiedenen Programmiersprachen habe ich auch Netzwerke, Cyber Sicherheit, Datenanalyse, " +
                "Computerarchitektur und mehr gelernt.",
        },
        {
            start: "2024",
            end: "2024",
            title: <>
                <Link
                    label={"Prof.Cert. Mathematics for Data Analytics and Statistics"}
                    href={"https://hub.ucd.ie/usis/!W_HU_MENU.P_PUBLISH?p_tag=PROG&MAJR=F140"}
                    target={"_blank"}/> in UCD, Dublin
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
            title: "Developer at MUUUH!, Osnabrück",
            description: "Currently I am working as a web developer while also developing and supervising a " +
                "range of bots.",
        },
        {
            start: "2024",
            end: "2025",
            title: "M.Sc. Computer Science (Conversion) in UCD, Dublin",
            description: "Looking to expand on my knowledge with a formal education, I moved to Ireland. Besides " +
                "different programming languages I learned about networks, cyber security, data analytics, " +
                "computer architecture and more."
        },
        {
            start: "2024",
            end: "2024",
            title: "Prof.Cert. Mathematics for Data Analytics and Statistics at UCD, Dublin",
            description: "As a preparation for my masters, I brushed up on mathematics and statistics."
        },
        {
            start: "2021",
            end: "2024",
            title: "Frontend Developer at ISCOPE, Osnabrück",
            description: "I began working at ISCOPE while I was studying and worked in a variety of projects, " +
                "ranging from mobile apps with augmented reality, over experimental projects with the Kinect, to " +
                "highly interactive web apps."
        },
        {
            start: "2019",
            end: "2023",
            title: "B.A. Media & Interaction Design at University of Applied Sciences, Osnabrück",
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