/**
 * @name Hotel Room Booking System
 * @author Robert Wang
 * @description Hotel Room Booking and Management System Software ~ Developed By Robert Wang
 * @copyright ©2023 ― Robert Wang. All rights reserved.
 * @version v0.0.1
 *
 */

import React from 'react';

function Banner({ children, title, subtitle }) {
  return (
    <div className='banner'>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {children}
    </div>
  );
}

export default Banner;
