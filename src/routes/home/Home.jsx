import React from 'react';
import {Container} from "../../utils/Components";
import AllCategories from '../../components/all-categories/AllCategories'
import AllProductsHome from '../../components/all-products-home/AllProductsHome';
import Search from '../../components/search/Search';

const Home = () => {
  return (
    <div>
      <Container>
        <AllCategories/>
        <Search/>
        <AllProductsHome/>
      </Container>
    </div>
  )
}

export default Home