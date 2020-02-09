import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ShowImage from './ShowImage';
import moment from 'moment';
import { addItem, updateItem, removeItem } from './cartHelpers';

const Card = ({
  product,
  showViewProductButton = true,
  showAddToCartButton = true,
  cartUpdate = false,
  showRemoveProductButton = false,
  setRun = f => f,
  run = undefined
  // changeCartSize
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

  const showViewButton = showViewProductButton => {
    return (
      showViewProductButton && (
        <Link to={`/product/${product._id}`} className="mr-2 d-flex justify-content-center" style={{textDecorationLine:'none'}}>
          <button className="btn btn-outline-success mt-2 mb-2 card-btn-1" style={{width:200}}>Chi tiết sản phẩm</button>
        </Link>
      )
    );
  };
  const addToCart = () => {
    // console.log('added');
    addItem(product, setRedirect(true));
  };

  const shouldRedirect = redirect => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCartBtn = showAddToCartButton => {
    return (
      showAddToCartButton && (
        <div className="mr-2 d-flex justify-content-center">
          <button onClick={addToCart} className="btn btn-outline-warning mt-2 mb-2 card-btn-1  " style={{width:200}}>
            Thêm vào giỏ hàng
          </button>
        </div>
      )
    );
  };

  const showStock = quantity => {
    return quantity > 0 ? (
      <span className="badge badge-primary badge-pill">Còn hàng </span>
    ) : (
      <span className="badge badge-primary badge-pill">Hết hàng </span>
    );
  };

  const handleChange = productId => event => {
    setRun(!run); // run useEffect in parent Cart
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      updateItem(productId, event.target.value);
    }
  };

  const showCartUpdateOptions = cartUpdate => {
    return (
      cartUpdate && (
        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Số lượng</span>
            </div>
            <input type="number" className="form-control" value={count} onChange={handleChange(product._id)} />
          </div>
        </div>
      )
    );
  };
  const showRemoveButton = showRemoveProductButton => {
    return (
      showRemoveProductButton && (
        <div  className="mr-2 d-flex justify-content-center">
          <button 
            onClick={() => {
            removeItem(product._id);
            setRun(!run); // run useEffect in parent Cart
            }}
            className="btn btn-outline-danger mt-2 mb-2 card-btn-1  " style={{width:200}}
          >
            Xóa sản phẩm
          </button>
        </div>
        
      )
    );
  };
  return (
    <div className="card show ">
      <h5 className="card-header card-header-1 d-flex justify-content-center d-flex align-items-center text-center">{product.name}</h5>
      <div className="card-body">
        {shouldRedirect(redirect)}
        <ShowImage item={product} url="product"/>
        <p className="card-p nameproduct  mt-2">{product.description.substring(0, 35)}... </p>
        <p className="card-p black-10">Giá: {product.price} VND</p>

        {showViewButton(showViewProductButton)}

        {showAddToCartBtn(showAddToCartButton)}

        {showRemoveButton(showRemoveProductButton)}

        {showCartUpdateOptions(cartUpdate)}
      </div>
    </div>
  );
};

export default Card;
