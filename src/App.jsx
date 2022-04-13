import React from "react";
import Navbar from "./Componets/Navbar";
import Cart from "./Componets/Cart";
import Menu from "./Componets/Menu";
import Home from "./Componets/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Switch , Route  } from "react-router-dom";




const App = () => {
    return (
        <>
            <Navbar/>
            <br /><br />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/menu" component={Menu} />
            </Switch>




        </>
    )
};

export default App;

