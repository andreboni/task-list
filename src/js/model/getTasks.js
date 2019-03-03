export const getTasks = (tasks = [], filter = {}) => {
  return tasks
    .sort((a, b) => {
      if (a.priority > b.priority) {
        return filter.priority;
      }
      if (a.priority < b.priority) {
        return (filter.priority === -1) ? 1 : -1;
      }
      return 0;
    })
    .filter(task => (filter.showCompleted) ?
      // if hideComplete is true, show only task is which is done
      (task.done === true) ? false : true :
      // otherwise, return all
      true
    )
    .filter(task => {
      const label = task.label.toLowerCase();
      const search = filter.search.toLowerCase();
      return label.includes(search);
    });
  }