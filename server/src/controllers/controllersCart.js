const fs = require("fs")
const { v4: idv4 } = require('uuid');
const dbpath = './src/db/cart.json'


const createCart = (req,res)=>{
    const newCart = {
        id:idv4(),
        timestamp:Date.now(),
        products:[]
    }
    fs.promises.readFile(dbpath,'utf8')
        .then(listCarts => {
        const listCartsJson = JSON.parse(listCarts)
        listCartsJson.push(newCart)
        fs.promises.writeFile(dbpath,JSON.stringify(listCartsJson,null,2))
                .then(e=> res.send(newCart.id))
                .catch(err=>console.log('error: ',err))
    })
}
const allCart = (req,res)=>{
    fs.promises.readFile(dbpath,'utf8')
        .then(cart => {
        const cartJson = JSON.parse(cart)
        res.send(cartJson)
    })
}

const deleteCart = (req,res)=>{
    console.log('delete cart')
    const id = req.params.id
    fs.promises.readFile(dbpath,'utf8')
    .then(listCarts=>{
        const listCartsJson = JSON.parse(listCarts)
        const newListCartJson = listCartsJson.filter(item=>item.id !== id )
        fs.promises.writeFile(dbpath,JSON.stringify(newListCartJson,null,2))
            .then(e=> res.send('carrito eliminado'))
            .catch(err=>console.log('error: ',err))
    })
}

const getAllProductsCart = (req,res)=>{
    const id = req.params.id
    fs.promises.readFile(dbpath,'utf8')
        .then(cart => {
        const cartJson = JSON.parse(cart)
        res.send(cartJson.find( item => item.id === id ).products)
    })
}

const addProductsCart = (req,res)=>{
    const {name,description,price,stock,url,timestamp,id} = req.body.product
    const idUrl = req.params.id
    fs.promises.readFile(dbpath,'utf8')
    .then(cart => {
        const cartJson = JSON.parse(cart)
        console.log('producto agregado')
        cartJson.find( item => item.id === idUrl ).products.push({
            name,description,price,stock,url,timestamp,id
        })
        fs.promises.writeFile(dbpath,JSON.stringify(cartJson,null,2))
                .then(e=> res.send(`Producto agregado`))
                .catch(err=>console.log('error: ',err))
     })
}

const deleteProductCart = (req,res)=>{
    const { idProduct, id } = req.params
    fs.promises.readFile(dbpath,'utf8')
        .then(listCarts => {
        const listCartJson = JSON.parse(listCarts)
        const cart = listCartJson.find( item => item.id === id )
        // item.idProduct !== idProduct
        const filterProductCart = cart.products.filter( item =>item.id !== idProduct)
        const cartFilter = listCartJson.filter( item => item.id !== id )
            cart.products = filterProductCart
            cartFilter.push(cart)
            // console.log(filterProductCart)
            // console.log(cartFilter)
        fs.promises.writeFile(dbpath,JSON.stringify(cartFilter,null,2))
                .then(e=> {
                    res.send("Producto eliminado")
                    // console.log(`Producto id${idProduct} de carrito id ${id} eliminado`)
                })
                .catch(err=>console.log('error: ',err))
    })
}

module.exports = {createCart,allCart,getAllProductsCart,deleteCart,addProductsCart,deleteProductCart}