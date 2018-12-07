import moduleTaskMove from "./moduleTaskMove";
import moduleModal from "./moduleModal";
import moduleTaskDelete from "./moduleTaskDelete";

export default (function moduleTask() {
  let modal = document.querySelector("modal"),
    btns_addTask = document.querySelectorAll(".add-task-text"),
    tasks = document.querySelectorAll("task");

  tasks.forEach(task => {
    moduleTaskMove(task);
    moduleTaskDelete(task);
  });

  btns_addTask.forEach(btn => {
    btn.addEventListener("click", function(e) {
      modal.classList.add("visible");
      moduleModal(e.target.getAttribute("data-column"));
    });
  });
})();
