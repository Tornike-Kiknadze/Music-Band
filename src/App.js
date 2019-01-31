import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import AudioPlayer from "./components/player/player";
import Container from "./wrappers/container";
import NavBar from "./components/navigation/nav";
import Content from "./components/content/content";
import Band from "./pages/band/band";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route
            render={({ location }) => (
              <Switch location={location}>
                <Route exact path="/band" component={Band} />
                <Container>
                  <AudioPlayer />
                  <Content />
                  <NavBar />
                </Container>{" "}
              </Switch>
            )}
          />
        </Router>
      </div>
    );
  }
}

export default App;
