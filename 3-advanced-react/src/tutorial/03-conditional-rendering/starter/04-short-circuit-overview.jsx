import { useState } from 'react'

const ShortCircuitOverview = () => {
  //* false
  const [text, setText] = useState('')
  //* true
  const [name, setName] = useState('ivan')

  return (
    <div>
      <h4>Falsy OR || : {text || 'Spell'}</h4>
      <h4>Falsy AND && : {text || 'Spell'}</h4>
      <h4>Falsy OR || : {name || 'Spell'}</h4>
      <h4>Falsy and && : {name || 'Spell'}</h4>
    </div>
  )
}
export default ShortCircuitOverview
