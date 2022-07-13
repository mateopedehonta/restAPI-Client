import { useState } from "react"

const FormProduct = () => {
    const [producto, setProducto] = useState({
        name:'',
        description:'',
        price:'',
        stock:'',
        url:''
    })

    const agregarDato =(e)=>{
        setProducto({
            ...producto,
            [e.target.name] : e.target.value
        })
    }


    const enviarDatos =(e)=>{
        e.preventDefault()
        fetch('http://localhost:8080/api/productos',{
                method:"POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
                })
                .then(res=>console.log(res.status))
                .catch(res=>console.log(res))
    }
    return<>
        <form className="form" onSubmit={enviarDatos} >
            <input type="text" placeholder="Nombre" onChange={agregarDato} name="name"/>
            <input type="text" placeholder="Descripcion" onChange={agregarDato} name="description" />
            <input type="number" placeholder="Precio" onChange={agregarDato} name="price"/>
            <input type="number" placeholder="Stock" onChange={agregarDato} name="stock"/>
            <input type="text" placeholder="Imagen" onChange={agregarDato} name="url"/>
            <input type="submit" value="Agregar" />
        </form>
    </>
}

export default FormProduct;