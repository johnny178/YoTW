import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #EDEDED;
  height: 80px;
  width: 100%;
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 1rem;

  @media (max-width: 768px){
    display: ${({ isHidden }) => isHidden && 'none'};
  }
`;

export const Url = styled.a`
  text-decoration: underline;
  cursor: pointer;
  margin-left: 5px;
`;

export const Icon = styled.img`
  margin-bottom: 5px;
`;