import { useState } from "react";
import type { Column as ColumnType, Task } from "../../types";
import { Arrow } from "../Arrow/Arrow";
import { Column } from "../Column";
import { Cross, S } from "../Column/Column.styled";
import { TaskInputForm } from "../TaskInputForm";
import {
    Button,
    H2,
    Header,
    LoginButton,
    LoginContainer,
    Wrapper
} from "./Board.styled";

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
    const [showInputForm, setShowInputForm] = useState<string | undefined>(
        undefined
    );
    const [currentTaskTitle, setCurrentTaskTitle] = useState<string>("");

    const handleArrowClick = () => {
        setIsOpen(!isOpen);
        setIsActive(!isActive);
    };

    const handleTaskSubmit = (columnId: string, title: string) => {
        if (title.trim()) {
            const newTask = {
                id: Math.random().toString(36),
                title: title.trim(),
                description: "New task description",
                status: columnId,
            };
            setTasks((prevTasks) => [...prevTasks, newTask]);
        }
        setShowInputForm(undefined);
        setCurrentTaskTitle("");
    };

    const addTask = (columnId: string) => {
        if (columnId === "BACKLOG") {
            setShowInputForm(columnId);
        }
    };

    const handleTaskCancel = () => {
        setShowInputForm(undefined);
        setCurrentTaskTitle("");
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
                            {showInputForm === column.id && (
                                <TaskInputForm
                                    onSubmit={(title) =>
                                        handleTaskSubmit(column.id, title)
                                    }
                                    onCancel={handleTaskCancel}
                                    onChange={setCurrentTaskTitle}
                                />
                            )}

                            <Button $submitted={showInputForm === column.id}
                                onClick={() => {
                                    if (showInputForm === column.id) {
                                        handleTaskSubmit(
                                            column.id,
                                            currentTaskTitle
                                        );
                                    } else {
                                        addTask(column.id);
                                    }
                                }}
                            >
                                {showInputForm !== column.id && <Cross />}

                                {showInputForm === column.id
                                    ? "Submit"
                                    : "Add card"}
                            </Button>
                        </Column>
                    );
                })}
            </S.ColumnsContainer>
        </Wrapper>
    );
}

export default Board;
