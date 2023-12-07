import  { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const LoginPage = () => {
  const {user, setUser} = useContext(UserContext)
  // console.log(algo)
  return (
    <>
    <h1>Login Page</h1>
    <hr />
    <pre>{JSON.stringify(user, null, 4)}</pre>
    <button className='btn btn-primary'
    onClick={()=>setUser({id:23, name:'Felipe', email:'fg@example.com'})}>Login user</button>
    </>
  )
}
