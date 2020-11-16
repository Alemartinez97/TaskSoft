import {SET_TASK, EDIT_TASK,DELETE_TASK,ADD_TASK} from '../constant/actions-types';

export const setTask = payload => {
  return {type: SET_TASK, payload};
};
export const deleteTask = payload =>
{
  return {type: DELETE_TASK, payload};
}
export const editTask = payload =>
{
  return {type: EDIT_TASK, payload};
}
export const addTask = payload =>
{
  return {type: ADD_TASK, payload};
}