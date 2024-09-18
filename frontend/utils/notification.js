/**
 * @name Hotel Room Booking System
 * @author Robert Wang
 * @description Hotel Room Booking and Management System Software ~ Developed By Robert Wang
 * @copyright ©2023 ― Robert Wang. All rights reserved.
 * @version v0.0.1
 *
 */

import { notification } from 'antd';

const notificationWithIcon = (type, title, msg) => {
  notification[type]({
    message: title,
    description: msg
  });
};

export default notificationWithIcon;
