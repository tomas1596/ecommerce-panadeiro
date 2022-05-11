import Item from "../Item/Item"

function ItemList({productos}) {
    return (
        <div className="item-list d-flex flex-column col-5 col-lg-12 flex-lg-row mx-auto justify-content-center justify-content-lg-evenly">
            {productos.map(item => 
            <Item 
            key={item.id} 
            name={item.name}
            price={item.price} 
            img={item.imgUrl} 
            stock={item.stock}/>)}
        </div>
    )
}

export default ItemList;