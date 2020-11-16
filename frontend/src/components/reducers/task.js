import {SET_TASK,EDIT_TASK,DELETE_TASK,ADD_TASK} from '../constant/actions-types';

const task = (state = [], action) => {
  const {type, payload} = action;
  switch (type) {
    case SET_TASK:
      return [...state, payload];
      case ADD_TASK:
        return payload;
      case DELETE_TASK:
        return state.filter(task => task._id !== payload._id);
      case EDIT_TASK:
        return state.map(task => {
          if (payload._id === task._id) {
            return payload;
          }
          return task;
        });
    default:
      return state;
  }
};
export default task;
