// Action Creator
export function addTask(task) {
  return {
    type: 'ADD_TASK',
    data: task
  };
}
export function deleteTask(index) {
  return {
    type: 'DELETE_TASK',
    data: index
  };
}
