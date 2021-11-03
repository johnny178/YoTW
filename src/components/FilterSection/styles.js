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
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  margin: 3% 0px;
  grid-gap: 30px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  background-color: gray;
`;

export const Image = styled.img`
  object-fit: contain;
  max-width: 40%;
  height: auto;
  align-self: center;
`;

export const DetailCont = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  padding: 20px;
`;

export const Name = styled.h1`
  margin-bottom: 30px;
  font-size: 16px;
`;

export const Description = styled.p`
  font-size: 12px;
`;

