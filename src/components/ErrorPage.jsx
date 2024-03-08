import styles from "../styles/errorpage.module.css";
import errorImage from '../assets/404.svg';
import logo from '../assets/logo.png';

function ErrorPage(){
    return (
        <section className={styles['error-page']}>
                <div className={styles['logo-name-your-snippet']}>
                    <div className={styles["logo-name"]}>
                        <img src={logo} alt="snippet-logo"/>
                        <p>Snippet Share</p>

                    </div>
                    <div className={styles["button-div"]}><button>Your Snippet</button></div>
                </div>
                <img src={errorImage}  className={styles["error-image"]} alt="error-image"/>
                <div className={styles['error-content']}>
                    
                   <h2>The <span>Snippet</span> you are looking for doesn't exist</h2>
                   <p>You may mistyped the address or the  <span>Snippet</span> may have moved.</p>
                   <button>Go To Home</button>
                </div>
    



        </section>
    )
}

export default ErrorPage;