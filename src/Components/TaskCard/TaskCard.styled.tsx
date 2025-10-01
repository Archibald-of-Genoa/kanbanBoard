import styled, { keyframes } from "styled-components";

const fadeInDown = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-10px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const Card = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.4rem;
    background-color: #fff;
    width: 100%;
    border-radius: 5px;
    transition: 0.3s ease-in-out;
    animation: ${fadeInDown} 0.4s ease-out;

    input {
        outline: none;
        border: none;
        font-size: 1rem;

        &::placeholder {
            font-size: 1rem;
            color: #5e6c84
            
        }
    }
`;
