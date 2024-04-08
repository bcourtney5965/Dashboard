import {createClient} from '@/utils/supabase/server'
import UserList from './userList'

type UserData = {
  users_id: number
  username: string
  net_income: number
}

export default async function Users() {
  const supabase = createClient()
  const response = await supabase.from('users').select()
  if (response.error) {
    console.error('Error fetching users:', response.error)
    return
  }
  const users: UserData[] = response?.data

  return (
    <div>
      <h1>User List</h1>
      <ul>
        <UserList users={users} />
      </ul>
    </div>
  )
}
