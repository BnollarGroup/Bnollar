import { useParams } from "react-router-dom";
import ManageWallets from "../components/Settings/ManageWallets/ManageWallets";
import Notifications from "../components/Settings/Notifications/Notifications";
import Profile from "../components/Settings/Profile/Profile";
import NotificationControls from "../components/Settings/Security/NotificationControls";
import Security from "../components/Settings/Security/Security";

interface SettingsData {
  component: React.ReactNode;
  type: string;
}

const useSettings = (): SettingsData => {
  const { type } = useParams();

  const getComponent = () => {
    switch (type) {
      case "profile":
        return <Profile />;
      case "manage_wallets":
        return <ManageWallets />;
      case "notification":
        return <Notifications />;
      case "privacy&security":
        return <Security />;
      case "privacy&security_messages":
        return <NotificationControls type="Message" />;
      case "privacy&security_comments":
        return <NotificationControls type="Comment" />;
    }
  };
  return {
    component: getComponent(),
    type: typeof type === "string" ? type : "error",
  };
};

export default useSettings;
