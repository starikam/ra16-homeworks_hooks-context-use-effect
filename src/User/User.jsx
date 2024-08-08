export const User = ({user, selectedId, selectUser}) => {
  return (
       <button 
            className={user.id === selectedId ? 'list_user btn btn-secondary btn-lg btn-block selected' : 'list_user btn btn-secondary btn-lg btn-block'}
            type="button" 
            key={user.id}
            onClick={() => selectUser(user)}
            >{user.name}
        </button>
  )
}
