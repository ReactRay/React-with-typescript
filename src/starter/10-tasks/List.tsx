
import { Task } from "./types"
type ListProps = {

    toggleTask: (id: string) => void,
    tasks: Task[]


}


function List({ toggleTask, tasks }: ListProps) {
    return (
        <ul className="list">
            {tasks.map((task) => {
                return <li key={task.id}>
                    <p className="task-text">{task.description}</p>
                    <input type="checkbox" checked={task.isCompleted} onChange={() => toggleTask(task.id)} />
                </li>
            })}
        </ul>
    )
}

export default List
