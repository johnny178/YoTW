import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Frame = styled.div`
  height: ${({ isLoading }) => isLoading ? '150vh' : 'auto'};
`;

export const GridCont = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(5rem, 1fr));
  margin: 3% 0px;
  grid-gap: 27px;
  padding-bottom: 5%;
  max-width: 1440px;

  @media (max-width: 1512px) {
    padding: 0 3% 5%;
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(5rem, 1fr));
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(5rem, 1fr));
  }
  
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(5rem, 1fr));
    width: 95vw;
  }
`;
