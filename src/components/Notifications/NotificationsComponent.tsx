import { useSelector } from "react-redux";
import { MyUser } from "../../Interface/UserInferface";
import NotificationItems from "./NotificationItem";

function NotificationsComponent() {
  const user = useSelector((state: MyUser) => state.user.value);
  return <div className="container">
    <NotificationItems notifications={user.notifications} />
  </div>;
}

export default NotificationsComponent;
