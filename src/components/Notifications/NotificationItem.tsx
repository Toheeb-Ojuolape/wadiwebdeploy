import "./Notification.css";
import { Notification } from "../../Interface/NotificationInterface";

function NotificationItem(props:{notification:Notification}) {
  return <div className="notification-item">
    <h2>{props.notification.title}</h2>
    <p>{props.notification.message}</p>
    <span>{props.notification.timestamp}</span>
    </div>;
}

function NotificationItems(props: {
  notifications: Array<{ message: string; title: string; timestamp: string }>;
}) {
  return (
    <div className="notificationContainer">
      {props.notifications && props.notifications.map((notification,i)=>(
        <NotificationItem  notification={notification}/>
      ))}
    </div>
  );
}

export default NotificationItems;
