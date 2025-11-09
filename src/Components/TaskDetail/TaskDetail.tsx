import { useOutletContext, useParams } from "react-router";
import type { BoardContextType, Task } from "../../types";
import { H2 } from "../Board/Board.styled";
import * as S from "./TaskDetail.styled";

export function TaskDetail() {
    const { taskId } = useParams();
    const { tasks, onBack } = useOutletContext<BoardContextType>();

    const task: Task | undefined = tasks.find((t) => t.id === taskId);

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
                      <S.Exit/>
                    </S.ExitButton>
                </S.ButtonContainer>
                <div style={{width: '50%'}}>{!task.description ? "This task has no description" : task.description}</div>
            </S.Container>
        </S.TaskDetailSection>
    );
}

export default TaskDetail;
