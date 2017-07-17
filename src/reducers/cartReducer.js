import { getProduct } from '../reducers/productsReducer';

import {
  CART_ADD,
  CART_REMOVE,
  CART_REMOVE_ALL_BY_ID,
  CART_REMOVE_ALL} from '../constants/cartConstants';

const initialState = {
    items: [], // array of product ids
    currency: '$'
};

export default function cart(state = initialState,
                             action = {}) {
    switch (action.type) {
        case CART_ADD:
            return handleCartAdd(state, action.payload);

        case CART_REMOVE:
            return handleCartRemove(state, action.payload);

        case CART_REMOVE_ALL_BY_ID:
            return handleCartRemoveAllById(state, action.payload);

        case CART_REMOVE_ALL:
            return handleCartRemoveAll(state);

        default:
            return state;
    }
}

function handleCartAdd(state, payload) {

  // find if item is in store with productId
  let itemFound = state.items.find((itm) => {
                    return itm.id === payload.productId
                  });

  // increase qty if found
  if (itemFound) {
    itemFound.qty++;
  }else { //   not found? add id & init with qty of 1
    state.items.push({
      id: payload.productId,
      qty:1});
  }

  return {...state};
}

function handleCartRemove(state, payload) {
  //  find target item
  let targetItem = state.items.find((itm) => {
    return itm.id === payload.productId;
  });

  // if after decrement(--) qty is 0,
  // return state.items without item.
  // else return itm with qty decremented.
  if (--targetItem.qty <= 0) {
    state.items = state.items.filter((itm) => {
      return itm.id != payload.productId;
    });
  }

  return {...state};
}

function handleCartRemoveAll(state) {
  state.items = [];
  return {...state};
}

function handleCartRemoveAllById(state, payload) {
  state.items = state.items.filter((itm)=> {
    return itm.id != payload.productId;
  });

  return {...state};  //  no clone, no update for those subscribed to store state
}
