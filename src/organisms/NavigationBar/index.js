import React from 'react';
import { Navbar } from 'react-bootstrap';

import './navigation.scss';

const NavigationBarComponent = () => {
  return (
    <Navbar
      id="primary-navigation"
      className="navigation-container"
      collapseOnSelect
      expand="lg"
      bg="white"
      variant="light"
    >
      <Navbar.Brand>Feedback Page</Navbar.Brand>
    </Navbar>
  );
};

NavigationBarComponent.propTypes = {};

NavigationBarComponent.defaultProps = {};

export default NavigationBarComponent;
