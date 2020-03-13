import React from 'react';
import PropTypes from 'prop-types';
import { Button as BootStrapButton } from 'react-bootstrap';
import './Button.scss';

const Button = ({ children, variant, onClick, size, ...restProps }) => {
  return (
    <BootStrapButton
      size={size}
      variant={variant}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </BootStrapButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.string]),
  variant: PropTypes.string,
  size: PropTypes.string
};

Button.defaultProps = {
  onClick: () => {},
  children: {},
  variant: 'primary',
  size: 'md'
};
export default Button;
