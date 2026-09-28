
import Aunt from "./Aunt";
import Father from "./Father";
import Uncle from "./Uncle";



const GrandPa = () => {
    return (
        <div >
            <h2>Grandpa</h2>
            <section className="flex">
                <Father></Father>
                <Uncle></Uncle>
                <Aunt></Aunt>
            </section>
        </div>
    );
};

export default GrandPa;