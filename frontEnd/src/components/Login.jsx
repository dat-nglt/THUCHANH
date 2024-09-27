import React from 'react'

function Login(props) {
  const [inputs, setInputs] =
    React.useState({})
  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInputs((values) => ({
      ...values,
      [name]: value
    }))
  }

  const [isCheck, setCheck] =
    React.useState(false)
  const handleChecked = () => {
    setCheck(!isCheck)
  }

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #007BFF',
    borderRadius: '5px',
    backgroundColor: '#f8f9fa'
  }

  const labelStyle = {
    marginBottom: '5px',
    fontSize: '16px',
    color: '#343a40'
  }

  const inputStyle = {
    marginBottom: '15px',
    padding: '10px',
    border: '1px solid #ced4da',
    borderRadius: '5px',
    fontSize: '16px'
  }

  const buttonStyle = {
    padding: '10px',
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
    <form style={formStyle} action=''>
      <label
        style={labelStyle}
        htmlFor='username'
      >
        Enter name
      </label>
      <input
        type='text'
        name='username'
        value={inputs.username || ''}
        onChange={handleChange}
        style={inputStyle}
      />

      <label
        style={labelStyle}
        htmlFor='password'
      >
        Enter password
      </label>
      <input
        type='password'
        name='pass'
        value={inputs.pass || ''}
        onChange={handleChange}
        style={inputStyle}
      />

      <div
        style={{ marginBottom: '15px' }}
      >
        <input
          type='checkbox'
          checked={isCheck}
          onChange={handleChecked}
        />
        <label
          style={{ marginLeft: '5px' }}
        >
          Remember me
        </label>
      </div>

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
      >
        Đăng nhập
      </button>
    </form>
  )
}

export default Login
