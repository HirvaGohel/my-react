import{ useSelector } from "react-redux"  
import { Link } from "react-router-dom";

const AddToCart =()=>{
  const carSelector = useSelector((state)=>state.cart.items);
  console.log(carSelector?.length);
  return(

   <div className="cart">
      <Link to="/cart" className="cart-link">
        <img 
          src="https://img.icons8.com/material-outlined/24/ffffff/shopping-cart.png" 
          className="cart-icon" 
          alt="Cart"
        />
        <span className="cart-count">{carSelector?.length}</span>
      </Link>
    </div>

    )
}
export default AddToCart