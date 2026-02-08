import styles from "./page.module.css";
import {Timeline} from "@/components/Timeline/Timeline";
import {Column, ColumnLayout} from "@/components/ColumnLayout/ColumnLayout";

export default function About() {
    return (
        <ColumnLayout>
            <Column>
                <h1 className={styles.title}>
                    interaction designer &<br/>
                    web developer
                </h1>
            </Column>
            <Column>
                <p>
                    Hey! I'm Florian Elmhorst, an interaction designer and frontend  developer with a passion for
                    creating engaging digital experiences. With an eye for visual design and a good technical
                    understanding, I combine  the best of two worlds and bring a unique perspective to every project I
                    undertake.
                </p>
                <Timeline/>
            </Column>
        </ColumnLayout>
    );
}
