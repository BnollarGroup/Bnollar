import { FC } from 'react'
import HomeRightSidebar from '../../components/HomeRightSidebar/HomeRightSidebar'
import WithNavigation from '../../HOCs/WithNavigation/WithNavigation'
import Feed from './Feed/Feed'
const Home: FC = () => {
  return (
    <>
      <Feed />
      <HomeRightSidebar />
    </>
  )
}
export default WithNavigation(Home)
