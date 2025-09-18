import styled from "styled-components";
import type { ButtonProps } from "../../types";

export const ArrowStyled = styled.svg<ButtonProps>`
    transition: transform 0.3s ease;
    transform: ${({ $isOpen }) =>
        $isOpen ? "rotate(180deg)" : "rotate(0deg)"};
`;