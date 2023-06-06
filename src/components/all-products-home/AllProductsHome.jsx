import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { CardBtnLink } from "../../utils/Components";
import { BsCart } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.scss";
import "./AllProductsHome.scss";
import { useEffect, useState } from "react";
import { Navigation, Autoplay } from "swiper";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import axios from "axios";

const AllProductsHome = () => {
  const storeData = useSelector(state => state);
  const dispatch = useDispatch();
  const [allProductsData, setAllProductsData] = useState([]);

  useEffect(() => {
    axios.get("https://api.escuelajs.co/api/v1/products")
      .then(response => {
        setAllProductsData(response.data)
      })
      .catch((err) => console.error(err));
  }, [])


  const addToCardProduct = (product) => {
    // dispatch
    dispatch({ product, type: "LIKE_PRODUCT" })
  }

  const removeCardProduct = (id) => {
    dispatch({ id, type: "DISLIKE_PRODUCT" })
  }


  return (
    <div className="allproducts">
      <div className="allProductMainDiv" >
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          loop={true}
          navigation={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
          modules={[Navigation, Autoplay]}
          id="one"
        >
          {allProductsData ?

            allProductsData.map((product) => (
              <SwiperSlide key={product.id}>
                {storeData.likedProducts.find(i => i?.id === product?.id) ? <FaShoppingCart onClick={() => removeCardProduct(product?.id)} className="product__like fill-shopicon" /> : <BsCart className="product__like" onClick={() => addToCardProduct(product)} />}
                <Link
                  className="productLink"
                  to={`/product/${product.id}`}
                >
                  <div className="productCard">
                    <img src={product.images[0]} alt="" />
                    <h3>{product.title}</h3>
                    <span>
                      {`${product.category.name}`}
                    </span>
                    <div>
                      <strong>
                        {product.price + " $"}
                      </strong>
                      {storeData.likedProducts.find(i => i?.id === product?.id) ? <div onClick={() => removeCardProduct(product?.id)}> <CardBtnLink
                        onClick={() => removeCardProduct(product?.id)}
                        icon={<BsCart />}
                        text="Savatdan olib tashlash"
                      /></div> :
                        <div onClick={() => addToCardProduct(product)}>


                          <CardBtnLink

                            icon={<BsCart />}
                            text="Savatga qo'shish"
                          />
                        </div>}

                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            )) : <p>Loading...</p>}
        </Swiper>
      </div>
    </div>
  );
};

export default AllProductsHome;
