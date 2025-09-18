import styled from "styled-components";

export const S = {
    ColumnsContainer: styled.div`
        display: flex;
        justify-content: space-between;
        gap: 0.5rem;
    `,
    Column: styled.div`
        padding: 0.75rem;
        width: 17.5rem;
        background-color: #ebecf0;
        border-radius: 10px;
        margin: 1.25rem;
        display: flex;
        flex-direction: column;
        align-items: start;
        height: fit-content;
        gap: 0.5rem;
    `,
    ColumnTitle: styled.p`
        margin: 0;
    `,
    CardContainer: styled.div`
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        gap: 1rem;
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
