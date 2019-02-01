import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./App.css";
import AudioPlayer from "./components/player/player";
import Container from "./wrappers/container";
import NavBar from "./components/navigation/nav";

import Band from "./pages/band/band";
import Home from "./pages/home/home";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route
            render={({ location }) => (
              <Container>
                {" "}
                <NavBar />

                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    classNames="fade"
                    timeout={280}
                    unmountOnExit
                  >
                    <Switch location={location}>
                      {" "}
                      {/*    <AudioPlayer /> */}
                      <Route exact path="/" component={Home} />{" "}
                      <Route exact path="/band" component={Band} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>{" "}    <AudioPlayer />
              </Container>
            )}
          />
        </Router>
      </div>
    );
  }
}

export default App;
