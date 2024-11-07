import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import axios from 'axios';
import { useParams } from 'react-router-dom';
function DetailsProduct(props) {

  const params = useParams();
  const [product, setProduct] = useState({});
  const [error, setError] = useState();

  console.log(product);


  const fetchGroupData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/get-details-products/${params.id}`);
      setProduct(response.data.data)
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