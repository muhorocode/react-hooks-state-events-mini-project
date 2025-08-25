
function Task({ text, category, onDeleteTask }) {
  return (
    <li className="task">
      <span>{text}</span>{" "}
      <span className="category">{category}</span>
      <button onClick={() => onDeleteTask && onDeleteTask(text)}>Delete</button>
    </li>
  )
}

export default Task
