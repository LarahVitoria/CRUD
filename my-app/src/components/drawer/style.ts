import styled from "styled-components";

export const Container = styled.div`
  
`;

export const List = styled.ul`
  list-style-type: none;
  text-decoration: none;
  width: 15rem;
`;

export const ListItem = styled.li`
  > div {
    > span {
      padding: 0.5rem 4rem 0.5rem 1rem;
      > a {
        list-style-type: none;
        text-decoration: none;
        color: #9cb4e9;
        font-weight: 500;
        font-size: 1rem;
      }
    }
  }
`;