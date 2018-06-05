export const TOGGLE_CHECKBOX = "TOGGLE_CHECKBOX";
export const ADD_KEY = "ADD_KEY";
export const SELECT_KEY = "SELECT_KEY";

export const toggleCheckbox = name => ({
    type: TOGGLE_CHECKBOX,
    name
})

export const addKey = values => {
  const key = values.key;

  console.log('myaction',values);

  return {
    type: ADD_KEY,
    values
  };
};

export const selectKey = key => {
  return {
    type: SELECT_KEY,
    key
  };
};
