import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./App.css";
import AudioPlayer from "./components/player/player";
import Container from "./wrappers/container";
import NavBar from "./components/navigation/nav";
import Band from "./pages/band/band";
import Home from "./pages/home/home";
import Gallery from "./pages/gallery/gallery";
import Contact from "./pages/contact/contact";
import BurgerMenu from "./components/burger_menu/menu";

class App extends Component {
  render() {
    return (
      <div className="App">
        {" "}
        <Router>
          <Route
            render={({ location }) => (
              <Container>
                <NavBar /> <BurgerMenu />
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    classNames="fade"
                    timeout={480}
                    unmountOnExit
                  >
                    <Switch location={location}>
                      <Route path="/gallery" component={Gallery} />
                      <Route path="/contact" component={Contact} />
                      <Route path="/band" component={Band} />
                      <Route exact path="/" component={Home} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>{" "}
                <AudioPlayer />
              </Container>
            )}
          />
        </Router>{" "}
      </div>
    );
  }
}

export default App;
