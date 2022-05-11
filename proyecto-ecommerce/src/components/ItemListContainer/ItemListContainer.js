import './ItemListContainer.css';
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { productos } from "../../data/data";

const items = new Promise((resolve) => {
    setTimeout(() => {
        resolve(productos);
        }, 1500);
});

const ItemListContainer = ({greeting = 'WE GO GYM MUSCLE SHOP'}) => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    items
        .then(resp => {setProductos(resp);
        })
        .finally(() => setLoading(false));
    }, []);

    return (
            <div>
                <h1>{greeting}</h1>
                {loading ? (<h2>Cargando productos..</h2>) : (<ItemList productos={productos}/>)}
            </div>
    )
}

export default ItemListContainer;