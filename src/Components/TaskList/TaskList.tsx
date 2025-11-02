import { useState } from "react";
import type { Task } from "../../types";
import * as S from "./TaskList.styled";

type TaskListType = {
    tasks: Task[];
    onTaskSelect: (selectedTitle: string) => void

};
export function TaskList({ tasks, onTaskSelect }: TaskListType) {
    const [selectedTask, setSelectedTask] = useState<string | undefined>(undefined)

    const handleTaskChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedTitle = e.target.value
        setSelectedTask(selectedTitle)

        if (selectedTitle) {
            onTaskSelect(selectedTitle)
        }
    }

    return (
        <form>
            <S.TaskListSelect id="tasks" value={selectedTask} onChange={handleTaskChange}>
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
