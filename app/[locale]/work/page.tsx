import styles from "./page.module.css";
import {Column, ColumnLayout} from "@/components/ColumnLayout/ColumnLayout";
import {ProjectPreview} from "@/components/ProjectPreview/ProjectPreview";


export default function Work() {
    return (
        <ColumnLayout>
            <Column>

            </Column>
            <Column>
                <ProjectPreview
                    title={"comfychart"}/>
                <ProjectPreview
                    title={"portfolio website"}/>
                <ProjectPreview
                    title={"Minecraft AI"}/>
            </Column>
        </ColumnLayout>
    );
}