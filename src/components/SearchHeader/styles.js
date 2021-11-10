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

  &::after {
    content: ' ${({ value }) => value}';
    color: #FFD965;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

export const Searchbar = styled.input`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

export const FilterCont = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  background-color: #B2E4FF;
`;

export const FilterBtnCont = styled.div`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, 0);
  display: grid;
  grid-template-columns: repeat(auto-fit, 5em);
  grid-gap: 10px;
  width: 80%;
  justify-content: center;
`;