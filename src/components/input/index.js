import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = ({ placeholder, value, type, onChange }) => {
  return (
    <DefaultInput
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    ></DefaultInput>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

const DefaultInput = styled.input`
  margin: 5px 0;
  padding: 5px;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  height: 30px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: start;
  text-overflow: ellipsis;
  background-color: #f8f8f8;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif;
  line-height: 18px;
`;

export default Input;
