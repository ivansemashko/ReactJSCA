import { useState } from 'react'

const ShortCircuitOverview = () => {
  // true
  const z = 1
  // false
  const x = 0

  console.log(z && x)
  console.log(x || z)
  // if (z) console.log('true')
  // else console.log('false')

  function displayName(params) {
    return params || 'No params'
  }

  console.log(displayName())
  console.log(displayName('Yoo'))

  return <h2>short circuit overview</h2>
}
export default ShortCircuitOverview
