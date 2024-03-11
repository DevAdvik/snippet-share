import { signUpWithEmail, signInWithGoogle } from "./Auth";

import logo from "../assets/snippetSphere.svg";
import styles from "../styles/signup.module.css";
import baiya from "../assets/baiya.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./Auth";
import { useAuthState } from "react-firebase-hooks/auth";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [showError, setShowError] = useState(false);
    const [passwordIcon, setPasswordIcon] = useState(faEye);
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    if (user) {
        navigate("/snippets");
    }

    function authenticateUser() {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (name.length === 0) {
            setErrorMessage("Enter your name");
            setShowError(true);
            return;
        } else if (email.length === 0) {
            setErrorMessage("Enter your email");
            setShowError(true);
            return;
        } else if (!emailRegex.test(email)) {
            setErrorMessage("Invalid email address");
            setShowError(true);
            return;
        } else if (!password.length >= 8) {
            setErrorMessage("Password should contain atleast 8 characters");
            setShowError(true);
            return;
        }

        signUpWithEmail(email, password, name).then(() => {
            navigate("/snippets");
        });
    }
    function InputTypeChanger(ev) {
        let closestInput = ev.target.closest("div").querySelector("Input");
        if (passwordIcon === faEye) {
            closestInput.type = "text";
            setPasswordIcon(faEyeSlash);
        } else if (passwordIcon === faEyeSlash) {
            closestInput.type = "password";
            setPasswordIcon(faEye);
        }
    }

    return (
        <section className={styles["snippet-share-signup-page"]}>
            <section className={styles["snippet-share-signup-page-container"]}>
                <div className={styles["signup-email-password-content"]}>
                    <div className={styles["signup-email-password-content-inside-alignment-div"]}>
                        <div className={styles["logo-and-image"]}>
                            <img className={styles["logo-image"]} src={logo} alt="logo" />
                            <p>Snippet Sphere</p>
                        </div>
                        <div className={styles["Welcome-back-description"]}>
                            <h1>Welcome! </h1>
                            <p>Create a new account</p>
                        </div>
                        <div className={styles["Alert-box-authentication"]}>
                            {showError && <p>{errorMessage}</p>}
                        </div>
                        <div className={styles["email-password-signup-button"]}>
                            <div className={styles["username-input-div"]}>
                                <p>Your name:</p>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(ev) => {
                                        setName(ev.target.value);
                                        setShowError(false);
                                    }}
                                />
                            </div>
                            <div className={styles["email-input-div"]}>
                                <p>Email</p>
                                <input
                                    type="text"
                                    value={email}
                                    onChange={(ev) => {
                                        setEmail(ev.target.value);
                                        setShowError(false);
                                    }}
                                />
                            </div>
                            <div className={styles["password-input-div"]}>
                                <p>Password</p>
                                <div className={styles["password-input-parent-div"]}>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(ev) => {
                                            setPassword(ev.target.value);
                                            setShowError(false);
                                        }}
                                    />
                                    <FontAwesomeIcon
                                        icon={passwordIcon}
                                        onClick={(ev) => {
                                            InputTypeChanger(ev);
                                        }}
                                        className={styles["eye-icon"]}
                                    />
                                </div>

                                <div className={styles["Already"]}>
                                    <p>
                                        Already have an account?{" "}
                                        <span
                                            onClick={() => {
                                                navigate("/login");
                                            }}
                                        >
                                            Login
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <button
                                className={styles["signup-button"]}
                                type="button"
                                onClick={authenticateUser}
                            >
                                Sign-up
                            </button>
                            <div className={styles["signup-with-google"]}>
                                <div className={styles["continue-with-google"]}>
                                    <p></p>
                                    <div>Or</div>
                                    <p></p>
                                </div>
                                <div className={styles["google-signup-div"]}>
                                    <div
                                        className={styles["content"]}
                                        onClick={async () => {
                                            signInWithGoogle().then(() => {
                                                navigate("/snippets");
                                            });
                                        }}
                                    >
                                        Continue with{" "}
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
                <div className={styles["signup-image-add-content"]}>
                    <div className={styles["signup-image-add-content-inner-alignment-div"]}>
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
    );
}

export default Signup;
