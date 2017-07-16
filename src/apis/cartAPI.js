import {getProduct} from '../reducers/productsReducer';

export function isInCart(state, props) {
    return state.cart.items.indexOf(props.id) !== -1;
}

export function getItemQtyInCart(state, props) {
  try {
      const itemFound = state.cart.items.find((itm) => {
        return itm.id === props.id;
      });
      return itemFound? itemFound.qty : 0;

  } catch (e) {
    console.log(e);
    return 0;
  }
}

export function getItems(state, props) {
    return state.cart.items.map(cartItem =>{
      let product = getProduct(state, cartItem);
      return {
        ...product,
        qty: cartItem.qty,
        subtotal: (cartItem.qty * cartItem.price)
      };
    });
}

export function getCurrency(state, props) {
    return state.cart.currency;
}

export function getTotal(state, props) {
  try {
    return state.cart.items.reduce((acc, cartItem) => {
        return acc + (cartItem.qty * getProduct(state, cartItem).price);
    }, 0);
  } catch (e) {
    console.log(e);
    return 0;
  }
}
