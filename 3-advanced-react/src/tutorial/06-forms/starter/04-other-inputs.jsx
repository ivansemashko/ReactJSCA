import { useState } from 'react'
const frameworks = ['react', 'angular', 'vue', 'svelte']
const OtherInputs = () => {
  const [shipping, setShipping] = useState(false)
  const [framework, setFramework] = useState('react')
  return (
    <div>
      <form className="form">
        <h4>Other Inputs</h4>

        <div className="form-row" style={{ textAlign: 'left' }}>
          <input
            type="checkbox"
            checked={shipping}
            id="shipping"
            name="shipping"
            onChange={(e) => {
              setShipping(e.target.checked)
            }}
          />
          <label htmlFor="shipping"> Free Shipping </label>
        </div>
        <div className="form-row" style={{ textAlign: 'left' }}>
          <label htmlFor="framework" className="form-label">
            Framework
          </label>
          <select
            name="framework"
            id="framework"
            value={framework}
            onChange={(e) => {
              setFramework(e.target.value)
            }}
          >
            {frameworks.map((framework) => {
              return <option key={framework}>{framework}</option>
            })}
          </select>
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  )
}
export default OtherInputs
