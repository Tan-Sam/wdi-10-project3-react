const initialState = {currentOperation: "salesRegistration"};

export default function currentOperation(state=initialState, action){
  switch (action.type) {
    case 'UPDATE_CURRENT_OPERATION':

    state.currentOperation =
      (state.currentOperation === 'salesRegistration')? 'changeRegistration':'salesRegistration';

      return { ...state };

    default:
      return state;
  }
}

export function getCurrentOperation(state) {
  // console.log(state.currentOperation);
  return state.currentOperation.currentOperation;
}
