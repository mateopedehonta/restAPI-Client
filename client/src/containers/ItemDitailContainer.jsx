import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import AddCart from "../component/AddCart";

const ItemDitailContainer = () => {
    const [product, setProduct] = useState([])
    const {id} = useParams()
    useEffect(() => {
        fetch(`http://localhost:8080/api/productos/${id}`,{
            method:"GET",
            mode:"cors"
            })
            .then(res=>res.json())
            .then(res=>setProduct(res))
            .catch(res=>console.log(res))
    },[id])
    const { codigo, description, name, price, stock, timestamp, url } = product
    return  (
        <li>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{price}</p>
            <p>{stock}</p>
            <p>{timestamp}</p>
            <p>{url}</p>
            <p>{codigo}</p>
            <AddCart product={product}/>
        </li>
    )
}

export default ItemDitailContainer;