import styled from "styled-components";

export const Footer = styled.footer`
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    width: 100%;
    min-height: 3.5rem;
    background-color: #0067a3;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 2.25rem;
    color: white;

    @media (max-width: 375px) {
        background-color: #0079bf;
        justify-content: end;
    }
`;