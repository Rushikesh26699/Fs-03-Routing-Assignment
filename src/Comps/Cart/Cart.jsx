import { useContext, useEffect } from "react";
import myContext from "../../Context/Context";
import "./Cart.css";

function Cart() {
  const { cart, setCart } = useContext(myContext);

  useEffect(() => {
    console.log(cart);
  });

  const removeItems = (index) => {
    const item = [...cart];
    item.splice(index, 1);
    setCart(item);
  };

  return (
    <div>
      {cart.length === 0 ? (
        <div className="emptycart"><h1>CART EMPTY</h1><p>Add Items To Cart</p></div>
      ) : (
        <div>
          {cart.map((item, index) => {
            return (
              <div className="cart">
                <img src={item.image} alt="" height="100px" width="100px" />
                <h2>{item.title}</h2>
                <p>Rs {item.price} /-</p>
                <button
                  id="btn-2"
                  onClick={() => {
                    removeItems(index);
                  }}
                >
                  REMOVE
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Cart;
