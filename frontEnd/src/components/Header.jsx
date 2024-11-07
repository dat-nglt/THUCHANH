import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';

function Header(props) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        bgcolor: theme.palette.primary.main,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >

      <Stack
        sx={{
          padding: '10px',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'row',
          gap: '15px',
          alignItems: 'center',
        }}
      >
        <Link to={'/danh-sach-nhom'}>
          <Button variant='text' color={theme.palette.white.main}>
            Danh sách nhóm
          </Button></Link>
        <Link to={'/danh-sach-san-pham'}>
          <Button variant='text' color={theme.palette.white.main}>
            Danh sách sản phẩm
          </Button>
        </Link>
      </Stack>
      <Stack
        sx={{
          padding: '10px',
          display: 'flex',
          justifyContent: 'center',
          gap: '15px',
          alignItems: 'center',
        }}
      >
        <Link>
          <Button variant='contained' color='secondary'>
            Đăng nhập
          </Button>
        </Link>
      </Stack>

    </Box>
  );
}

export default Header;