import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/index";
import "./App.css";
import "./components/Header/Header.css";
import About from "./pages/About/index";
import Contact from "./pages/Contact/index";
import Projects from "./pages/Projects/index";
import Header from "./components/Header/index";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
