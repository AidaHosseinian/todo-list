// App.js
import React from "react";
import './style.scss';
import Header from "./header/Header.jsx";
import TodoContainer from "./todo-container/TodoContainer.jsx";
import Footer from "./footer/Footer.jsx";

function App() {
    return (
        <> 
            <Header />

            <div className="todo-container">
                <TodoContainer />
            </div>

            <Footer />
        </>
);}

export default App;