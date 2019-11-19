export const GET_TEXT = "get_text";
export const UPDATE_TEXT = "update_text";

export const getText = () => {
  return {
    type: GET_TEXT
  };
};

export const updateText = newText => {
  return {
    type: UPDATE_TEXT,
    payload: newText
  };
};
