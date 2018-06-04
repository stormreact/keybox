export const TOGGLE_CHECKBOX = "TOGGLE_CHECKBOX";

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
