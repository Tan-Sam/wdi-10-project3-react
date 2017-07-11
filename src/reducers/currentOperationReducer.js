const initialState = {currentOperation: "salesRegistration"};

export default function currentOperation(state=initialState, action){
  switch (action.type) {
    case 'UPDATE_CURRENT_OPERATION':
      return {
        ...state,
        currentOperation: action.currentOperation
      };
    default:
      return state;
  }
}
