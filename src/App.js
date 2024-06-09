import logo from './logo.svg';
import './App.css';
import Main from "./pages/main/Main";
import Header from "./components/header/Header";
import React from "react";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className="App">
            <header>
                <Header/>
            </header>
            <Main></Main>
            
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
}

export default App;
