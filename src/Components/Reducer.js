const initialState = {
  task: [
    { id: Math.random(), description: "wake up", isDone: true },
    { id: Math.random(), description: "study", isDone: false },
    { id: Math.random(), description: "sleep", isDone: true },
  ],
};

const reducer = (state = initialState, { type, payload }) => {
  // const { type, payload } = action;
  switch (type) {
    case "ADDTASK":
      return {
        ...state,
        task: state.task.concat(payload),
      };
    case "EDITTASK":
      return {
        ...state,
        task: state.task.map((el, index) =>
          el.id === payload.id ? { ...el, description: payload.newtext } : el
        ),
      };
    case "EDITDONE":
      return {
        ...state,
        task: state.task.map((el, index) =>
          el.id === payload.id ? { ...el, isDone: !el.isDone } : el
        ),
      };
    case "DELETE":
      return {
        ...state,
        task: state.task.splice(payload, 1),
      };

    default:
      return state;
  }
};

export default reducer;
