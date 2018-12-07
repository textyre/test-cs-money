export default (function moduleSort() {
  let btns_sort = document.querySelectorAll(".name-sort"),
    isSorted = false;
  const selector_board = ".board",
    selector_task = "task",
    selector_task_name = ".task-name";

  btns_sort.forEach(btn => {
    btn.addEventListener("click", function(e) {
      let name_column = e.target.getAttribute("data-column");
      sortColumn(name_column);
    });
  });

  function sortColumn(name_column) {
    let board = document.querySelector(`.${name_column} ${selector_board}`),
      tasks = board.querySelectorAll(`${selector_task}`),
      arr_tasks = [].slice.call(tasks);
    if (isSorted) {
      arr_tasks.reverse();
      arr_tasks.forEach(item => {
        board.appendChild(item);
      });
      return;
    } else firstSort(arr_tasks, board);
  }

  function firstSort(tasks, board) {
    isSorted = true;
    tasks
      .sort((item, nextitem) => {
        let a = item
          .querySelector(selector_task_name)
          .textContent.replace(/\s/gi, "")[0];
        let b = nextitem
          .querySelector(selector_task_name)
          .textContent.replace(/\s/gi, "")[0];
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
      })
      .forEach(item => {
        board.appendChild(item);
      });
  }
})();
