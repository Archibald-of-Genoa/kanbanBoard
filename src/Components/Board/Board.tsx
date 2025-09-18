import { useState } from "react";
import type { Column as ColumnType, Task } from "../../types";
import { Arrow } from "../Arrow/Arrow";
import { Column } from "../Column";
import {
    Button,
    ButtonContainer,
    H2,
    Header,
    LoginButton,
    LoginContainer,
    Wrapper,
} from "./Board.styled";
import { Cross, S } from "../Column/Column.styled";

const INITIAL_TASKS: Task[] = [
    {
        id: "1",
        title: "Important task laskfj lsadkfjsld skjfdh ksdfhj ",
        description: "Description for Important task",
        status: "BACKLOG",
    },
    {
        id: "2",
        title: "Very important task",
        description: "Description for very important task",
        status: "BACKLOG",
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
            <S.ColumnsContainer>
                {COLUMNS.map((column) => {
                    return (
                        <Column
                            key={column.id}
                            column={column}
                            tasks={tasks.filter(
                                (task) => task.status === column.id
                            )}
                        >
                            <ButtonContainer>
                                <Cross/>
                                <Button>Add item</Button>
                            </ButtonContainer>
                        </Column>
                    );
                })}
            </S.ColumnsContainer>
        </Wrapper>
    );
}

export default Board;
