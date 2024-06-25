import { useEffect, useState } from 'react'
const url = 'https://api.github.com/users/ivansemashkos'

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          setIsError(true)
          isLoading(false)
          return
        }
        const human = await response.json()
        setUser(human)
      } catch (error) {
        setIsError(true)
        console.log(error)
      }
      // Timeout only for a view effect
      setTimeout(() => {
        setIsLoading(false)
      }, 3000)
    }
    fetchUser()
  }, [])

  if (isError) {
    return <h2>Error...</h2>
  }

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <>
      <img src={user.avatar_url} alt="" srcset="" />
      <div>
        <h3>{user.login}</h3>
        <a href={user.html_url}>Link</a>
      </div>
    </>
  )
}
export default MultipleReturnsFetchData
