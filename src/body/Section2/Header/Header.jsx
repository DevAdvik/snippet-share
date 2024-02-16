import profilePic from './Profile.png';
import styles from './Header.module.css';
function Header() {
    return(
        <div className={styles.header}>
            <h3>Snippet Sphere</h3>
            <img src={profilePic} alt="Not" width={"30px"}/>
        </div>
    )
}

export default Header;