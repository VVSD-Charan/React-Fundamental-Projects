import CartItem from './CartItem';
import { useGlobalContext } from './context';
import cartItems from './data';


const CartContainer = () => {

  //Get cart data from global context
  const {cart,clearCart,totalCost,fetchData}=useGlobalContext();
  //Create shadow copy of cart items
  const cartArray = Array.from(cart.entries());

  //If there are no items in cart display "No items in cart"
  if (cartArray.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
           <div className="container" style={{textAlign:'center',marginTop:'3rem'}}>
           <button className="btn" type='button' onClick={fetchData}>Refetch cart</button>
           </div>
        </header>
      </section>
    );
  }

  //If cart items are present iterate array and display all
  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {/* Displaying cart items  */}
        {cartArray.map((cartItem) => {
          const [id,item]=cartItem;
          return <CartItem key={id} {...item} />;
        })}
      </div>

      {/* Display footer  */}
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className='cart-total'>
            total <span>${totalCost.toFixed(2)}</span>
          </h5>
        </div>
        <button
          className='btn btn-hipster'
          onClick={clearCart}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
