import styled from "styled-components";
import { fadeInDown } from "../TaskCard/TaskCard.styled";

export const DropDown = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.4rem;
    background-color: #fff;
    width: 100%;
    min-height: 2rem;
    border-radius: 5px;
    transition: 0.3s ease-in-out;
    animation: ${fadeInDown} 0.4s ease-out;
`