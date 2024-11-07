import React from 'react';
import BasicTable from './BasicTable';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Typography, useTheme } from '@mui/material';

function Products(props) {

  const theme = useTheme()
  const [productData, setProductData] = useState([]);
  const [columnTitle, setColumn] = useState(['MÃ SẢN PHẨM', 'TÊN SẢN PHẨM', 'GIÁ', 'THUỘC NHÓM']);
  const [error, setError] = useState();

  const fetchProductData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/get-all-products');
      setProductData(response.data.data)
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    fetchProductData();
  }, [])

  return (
    <div>
      <Typography sx={{ width: '95%', margin: '10px auto', textTransform: "uppercase", fontWeight: 600, color: theme.palette.primary.main }} variant='h6'>danh sách sản phẩm</Typography>
      {!error && (
        <BasicTable data={productData} columnTitle={columnTitle} typeProduct={true} />
      )}
    </div>
  );
}

export default Products;