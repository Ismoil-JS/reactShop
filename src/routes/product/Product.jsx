import React, { useEffect, useState } from 'react'
import axios from 'axios'
import c from "./Product.module.scss"
import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const Product = () => {
  const { id } = useParams()
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [counter, setCounter] = useState(1);
  const [productInfo, setProductInfo] = useState(null)
  const data = useSelector(state => state)
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch()


  useEffect(() => {
    axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then(response => {
        setProductInfo(response.data)
      })
  }, [id])

  useEffect(() => {
    axios.get("https://api.escuelajs.co/api/v1/products")
      .then(response => {
        setProduct(response.data)
      })
  }, [])


  function increasement() {
    setCounter(counter + 1);
  }

  function decreasement() {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  }

  const addToCardProduct = (product) => {
    dispatch({ product, type: "Carded" })
  }
  const removeCardProduct = (id) => {
    dispatch({ id, type: "unCarded" })
  }

  return (
    <div>
      <h3><Link to="/" style={{ textDecoration: "none" }}>Main Page</Link> &#62; <Link to="/category" style={{ textDecoration: "none" }}>Category Page</Link></h3>
      <div className={c.singleProduct}>
        <div>
          <img className={c.mainImage} src={productInfo?.images[activeImageIndex]} alt="" />
          <div className={c.absoluteSubImage}>{productInfo?.images?.map((image, indx) => (
            <img className={c.subPhoto}
              style={
                indx === activeImageIndex
                  ? { border: "2px solid dodgerblue" }
                  : { border: "0px   solid transparent" }}
              width={100}
              src={image}
              alt=""
              onClick={() => setActiveImageIndex(indx)}
            />
          ))}</div>
        </div>
        <div className={c.singleProductInfo}>
          <h3> Category:  {productInfo?.category.name}</h3>
          <h2>Name: {productInfo?.title}</h2>
          <strong>Price: ${productInfo?.price}</strong>
          <p> <b>Description: </b>   {productInfo?.description}</p>
          <div className={c.calculateCounter}>
            <i className="fas fa-minus" onClick={decreasement}></i>
            <strong>{counter}</strong>
            <i className="fas fa-plus" onClick={increasement} ></i>
          </div>
          <h2 className={c.calculateCounterSum}>All price: $ {counter * productInfo?.price}</h2>
          {data.cardedProducts?.find(i => i.id === productInfo?.id) ? <button onClick={() => removeCardProduct(productInfo?.id)} style={{ width: "155px", height: "45px", background: "blue", border: "none", borderRadius: "25px", color: "white" }}> Remove from Card</button> :
            <button onClick={() => addToCardProduct(productInfo)} style={{ width: "155px", height: "45px", background: "blue", border: "none", borderRadius: "25px", color: "white" }}> Add to Card</button>}

        </div>
      </div>

      <div className={c.products}>
        {product?.map(a =>
          <Link to={`/product/${a.id}`} style={{ textDecoration: "none" }}> <div className={c.productCard}>
            <img src={a.images[0]} alt='productImages' />
            <h3>${a.price}</h3>
          </div></Link>
        )}
      </div>
    </div>
  )
}

export default Product

