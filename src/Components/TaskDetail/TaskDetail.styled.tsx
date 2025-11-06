import styled from "styled-components";

export const TaskDetailSection = styled.section`
    background-color: #fff;
    margin: 2rem;
    border-radius: 10px;
    height: 100%;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 2rem;
    gap: 2.8rem;
`;

export const ExitButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
        background: #f5f5f5;
    }
`;

export function Exit() {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12 4L4 12M4 4L12 12"
                stroke="#5E6C84"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
}

type ExitType = {
    onBack: () => void
}
