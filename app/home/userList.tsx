type UserData = {
  users_id: number
  username: string
  net_income: number
}

function UserList({users}: {users: UserData[]}) {
  return (
    <ul>
      {users?.map((user) => (
        <li key={user.users_id}>
          {user.username}: {user.net_income}
        </li>
      ))}
    </ul>
  )
}

export default UserList
