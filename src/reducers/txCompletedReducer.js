const initialState = false;

export default function txCompleted(state = initialState,
                                    action) {
  switch (action.type) {
    case 'UPDATE_TX_COMPLETED':
      return {
        ...state,
        txCompleted: action.txCompleted
      };
    default:
      return state;
  }
}
