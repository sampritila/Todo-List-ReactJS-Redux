import { ADD_TODO, REMOVE_TODO } from "../actions/actions";

const initialState = {
  items: {
    1: {
      id: 1,
      message: "Sample TODO",
    }
  }
};

export default function reducer(state = initialState, {type, payload}) {
  let items;
  switch(type) {
    case ADD_TODO:
      items = { ...state.items };
      items[payload.id] = payload;
      return {
        ...state,
        items
      }
    case REMOVE_TODO:
        items = { ...state.items };
        delete items[payload.id];
        return {
          ...state,
          items
        }
    default:
      return state;
  }
}
