import React from 'react';
import PropTypes from 'prop-types';

const HeaderIcon = ({ iconClass }) => {
  return <i className={iconClass}></i>;
};

HeaderIcon.propTypes = {
  iconClass: PropTypes.string.isRequired
};

export default HeaderIcon;
