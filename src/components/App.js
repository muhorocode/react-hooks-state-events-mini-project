import { useState } from "react"
import CategoryFilter from "./CategoryFilter"
import NewTaskForm from "./NewTaskForm"
import TaskList from "./TaskList"
import { TASKS, CATEGORIES } from "../data"

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")

  function handleDeleteTask(text) {
    setTasks(tasks.filter((task) => task.text !== text))
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category)
  }

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask])
  }

  const tasksToDisplay = selectedCategory === "All" ? tasks : tasks.filter((task) => task.category === selectedCategory)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />
      <TaskList tasks={tasksToDisplay} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
