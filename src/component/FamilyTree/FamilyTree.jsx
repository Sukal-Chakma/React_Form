import GrandPa from "./GrandPa";
import "./FamilyTree.css"
import { createContext, useState } from "react";

export const AssetsContext = createContext('');
export const MoneyContext = createContext(0)
const assets = "Diamond";

const FamilyTree = () => {

    const [money, setMoney] = useState(0)
    return (
        <div className="family-tree">

            <h1>Family Tree</h1>
            <h3>Total Family assets: {money}</h3>
            <MoneyContext value={[money, setMoney]}>
                <AssetsContext.Provider value={assets}>
                    <GrandPa></GrandPa>
                </AssetsContext.Provider>
            </MoneyContext>
        </div>
    );
};

export default FamilyTree;