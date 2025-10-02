import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  button {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
    background-color: #0079bf;
    height: 100lvh;
`;

export const Header = styled.header`
    padding-left: 1rem;
    padding-right: 1rem;
    width: 100%;
    height: 3.5rem;
    background-color: #0067a3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;

    @media (max-width: 375px) {
        background-color: #0079bf;
        justify-content: end;
    }
`;

export const H2 = styled.h2`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 1.75rem;
    @media (max-width: 375px) {
        display: none;
    }
`;

export const LoginContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 6px;
    cursor: pointer;
`;

export const LoginButton = styled.button`
    background-image: url("/src/assets/Vector.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    border: none;
    cursor: pointer;
`;

export const Button = styled.button<{ $submitted: boolean }>`
    display: flex;
    justify-content: ${(props) => (props.$submitted ? "center" : "start")};
    align-items: center;
    gap: 3px;
    color: ${(props) => (props.$submitted ? "white" : "#5e6c84")};
    background: ${(props) => (props.$submitted ? "#0079bf" : "none")};
    border: none;
    border-radius: 5px;
    padding: 0;
    cursor: pointer;
    width: 6.3rem;
    height: 1.8rem;
`;
