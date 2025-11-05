import type { Task } from "../../types";
import * as S from "./TaskCard.styled";

type TaskCardProps = {
    task: Task;
    onClick: () => void
};
export function TaskCard({ task, onClick }: TaskCardProps) {
    return (
        <S.Card onClick={onClick}>
            {task.title}
        </S.Card>
    );
}

export default TaskCard;
