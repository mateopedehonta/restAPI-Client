// import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

const ItemProduct = ({item}) => {
    const { name, price, stock ,id} = item
    const {idCart} = useParams()
    const deleteProductCart= ()=>{
        // console.log(id);
        fetch(`http://localhost:8080/api/carrito/${idCart}/productos/${id}`,{
            method:"delete",
            mode:"cors"
            })
            .then(res=>{
                console.log('Producto eliminado')
            })
            .catch(res=>console.log(res))
    }
    return(
        <li>
            <h3>{name}</h3>
            <p>precio: {price}</p>
            <p>stock: {stock}</p>
            <p>id: {id}</p>
            <button onClick={deleteProductCart}> Eliminar producto </button>
        </li>
    );
}
export default ItemProduct;