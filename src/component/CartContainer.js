import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <section className='cart'>
        <h2>Your bag</h2>
        <h4 className='empty-cart'>is currently empty</h4>
      </section>
    );
  }

  return (
    <section className='cart'>
      <header>
        <h2>your bag</h2>
      </header>
      <div className=''>
        {cartItems.map((cartItem) => {
          return <CartItem key={cartItem.id} {...cartItem} />;
        })}
      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className='btn clear-btn'>Clear cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;
