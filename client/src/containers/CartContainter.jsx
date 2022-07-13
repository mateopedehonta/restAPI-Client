import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ItemCartProduct from "../Item/ItemCartProduct";

const CartContainter = () => {
    const [productCart, setProductCart] = useState([])
    const {idCart} = useParams()
    useEffect(() => {
        fetch(`http://localhost:8080/api/carrito/${idCart}/productos`,{
            method:"GET",
            mode:"cors"
            })
            .then(res=>res.json())
            .then(res=>setProductCart(res))
            .catch(res=>console.log(res))
    },[productCart])
    
    const deleteCart=() =>{
        fetch(`http://localhost:8080/api/carrito/${idCart}`,{
            method:"delete",
            mode:"cors"
            })
            .then(res=>{
                console.log('carrito eliminado')
                setProductCart([])
            })
            .catch(res=>console.log(res))
    }
    // console.log(productCart);
    return ( <>
    <h1>Productos agregados al carrito</h1>
    
    {
        productCart.length === 0?
        <div>
            <h2>No hay productos en el carrito</h2>
            <Link to={'/'}> Ver productos</Link>
        </div>
        :
        <div>
            <button onClick={deleteCart}> Eliminar carrito</button>
            {productCart.map(item=> <ItemCartProduct item={item} key={item.id}/>)}
        </div>
       
    }
    </> );
}

export default CartContainter;