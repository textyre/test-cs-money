export default function handleMoveTask(task) {
  let task_move = task.querySelector(".task-move"),
    list_move = task.querySelector(".task-move ul");
  list_move.addEventListener("click", handleClickItem);
  task_move.addEventListener("mouseover", handleOver);
  task_move.addEventListener("mouseout", handleLeave);

  function handleClickItem() {
    if (event.target.tagName === "LI") {
      let whereMove = event.target.textContent,
        board = document.querySelector(`.${whereMove} .board`),
        buff_task = task;

      if (whereMove === "to-do") {
        buff_task.querySelector("ul > li").textContent = "in-process";
      }
      if (whereMove === "in-process") {
        buff_task.querySelector("ul > li").textContent = "to-do";
      }
      task.remove();
      board.appendChild(buff_task);
    }
  }
  function handleOver() {
    let list = task_move.querySelector("ul");
    list.style = "display: block";
  }

  function handleLeave() {
    let list = task_move.querySelector("ul");
    list.style = "display: none";
  }
}
