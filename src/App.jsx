// App.js
import React from "react";
import './style.scss';
import Header from "./header/Header.jsx";
import Footer from "./footer/Footer.jsx";
import TodoWrapper from "./todo-container/TodoWrapper.jsx";

function App() {
    return (
        <div className="layout"> 
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <Header />
            <TodoWrapper />
            <Footer />
        </div>
)}

export default App;