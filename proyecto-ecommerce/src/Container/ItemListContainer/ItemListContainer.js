import './ItemListContainer.css';
import ItemList from "../../components/ItemList/ItemList";
import { useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import { getFetch, } from "../../data/data";



const ItemListContainer = ({greeting = 'WE GO GYM MUSCLE SHOP'}) => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const {id} = useParams()

    useEffect(() => {
        if (id){
            getFetch()
            .then(resp=> setProductos(resp.filter((prods) => prods.categoria === id)))
            .catch((err)=> console.log(err))
            .finally(() => setLoading(false));
        } else {}
            getFetch()
            .then(resp => setProductos(resp))
            .catch((err)=> console.log(err))
            .finally(() => setLoading(false));
    }, [id]);



    return (
            <div>
                <h1>{greeting}</h1>
                {loading ? (<h2>Cargando productos..</h2>) : (<ItemList productos={productos}/>)}
            </div>
    )
}

export default ItemListContainer;