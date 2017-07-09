export default function amtKeyedIn(state={}, action){
  switch (action.type) {
    case 'UPDATE_AMT_KEYED_IN':
      return {
        ...state,
        amtKeyedIn: action.amtKeyedIn
      };
    default:
      return state;
  }
}
