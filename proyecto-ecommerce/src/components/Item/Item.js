import ItemCount from "../ItemCount/ItemCount"
import './Item.css';

function Item({name, price, img, stock}) {
    return (
        <div className="card-container">
            <div className="card-body text-dark">
                <img className="card-img" src={img} alt="Proteina"></img>  
                <div className="pt-2">{name}</div>
                <div>{price}</div>
                <ItemCount stock={stock} initial={1} onAdd={(count)=> alert(`Agregaste ${count} producto/s a tu carrito.`)}/>
            </div>
        </div>
    )
}

export default Item;