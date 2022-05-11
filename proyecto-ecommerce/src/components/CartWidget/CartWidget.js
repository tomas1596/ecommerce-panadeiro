import './CartWidget.css';

const CartWidget = () => {
    return(
        <div className="cart-widget">
            <div className="quantity">0</div>
            <i class="fa-solid fa-cart-shopping fa-flip-horizontal fa-2x"></i>
        </div>
    )
}

export default CartWidget;