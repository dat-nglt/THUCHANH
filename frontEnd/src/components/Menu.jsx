import React from 'react'
import Item from './Item' // Giả sử bạn có component này
import Information from './Information'

const menuList = [
  {
    link: 'https://facebook.com',
    content: 'Đây là facebook'
  },
  {
    link: 'https://twitter.com',
    content: 'Đây là Twitter'
  }
]

function Menu(props) {
  const { userName, ...others } = props

  const ulStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '50px',
    listStyleType: 'none',
    padding: '0',
    margin: '20px 0'
  }

  const linkStyle = {
    textDecoration: 'none',
    color: '#007BFF',
    fontSize: '18px',
    transition: 'color 0.3s'
  }

  const linkHoverStyle = {
    color: '#0056b3'
  }

  return (
    <div>
      <ul style={ulStyle}>
        {menuList.map((item, index) => {
          return (
            <li key={index}>
              <a
                href={item.link}
                style={linkStyle}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color =
                    linkHoverStyle.color)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color =
                    linkStyle.color)
                }
              >
                Nội dung liên kết:{' '}
                {item.content}
              </a>
            </li>
          )
        })}
      </ul>
      <div>
        <Information
          userName={userName}
          {...others}
        />
      </div>
    </div>
  )
}

export default Menu
