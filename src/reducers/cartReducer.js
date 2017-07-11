import { getProduct } from '../reducers/productsReducer';

// actions
const CART_ADD   = 'cart/ADD';
const CART_REMOVE = 'cart/REMOVE';

// reducer
const initialState = {
    items: [], // array of product ids
    currency: '$'
};

// const initialState = [];


export default function cart(state = initialState, action = {}) {
    switch (action.type) {
        case CART_ADD:
            return handleCartAdd(state, action.payload);
        case CART_REMOVE:
            return handleCartRemove(state, action.payload);
        default:
            return state;
    }
}


function handleCartAdd(state, payload) {


  let itemFound = state.items.find((itm) => {
                    return itm.id === payload.productId
                  });

  if (state.items.length === 0 ||
      !itemFound) {
    state.items.push({
      id: payload.productId,
      qty: 1
    });
  }
  else {
    state.items = state.items.map((itm) => {
      if (itm === itemFound) {
        itm.qty++;
      }
      return itm;
    });
  }
  return state;
  //<editor-fold working
    //return
    // {
    //     ...state,
    //     items: [ ...state.items, payload.productId ]
    // };
    // </editor-fold>
}

function handleCartRemove(state, payload) {
    return {
        ...state,
        items: state.items.filter(id => id !== payload.productId)
    };
}

// action creators
export function addToCart(productId) {
    return {
        type: CART_ADD,
        payload: {
            productId
        }
    }
}

export function removeFromCart(productId) {
    return {
        type: CART_REMOVE,
        payload: {
            productId
        }
    }
}


// selectors
export function isInCart(state, props) {
    return state.cart.items.indexOf(props.id) !== -1;
}

export function getItems(state, props) {
    return state.cart.items.map(id => getProduct(state, { id }));
}

export function getCurrency(state, props) {
    return state.cart.currency;
}

export function getTotal(state, props) {
    return state.cart.items.reduce((acc, id) => {
        const item = getProduct(state, { id });
        return acc + item.price;
    }, 0);
}
