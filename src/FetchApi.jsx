import React from 'react'
import  { useState, useEffect } from 'react';
import axios from 'axios';

const FetchApi = ({ children }) => {

    const [goods, setGoods] = useState([])
    const [error, setError] = useState(null)
  
  
    const URL = 'http://localhost:8000';
  
    useEffect(() =>{
      const fetchproduct = async () => {
        try {
          const response = await axios.get(`${URL}/api/product`);
          setGoods(response.data);
        } catch (error) {
          setError(error.message);
        }
      }
      fetchproduct()
    }, []);
    
  
    if (error) {
      return <div>Error: {error}</div>;
    }
    console.log(goods)
  
    return <>{children({ goods })}</>;
}

export default FetchApi
