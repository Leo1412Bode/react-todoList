import React, { Component } from "react";
import uuid from "uuid/dist/v4";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

//Show changes in github VS

class App extends Component {
  state = {
    items: [
      { id: 1, title: "wake up" },
      { id: 2, title: "make breakfast" },
      { id: 3, title: "wake up" },
    ],
    id: uuid(),
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    console.log("handleChange");
  };

  handleSubmit = (e) => {
    console.log("handleSubmit");
  };

  clearList = () => {
    console.log("clear list");
  };

  handleDelete = (id) => {
    console.log("handleDelete " + { id });
  };

  handleEdit = (id) => {
    console.log("handleEdit " + { id });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5">
              <h3 className="text-capitalize text-center">Todo Input</h3>
            </div>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
