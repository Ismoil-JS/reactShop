import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import c from "./Like.module.scss";

const Like = () => {
  const dispatch = useDispatch();
  const storeData = useSelector(state => state);

  const dislikeProduct = (id) => {
    dispatch({ id, type: "DISLIKE_PRODUCT" })
  }

  const productPrices = storeData.likedProducts.map(i => Number(i.price));
  const total = productPrices.reduce((a, b) => a + b, 0)
  console.log(storeData.likedProducts);
  return (
    <div>
      <h2>Sum of prize: $ {total}</h2>
      {
        storeData?.likedProducts?.map(product =>
          <div className={c.singleProduct}>
            <div>
              <img className={c.mainImage} src={product?.images[0]} alt="" />
            </div>
            <div className={c.singleProductInfo}>
              <h3> Category:  {product?.category.name}</h3>
              <h2>Name: {product?.title}</h2>
              <strong>Price: ${product?.price}</strong>
              <p> <b>Description: </b>   {product?.description}</p>
              <button onClick={() => dislikeProduct(product.id)} style={{ width: "155px", height: "45px", background: "blue", border: "none", borderRadius: "25px", color: "white" }}> Remove from Card</button>
            </div>
          </div>

        )
      }
    </div>
  )
}

export default Like