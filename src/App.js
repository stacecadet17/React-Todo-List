import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/header";
import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import uuid from "uuid/v4";

class App extends React.Component {
  state = {
    //creates data that will be changing to be passed down through the app
    todos: [
      {
        id: uuid(),
        title: "Take out the trash",
        completed: false,
      },
      {
        id: uuid(),
        title: "Dinner with bee",
        completed: false,
      },
      {
        id: uuid(),
        title: "Meeting with boss",
        completed: false,
      },
    ],
  };

  //Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  //Delete Todo
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    //pass down todos as a prop to the Todos component
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
