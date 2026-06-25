import { useParams, Outlet } from 'react-router-dom'

import useTeamsArticles from '../hooks/useTeamsArticles'

import SideBar from '../components/SideBar'
import Loading from '../components/Loading'

export default function Articles () {
  const { teamId } = useParams()
  const {
    response: articles,
    loading
  } = useTeamsArticles(teamId)
  if (loading === true) {
    return <Loading />
  }
  return (
    <div className='container two-column'>
      <SideBar
        title='Articles'
        list={articles.map((article) => article.title)}
      />
      <Outlet />
    </div>
  )
}
