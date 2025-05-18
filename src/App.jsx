// App.js
import React from "react";
import './style.scss';
import Header from "./header/Header.jsx";
import Footer from "./footer/Footer.jsx";
import TodoWrapper from "./todo-container/TodoWrapper.jsx";
import { StoreProvider } from "./store/store.js";
import { initialState, reducer } from "./store/reducer.js";

function App() {
    return (<StoreProvider initialState={initialState} reducer={reducer}>
        <div className="layout"> 
            <Header />
            <TodoWrapper />
            <Footer />
        </div>
    </StoreProvider>)
}

export default App;