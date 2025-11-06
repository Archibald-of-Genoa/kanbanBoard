import styled from "styled-components";

export const S = {
    ColumnsContainer: styled.div`
        display: flex;
        justify-content: space-between;
        gap: 24px;
        height: 100%;
        padding: 1.25rem;
        width: 100%;
        overflow-x: auto;
        @media (max-width: 480px) {
            flex-direction: column;
        }
    `,
    Column: styled.div`
        padding: 0.75rem;
        background-color: #ebecf0;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: start;
        height: fit-content;
        width: 100%;
        gap: 0.5rem;

        @media (max-width: 480px) {
            max-width: 380px;
        }
    `,
    ColumnTitle: styled.p`
        margin: 0;
    `,
    CardContainer: styled.div`
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        gap: 0.5rem;
        width: 100%;
    `,
};

export function Cross() {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M14 7H9V2C9 1.448 8.552 1 8 1C7.448 1 7 1.448 7 2V7H2C1.448 7 1 7.448 1 8C1 8.552 1.448 9 2 9H7V14C7 14.552 7.448 15 8 15C8.552 15 9 14.552 9 14V9H14C14.552 9 15 8.552 15 8C15 7.448 14.552 7 14 7Z"
                fill="#5E6C84"
            />
        </svg>
    );
}
