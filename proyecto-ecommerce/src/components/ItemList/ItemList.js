import Item from "../Item/Item"

function ItemList({productos}) {

    return (
        <div className="d-flex flex-wrap col-5 col-lg-12 w-50 mx-auto justify-content-center justify-content-lg-evenly">
            {productos.map(item => 
            <Item key={item.id} {...item}/>)}
        </div>
    )
}

export default ItemList;