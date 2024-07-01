import React from 'react'
export function Person({ name, nickName = 'W/o', images }) {
  const img =
    images?.[0]?.small?.url ??
    'https://avatars.githubusercontent.com/u/147409780?v=4'
  return (
    <div>
      <img src={img} style={{ width: '50px' }} alt={name} />
      <h4>
        {img != 'https://avatars.githubusercontent.com/u/147409780?v=4'
          ? 'Name: '
          : 'Ivan Clone name: '}
        {name}
      </h4>
      <p>nickName: {nickName}</p>
    </div>
  )
}
