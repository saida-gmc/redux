export const Addtask = (payload) => {
  return {
    type: "ADDTASK",
    payload,
  };
};
export const Edittask = (id, newtext) => {
  return {
    type: "EDITTASK",
    payload: { id, newtext },
  };
};
export const Editdone = (id, newtext) => {
  return {
    type: "EDITDONE",
    payload: { id },
  };
};
