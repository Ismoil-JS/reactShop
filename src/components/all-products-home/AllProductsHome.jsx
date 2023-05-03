import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { CardBtnLink } from "../../utils/Components";
import { BsCart, BsHandIndexThumb, BsHeart, BsHeartFill } from "react-icons/bs";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.scss";
import  "./AllProductsHome.scss";
import { useEffect, useState } from "react";
import { Navigation, Autoplay } from "swiper";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import instance from "../../api/axios";

const AllProductsHome = () => {
  const storeData = useSelector(state => state);
  console.log(storeData);
  const dispatch = useDispatch();
  const [allProductsData, setAllProductsData] = useState([]);
  useEffect(() => {
    instance("/category/category-reel", {
    })
      .then((response) => setAllProductsData(response.data))
      .catch((err) => console.error(err));
  }, []);


  const likeProduct = (product) => {
    // dispatch
    dispatch({ product, type: "LIKE_PRODUCT" })
  }

  const dislikeProduct = (id) => {
    dispatch({id, type: "DISLIKE_PRODUCT"})
  }


  return (
    <div className="allproducts">
      {allProductsData
        .slice(0, allProductsData.length - 1)
        .map((categoryItem, id) => (
          <div className="allProductMainDiv" key={id}>
            <h2>{categoryItem.categoryName_uz}</h2>
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
              key={id}
            >
              {categoryItem.allRefinedProducts.map((product) => (
                <SwiperSlide key={product._id}>
                  {storeData.likedProducts.find(i => i?._id === product?._id) ? <BsHeartFill onClick={() => dislikeProduct(product?._id)} className="product__like fill-hearticon"/> : <BsHeart className="product__like" onClick={() => likeProduct(product)}/>}
                  <Link
                    className="productLink"
                    to={`/product/${product._id}`}
                  >
                    <div className="productCard">
                        <img src={product.productImages[0]} alt="" />
                        <h3>{storeData.lang  === "uz" ? product.productName_uz : product.productName_ru}</h3>
                        <span>
                          {`${product.productMainCategory_uz} > ${product.productSubCategory_uz}`}
                        </span>
                      <div>
                      <strong>
                        {product.productSizesAndQuantity.length > 1 ?
                        `${product.productSizesAndQuantity[0].price} СУМ - ${product.productSizesAndQuantity[product.productSizesAndQuantity.length - 1].price} СУМ`
                        :  
                        `${product.productSizesAndQuantity[0].price} СУМ`
                      }
                      </strong>
                      {product.productSizesAndQuantity.length > 1 ?
                          <CardBtnLink
                          icon={<BsHandIndexThumb />}
                          text="Tanlash"
                          link="/"
                        /> :

                        <CardBtnLink
                        icon={<BsCart />}
                        text="Savatga qo'shish"
                        link="/"
                      />
                      }
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
    </div>
  );
};

export default AllProductsHome;
