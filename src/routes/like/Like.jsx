import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { BsHeart, BsHeartFill } from "react-icons/bs";


const Like = () => {
  const dispatch = useDispatch();
  const storeData = useSelector(state => state);
  console.log(storeData);
  const likeProduct = (product) => {
    // dispatch
    dispatch({ product, type: "LIKE_PRODUCT" })
  }

  const dislikeProduct = (id) => {
    dispatch({id, type: "DISLIKE_PRODUCT"})
  }

  const productPrices = storeData.likedProducts.map(i => +i.productSizesAndQuantity[0].price);
  const total = productPrices.reduce((a, b) => a + b, 0)
  
  return (
    <div>
      {
        storeData.likedProducts.map(product=>
          <div style={{position: "relative"}}> 
            {storeData.likedProducts.find(i => i?._id === product?._id) ? <BsHeartFill onClick={() => dislikeProduct(product?._id)} className="product__like fill-hearticon"/> : <BsHeart className="product__like" onClick={() => likeProduct(product)}/>}
            <img src={product?.productImages[0]} alt="" />
            <h3>{product?.productName_uz}</h3>
          </div>  
        )
      }
      <h3>{total}UZS</h3>
    </div>
  )
}

export default Like