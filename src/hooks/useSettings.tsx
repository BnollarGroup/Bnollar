import ManageWallets from "pages/Settings/components/ManageWallets/ManageWallets";
import Notifications from "pages/Settings/components/Notifications/Notifications";
import Profile from "pages/Settings/components/Profile/Profile";
import Security from "pages/Settings/components/Security/Security";
import { useParams } from "react-router-dom";
import NotificationControls from "../pages/Settings/components/Security/NotificationControls";

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
