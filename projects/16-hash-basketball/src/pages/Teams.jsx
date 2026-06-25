import useTeamNames from '../hooks/useTeamNames'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'
import Loading from '../components/Loading'

export default function Teams () {
  const {
    response: teamNames,
    loading
  } = useTeamNames()

  if (loading === true) {
    return <Loading />
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