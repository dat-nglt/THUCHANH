import React from 'react'

function Hello(props) {
  const hiAll = () => {
    alert('Hi All!')
  }

  const hiYou = () => {
    alert('Hi You!')
  }

  const buttonStyle = {
    padding: '10px 20px',
    margin: '5px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007BFF',
    color: '#FFFFFF',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  }

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: '#0056b3'
  }

  return (
    <div>
      <span>
        <button
          style={buttonStyle}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor =
              buttonHoverStyle.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor =
              buttonStyle.backgroundColor)
          }
          onClick={hiAll}
        >
          Hi All
        </button>
        <button
          style={buttonStyle}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor =
              buttonHoverStyle.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor =
              buttonStyle.backgroundColor)
          }
          onClick={hiYou}
        >
          Hi You
        </button>
      </span>
    </div>
  )
}

export default Hello
