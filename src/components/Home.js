import axios from 'axios';
import React, {useState} from 'react';
import ProductList from "./ProductList";

const Home = () => {
    const [Item, setItem] = useState([]);
    
    return (
        <>
            <ProductList/>
        </>
    );


    
}

export default Home;