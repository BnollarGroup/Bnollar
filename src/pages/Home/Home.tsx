import { FC } from 'react'
import RightSidebar from '../../components/Home/RightSidebar/RightSidebar'
import WithNavigation from '../../HOCs/WithNavigation/WithNavigation'
import Feed from './Feed/Feed'
const Home: FC = () => {
  return (
    <>
      <Feed />
      <RightSidebar />
    </>
  )
}
export default WithNavigation(Home)
