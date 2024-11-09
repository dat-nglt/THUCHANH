import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import productsService from '../services/productsService';
function DetailsProduct(props) {

  const params = useParams();
  const [product, setProduct] = useState({});
  const [error, setError] = useState();



  const fetchGroupData = async () => {
    try {
      const response = await productsService.getDetailsProduct(params)
      setProduct(response.data)
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    fetchGroupData();
  }, [])

  return (
    <div>
      {(product !== null) &&
        <ProductCard product={product} />
      }
    </div>
  );
}

export default DetailsProduct;  