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
`;

export const Image = styled.img`
  object-fit: cover;
  margin-bottom: 17px;
  height: min(200px, 50vw);
  
  width: ${({ isDetailPage }) => isDetailPage ? '17vw' : ''};
  
  @media (max-width: 1200px) {
    width: ${({ isDetailPage }) => isDetailPage ? '25vw' : ''};
  }
  
  @media (max-width: 768px) {
    width: ${({ isDetailPage }) => isDetailPage ? '40vw' : ''};
  }

  @media (max-width: 600px) {
    width: ${({ isDetailPage }) => isDetailPage ? '55vw' : ''};
    margin-bottom: 15px;
  }
`;

export const DetailCont = styled.div`
  width: ${({ isDetailPage }) => isDetailPage ? '17vw' : ''};
  
  @media (max-width: 1200px) {
    width: ${({ isDetailPage }) => isDetailPage ? '25vw' : ''};
  }
  
  @media (max-width: 768px) {
    width: ${({ isDetailPage }) => isDetailPage ? '40vw' : ''};
  }

  @media (max-width: 600px) {
    width: ${({ isDetailPage }) => isDetailPage ? '55vw' : ''};
  }
`;

export const Name = styled.h1`
  margin-bottom: 15px;
  font-size: 1.3rem;
  letter-spacing: 0.48px;
  font-weight: 900;
  color: #575757;

  @media (max-width: 600px) {
    margin-bottom: 13px;
  }
`;

export const Line = styled.div`
  display: flex;
`;

export const Icon = styled.img`
  height: 1rem;
  width: 1rem;
  object-fit: contain;
  margin-right: 5px;
  margin-top: 2px;
`;

export const Content1 = styled.p`
  font-size: 1rem;
  letter-spacing: 0.36px;
  color: #70735D;
  margin-bottom: 5px;
  font-weight: 700;
  `;

export const Content2 = styled.p`
  font-size: 1rem;
  letter-spacing: 0.36px;
  color: #575757;
  font-weight: 700;
`;

export const ClassCont = styled.div`
  display: flex;
`;

export const TagCont = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled.p`
  border-radius: 0.5rem;
  margin-right: 6.4px;
  margin-bottom: 5px;
  padding: 0rem 0.3rem;
  background-color: #283880;
  color: white;
`;