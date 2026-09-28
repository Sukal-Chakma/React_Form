import { useState } from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";


const ProductManagement = () => {

    const [products, setProducts] = useState([]);

    const handleAddproduct = newProduct =>{
        const newProducts = [...products, newProduct];
        setProducts(newProducts)
    }

    return (
        <div>
            <ProductForm handleAddproduct={handleAddproduct}></ProductForm>
            <ProductTable products={products}></ProductTable>
        </div>
    );
};

export default ProductManagement;