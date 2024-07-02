import { useState } from 'react'
import { data } from '../../../data'

const UserChallenge = () => {
  const [name, setName] = useState('')
  const [users, setUsers] = useState(data)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      alert('Enter name!')
      return
    }
    // ! Плохо так делать, но сделано это исключительно ради облегчения(экономии времени) кода задачи
    const generateRandomId = () => {
      return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
    }

    addUser(name, generateRandomId())
    console.log(users)
    setName('')
  }

  const addUser = (name, id) => {
    setUsers(() => [...users, { id: id, name: name }])
  }

  const deleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id))
  }
  // !Incorrect code
  // const renameUser = (id) => {
  //   setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id))
  //   setUsers((prevUsers) => [...prevUsers, { id: id, name: name }])
  // }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h2 style={{ marginBottom: '50px' }}>Users:</h2>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h3>User name: {user.name}</h3>
            <h4>User ID: {user.id}</h4>
            <button className="btn" onClick={() => deleteUser(user.id)}>
              Delete user
            </button>
            {/* <button className="btn" onClick={() => renameUser(user.id)}>
              Change username
            </button> */}
          </div>
        )
      })}
    </div>
  )
}
export default UserChallenge
