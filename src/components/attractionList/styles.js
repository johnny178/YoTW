import styled from 'styled-components/macro';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-template-rows: repeat(auto-fit, 130px);
  margin: 50px;
  grid-gap: 30px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  /* padding: 20px 30px; */
  background-color: gray;
`;

export const Image = styled.img`
  object-fit: contain;
  /* height: 50%; */
  width: 200px;
  /* width: 10px; */
  align-self: center;
`;

export const DetailCont = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-shrink: 0; */
  margin-left: 20px;
  padding: 20px;
  /* background-color: yellow; */
`;

export const Name = styled.h1`
  margin-bottom: 30px;
  font-size: 16px;
`;

export const Description = styled.p`
  font-size: 12px;
`;



