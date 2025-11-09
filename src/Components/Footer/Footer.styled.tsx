import styled from "styled-components";

export const Footer = styled.footer`
    padding-left: 1rem;
    padding-right: 1rem;
    width: 100%;
    min-height: 3.5rem;
    background-color: #0067a3;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 2.25gsrem;
    color: white;

    @media (max-width: 375px) {
        background-color: #0079bf;
        justify-content: end;
    }
`;