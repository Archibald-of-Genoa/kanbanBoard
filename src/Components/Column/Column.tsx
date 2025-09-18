import type { ReactNode } from "react";
import type { Column as ColumnType, Task } from "../../types";
import { TaskCard } from "../TaskCard";
import { S } from "./Column.styled";

type ColumnProps = {
    column: ColumnType;
    tasks: Task[];
    children: ReactNode
};
export function Column({ column, tasks, children }: ColumnProps) {
    return (
        <S.Column>
            <S.ColumnTitle>{column.title}</S.ColumnTitle>

            <S.CardContainer>
                {tasks.map((task) => {
                    return <TaskCard key={task.id} task={task} />;
                })}
            </S.CardContainer>
            {children}
        </S.Column>
    );
}

export default Column;
