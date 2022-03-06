import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";

const bounceAnimation = keyframes`${bounce}`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContainerInformation = styled.div`
  display: flex;
  width: 50%;
  padding: 2rem 0rem 0rem 4rem;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 800px) {
    width: 100%;
    padding: 0.7rem 2rem 0rem 2rem;
  }
  > button {
    width: 90%;
    margin: 1rem;
  }
`;
export const Title = styled.h1`
  width: 100%;
  font-size: 3rem;
  font-weight: bolder;
  color: #9cb4e9;
  margin-bottom: 0.5rem;
  animation: 1s ${bounceAnimation};
  @media (max-width: 600px) {
    font-size: 1.8rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bolder;
  color: #5e5e5e;
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

export const Vector = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  > img {
    width: 70%;
  }
`;

export const Form = styled.form`
  display: flex;
  width: 50%;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Fildset = styled.fieldset`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin: 0rem 5rem;
  border: none;
  background-color: white;

  @media (max-width: 800px) {
    margin: 0rem 1.5rem;
  }

  > img {
    margin-top: 1rem;
    width: 90px;
    height: 90px;
  }

  > div {
    width: 80%;
    margin: 0.4rem 0 0.4rem 0;

    @media (max-width: 800px) {
      width: 60%;
    }

    @media (max-width: 600px) {
      width: 100%;
    }
  }

  > button {
    width: 80%;
    margin-top: 1rem;
    font-weight: 600;

    &:hover {
      background-color: #9cb4e9;
      color: #fff;
    }
  }
`;

export const Legend = styled.legend`
  display: contents;
  color: transparent;
  font-size: 0.1rem;
`;
