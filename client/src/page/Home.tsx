import Header from '../component/Header';
import Slider from '../component/slider';
import { IProducts } from '../types';
import { INews } from '../types';
import Content from '../component/contentPage';
import Footer from '../component/footer';
import React from 'react'
const Home = ({data, dataN}:{ data:IProducts[], dataN:INews[]}) => {
  return (
    <div>
        <Header/>
        <Slider/>
        <Content data={data} dataN={dataN} />
        <Footer/>
    </div>
  );
}

export default Home;
