import { useState } from "react";
import type { Column as ColumnType, Task } from "../../types";
import { Arrow } from "../Arrow/Arrow";
import {
    H2,
    Header,
    LoginButton,
    LoginContainer,
    Wrapper,
} from "./Board.styled";
import { S } from "../Column/Column.styled";
import { Column } from "../Column";

const INITIAL_TASKS: Task[] = [
    {
        id: "1",
        title: "Important task",
        description: "Description for Important task",
        status: "TODO",
    },
    {
        id: "2",
        title: "Very important task",
        description: "Description for very important task",
        status: "TODO",
    },
    {
        id: "3 ",
        title: "Task in progress",
        description: "Description for task in progress",
        status: "IN_PROGRESS",
    },
];

const COLUMNS: ColumnType[] = [
    { id: "BACKLOG", title: "Backlog" },
    { id: "READY", title: "Ready" },
    { id: "IN_PROGRESS", title: "In progress" },
    { id: "FINISHED", title: "Finished" },
];

export function Board() {
    const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isActive, setIsActive] = useState<boolean>(false);

    const handleArrowClick = () => {
        setIsOpen(!isOpen);
        setIsActive(!isActive);
    };
    return (
        <Wrapper>
            <Header>
                <H2>Awesome Kanban Board</H2>
                <LoginContainer
                    className={isOpen ? "active" : ""}
                    onClick={handleArrowClick}
                >
                    <LoginButton />
                    <Arrow $isOpen={isOpen} />
                </LoginContainer>
            </Header>
            <S.ColumnContainer>
                {COLUMNS.map((column) => {
                    return (
                        <Column key={column.id} column={column} tasks={tasks.filter(task => task.status === column.id)} />
                    );
                })}
            </S.ColumnContainer>
        </Wrapper>
    );
}

export default Board;
