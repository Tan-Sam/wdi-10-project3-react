// reducer
export default function products(state = []) {
    return state; // nothing to do here, but we need products node in redux store
}

// selectors
export function getProducts(state, props) {
    return state.products;
}

//  for new cart (sam)
export function getProductsInCart(state, props) {
    // return state.products;

    return state.products

}

export function getProduct(state, props) {
    // const foundProduct = state.products.find(item => item.id === props.id);  
    return state.products.find(item => item.id === props.id);

}
