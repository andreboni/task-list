export const loadPreviousState = (key) => {
  return JSON.parse(localStorage.getItem(key)) || false; 
}

export const saveCurrentState = (key, state = {}) => {
  localStorage.setItem(key, JSON.stringify(state));
}