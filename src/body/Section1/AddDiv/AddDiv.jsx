import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './AddDiv.module.css';

function AddDiv() {
    return(
        <div className={styles.addDiv}>
            <h2><FontAwesomeIcon icon={faPlus} /> Add new snippet</h2>
        </div>
    )
}
export default AddDiv;