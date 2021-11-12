

const OrderBtn = () => {
    return(
        <select name=' ordenar '>
            <option disabled selected> ordernar </option>
            <option value="más recientes">más recientes</option>
            <option value="más interacciones">más interacciones</option>
        </select>
    )
}

export default OrderBtn;