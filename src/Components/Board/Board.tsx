import { useState } from "react";
import type { Column as ColumnType, Task } from "../../types";
import { Arrow } from "../Arrow/Arrow";
import { Button } from "../Button";
import * as ButtonS from "../Button/Button.styled";
import { Column } from "../Column";
import { S as ColumnS, Cross } from "../Column/Column.styled";
import { TaskInputForm } from "../TaskInputForm";
import { TaskList } from "../TaskList";
import {
    H2,
    Header,
    LoginButton,
    LoginContainer,
    Wrapper,
} from "./Board.styled";
import { TaskCard } from "../TaskCard";

const S = {
    ...ColumnS,
    ...ButtonS,
};

const INITIAL_TASKS: Task[] = [
    {
        id: "1",
        title: "Important task",
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
    {
        id: "4",
        title: "Ready task",
        description: "Description for the ready task",
        status: "READY",
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
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const [isActive, setIsActive] = useState<boolean>(false);
    const [showInputForm, setShowInputForm] = useState<string | undefined>(
        undefined
    );
    const [showDropDown, setShowDropDown] = useState<string | undefined>(
        undefined
    );
    const [selectedTask, setSelectedTask] = useState<Task | undefined>(
        undefined
    );
    const [currentTaskTitle, setCurrentTaskTitle] = useState<string>("");
    const [isClicked, setIsClicked] = useState(false);

    const handleLoginClick = () => {
        setIsOpen((prev) => !prev);
        setIsActive((prev) => !prev);
    };

    const handleDropDownToggle = () => {
        setIsDropDownOpen((prev) => !prev);
    };

    const handleTaskSelect = (selectedTitle: string) => {
        const task = tasks.find((t) => t.title === selectedTitle);
        if (task) {
            setSelectedTask(task);
            // setShowDropDown(undefined);
        }
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
                    onClick={handleLoginClick}
                >
                    <LoginButton />
                    <Arrow $isOpen={isOpen} fill="white" />
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
                            {selectedTask && column.id === "READY" && (
                                <TaskCard task={selectedTask} />
                            )}

                            {showDropDown === column.id && (
                                <TaskList tasks={tasks} onTaskSelect={handleTaskSelect}/>
                            )}
                            {(() => {
                                const isBacklog = column.id === "BACKLOG";
                                let isReady = column.id === "READY";
                                const isBacklogInput =
                                    showInputForm === column.id && isBacklog;
                                const hasValidTitle = Boolean(
                                    currentTaskTitle.trim()
                                );

                                return (
                                    <S.Button
                                        $submitted={
                                            hasValidTitle && isBacklogInput
                                        }
                                        $isBacklogDisabled={
                                            isBacklogInput && !hasValidTitle
                                        }
                                        $isReady={isReady}
                                        $isClicked={isClicked}
                                    >
                                        <Button
                                            isDisabled={
                                                isBacklogInput && !hasValidTitle
                                            }
                                            onClick={() => {
                                                if (
                                                    showInputForm &&
                                                    isBacklog
                                                ) {
                                                    handleTaskSubmit(
                                                        column.id,
                                                        currentTaskTitle
                                                    );
                                                } else if (isReady) {
                                                    setIsClicked(!isClicked);
                                                    setShowDropDown(column.id);
                                                } else {
                                                    addTask(column.id);
                                                }
                                            }}
                                        >
                                            {showInputForm !== column.id && (
                                                <Cross />
                                            )}

                                            {showInputForm === column.id
                                                ? "Submit"
                                                : "Add card"}
                                        </Button>
                                    </S.Button>
                                );
                            })()}
                        </Column>
                    );
                })}
            </S.ColumnsContainer>
        </Wrapper>
    );
}

export default Board;
