import type { Task } from "../../types";

type TaskCardProps = {
    task: Task
}
export function TaskCard({task}: TaskCardProps) {
  return (
    <div>
        {task.title}
        {task.description}
    </div>
  );
};

export default TaskCard;