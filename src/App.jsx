import { useState, useEffect } from 'react'
import './App.css'
import { Details } from './Details/Details'
import { List } from './List/List'

function App() {
  const [user, setselectUser] = useState()
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const requestUrl = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json'
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

  useEffect(() => {
    async function getUsersList() {
      setLoading(true);
      const res = await fetch(requestUrl);
      const data = await res.json();
      await delay(500);
      setUser(data)
      setLoading(false)
    }
    getUsersList()
  }, [])

  const selectUser = (objUser) => {
    setselectUser(objUser)
  }

  return (
    <div className='container'>
      {loading && <span>Загрузка данных...</span>}
      {!loading && <List users={users} selectedId={user?.id} selectUser={selectUser}/>}
      {user && <Details user={user}/>}
    </div>
  )
}

export default App
