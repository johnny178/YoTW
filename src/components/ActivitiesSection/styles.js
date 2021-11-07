import styled from 'styled-components/macro';

export const Container = styled.div`
  padding: 3% 5%;
`;

export const FilterCont = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
`;

export const FilterForm = styled.form`
  display: flex;
  flex-direction: row;
`;

export const Searchbar = styled.input`
  background-color: white;
`;

export const Select = styled.select`
  margin-left: 10px;
`;

export const Option = styled.option`
  margin-left: 10px;
`;

export const GridCont = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(15rem, 1fr));
  margin: 3% 0px;
  grid-gap: 30px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, minmax(15rem, 1fr));
  }
`;