import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* position: fixed; */
  background-color: #1986CE;
  height: 100px;
  width: 100%;
`;

export const Frame = styled.div``;

export const Text = styled.p`
  font-size: 1rem;
  color: white;

  @media (max-width: 600px) {
    font-size: 0.75rem;
  }
`;