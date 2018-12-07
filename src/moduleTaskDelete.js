export default function handleDeleteTask(task) {
  task.addEventListener("click", handleClick);
  function handleClick() {
    if (event.target.classList.contains("task-delete")) {
      task.remove();
    }
  }
}
