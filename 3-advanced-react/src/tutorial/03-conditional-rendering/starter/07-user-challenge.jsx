import { useState } from 'react'

const UserChallenge = () => {
  const [user, setUser] = useState(null)

  const login = () => {
    // * normally connect to db or api
    setUser({ name: 'Ivan' })
  }

  const logOut = () => {
    setUser(null)
  }
  return (
    <div>
      {user ? (
        <div>
          <h4>Hello there {user.name}</h4>
          <button
            className="btn"
            onClick={() => {
              logOut()
            }}
          >
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <h4>Please Log in</h4>
          <button className="btn" onClick={login}>
            Log in
          </button>
        </div>
      )}
    </div>
  )
}

export default UserChallenge
