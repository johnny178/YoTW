import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const Item = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 17px;
  border-radius:  6px;
  box-shadow: -3px 3px 6px #70735D6E;
  border: 1px solid #70735DA3;
  margin: ${({ margin }) => margin ? margin : ''};
  background-color: white;
  /* flex: 1; */
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-height: 260px;
  object-fit: cover;
  margin-bottom: 15px;
  border-radius:  6px;
  /* max-width: 100%; */
`;

export const DetailCont = styled.div`
  width: ${({ isDetailPage }) => isDetailPage ? '19vw' : ''};
  
  @media (max-width: 1200px) {
    width: ${({ isDetailPage }) => isDetailPage ? '25vw' : ''};
  }
  
  @media (max-width: 768px) {
    width: ${({ isDetailPage }) => isDetailPage ? '40vw' : ''};
  }

  @media (max-width: 600px) {
    width: ${({ isDetailPage }) => isDetailPage ? '50vw' : ''};
  }
`;

export const Name = styled.h1`
  margin-bottom: 17px;
  font-size: 1.25rem;
  letter-spacing: 0.48px;
  color: #575757;
`;

export const Line = styled.div`
  display: flex;
`;

export const Icon = styled.img`
  height: 1rem;
  object-fit: contain;
  margin-right: 5px;
`;

export const Content1 = styled.p`
  font-size: 1rem;
  letter-spacing: 0.36px;
  color: #70735D;
  margin-bottom: 12px;
`;

export const Content2 = styled.p`
  font-size: 1rem;
  letter-spacing: 0.36px;
  color: #575757;
`;