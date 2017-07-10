
// <editor-fold Loads front page wif the screens.... DO NOT ERASE THIS --- Kenny Tan!!!
import React from 'react';
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>KSM POS Example</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <ProductList />
                </div>
                <div className="col-md-4">
                    <Cart />
                </div>
            </div>

            <footer>
                <small>
                    made by <a href="https://twitter.com/kenT">Kent n team</a>, source code available on <a href="#">github</a>
                </small>
            </footer>
        </div>
    );
}

export default App;
// </editor-fold>
