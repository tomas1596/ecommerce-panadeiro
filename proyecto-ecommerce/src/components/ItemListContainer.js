import './styles/ItemListContainer.css';

const ItemListContainer = ({greeting = 'WE GO GYM MUSCLE SHOP'}) => {
    return (
        <div>
            <h1>{greeting}</h1>
            <h2>{greeting}</h2>
            <h3>{greeting}</h3>
        </div>
    )
}

export default ItemListContainer;