import useTeamNames from '../hooks/useTeamNames'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'

export default function Teams () {
  const {
    response: teamNames,
    loading
  } = useTeamNames()

  if (loading === true) {
    return null
  }

  return (
    <div className='container two-column'>
      <SideBar
        title='Teams'
        list={teamNames}
      />

      <Outlet />
    </div>
  )
}