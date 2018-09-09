export const ADD_TODO = 'ADD_TODO'
export const ADD_TODOs = 'ADD_TODOs'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const VISSIBLE_MODALS='VISSIBLE';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const isAuthencation='true'
/*
 * other constants
 */
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
/*
 * action creators
 */
export function addTodos(value) {
  return { type: ADD_TODOs, value}
}

export function vissible() {
  return { type: VISSIBLE_MODALS }
}
export function isAuthencated(){
  return {type:isAuthencation}
}
export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}
export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}
