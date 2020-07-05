import React, { FunctionComponent } from 'react';
import CartItem from 'components/CartItem';
import { Product } from 'types'

interface CartContainerProps {
  cart: Product[];
}

const CartContainer: FunctionComponent<CartContainerProps> = ({ cart = [] }) => {
  const renderCardItem = (item: Product) => (
    <CartItem key={item.id} {...item} />
  )
  
  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map(renderCardItem)}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>$0.00</span>
          </h4>
        </div>
        <button className="btn clear-btn">clear cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;