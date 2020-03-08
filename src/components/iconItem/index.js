import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const IconItem = ({ logo, onClick }) => {
  return (
    <IconItemContainer
      className={logo}
      onClick={() => (onClick ? onClick() : undefined)}
    ></IconItemContainer>
  );
};

const IconItemContainer = styled.i`
  cursor: pointer;
`;

IconItem.propTypes = {
  logo: PropTypes.string.isRequired,
  onClick: PropTypes.func
};
export default IconItem;
