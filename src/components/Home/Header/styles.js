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