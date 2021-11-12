import styled from 'styled-components/macro';

export const HeaderCont = styled.div`
  position: relative;
`;

export const HeaderBackgroundImg = styled.img`
  width: 100vw;
  height: 70vh;
  object-fit: cover;
`;

export const Title = styled.h1`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  letter-spacing: 0.6px;
  color: #FFFFFF;
  text-shadow: -3px 4px 4px #0D3457;
  text-align: center;

  &::after {
    content: 'YOTW';
    color: #FFD965;
  }

  @media (max-width: 1200px) {
    font-size: 2.5rem;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
    line-height: 1.5;
  }
`;

export const SearchCont = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Searchbar = styled.input`
  background-color: white;
  box-shadow: inset -2px 1px 0px #00000015, -3px 3px 7px #0A4F8B;
  border-radius: 8px;
  letter-spacing: 0.4px;
  text-align: center;
  padding: 7px 0;
  width: 30vw;
  font-size: 1rem;

  &::placeholder {
    color: rgba(87, 87, 87, 0.4);
    font-weight: 900;
  }

  @media (max-width: 992px) {
    width: 40vw;
  }
  @media (max-width: 768px) {
    width: 50vw;
  }
  @media (max-width: 600px) {
    width: 60vw;
  }
`;

export const SvgWrapper = styled.button`
  position: absolute;
  right: 0px;
  cursor: pointer;
  width: 33px;
  height: 33px;
  margin-left: 10px;
  
  & path {
    fill: #B2E4FF;
  } 
`;

export const Frame = styled.div`
  height: ${({ isLoading }) => isLoading ? '150vh' : 'auto'};
`;

export const GridCont = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(5rem, 1fr));
  margin: 3% 0px;
  grid-gap: 27px;
  padding-bottom: 5%;
  max-width: 1440px;

  @media (max-width: 1512px) {
    padding: 0 3% 5%;
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(5rem, 1fr));
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(5rem, 1fr));
  }
  
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(5rem, 1fr));
  }
`;
