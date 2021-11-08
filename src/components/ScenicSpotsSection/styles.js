import styled from 'styled-components/macro';

export const Container = styled.div`
`;

export const FilterCont = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  background-color: #B2E4FF;
`;

export const FilterBtnCont = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 10px;
`;

export const Searchbar = styled.input`
  background-color: white;
`;

export const GridCont = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(15rem, 1fr));
  margin: 3% 0px;
  grid-gap: 30px;
  padding: 0 3% 5%;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, minmax(15rem, 1fr));
  }
`;
