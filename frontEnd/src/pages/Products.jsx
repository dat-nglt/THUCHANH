import React from 'react';
import BasicTable from '../components/BasicTable';
import { useState } from 'react';
import { CircularProgress } from '@mui/material';
import { useEffect } from 'react';
import { Stack, Typography, useTheme } from '@mui/material';
import productsService from '../services/productsService';

function Products(props) {

  const theme = useTheme()
  const [columnTitle, setColumn] = useState(['MÃ SẢN PHẨM', 'TÊN SẢN PHẨM', 'GIÁ', 'THUỘC NHÓM']);
  const [productData, setProductData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const fetchProductData = async () => {
    try {
      setLoading(true);
      setError(null);
      setTimeout(async () => {
        const response = await productsService.getAllProducts();
        setProductData(response.data)
        setLoading(false)
      }, 1500);
    } catch (error) {
      setError('Không thể tải dữ liệu');
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProductData();
  }, [])

  return (
    <div>
      <Typography sx={{ width: '95%', margin: '10px auto', textTransform: "uppercase", fontWeight: 600, color: theme.palette.primary.main }} variant='h6'>danh sách sản phẩm</Typography>

      {loading && <Stack
        sx={{ width: '95%', margin: '10px auto', flexDirection: 'row', alignItems: 'center', gap: '10px' }}
      >
        Đang tải dữ liệu sản phẩm<CircularProgress size={20} />
        {error && <p>{error}</p>}
      </Stack>}
      {!loading &&
        <BasicTable data={productData} columnTitle={columnTitle} typeProduct={true} />
      }
    </div>
  );
}

export default Products;