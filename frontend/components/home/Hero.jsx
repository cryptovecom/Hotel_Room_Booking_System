/**
 * @name Hotel Room Booking System
 * @author Robert Wang
 * @description Hotel Room Booking and Management System Software ~ Developed By Robert Wang
 * @copyright ©2023 ― Robert Wang. All rights reserved.
 * @version v0.0.1
 *
 */

import React from 'react';

function Hero({ children, hero }) {
  return (
    <section className={hero}>
      {children}
    </section>
  );
}

Hero.defaultProps = {
  hero: 'defaultHero'
};

export default Hero;
