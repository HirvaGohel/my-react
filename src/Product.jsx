import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from './redux/slice';
import { fetchProducts } from './redux/productSlice';
import { useEffect } from 'react';

const Product = () => {
  const dispatch = useDispatch();
  const productSelector = useSelector((state) => state?.products?.items);
  console.log(productSelector);

  const carSelector = useSelector((state) => state.cart.items);
  console.log(carSelector);

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])


  return (
    <div className="grid">
      {
        productSelector?.length && productSelector?.map((items)=>(
          <div key={items.id} className="card">
            <img src={items.thumbnail} />
            <div className="content">
              <div className="title">{items.title}</div>
              <div className="brand">{items.brand}</div>
              <div className="rating">{items.rating}</div>
              <div className="price">$ {items.price}</div>
              {
                carSelector.find((cartItem => cartItem.id === items.id)) ?
                <button onClick={()=>dispatch(removeItem(items))} className="btn remove-button">Remove from cart</button>
                 :
              <button onClick={() => dispatch(addItem(items))} className="btn">Add To Cart</button>

  }
            </div>
          </div>
        ))
      }
    </div>
  )
}
export default Product;