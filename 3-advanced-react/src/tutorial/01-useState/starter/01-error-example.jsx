const ErrorExample = () => {
  let count = 0

  return (
    <div>
      <h2>useState error example</h2>
      <h3>{count}</h3>
      <button
        className="btn"
        type="button"
        onClick={() => {
          count += 1
          console.log(count)
        }}
      >
        Plus One
      </button>
    </div>
  )
}

export default ErrorExample
