import React from 'react';
import { useState } from 'react';
import { FiSearch } from "react-icons/fi";
import { Link } from 'react-router-dom';
import c from "./Search.module.scss";
import axios from 'axios';

const Search = () => {
  const [inputText, setInputText] = useState("")
  const [searchData, setSearchData] = useState(null);

  const searchProduct = (e) => {
    setInputText(e.target.value);
    e.preventDefault()
    axios.get(`https://api.escuelajs.co/api/v1/products/?title=${e.target.value}`)
      .then(response => {
        if (response.data.length > 0) {
          setSearchData(response.data)
        }
      })
      .catch(err => {
        console.log(err)
        setSearchData(null)
      })
  }
  console.log(searchData)
  return (
    <div className={c.search}>
      <div className={c.search__heading}>
        <h2>Search products</h2>
      </div>
      <div className={c.main__search}>
        <div className={c.search__wrapper}>
          <FiSearch />
          <form>
            <input onChange={searchProduct} type="text" className={c.search__input} placeholder='Search products' value={inputText} />
            <button>Search</button>
          </form>
        </div>
        {
          searchData?.length > 0 ?
            <div className={inputText === "" ?
              c.nothing :
              c.search__results} >
              <div className={c.result__nav}>
                <h3>Қидириш натижалари: <span className={c.input__txt}>#{inputText}</span></h3>
                <div>
                  <p>
                    <span>{searchData.length} Натижа</span>
                  </p>
                  <span onClick={() => {
                    setInputText("")
                    setSearchData([])
                  }} style={{ color: 'dodgerblue' }}>Бекор қилиш</span>
                </div>
              </div>

              <div>
                {inputText === "" ? <></> :
                  searchData.map(product =>
                    <div className={c.product__card__wrapper}>
                      <Link className={c.product__img} to={`/product/${product.id}`}>
                        <img src={product.images[0]} alt="Product" />
                        <span>{product.title}</span>
                      </Link>
                    </div>
                  )
                }
              </div>
            </div>
            :
            <></>
        }
      </div>
    </div>
  )
}

export default Search