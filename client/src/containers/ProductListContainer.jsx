import { useState, useEffect } from "react";
import ItemProduct from "../Item/ItemProduct";

const ProductListContainer = () => {
    const [listProduct, setListProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:8080/api/productos',{
            method:"GET",
            mode:"cors"
            })
            .then(res=>res.json())
            .then(res=>setListProduct(res))
            .catch(res=>console.log(res))
    },[listProduct])

    return (
        <>
            <h2> Lista de productos</h2>
            {listProduct.map(item =><ItemProduct item={item} key={item.id}/> )}
        </>
    );
}
 
export default ProductListContainer;