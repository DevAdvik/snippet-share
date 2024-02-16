import styles from './SnippetView.module.css';
function SnippetView() {
    let code = `
    function myFunction(a, b) {
        return a * b;
    }
    myFunction(10, 2);
    `
    return(
        <div className={styles.snippetView}>
            <code>
                {code}
            </code>
        </div>
    )
}

export default SnippetView;