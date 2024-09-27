import React from 'react'

function Button(props) {
  const [textButton, setTextButton] =
    React.useState('Đây là cái gì?')

  const handleClick = () => {
    setTextButton('Đây là cái nút :)')
  }

  const buttonStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007BFF',
    color: '#FFFFFF',
    fontSize: '16px',
    cursor: 'pointer',
    transition:
      'background-color 0.3s, transform 0.2s'
  }

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
    transform: 'scale(1.05)'
  }

  return (
    <button
      style={buttonStyle}
      onClick={handleClick}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor =
          buttonHoverStyle.backgroundColor
        e.currentTarget.style.transform =
          buttonHoverStyle.transform
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor =
          buttonStyle.backgroundColor
        e.currentTarget.style.transform =
          'scale(1)'
      }}
    >
      {textButton}
    </button>
  )
}

export default Button
