import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";


const Routes = () => {
    return (
        <BrowserRouter >
            <Navbar/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/skills">
                    <Skills/>
                </Route>
                <Route path="/projects">
                    <Projects/>
                </Route>

            </Switch>
            <Footer/>
        </BrowserRouter>
    );
}
export default Routes;