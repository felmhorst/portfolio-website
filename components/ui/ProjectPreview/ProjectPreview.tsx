import styles from "./ProjectPreview.module.css"

export const ProjectPreview = ({
    title,
}: {
    title: string;
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>

            </div>
            <h2 className={styles.title}>
                {title}
            </h2>
        </div>
    );
}