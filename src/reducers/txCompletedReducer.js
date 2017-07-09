const initialState = "salesRegistration";

export default function txCompleted(state = initialState,
                                    action) {
  switch (action.type) {
    case 'UPDATE_TX_COMPLETED':
      return {
        ...state,
        currentOperation: action.currentOperation
      };
    default:
      return state;
  }

}
