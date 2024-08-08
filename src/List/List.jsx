import { User } from '../User/User';
import './List.css'

export const List = ( { users, ...props } ) => {
  return (
    <div className='list_users'>
      {users.map((user) => (
        <User user={user} key={user.id} {...props}/>
      ))}
    </div>
  )
}
