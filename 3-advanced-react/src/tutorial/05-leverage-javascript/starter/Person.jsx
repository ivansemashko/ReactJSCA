import React from 'react'
export function Person({ name, nickName, images }) {
  const img =
    images?.[0]?.small?.url || 'https://www.computerhope.com/jargon/h/img.png'
  return (
    <div>
      <img src={img} style={{ width: '50px' }} alt={name} />
      <h4>Name: {name}</h4>
      <p>nickName: {nickName}</p>
    </div>
  )
}
