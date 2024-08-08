import './Details.css'
import { useState, useEffect } from 'react'

export const Details = ( { user } ) => {
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState();
  const url = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/'
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

  useEffect(() => {
    async function getUser() {
      setLoading(true);
      const res = await fetch(url + user?.id +'.json');
      const data = await res.json();
      await delay(500);
      setItem(data);
      setLoading(false)
    }
    getUser()
  }, [user])

  return (
    <>
    {loading && <span>Загрузка данных...</span>}
    {!loading && <div className='user-details'>
      <div className='details-img'>
        <img src={item?.avatar} alt="image" className="details-img" />
      </div>
        <div className="details-name details-item">{item?.name}</div>
        <div className="details-city details-item">{item?.details?.city}</div>
        <div className="details-company details-item">{item?.details?.company}</div>
        <div className="details-position details-item">{item?.details?.position}</div>
    </div>}
    </>
  )
}
