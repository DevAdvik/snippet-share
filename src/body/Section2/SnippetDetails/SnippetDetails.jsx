import Styles from './SnippetDetails.module.css';
function SnippetDetails(){
    return(
        <div className={Styles.snippetDetails}>
            <h2>Snippet Title</h2>
            <p>Snippet content Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, quam! Ipsa qui illum fugiat non, maxime voluptatem delectus molestiae a atque! Amet beatae expedita velit esse. Quo nesciunt accusamus ad!</p>
            <p>Created by: Harish</p>
        </div>
    )
}

export default SnippetDetails;