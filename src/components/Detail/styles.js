import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Frame = styled.div`
  display: flex;
  padding: 2.3vh 6.5vw;
  justify-content: space-between;
  flex-direction: ${({ isFullWidth }) => isFullWidth ? 'column' : 'row'};;

  &:first-child {
    margin-top: 50px;
    align-items: flex-end;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    &:first-child {
      align-items: unset;
    }
  }
  
  @media (max-width: 600px) {
    padding: 3vh 6.5vw;
  }
`;

export const DetailCont = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TravelCont = styled.div`
  margin-bottom: 4vh;
`;

export const Line = styled.div`
  display: flex;

  &:not(:last-child){
    margin-bottom: 25px;
  }
  
  @media (max-width: 600px) {
    &:not(:last-child){
      margin-bottom: 15px;
    }
  }
`;

export const Icon = styled.img`
  height: 1rem;
  width: 1rem;
  object-fit: contain;
  margin-right: 5px;
  margin-top: 2px;
`;

export const Img = styled.img`
  object-fit: cover;
  min-width: 55vw;
  height: 40vw;
  margin-left: 73px;
  border-radius: 8px;

  @media (max-width: 992px) {
    height: 75vw;
    margin-left: 0px;
    margin-top: 30px;
  }
`;

export const Title1 = styled.h1`
  font-size: 2rem;
  letter-spacing: 0.6px;
  color: #575757;
  margin-bottom: 30px;
  font-weight: 700;

  @media (max-width: 600px) {
    margin-bottom: 20px;
  }
`;

export const Title2 = styled.h2`
  font-size: 1.3rem;
  letter-spacing: 0.48px;
  color: #575757;
  margin-bottom: 10px;
  font-weight: 500;
  
  @media (max-width: 600px) {
    margin-bottom: 5px;
  }
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  letter-spacing: 0.48px;
  color: #70735D;
  font-weight: 500;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const Tag = styled.p`
  border-radius: 0.5rem;
  margin: 0px 6.4px 5px 0;
  padding: 0.2rem 0.3rem;
  background-color: #283880;
  color: white;
`;

export const Url = styled.a`  
  color: #70735D;
  text-decoration: underline;
`;

//底部推薦區塊
export const RecommendCont = styled.div`
  padding: 3.5rem 7%;
  background-color: ${({ backgroundColor }) => backgroundColor};

  @media (max-width: 600px) {
    padding: 2rem 7%;
  }
`;

export const RecommendHeader = styled.h1`
  font-size: 2rem;
  letter-spacing: 0.6px;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 700;
  color: white;

  @media (max-width: 600px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

export const ItemsBlock = styled.div`
  display: flex;
  overflow: scroll;
  padding: 5px;
`;

