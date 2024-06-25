import { useEffect, useState } from 'react'
const url = 'https://api.github.com/users/ivansemashko'

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

  const { avatar_url, login, name, company, bio, html_url } = user
  return (
    <>
      <img src={avatar_url} alt={login} />
      <div>
        <h2>{name}</h2>
        <h3>{login}</h3>
        <a href={html_url}>Link</a>
        <h4>works at {company}</h4>
        <h3>{bio}</h3>
      </div>
    </>
  )
}
export default MultipleReturnsFetchData
