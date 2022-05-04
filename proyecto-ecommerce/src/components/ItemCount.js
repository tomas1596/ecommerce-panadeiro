import './styles/ItemCount.css'
import React, { useState } from 'react';

function ItemCount() {
    const stock = 5
    const[count, setcount] = useState(1);
    function onAdd(){
        if(count < stock){
            setcount(count + 1)
        }else{
            alert("No hay stock suficiente")
        }
    }

    function onRemove(){
        if(count > 1){
            setcount(count - 1)
        }else{
        }
    }

    function cartAdd(){
        if(stock > 1){
            alert("Producto agregado al carrito")
        }else{
        }
    }

    return (
        <div>
            <h2>Productos</h2>
            <div className="pt-2 card-count text-white mx-auto">
                <div className="d-flex justify-content-evenly pb-2">
                    <button className="btn btn-primary count-btn1" onClick={onRemove}>-</button>
                    <h4>{count}</h4>
                    <button className="btn btn-primary count-btn2" onClick={onAdd}>+</button>
                </div>
                    <button type="button" className="btn btn-primary cart-btn mx-auto" onClick={cartAdd}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount; 