import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from "./Header";
import history from "../history";
import BookList from "./Books/BookList";
import BookDelete from "./Books/BookDelete";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route path="/" exact component={BookList} />
              <Route path="/books" exact component={BookList} />
              <Route path="/books/delete/:id" exact component={BookDelete} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
