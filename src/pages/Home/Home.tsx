import { FC } from 'react'
import Feed from '../../components/Home/Feed/Feed'
import RightSidebar from '../../components/Home/RightSidebar/RightSidebar'
import WithNavigation from '../../HOCs/WithNavigation/WithNavigation'
const Home: FC = () => {
  return (
    <>
      <Feed />
      <RightSidebar />
    </>
  )
}
export default WithNavigation(Home)
