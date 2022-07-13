import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AddCart = (product) => {
    const [carts, setCarts] = useState([])
    const [urlCart, setUrlCart] = useState(undefined)
    const {id:idUrl} = useParams()
    useEffect(() => {
        fetch(`http://localhost:8080/api/carrito/`,{
            method:"GET",
            mode:"cors"
            })
            .then(res=>res.json())
            .then(res=>setCarts(res))
            .catch(res=>console.log(res))
        carts.map(item=>setUrlCart(item.id));
    },[carts])

    const addCart = ()=>{
        if (carts.length === 0) {
            createCart()
        }
        if (urlCart !== undefined){
            fetch(`http://localhost:8080/api/carrito/${urlCart}/productos`,{
                method:"POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
                })
                .then(res=>console.log(res.status))
                .catch(res=>console.log(res))
        }
    }
    const createCart = ()=>{
        fetch('http://localhost:8080/api/carrito/',{
        method:"POST"
        })
        .then(res=>res.text())
        .then(res=>{
            console.log('Nuevo carrito creado ');
        })
        .catch(res=>console.log(res))
    }
    return (<>
                {/* <button onClick={createCart}>nuevo carrito</button> */}
                <button onClick={addCart}>Agregar a carrito</button>
    </>
        );
}

export default AddCart;