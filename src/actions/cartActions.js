import {
  CART_ADD,
  CART_REMOVE,
  CART_REMOVE_ALL_BY_ID,
  CART_REMOVE_ALL} from '../constants/cartConstants';

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

export function removeAllFromCart(productId) {
    return {
        type: CART_REMOVE_ALL_BY_ID,
        payload: {
            productId
        }
    }
}

export function removeAllItemsFromCart() {
    return {
        type: CART_REMOVE_ALL,
        payload: {
        }
    }
}
