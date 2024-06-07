import React from 'react';
import { styled } from 'styled-components';
import Map from '../../map/Map';

const StyledMain = styled.main`
  background-color: #000000;
  border-left: 1px solid #343434;
  width: 100%;
`;

function Main() {
  return (
    <StyledMain>
      <Map />
    </StyledMain>
  )
}

export default Main;
