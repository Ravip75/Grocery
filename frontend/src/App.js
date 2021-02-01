import React from 'react';
import { useSelector } from 'react-redux';
import {BrowserRouter,Link,Route} from 'react-router-dom';
import './App.css';
import CartScreen from './screen/CartScreen';
import HomeScreen from './screen/HomeScreen';
import OrderScreen from './screen/OrderScreen';
import OrdersScreen from './screen/OrdersScreen';
import PaymentScreen from './screen/PaymentScreen';
import PlaceOrderScreen from './screen/PlaceOrderScreen';
import ProductScreen from './screen/ProductScreen';
import ProductsScreen from './screen/ProductsScreen';
import RegisterScreen from './screen/RegisterScreen';
import ShippingScreen from './screen/ShippingScreen';
import SigninScreen from './screen/SigninScreen';

function App() {
    const userSignin=useSelector(state=>state.userSignin);
    const {userInfo}=userSignin;
  const openMenu=()=>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu=()=>{
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
      <BrowserRouter>
    <div className="grid-container">
            <header className="header">
                <div className="brand">
                    <button onClick={openMenu}>
                        &#9776;
                    </button>
                    <Link to="/">Grocery Item</Link>
                </div>
                <div className="header-links">
                    <a href="cart.html">Cart</a>
                    {
                        userInfo ? <Link to="/profile">{userInfo.name}</Link>:
                        <Link to="/signin">Sign In</Link>
                    }
                    {userInfo && userInfo.isAdmin &&(
                        <div className="dropdown">
                            <a href="#">Admin</a>
                            <ul className="dropdown-content">
                                <li>
                                    <Link to="/orders">Orders</Link>
                                    <Link to="/products">Products</Link>
                                </li>
                            </ul>
                            </div>
                    )}
                    
                    
                </div>
            </header>
            <aside className="sidebar">
                <h3>Shopping categories</h3>
                <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                <ul className="categories">
                    <li>
                        <Link to="/category/Protein">Protein</Link>
                    </li>
                    <li>
                        <Link to="/category/Vitamin">Vitamin</Link>
                    </li>
                </ul>
            </aside>
            <main className="main">
                <div className="content">
                    <Route path="/orders" component={OrdersScreen} />
                    <Route path="/profile" component={ProductScreen} />
                    <Route path="/order/:id" component={OrderScreen} />
                    <Route path="/products" component={ProductsScreen} />
                    <Route path="/shipping" component={ShippingScreen} />
                    <Route path="/payment" component={PaymentScreen} />
                    <Route path="/placeorder" component={PlaceOrderScreen} />
                    <Route path="/signin" component={SigninScreen} />
                    <Route path="/register" component={RegisterScreen} />
                    <Route path="/product/:id" component={ProductScreen} />
                    <Route path="/cart/:id?" component={CartScreen} />
                    <Route path="/category/:id" component={HomeScreen} />
                    <Route path="/" exact={true} component={HomeScreen} />
                    
                </div>
                
            </main>
            <footer className="footer">
                All rights reserved
            </footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
