import FormProduct from "../admin/FormProduct/FormProduct";
import ProductListContainerAdmin from "../admin/componets/ProductListContainerAdmin";

const ApiContainer = () => {
    return (
        <div className="form">
        <FormProduct/>
        <ProductListContainerAdmin/>
        </div>
    )
}

export default ApiContainer;