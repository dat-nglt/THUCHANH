import React from 'react'

function Item(props) {
  const { link, content, ...others } =
    props
  return (
    <li>
      <a href={link}>
        Nội dung liên kết: {content}
      </a>
    </li>
  )
}

export default Item
