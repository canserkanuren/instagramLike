import React from 'react';
import styled from 'styled-components';

const Spinner = () => {
  return (
    <LoaderContainer className='loader'>
      <i className='fa fa-circle-notch fa-spin fa-3x fa-fw' />
    </LoaderContainer>
  );
};

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Spinner;
