import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const Item = styled(Link)`
  display: flex;
  flex-direction: row;
  background-color: gray;
`;

export const Image = styled.img`
align-self: center;
width: 40%;
height: 100%;
object-fit: cover;
`;

export const DetailCont = styled.div`
display: flex;
flex-direction: column;
margin-left: 20px;
padding: 20px;
`;

export const Name = styled.h1`
margin-bottom: 30px;
font-size: 16px;
color: black;
`;

export const Description = styled.p`
font-size: 12px;
color: black;
`;