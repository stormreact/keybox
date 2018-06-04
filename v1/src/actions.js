export const TOGGLE_CHECKBOX = "TOGGLE_CHECKBOX";
export const ADD_KEY = "ADD_KEY";
export const SELECT_KEY = "SELECT_KEY";
export const INVALIDATE_KEY = "INVALIDATE_KEY";

export const toggleCheckbox = name => ({
    type: TOGGLE_CHECKBOX,
    name
})

/*
export const toggleCheckbox = name => {
  console.log('action: toggleCheckbox', name);
  return {
    type: TOGGLE_CHECKBOX,
    name
  }
}
*/

export const addKey = values => {
  const key = values.key;
  return {
    type: ADD_KEY,
    key
  };
};

export const selectKey = key => {
  return {
    type: SELECT_KEY,
    key
  };
};

export const invalidateKey = key => {
  return {
    type: INVALIDATE_KEY,
    key
  };
};
