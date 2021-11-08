import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FilterCont = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  background-color: #B2E4FF;
`;

export const FilterBtnCont = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
  grid-gap: 10px;
`;

export const Searchbar = styled.input`
  background-color: white;
`;

export const GridCont = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(5rem, 1fr));
  margin: 3% 0px;
  grid-gap: 27px;
  padding: 0 3% 5%;

  @media (max-width: 992px) {
    grid-template-columns: repeat(3, minmax(5rem, 1fr));
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(5rem, 1fr));
  }
  
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(5rem, 1fr));
  }
`;
