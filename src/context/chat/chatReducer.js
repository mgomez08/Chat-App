import { types } from "../../types/types";

// const initialState = {
//   uid: "",
//   chatActive: null,
//   users: [],
//   messages: [],
// };

export const chatReducer = (state, action) => {
  switch (action.type) {
    case types.logout:
      console.log("reducer");
      return {
        uid: "",
        chatActive: null,
        users: [],
        messages: [],
      };
    case types.loadUsers:
      return {
        ...state,
        users: [...action.payload],
      };
    case types.activeChat:
      if (state.chatActive === action.payload) return state;
      return {
        ...state,
        chatActive: action.payload,
        messages: [],
      };
    case types.newMessage:
      if (
        state.chatActive === action.payload.from ||
        state.chatActive === action.payload.to
      ) {
        return {
          ...state,
          messages: [...state.messages, action.payload],
        };
      } else {
        return state;
      }
    case types.loadMessages:
      return {
        ...state,
        messages: [...action.payload],
      };
    default:
      return state;
  }
};
