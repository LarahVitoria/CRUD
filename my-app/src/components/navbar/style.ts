import styled from "styled-components";

export const Styled = styled.div`
  display: flex;
  > a {
    margin: 1rem;
  }
  > li a {
    font-family: "Roboto", sans-serif;
    color: #fff;
    font-weight: 400;
    font-size: 1rem;
    text-decoration: none;
    &:hover {
      color: #9cb4e9;
    }
  }
`;
export const Item = styled.li`
  list-style-type: none;
  text-align: center;
  text-decoration: none;
  padding: 1rem;
  &:hover {
    border-bottom: 2px solid #9cb4e9;
  }
`;