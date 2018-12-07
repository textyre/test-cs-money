import moduleTaskMove from "./moduleTaskMove";
import moduleTaskDelete from "./moduleTaskDelete";

export default function moduleModal(name_board) {
  let board = document.querySelector(`.${name_board} .board`),
    modal = document.querySelector("modal"),
    dialog = modal.querySelector("modal .dialog"),
    el_nameTask = dialog.querySelector(".task-name"),
    el_description = dialog.querySelector(".task-description"),
    btn_cancel = dialog.querySelector(".cancel"),
    btn_accept = dialog.querySelector(".accept"),
    listeners = [
      {
        target: el_nameTask,
        method: handleNameTask
      },
      {
        target: el_description,
        method: handleDescription
      },
      {
        target: btn_cancel,
        method: handleCancel
      },
      {
        target: btn_accept,
        method: handleAccept
      }
    ];

  btn_cancel.addEventListener("click", handleCancel);

  function handleCancel(e) {
    modal.classList.remove("visible");
    clearDialog();
  }

  btn_accept.addEventListener("click", handleAccept);

  function handleAccept(e) {
    addTask(board, name_board);
  }

  el_nameTask.addEventListener("click", handleNameTask);

  function handleNameTask(e) {
    e.target.textContent = "";
    e.target.style = "";
  }

  el_description.addEventListener("click", handleDescription);

  function handleDescription(e) {
    e.target.textContent = "";
    e.target.style = "";
  }

  function addTask(local_board, local_name_board) {
    let nameTask = el_nameTask.textContent.trim(),
      description = el_description.textContent.trim(),
      isTitle = checkTitle(nameTask),
      isDesc = checkDesc(description);

    if (!isTitle || !isDesc) {
      if (!isTitle) el_nameTask.style.color = "red";
      if (!isDesc) el_description.style.color = "red";
      return;
    }

    modal.classList.remove("visible");
    local_board.appendChild(newTask(nameTask, description, local_name_board));
    local_board = null;
    clearDialog();
  }

  function checkTitle(nameTask) {
    return nameTask.length > 0;
  }

  function checkDesc(description) {
    return description.length > 0;
  }

  function newTask(nameTask, description, name_board) {
    let task = document.createElement("task");
    task.innerHTML = `
    <div class="task-name" contenteditable="true" data-text="Название задачи">${nameTask}</div>
    <div class="task-description" contenteditable="true" data-text="Описание задачи">${description}</div>
      <div class="task-options">
        <span class="task-delete">Удалить</span>
        <span class="task-move">
          <span>Переместить ↓</span>
          <ul class="task-move-drop" style="display: none;">
            <li>${name_board === "to-do" ? "in-process" : "to-do"}</li>
            <li>done</li>
          </ul>
        </span>
      </div>`;
    moduleTaskDelete(task);
    moduleTaskMove(task);
    return task;
  }

  function clearDialog() {
    el_nameTask.style = "";
    el_nameTask.textContent = "";

    el_description.style = "";
    el_description.textContent = "";

    listeners.forEach(el => {
      el.target.removeEventListener("click", el.method);
    });
  }
}
