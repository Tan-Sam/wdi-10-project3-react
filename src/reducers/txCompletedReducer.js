const initialState = {
  currentOperation: 'salesRegistration'
};

export default function txCompleted(state = initialState,
                                    action) {
  switch (action.type) {
    case 'UPDATE_TX_COMPLETED':
      switch (state.currentOperation) {
        case 'salesRegistration':
          state.currentOperation = 'changeRegisstration'
        break;
        case 'changeRegisstration':
          state.currentOperation = 'salesRegistration'
        break;
        default:
          break;
      }
      return {...state};
    default:
      return state;
  }
}
