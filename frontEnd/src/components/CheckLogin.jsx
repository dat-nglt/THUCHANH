import React from 'react';

function CheckLogin(props) {
  const { isLogin, ...others } = props;

  const messageStyle = {
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: isLogin ? '#d4edda' : '#f8d7da',
    color: isLogin ? '#155724' : '#721c24',
    fontSize: '18px',
    textAlign: 'center',
    margin: '20px 0',
    border: isLogin ? '1px solid #c3e6cb' : '1px solid #f5c6cb',
  };

  return (
    <div style={messageStyle}>
      {isLogin ? 'Đã đăng nhập' : 'Chưa đăng nhập'}
    </div>
  );
}

export default CheckLogin;
