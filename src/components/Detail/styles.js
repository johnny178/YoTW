import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Frame = styled.div`
  display: flex;
  padding: 4.6vh 6.5vw;
  margin-top: 50px;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const DetailCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const TravelCont = styled.div`
  padding: 0 6.7vw;
  margin-bottom: 7.2%;
`;

export const Line = styled.div`
  display: flex;

  &:not(:last-child){
    margin-bottom: 25px;
  }
`;

export const Img = styled.img`
  object-fit: cover;
  width: 55vw;
  margin-left: 73px;
  border-radius: 8px;

  @media (max-width: 992px) {
    width: 100%;
    margin-left: 0px;
    margin-top: 30px;
  }
`;

export const Title1 = styled.h1`
  font-size: 2rem;
  letter-spacing: 0.6px;
  color: #575757;
  margin-bottom: 30px;
`;

export const Title2 = styled.h2`
  font-size: 1rem;
  letter-spacing: 0.48px;
  color: #575757;
  margin-bottom: 10px;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  letter-spacing: 0.48px;
  color: #70735D;
`;

export const Icon = styled.img`
  width: 31px;
  height: 25px;
  margin-right: 20px;
`;

//底部推薦區塊
export const RecommendCont = styled.div`
  padding: 5vh 7.2vw;
  background-color: #FFD965;
`;

export const RecommendHeader = styled.h1`
  font-size: 1.5rem;
  letter-spacing: 0.6px;
  color: #283880;
  margin-bottom: 5vh;
  text-align: center;
`;

export const ItemsBlock = styled.div`
  display: flex;
  overflow: scroll;
  padding: 5px;
`;

