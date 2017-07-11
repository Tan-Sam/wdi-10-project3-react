const initialState = "salesRegistration";
// change registration
// tx completed?
//
export default function currentOperation(state={currentOperation: initialState}, action){
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
