import { useContext } from "react";
import { AssetsContext } from "./FamilyTree";


const Special = () => {
      const assets = useContext(AssetsContext);
    console.log('Assets',assets)
    return (
        <div>
            <h4>Medam ji: {assets}</h4>
        </div>
    );
};

export default Special;