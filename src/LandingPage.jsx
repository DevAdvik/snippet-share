import logo from "./assets/snippetSphere.svg";
import snippets from "./assets/snippets.svg";
import ellipse from "./assets/Ellipse.svg";
import revolution from "./assets/revolutionize.svg";
import phone from "./assets/mobile.svg";
import styles from "./styles/homepage.module.css";
import featureStyles from "./styles/features.module.css";
import lastStyles from "./styles/landingpageLast.module.css";
import { useNavigate } from "react-router-dom";

function LandingPage() {
    const navigator = useNavigate();

    return (
        <div className={styles.all}>
            <section className={styles.mainPage}>
                <header className={styles.header}>
                    <div className={styles.nameLogo}>
                        <img src={logo} alt="err" width={"150px"} height={"auto"} />
                        <h1>Snippet Sphere</h1>
                    </div>

                    <div className={styles.allLinks}>
                        <a href="#about">About</a>
                        <a href="#features">Features</a>
                        <button
                            type="button"
                            onClick={() => {
                                navigator("/signup");
                            }}
                        >
                            Sign up
                        </button>
                    </div>

                    <div className={styles.login}>
                        <button
                            type="button"
                            onClick={() => {
                                navigator("/login");
                            }}
                        >
                            Login
                        </button>
                    </div>
                </header>

                <div className={styles.snippetDesc}>
                    <div className={styles.snippetTexts}>
                        <div className={styles.tagline}>
                            <h1>Sharing Brilliance</h1>
                            <h3>
                                One <span>Snippet</span> at a Time.
                            </h3>
                        </div>
                        <div className={styles.taglineText}>
                            A seamless solution for sharing code <span>snippets</span>, enabling
                            developers to connect, learn, and grow together.
                        </div>
                    </div>
                    <div className={styles.snippets}>
                        <img src={snippets} alt="err" />
                    </div>
                </div>
                <div className={styles.stylingDiv}>
                    <img src={ellipse} alt="" />
                </div>
            </section>

            <section className={styles.about} id="about">
                <h1>Revolutionizing Code Sharing</h1>
                <div className={styles.textAndLaptop}>
                    <div className={styles.textContent}>
                        <div className={styles.firstRow}>
                            <img src={revolution} alt="Humans discussing different code snippets" />
                            <p>
                                In the ever-evolving landscape of software development,
                                collaboration and knowledge sharing are paramount.
                            </p>
                        </div>
                        <div className={styles.secondRow}>
                            <p>
                                Enter <span>Snippet Sphere</span>, a cutting-edge code snippet
                                sharing web application poised to transform the way developers
                                exchange and collaborate on code snippets.
                            </p>
                        </div>
                    </div>
                    <div className={styles.laptop}></div>
                </div>
            </section>

            <section className={featureStyles.features} id="features">
                <div className={featureStyles.heading}>
                    <img src="ellipse2" />
                    <p>Features</p>
                </div>

                <div className={featureStyles.content}>
                    <div className={featureStyles.cards}>
                        <div className={featureStyles.card12}>
                            <div className={featureStyles.card1}>
                                <h1>Empowering Collaboration</h1>
                                <p>
                                    Snippet Sphere enables seamless sharing of code snippets with
                                    colleagues, peers, and the broader developer community through
                                    easily generated public links.
                                </p>
                            </div>
                            <div className={featureStyles.card2}>
                                <h1>Syntax Highlighting for Maximum Clarity</h1>
                                <p>
                                    Snippet Sphere ensures code clarity and readability with robust
                                    syntax highlighting for 10 languages directly within your
                                    browser, fostering seamless development experiences.
                                </p>
                            </div>
                        </div>
                        <div className={featureStyles.card34}>
                            <div className={featureStyles.card3}>
                                <h1>Sleek and Intuitive Interface</h1>
                                <p>
                                    Experience the epitome of simplicity and elegance with Snippet
                                    Sphere&apos;s sleek and intuitive interface. Effortlessly
                                    navigate through your snippets with grace, allowing your
                                    creativity to flow seamlessly.
                                </p>
                            </div>
                            <div className={featureStyles.card4}>
                                <h1>Future Enhancements</h1>
                                <p>
                                    The journey of Snippet Sphere is just beginning. In the pipeline
                                    are plans for additional features and enhancements, including
                                    collaborative editing, public snippet library, and integration
                                    with popular development platforms.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={featureStyles.imageContainer}>
                        <img src={phone} />
                    </div>
                </div>
            </section>

            <section className={lastStyles.Join}>
                <div className={lastStyles.container}>
                    <div className={lastStyles.heading}>Join The Sphere</div>
                    <div className={lastStyles.content}>
                        Whether you&apos;re a seasoned developer looking to streamline your workflow
                        or a newcomer eager to learn and collaborate, <span>Snippet Sphere</span>{" "}
                        welcomes you to join its vibrant community.
                    </div>
                    <img src={logo} />

                    <div className={lastStyles.content2}>
                        Sign up today and experience the <span>future of code sharing </span>
                        firsthand.
                    </div>
                    <div className={lastStyles.buttons}>
                        <button
                            type="button"
                            className={lastStyles.signup}
                            onClick={() => {
                                navigator("/signup");
                            }}
                        >
                            Sign-up
                        </button>
                        <button
                            type="button"
                            className={lastStyles.login}
                            onClick={() => {
                                navigator("/login");
                            }}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LandingPage;
