import {LifeChapter} from "@/components/LifeChapter/LifeChapter";

export const Timeline = () => {
    return (
        <div>
            <LifeChapter
                start={"2026"}
                title={"Developer at MUUUH!, Osnabrück"}
                description={"Currently I am working as a web developer while also developing and supervising a " +
                    "range of bots."}/>
            <LifeChapter
                start={"2024"}
                end={"2025"}
                title={"M.Sc. Computer Science (Conversion) at UCD, Dublin"}
                description={"Looking to expand on my knowledge with a formal education, I moved to Ireland. Besides " +
                    "different programming languages I learned about networks, cyber security, data analytics, " +
                    "computer architecture and more."}/>
            <LifeChapter
                start={"2024"}
                end={"2024"}
                title={"Prof.Cert. Mathematics for Data Analytics and Statistics at UCD, Dublin"}
                description={"As a preparation for my masters, I brushed up on mathematics and statistics."}/>
            <LifeChapter
                start={"2021"}
                end={"2024"}
                title={"Frontend Developer at ISCOPE, Osnabrück"}
                description={"I began working at ISCOPE while I was studying and worked in a variety of projects, " +
                    "ranging from mobile apps with augmented reality, over experimental projects with the Kinect, to " +
                    "highly interactive web apps."}/>
            <LifeChapter
                start={"2019"}
                end={"2023"}
                title={"B.A. Media & Interaction Design at University of Applied Sciences, Osnabrück"}
                description={"In my undergraduate degree, I learned conceptualizing, designing, and evaluating user " +
                    "interfaces and processes."}/>
        </div>
    );
};