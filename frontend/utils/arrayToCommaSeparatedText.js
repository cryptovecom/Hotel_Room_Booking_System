/**
 * @name Hotel Room Booking System
 * @author Robert Wang
 * @description Hotel Room Booking and Management System Software ~ Developed By Robert Wang
 * @copyright ©2023 ― Robert Wang. All rights reserved.
 * @version v0.0.1
 *
 */

function arrayToCommaSeparatedText(array) {
  return array?.length > 0 ? array
    .map((item) => item)
    .join(', ')
    .toString() : 'N/A';
}

export default arrayToCommaSeparatedText;
