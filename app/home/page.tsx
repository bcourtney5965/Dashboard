import {createClient} from '@/utils/supabase/server'
import UserList from './userList'
import DashboardLayout from './DashboardLayout'

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

  // return (
  //   <div>
  //     <h1>User List</h1>
  //     <ul>
  //       <UserList users={users} />
  //     </ul>
  //   </div>
  // )

  // return (
  //   <div className="container mx-auto p-4">
  //     <div className="flex flex-col lg:flex-row lg:flex-wrap lg:space-x-4">
  //       <div className="w-full lg:w-1/3 mb-4">Income: $100,000</div>
  //       <div className="w-full lg:w-1/3 mb-4">Passive Income: $20,000</div>
  //       <div className="w-full lg:w-1/3 mb-4">Net Worth</div>
  //       <div className="w-full lg:w-1/3 mb-4">Marginal Tax Rate: 24%</div>
  //       <div className="w-full lg:w-1/3 mb-4">Capital Gains Tax: 15%</div>
  //       <div className="w-full lg:w-2/3 mb-4">Investments</div>
  //       <div className="w-full lg:w-1/3 mb-4">Passive Income</div>
  //       <div className="w-full lg:w-1/3 mb-4">Income</div>
  //     </div>
  //   </div>
  // )

  // return (
  //   <div className="container mx-auto p-4">
  //     <h1 className="text-3xl font-bold underline">Hello world!</h1>
  //     <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
  //       <div className="col-span-3 lg:col-span-1">Income: $100,000</div>
  //       <div className="col-span-3 lg:col-span-1">Passive Income: $20,000</div>
  //       <div className="col-span-3 lg:col-span-1">Net Worth</div>
  //       <div className="col-span-3 lg:col-span-1">Marginal Tax Rate: 24%</div>
  //       <div className="col-span-3 lg:col-span-1">Capital Gains Tax: 15%</div>
  //       <div className="col-span-3 lg:col-span-2 grid grid-cols-1 lg:grid-cols-3 gap-4">
  //         <div>Investments</div>
  //         <div>Passive Income</div>
  //         <div>Income</div>
  //       </div>
  //     </div>
  //   </div>
  // )
  return <DashboardLayout />
}
