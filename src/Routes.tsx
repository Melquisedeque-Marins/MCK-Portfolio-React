import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Skills from "./pages/Skills";

const Routes = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route exact path="/skills">
                    <Skills/>
                </Route>

            </Switch>
            <Footer/>
        </BrowserRouter>
    );
}
export default Routes;