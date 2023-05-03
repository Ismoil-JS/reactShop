import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import c from "./Product.module.scss";
import instance from "../../api/axios";

const Product = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
 const [counter, setCounter] = useState(1);
  useEffect(() => {
    instance(
      `/product/single-product/${id}`,
      {
        timeout: 10000,
      }
    )
      .then((response) => setData(response.data))
      .catch((err) => console.error(err));
  }, [id]);

  function increasement(){
      setCounter(counter + 1);
  }

  function decreasement(){
    if(counter > 1){
      setCounter(counter - 1);
    }
  }

  return (
    <div className={c.singleProduct}>
    <div >
      {data ? (
        <img className={c.mainImage}
          src={data?.singleProduct[0]?.productImages[activeImageIndex]}
          alt=""
        />
      ) : (
        <></>
      )}
      <br />
      {data?.singleProduct[0]?.productImages.map((image, indx) => (
        <img className={c.subPhoto}
          style={
            indx === activeImageIndex
              ? { border: "2px solid dodgerblue" }
              : {border: "0px   solid transparent"} }
          width={100}
          src={image}
          alt=""
          onClick={() => setActiveImageIndex(indx)}
        />
      ))}
    </div>
    <div className={c.singleProduct.Info}>
      { data?.singleProduct ? (<h2 className={c.productName}>{data?.singleProduct[0].productName_uz}</h2>
      ) : (<></>)
      }
      {  
      <div className={c.categoryName}>
        <h2 className={c.productCategory}>{data?.singleProduct[0]?.productMainCategory_uz}</h2>
        {">"}
        <h2 className={c.productCategory}>{data?.singleProduct[0]?.productSubCategory_uz}</h2>
      </div>
      }
       {  
      <div className={c.categoryName}>
        <h2 className={c.productLimit}> Омборда: {data?.singleProduct[0]?.productSizesAndQuantity.length}</h2>
        <h2>Ўлчам:</h2>
        <select className={c.productType}> 
          {data?.singleProduct[0]?.productSizesAndQuantity?.map(size => 
            <option >{size.size}</option>
            )}
          </select>
      </div>
      }
      {
        <div>
          <h2 className={c.productPrice}>{data?.singleProduct[0]?.productSizesAndQuantity[0].price} CУМ</h2>
        </div>
      }
      {
        <ul className={c.productDescription}>
          {data?.singleProduct[0]?.productDescription_uz?.map(description => 
            <li >{description}</li>
            )}
        </ul>
      }
      {
        <div className={c.calculateSum}>
          <div className={c.calculateName}>
            <h2>Cони:</h2>
            <h3>Умумий нархи:</h3>
          </div>
          <div className={c.calculateColumn}>
            <div className={c.calculateCounter}>
              <i className="fas fa-minus" onClick={decreasement}></i>
              <strong>{counter}</strong>
              <i className="fas fa-plus" onClick={increasement} ></i>
            </div>
            <h2  className=  {c.calculateCounterSum}>{ counter * data?.singleProduct[0]?.productSizesAndQuantity[0].price} CУМ</h2>
            <h2 className={c.calculateShopCart}> <i className="fas fa-cart-shopping"></i> Саватга қўшиш</h2>
          </div>
        </div>
      }
    </div>
    
    
    </div>
  );
};

export default Product;

