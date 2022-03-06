import styled, { keyframes } from "styled-components";
import { lightSpeedIn } from "react-animations";

const lightSpeedInAnimation = keyframes`${lightSpeedIn}`;

export const ContainerInformation = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding-bottom: 0.5rem;
  @media (max-width: 992px) {
    width: 100%;
  }
  > div {
    width: 50%;
    @media (max-width: 992px) {
      width: 100%;
    }
    > button {
      width: 100%;
    }
  }
`;
export const Title = styled.h1`
  width: 100%;
  font-size: 3rem;
  font-weight: bolder;
  color: #9cb4e9;
  margin-bottom: 0.5rem;
  animation: 1s ${lightSpeedInAnimation};
  @media (max-width: 576px) {
    font-size: 1.8rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bolder;
  color: #5e5e5e;
  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
`;

export const Vector = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  > img {
    width: 80%;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 90%;
  @media (max-width: 992px) {
    width: 50%;
    height: 95%;
  }
  @media (max-width: 576px) {
    width: 100%;
    height: 98%;
  }
`;

export const Fildset = styled.fieldset`
  display: flex;
  width: 80%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  border: none;
  background-color: white;
  border-radius: 10px;
  @media (max-width: 992px) {
    width: 80%;
    height: 95%;
  }
  @media (max-width: 576px) {
    width: 70%;
    height: 95%;
  }
  > img {
    width: 20%;
    margin: 0.5rem;
  }
  > div {
    width: 80%;
    margin: 0.4rem 0 0.4rem 0;
    > div {
      input {
        padding: 8px 4px;
      }
      > div {
        padding: 8px 4px;
      }
    }
  }
  > button {
    margin-top: 0.5rem;
    padding: 8px 4px;
    border: 2px solid #9cb4e9;
    width: 80%;
    font-weight: 600;
    &:hover {
      background-color: #9cb4e9;
      color: #fff;
    }
    > span {
    }
  }
`;

export const Legend = styled.legend`
  display: contents;
  color: transparent;
  font-size: 0.1rem;
`;
