import { useState } from "react";
import type { Task } from "../../types";
import * as S from "./TaskList.styled";

type TaskListType = {
    tasks: Task[];
};
export function TaskList({ tasks }: TaskListType) {
    const [selectedTask, setSelectedTask] = useState<string | undefined>(undefined)

    return (
        <form>
            <S.TaskListSelect id="tasks" value={selectedTask} onChange={e => {setSelectedTask(e.target.value)}}>
                <option value="">Select a task</option>
                {tasks.map((task) => (
                    <option value={task.title} key={task.id}>
                        {task.title}
                    </option>
                ))}
            </S.TaskListSelect>
        </form>
    );
}

export default TaskList;
