import React from 'react';

function Information(props) {
  const { userName, ...others } = props;

  const infoStyle = {
    padding: '10px',
    border: '1px solid #007BFF',
    borderRadius: '5px',
    backgroundColor: '#f8f9fa',
    color: '#343a40',
    fontSize: '18px',
    textAlign: 'center',
    margin: '20px 0',
  };

  return (
    <div style={infoStyle}>
      Xin chào người dùng: {userName}
    </div>
  );
}

export default Information;
