import { Button, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import userService from '../services/userService';
import { useNavigate } from 'react-router-dom';

function Login(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleLogin = async () => {
    try {
      let response = await userService.loginSerivce(username, password)
      if (response.status === 200) {
        console.log('Đăng nhập thành công');
        navigate('/danh-sach-nhom')
      }
      else {
        console.log('Đăng nhập không thành công');
      }
    } catch (error) {
      console.log("Đăng nhập không thành công rồi");
    }
  }

  return (
    <Stack
      sx={
        {
          width: '400px',
          gap: '20px',
          margin: '10px auto'
        }
      }
    >
      <Typography sx={{ width: '100%', margin: '10px auto 0', textTransform: "uppercase", fontWeight: 600 }} variant='h6' color='primary'>Trang đăng nhập</Typography>
      <TextField id="standard-basic" label="Tên tài khoản" variant="standard" onChange={handleUsername} />
      <TextField
        id="standard-password-input"
        label="Mật khẩu"
        type="password"
        autoComplete="current-password"
        variant="standard"
        onChange={handlePassword}
      />
      <Button variant='contained' onClick={handleLogin}>Đăng Nhập</Button>
    </Stack>
  );
}

export default Login;