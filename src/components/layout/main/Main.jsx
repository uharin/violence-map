import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import Map from '../../map/Map';
import { getAllCases } from '../../../api/cases'

const StyledMain = styled.main`
  background-color: #000000;
  border-left: 1px solid #343434;
  width: 100%;
`;

const Main = () => {
  return (
    <StyledMain>
      <Map />
    </StyledMain>
  );
}

export default Main;
