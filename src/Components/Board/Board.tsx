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
    Footer,
    H2,
    Header,
    LoginButton,
    LoginContainer,
    Wrapper,
} from "./Board.styled";
import { Outlet, useLocation, useNavigate } from "react-router";

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

localStorage.setItem("INITIAL_TASKS", JSON.stringify(INITIAL_TASKS));

export function Board() {
    const [tasks, setTasks] = useState<Task[]>(() => {
        const savedTasks = localStorage.getItem("kanban-tasks");
        return savedTasks ? JSON.parse(savedTasks) : INITIAL_TASKS;
    });
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const [isActive, setIsActive] = useState<boolean>(false);
    const [showInputForm, setShowInputForm] = useState<string | undefined>(
        undefined
    );
    const [showDropDown, setShowDropDown] = useState<string | undefined>(
        undefined
    );
    const [currentTaskTitle, setCurrentTaskTitle] = useState<string>("");
    const [isClicked, setIsClicked] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const isTaskDetailPage = location.pathname !== "/";

    const saveTasksToStorage = (updatedTasks: Task[]) => {
        localStorage.setItem("kanban-tasks", JSON.stringify(updatedTasks));
    };

    const handleLoginClick = () => {
        setIsOpen((prev) => !prev);
        setIsActive((prev) => !prev);
    };

    const handleTaskSelect = (selectedTitle: string, targetColumn: string) => {
        const task = tasks.find((t) => t.title === selectedTitle);
        if (task) {
            const allowedSourceColumns = getSourceColumns(targetColumn);

            if (allowedSourceColumns.includes(task.status)) {
                const updatedTasks = tasks.map((t) =>
                    t.id === task.id ? { ...t, status: targetColumn } : t
                );
                setTasks(updatedTasks);
                saveTasksToStorage(updatedTasks);
            }

            setShowDropDown(undefined);
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
            const updatedTasks = [...tasks, newTask];
            setTasks(updatedTasks);
            saveTasksToStorage(updatedTasks);
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

    const handleTaskClick = (taskId: string) => {
        navigate(`/task/${taskId}`);
    };

    const getSourceColumns = (targetColumn: string): string[] => {
        switch (targetColumn) {
            case "READY":
                return ["BACKLOG"];
            case "IN_PROGRESS":
                return ["READY"];
            case "FINISHED":
                return ["IN_PROGRESS"];
            default:
                return [];
        }
    };

    const getTasksForDropdown = (columnId: string): Task[] => {
        switch (columnId) {
            case "READY":
                return tasks.filter((task) => task.status === "BACKLOG");
            case "IN_PROGRESS":
                return tasks.filter((task) => task.status === "READY");
            case "FINISHED":
                return tasks.filter((task) => task.status === "IN_PROGRESS");
            default:
                return [];
        }
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
            {isTaskDetailPage ? (
                <Outlet context={{ tasks, onBack: () => navigate("/") }} />
            ) : (
                <S.ColumnsContainer>
                    {COLUMNS.map((column) => {
                        return (
                            <Column
                                key={column.id}
                                column={column}
                                tasks={tasks.filter(
                                    (task) => task.status === column.id
                                )}
                                onTaskClick={handleTaskClick}
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
                                {showDropDown === column.id && (
                                    <TaskList
                                        tasks={getTasksForDropdown(column.id)}
                                        onTaskSelect={(selectedTitle) =>
                                            handleTaskSelect(
                                                selectedTitle,
                                                column.id
                                            )
                                        }
                                    />
                                )}
                                {(() => {
                                    const isBacklog = column.id === "BACKLOG";
                                    const isReady = column.id === "READY";
                                    const isInProgress =
                                        column.id === "IN_PROGRESS";
                                    const isFinished = column.id === "FINISHED";
                                    const isBacklogInput =
                                        showInputForm === column.id &&
                                        isBacklog;
                                    const hasValidTitle = Boolean(
                                        currentTaskTitle.trim()
                                    );
                                    const dropdownTasks = getTasksForDropdown(
                                        column.id
                                    );
                                    const hasTasksInSource =
                                        dropdownTasks.length > 0;
                                    const isButtonDisabled =
                                        (isBacklogInput && !hasValidTitle) ||
                                        (!isBacklog && !hasTasksInSource);

                                    const shouldShowAddButton =
                                        isBacklog ||
                                        isReady ||
                                        isInProgress ||
                                        isFinished;
                                    return (
                                        <S.Button
                                            $submitted={
                                                hasValidTitle && isBacklogInput
                                            }
                                            $isBacklogDisabled={
                                                isButtonDisabled
                                            }
                                            $isReady={isReady}
                                            $isClicked={isClicked}
                                        >
                                            {shouldShowAddButton &&
                                                showDropDown !== column.id && (
                                                    <Button
                                                        isDisabled={
                                                            isButtonDisabled
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
                                                            } else if (
                                                                isReady ||
                                                                isInProgress ||
                                                                isFinished
                                                            ) {
                                                                setShowDropDown(
                                                                    column.id
                                                                );
                                                            } else {
                                                                addTask(
                                                                    column.id
                                                                );
                                                            }
                                                        }}
                                                    >
                                                        {showInputForm !==
                                                            column.id && (
                                                            <Cross />
                                                        )}

                                                        {showInputForm ===
                                                        column.id
                                                            ? "Submit"
                                                            : "Add card"}
                                                    </Button>
                                                )}
                                        </S.Button>
                                    );
                                })()}
                            </Column>
                        );
                    })}
                </S.ColumnsContainer>
            )}
            <Footer/>
        </Wrapper>
    );
}

export default Board;
