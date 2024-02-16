import styles from "./Section1.module.css";
import AddDiv from "./AddDiv/AddDiv";
import Snippet from './Snippet/Snippet.jsx';

function Section1() {
    return(
        <section className={styles.main1}>
            <h1 className={styles.heading}>My Snippets</h1>
            <AddDiv></AddDiv>
            <Snippet></Snippet>
            <Snippet />
            <Snippet />
        </section>
    )
}

export default Section1;
