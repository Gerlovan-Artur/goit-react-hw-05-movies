import styled from '@emotion/styled';

export const List = styled.ul`
  padding: 30px 0;
  text-decoration: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-gap: 20px;
  border-bottom: 1px solid black;
  border-image: 1px solid black;
`;