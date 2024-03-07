import { signInWithGoogle, signInWithEmail } from "./Auth";

import logo from "../assets/logo.png";
import styles from "../styles/login.module.css";
import baiya from "../assets/baiya.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./Auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Alert } from "antd";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    if (user) {
        navigate("/snippets");
    }

    return (
        <>
            {showError && <ShowError msg={errorMessage} />}
            <section className={styles["snippet-share-login-page"]}>
                <section className={styles["snippet-share-login-page-container"]}>
                    <div className={styles["login-email-password-content"]}>
                        <div
                            className={styles["login-email-password-content-inside-alignment-div"]}
                        >
                            <div className={styles["logo-and-image"]}>
                                <img className={styles["logo-image"]} src={logo} alt="logo" />
                                <p>Snippet Sphere</p>
                            </div>
                            <div className={styles["Welcome-back-description"]}>
                                <h1>Welcome back! </h1>
                                <p>Login into your account</p>
                            </div>
                            <div className={styles["email-password-login-button"]}>
                                <div className={styles["email-input-div"]}>
                                    <p>Email</p>
                                    <input
                                        type="text"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className={styles["password-input-div"]}>
                                    <p>Password</p>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                        }}
                                    />
                                    <div>
                                        <p>Forgot password?</p>
                                    </div>
                                </div>
                                <button
                                    className={styles["login-button"]}
                                    type="button"
                                    onClick={async () => {
                                        try {
                                            await signInWithEmail(email, password);
                                        } catch (error) {
                                            if (error.code === "auth/invalid-credential") {
                                                setErrorMessage("Invalid Credentials!");
                                                setShowError(true);
                                                setInterval(() => {
                                                    setShowError(false);
                                                }, 3000);
                                            }
                                        }
                                    }}
                                >
                                    Log-in
                                </button>
                                <div className={styles["login-with-google"]}>
                                    <div className={styles["continue-with-google"]}>
                                        <p></p>
                                        <div>Or</div>
                                        <p></p>
                                    </div>
                                    <div className={styles["google-login-div"]}>
                                        <div
                                            className={styles["content"]}
                                            onClick={async () => {
                                                signInWithGoogle().then(() => {
                                                    navigate("/snippets");
                                                });
                                            }}
                                        >
                                            Login with{" "}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                width="24"
                                            >
                                                <path
                                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                                    fill="#4285F4"
                                                />
                                                <path
                                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                                    fill="#34A853"
                                                />
                                                <path
                                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                                    fill="#FBBC05"
                                                />
                                                <path
                                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                                    fill="#EA4335"
                                                />
                                                <path d="M1 1h22v22H1z" fill="none" />
                                                <script xmlns="" id="bw-fido2-page-script" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles["login-image-add-content"]}>
                        <div className={styles["login-image-add-content-inner-alignment-div"]}>
                            <div className={styles["quetes"]}>
                                <p>Sharing Brilliance, one Snippet at a Time!</p>
                            </div>
                            <div className={styles["image-div"]}>
                                <img src={baiya} alt="" />
                            </div>
                            <div className={styles["contact-us"]}>
                                <div>
                                    <p>
                                        Got a Question ? <FontAwesomeIcon icon={faEnvelope} />{" "}
                                        <span>advik.singh@zohocorp.com</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}

function ShowError({ msg }) {
    return (
        <Alert type="error" closable showIcon message={msg} className={styles["ant-alert-error"]} />
    );
}

export default Login;
