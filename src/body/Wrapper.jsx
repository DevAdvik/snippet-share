import Section1 from "./Section1/Section1.jsx";
import Section2 from "./Section2/Section2.jsx";
function Wrapper() {
    const Style = {
        display: "flex",
        width: "100%"
    };
    return(
        <section style={Style}>
            <Section1 />
            <Section2 />
        </section>
    )
}

export default Wrapper;
