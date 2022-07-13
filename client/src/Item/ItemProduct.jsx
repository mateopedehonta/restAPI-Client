import { Link } from "react-router-dom";

const ItemProduct = ({item}) => {
    const { codigo, description, name, price, stock, timestamp, url } = item
    return(
        <li>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{price}</p>
            <p>{stock}</p>
            <p>{timestamp}</p>
            <p>{url}</p>
            <p>{codigo}</p>
            <Link to={`/detalle/${item.id}`}>Mas detalles</Link>
        </li>
    );
}
export default ItemProduct;