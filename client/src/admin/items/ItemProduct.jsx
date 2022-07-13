import { useState } from "react";

const ItemProduct = ({item}) => {
    const { name,description,price,stock,url,timestamp,id } = item

    const [producto, setProducto] = useState({name,description,price,stock,url,timestamp,id})

    const agregarDato =(e)=>{
        setProducto({
            ...producto,
            [e.target.name] : e.target.value
        })
    }

    // const { id, name } = item
    const deleteProducto  = ()=>{
        console.log(`Procuto eliminado id:${id}`);
        fetch(`http://localhost:8080/api/productos/${id}`,{
            method:"delete",
            mode:"cors"
            })
            .then(res=>{
                console.log('Producto eliminado')
            })
            .catch(res=>console.log(res))
    }
    const editProduct  = (e)=>{
        e.preventDefault()
        // console.log(producto);
        // console.log(`Procuto eliminado id:${id}`);
        fetch(`http://localhost:8080/api/productos/${id}`,{
            method:"put",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(producto)
            })
            .then(res=>{
                console.log('Producto editado')
            })
            .catch(res=>console.log(res))

    }
    return(
        <li>
            <h3>{name}</h3>
            <p>id: {id}</p>
            <form className="form" onSubmit={editProduct}>
                <input type="text" value={producto.name} name="name" onChange={agregarDato}/>
                <input type="text" value={producto.description} onChange={agregarDato} name="description" />
                <input type="number" value={producto.price} onChange={agregarDato} name="price"/>
                <input type="number" value={producto.stock} onChange={agregarDato} name="stock"/>
                <input type="text" value={producto.url} onChange={agregarDato} name="url"/>
                <input type="submit" value="Editar producto" />
            </form>
            <button onClick={deleteProducto}>Eliminar producto</button>
        </li>
    );
}
export default ItemProduct;