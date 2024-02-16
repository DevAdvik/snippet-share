import styles from "./Section2.module.css"
import Header from './Header/Header.jsx';
import SnippetDetails from './SnippetDetails/SnippetDetails.jsx';
import SnippetView from './SnippetView/SnippetView.jsx';
function Section2() {
    return(
        <section className={styles.section2}>
            <Header></Header>
            <SnippetDetails/>
            <SnippetView/>
        </section>
    )
}

export default Section2;