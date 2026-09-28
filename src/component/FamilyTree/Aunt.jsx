import Cousin from "./Cousin";


const Aunt = () => {
    return (
        <div>
            <h3>Aunt</h3>
            <section className="flex">
                <Cousin name="Sumed"></Cousin>
                <Cousin name="Bijoy"></Cousin>
            </section>
        </div>
    );
};

export default Aunt;