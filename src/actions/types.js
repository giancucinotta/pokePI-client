export const GET_TYPES = 'GET_TYPES';

export function getTypes() {
  return (dispatch) =>
    fetch('https://pokepi.herokuapp.com/types')
      .then((answer) => answer.json())
      .then((answer) =>
        dispatch({ 
          type: GET_TYPES, 
          payload: answer 
        }));
};