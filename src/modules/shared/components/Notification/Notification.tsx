import React, { useContext } from 'react';
import './Notification.scss';
import classNames from 'classnames';
import { NotificationContext } from '../../context/CartContext copy';

type NotificationProps = {
  title: string;
};

export const Notification: React.FC<NotificationProps> = ({ title }) => {
  const { notification } = useContext(NotificationContext);
  return (
    <div
      className={classNames('notification', {
        'notification--active': notification,
      })}
    >
      <span className="notification__title">{title}</span>
    </div>
  );
};
