import styled from 'styled-components/macro';

export const Container = styled.div`
  display: grid;
  min-height: 200vh;
  max-width: 1440px;
  padding: 3% 0;
  margin: auto;
  grid-template-rows: 1.6fr 2fr 1.5fr 1.4fr 1.5fr 1.5fr;
  grid-template-areas: 
    'img1 text1'
    'img1 img2'
    'text2 img2'
    'img3 text3'
    'img3 img4'
    'text4 img4';

  @media (max-width: 1512px) {
    padding: 3% 5%;
  }

  @media (max-width: 1000px) {
    grid-template-rows: 1.6fr 1fr 1.5fr 1.3fr 1fr 1.2fr;
  }

  @media (max-width: 768px) {
    grid-template-rows: 1fr 0.3fr 1fr 1fr 0.1fr 0.8fr;
  }

  @media (max-width: 600px) {
    min-height: 300vh;
    grid-template-rows: 1fr 0.5fr 1fr 0.5fr 1fr 0.5fr 0.8fr 0.5fr;
    grid-template-areas:
      'img1'
      'text1'
      'img2'
      'text2'
      'img3'
      'text3'
      'img4'
      'text4';
  }

  @media (max-width: 375px) {
    margin-bottom: 30px;
  }
`;

export const Frame = styled.div`
  grid-area: ${({ gridName }) => gridName};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

export const Icon = styled.img`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  width: 30px;
  object-fit: contain;

  @media (max-width: 600px) {
    top: 0px;
    left: 2%;
  }
`;

export const DetailCont = styled.div`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  margin-right: 50px;

  @media (max-width: 600px) {
    top: 5%;
    left: 12%;
  }
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #575757;
  letter-spacing: 0.6px;
  margin-bottom: 5px;
`;

export const Content = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #70735D;
`;

export const NorthernImage = styled.img`
  width: min(500px, 45vw);
  object-fit: contain;

  @media (max-width: 600px) {
    width: 100%;
    height: auto;
  }
`;

export const CentralImage = styled.img`
  width: min(565px, 45vw);
  object-fit: contain;

  @media (max-width: 600px) {
    width: 100%;
    height: auto;
  }
`;

export const SouthernImage = styled.img`
  align-self: flex-end;
  width: min(500px, 45vw);
  object-fit: contain;

  @media (max-width: 600px) {
    width: 100%;
    height: auto;
  }
`;

export const EeasternImage = styled.img`
  width: min(565px, 45vw);
  object-fit: contain;

  @media (max-width: 600px) {
    width: 100%;
    height: auto;
  }
`;