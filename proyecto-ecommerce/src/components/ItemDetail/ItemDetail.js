import ItemCount from "../ItemCount/ItemCount";
const ItemDetail = ({productos}) => {
    return (
        <div className="card-container w-25 d-flex justify-content-center align-items-center mx-auto mt-5" >
            <div className="card-body">
                <div className="">
                    <img className="" src={productos.img} alt={productos.name}/>
                </div>
                <div>
                    <h1 className="text-dark">{productos.name}</h1>
                    <h2 className="text-dark">{productos.description}</h2>
                    <p>{productos.price}</p>
                </div>
                <div className="w-75 mx-auto">
                    <ItemCount stock={productos.stock} initial={1} onAdd={(count)=> alert(`Agregaste ${count} producto/s a tu carrito.`)}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;