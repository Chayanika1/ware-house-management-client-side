import React from 'react';
import Reviews from '../../Reviews/Reviews';

import Addition from '../Addition/Addition';
import AmazingPlugins from '../AmazingPlugins/AmazingPlugins';
import Carousel from '../Carousel/Carousel';
import Invetory from '../GOdown/Invetory';
//import ManageAllProducts from '../ManageAllProducts/ManageAllProducts';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Addition></Addition>
            <AmazingPlugins></AmazingPlugins>
            
            
           <Invetory></Invetory>
           <Reviews></Reviews>
           
           
            
        </div>
    );
};

export default Home;