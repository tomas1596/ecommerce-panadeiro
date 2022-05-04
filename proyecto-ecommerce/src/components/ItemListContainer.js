import './styles/ItemListContainer.css';

const ItemListContainer = ({greeting = 'WE GO GYM MUSCLE SHOP'}) => {

    return (
            <div>
                <h1>{greeting}</h1>
            </div>
    )
}

export default ItemListContainer;