import styled from 'styled-components/macro';


export const Map = styled.div`
  min-width: ${({ isFullWidth }) => isFullWidth ? '100%' : '55vw'};
  height: ${({ isFullWidth }) => isFullWidth ? '300px' : '70vh'};
  margin-left: ${({ isFullWidth }) => isFullWidth ? '0' : '73px'};

  @media (max-width: 992px) {
    margin-left: 0px;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 75vw;
  }
`;