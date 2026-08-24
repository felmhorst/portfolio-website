import {Column, ColumnLayout} from "@/components/layout/ColumnLayout/ColumnLayout";
import {ProjectPreview} from "@/components/ui/ProjectPreview/ProjectPreview";


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