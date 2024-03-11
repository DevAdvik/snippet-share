import styles from "../styles/errorpage.module.css";
import errorImage from "../assets/404.svg";
import logo from "../assets/snippetSphere.svg";

function ErrorPage({ missingSnippet }) {
    return (
        <section className={styles["error-page"]}>
            <div className={styles["logo-name-your-snippet"]}>
                <div className={styles["logo-name"]}>
                    <img src={logo} alt="snippet-logo" />
                    <p>Snippet Share</p>
                </div>
                <div className={styles["button-div"]}>
                    <button>Your Snippet</button>
                </div>
            </div>
            <img src={errorImage} className={styles["error-image"]} alt="error-image" />
            <div className={styles["error-content"]}>
                <h2>
                    {missingSnippet ? (
                        <>
                            The <span>Snippet</span> you are looking for doesn&apos;t exist or the
                            given snippet is a private snippet
                        </>
                    ) : (
                        `Page not found! Are you sure you entered the correct URL?`
                    )}
                </h2>
                <p>You may mistyped the address.</p>
                <button>Go To Home</button>
            </div>
        </section>
    );
}

export default ErrorPage;
