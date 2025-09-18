import type { Task } from "../../types";
import * as S from "./TaskCard.styled";

type TaskCardProps = {
    task: Task;
};
export function TaskCard({ task }: TaskCardProps) {
    return (
        <S.Card>
            {task.title}
        </S.Card>
    );
}

export default TaskCard;
