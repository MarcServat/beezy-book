import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from "./Header";
import history from "../history";
import BookList from "./Books/BookList";
import BookDelete from "./Books/BookDelete";
import BookEdit from "./Books/BookEdit";
import BookCreate from "./Books/BookCreate";
import GenreList from "./Genre/GenreList";
import GenreDelete from "./Genre/GenreDelete";
import GenreEdit from "./Genre/GenreEdit";
import GenreCreate from "./Genre/GenreCreate";

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
              <Route path="/books/edit/:id" exact component={BookEdit} />
              <Route path="/books/new/" exact component={BookCreate} />
              <Route path="/genres" exact component={GenreList} />
              <Route path="/genres/delete/:id" exact component={GenreDelete} />
              <Route path="/genres/edit/:id" exact component={GenreEdit} />
              <Route path="/genres/new/" exact component={GenreCreate} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
