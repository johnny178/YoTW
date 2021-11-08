import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const Item = styled(Link)`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 17px;
  border-radius:  6px;
  box-shadow: -3px 3px 6px #70735D6E;
  border: 1px solid #70735DA3;
  margin: ${({ margin }) => margin ? margin : ''};
`;

export const Image = styled.img`
  align-self: center;
  /* width: 40%;
  height: 100%; */
  width: 369px;
  height: 260px;
  /* height: 57%;
  width: 92%; */
  object-fit: cover;
  margin-bottom: 15px;

  @media (max-width: 992px) {
    width: 300px;
    height: 211px;
  }
/* 
  @media (max-width: 600px) {
    width: 200px;
    height: 141px;
  } */
`;

export const DetailCont = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const Name = styled.h1`
  margin-bottom: 17px;
  font-size: 24px;
  letter-spacing: 0.48px;
  color: #575757;
`;

export const Content1 = styled.p`
  font: 18px;
  letter-spacing: 0.36px;
  color: #70735D;
  margin-bottom: 12px;
`;

export const Content2 = styled.p`
  font: 18px;
  letter-spacing: 0.36px;
  color: #575757;
`;