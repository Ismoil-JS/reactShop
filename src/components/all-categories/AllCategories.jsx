import React, { useState } from 'react';
import c from "./AllCategories.module.scss";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from "axios";



const AllCategories = () => {
  const { t } = useTranslation();
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    axios.get("https://api.escuelajs.co/api/v1/categories")
      .then(response => {
        setCategoriesData(response.data)
      })
      .catch(err => console.error(err))
  }, [])

  const imagesForCategories = [
    "https://categories.olxcdn.com/assets/categories/olxuz/detskiy-mir-36-2x.png",
    "https://categories.olxcdn.com/assets/categories/olxuz/nedvizhimost-1-2x.png",
    "https://categories.olxcdn.com/assets/categories/olxuz/transport-3-2x.png",
    "https://categories.olxcdn.com/assets/categories/olxuz/zhivotnye-35-2x.png",
    "https://categories.olxcdn.com/assets/categories/olxuz/dom-i-sad-899-2x.png",
    "https://categories.olxcdn.com/assets/categories/olxuz/rabota-6-2x.png",
    "https://categories.olxcdn.com/assets/categories/olxuz/elektronika-37-2x.png",
    "https://categories.olxcdn.com/assets/categories/olxuz/uslugi-7-2x.png",
    "https://categories.olxcdn.com/assets/categories/olxuz/moda-i-stil-891-2x.png",
    "https://categories.olxcdn.com/assets/categories/olxuz/hobbi-otdyh-i-sport-903-2x.png",
    "https://categories.olxcdn.com/assets/categories/olxuz/otdam-darom-1151-2x.png",
    "https://categories.olxcdn.com/assets/categories/olxuz/obmen-barter-1153-2x.png"
  ]

  return (
    <section className={c.allcategories}>
      <h3>{t("mainPage")}</h3>
      <div className={c.allcategories__container}>
        {
          categoriesData ?
            categoriesData.map((category, i) =>
              <Link className={c.category__item}>
                <div className={c.category__item__image}>
                  <img src={imagesForCategories[i]} alt="" />
                </div>
                <p> {category.name}</p>
              </Link>
            )
            :
            <p>Loading...</p>
        }
      </div>
    </section>
  )
}

export default AllCategories