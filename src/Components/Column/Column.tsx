import type { Column as ColumnType, Task } from "../../types";
import TaskCard from "../TaskCard/TaskCard";

type ColumnProps = {
    column: ColumnType,
    tasks: Task[]
}
export function Column({column, tasks}: ColumnProps ) {
  return (
    <div>
        <h2>{column.title}</h2>
        {tasks.map(task => {
            return (
                <TaskCard key={task.id} task={task}/>
            )
        })}
    </div>
  );
};

export default Column;