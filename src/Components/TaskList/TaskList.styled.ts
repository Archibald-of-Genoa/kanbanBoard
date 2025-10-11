import styled from "styled-components";
import { fadeInDown } from "../TaskCard/TaskCard.styled";

export const TaskListSelect = styled.select`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.4rem;
    background-color: #fff;
    font-size: 1rem;
    width: 100%;
    min-height: 2rem;
    border-radius: 5px;
    border: none;
    transition: 0.3s ease-in-out;
    animation: ${fadeInDown} 0.4s ease-out;
`;
