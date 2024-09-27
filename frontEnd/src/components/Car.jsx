import React from 'react'

function Car(props) {
  const [car, setCar] = React.useState({
    brand: 'Ford',
    model: 'Mustang',
    year: '1964',
    color: 'red'
  })

  const updateColor = (color) => {
    setCar((prev) => ({
      ...prev,
      color: color
    }))
  }

  const containerStyle = {
    padding: '20px',
    border: '1px solid #007BFF',
    borderRadius: '5px',
    backgroundColor: '#f8f9fa',
    color: '#343a40',
    fontSize: '18px',
    textAlign: 'center',
    margin: '20px 0'
  }

  const buttonStyle = {
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007BFF',
    color: '#FFFFFF',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  }

  const buttonHoverStyle = {
    backgroundColor: '#0056b3'
  }

  return (
    <div style={containerStyle}>
      Show information car:
      <h1>My brand: {car.brand}</h1>
      <p>
        Color: {car.color} - Model:{' '}
        {car.model}
      </p>
      <button
        style={buttonStyle}
        onClick={() =>
          updateColor('blue')
        }
        onMouseOver={(e) =>
          (e.currentTarget.style.backgroundColor =
            buttonHoverStyle.backgroundColor)
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.backgroundColor =
            buttonStyle.backgroundColor)
        }
      >
        Update color to blue
      </button>
    </div>
  )
}

export default Car
