export const updateTxCompleted = (currentOperation) => {
  return {
    type: 'UPDATE_TX_COMPLETED',
    currentOperation
  };
}
