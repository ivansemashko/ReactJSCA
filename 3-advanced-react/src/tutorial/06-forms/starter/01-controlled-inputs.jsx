const ControlledInputs = () => {
  return (
    <form className="form">
      <h4>Controlled inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input type="email" id="name" className="form-input" />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          name
        </label>
        <input type="email" id="email" className="form-input" />
      </div>
      <button type="submit" className="btn btn-block">
        Submit
      </button>
    </form>
  )
}
export default ControlledInputs
