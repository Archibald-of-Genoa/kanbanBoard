import { useOutletContext, useParams } from "react-router";
import type { BoardContextType, Task } from "../../types";
import { H2 } from "../Board/Board.styled";
import * as S from "./TaskDetail.styled";
import { useEffect, useRef, useState } from "react";

export function TaskDetail() {
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const { taskId } = useParams();
    const { tasks, onBack, onUpdateTask } =
        useOutletContext<BoardContextType>();
    const task: Task | undefined = tasks.find((t) => t.id === taskId);
    const [ isEditing, setIsEditing ] = useState(false);
    const [ description, setDescription ] = useState(task?.description || "");

    useEffect(() => {
        if (isEditing && textareaRef.current) {
            textareaRef.current.select();
        }
    }, [isEditing]);
    
    const handleDescriptionClick = () => {
        setIsEditing(true);
    };

    const handleDescriptionChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setDescription(e.target.value);
    };

    const handleDescriptionBlur = () => {
        setIsEditing(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
            e.preventDefault();
            setIsEditing(false);

            if (task && description !== task.description) {
                onUpdateTask(task.id, { description });
            }
        }

        if (e.key === "Escape") {
            setDescription(task?.description || "");
            setIsEditing(false);
        }
    };

    if (!task) {
        return (
            <S.TaskDetailSection>
                <h2>Task not found</h2>
                <p>Task with ID "{taskId}" does not exist.</p>
                <button onClick={onBack}>Back to Board</button>
            </S.TaskDetailSection>
        );
    }

    return (
        <S.TaskDetailSection>
            <S.Container>
                <S.ButtonContainer>
                    <H2>{task.title}</H2>
                    <S.ExitButton onClick={onBack}>
                        <S.Exit />
                    </S.ExitButton>
                </S.ButtonContainer>
                {isEditing ? (
                    <S.Textarea
                        ref={textareaRef}
                        autoFocus
                        value={description}
                        onChange={handleDescriptionChange}
                        onBlur={handleDescriptionBlur}
                        onKeyDown={handleKeyDown}
                        placeholder="Enter task description..."
                    />
                ) : (
                    <div
                        onClick={handleDescriptionClick}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#f5f5f5";
                            e.currentTarget.style.width = "50%";
                            
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "white";
                        }}
                    >
                        {!description
                            ? "This task has no description"
                            : description}
                    </div>
                )}
            </S.Container>
        </S.TaskDetailSection>
    );
}

export default TaskDetail;
