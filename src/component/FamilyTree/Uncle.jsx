import Cousin from "./Cousin";


const Uncle = () => {
    return (
        <div>
            <h3>Uncle</h3>
            <section className="flex">
                <Cousin name='Prapti'></Cousin>
                <Cousin name='Pohela'></Cousin>
            </section>
        </div>
    );
};

export default Uncle;