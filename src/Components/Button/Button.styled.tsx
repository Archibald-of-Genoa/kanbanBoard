import styled from "styled-components";

export const Button = styled.div<{
    $submitted: boolean;
    $backlogDisabled: boolean;
}>`
    & button {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3px;
        border-radius: 5px;
        padding: 0;
        cursor: ${(props) =>
            props.$submitted
                ? "pointer"
                : props.$backlogDisabled
                ? "not-allowed"
                : "pointer"};
        width: 6.3rem;
        height: 1.8rem;
        color: ${(props) => (props.$submitted ? "white" : "#5e6c84")};
        background: ${(props) => (props.$submitted ? "#0079bf" : "white")};
        border: none;
    }
`;
