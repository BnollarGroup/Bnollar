import { useParams } from 'react-router-dom'
import ManageWallets from '../components/Settings/ManageWallets/ManageWallets'
import Notifications from '../components/Settings/Notifications/Notifications'
import Profile from '../components/Settings/Profile/Profile'
import Security from '../components/Settings/Security/Security'

const useSettings = () => {
  const { type } = useParams()
  const getComponent = () => {
    switch (type) {
      case 'profile':
        return <Profile />
      case 'manage_wallets':
        return <ManageWallets />
      case 'notification':
        return <Notifications />
      case 'privacy&security':
        return <Security />
    }
  }
  return {
    component: getComponent(),
    type: typeof type === 'string' ? type : 'error',
  }
}

export default useSettings
