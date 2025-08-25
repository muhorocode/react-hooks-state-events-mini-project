import Task from "./Task"

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <Task key={task.text} text={task.text} category={task.category} onDeleteTask={onDeleteTask}/>
        ))}
      </ul>
    </div>
  );
}

export default TaskList
