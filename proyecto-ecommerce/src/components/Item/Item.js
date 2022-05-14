import ItemCount from "../ItemCount/ItemCount"
import './Item.css';
import { Link } from "react-router-dom";

function Item({id, img, name, price, stock}) {
    return (
        <div className="card-container">
            
            <div className="card-body text-dark"><Link to={`/detail/${id}`} className="link">
                <img className="card-img" src={img} alt={name}></img>  
                <div className="pt-2">
                    <div>{name} </div>
                    <div>{price} </div>
                    <div>Stock: {stock}</div>
                </div></Link>
                <div>
                    <ItemCount stock={stock} initial={1} onAdd={(count)=> alert(`Agregaste ${count} producto/s a tu carrito.`)}/>
                    <Link to={`/detail/${id}`}><button className="btn btn-secondary btn-block w-75 mt-1">Detalle del producto</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Item;