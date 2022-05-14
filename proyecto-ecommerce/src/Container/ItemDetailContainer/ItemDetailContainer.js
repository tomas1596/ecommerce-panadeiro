import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFetch } from "../../data/data";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

    const [productos, setProductos] = useState({});
    const [loading, setLoading] = useState(true);
    const {IdDetail} = useParams()

    useEffect(() => {
        setTimeout(() => {
            getFetch(IdDetail)
            .then(resp=> setProductos(resp))
            .catch((err)=> console.log(err))
            .finally(() => setLoading(false)) 
        }, 1000)    
    },[IdDetail])

    console.log(productos)

    return (
        <div>
            {loading ? (<h2 className='mt-5'>Cargando detalles..</h2>) : (<ItemDetail productos={productos}/>)}
        </div>
    )
}

export default ItemDetailContainer;