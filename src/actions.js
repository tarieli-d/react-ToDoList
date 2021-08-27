// Action Creator
export function addTask(task) {
  return {
    type: 'ADD_TASK',
    data: task
  };
}
export function deleteTask(task) {
  return {
    type: 'DELETE_TASK',
    data: task
  };
}
