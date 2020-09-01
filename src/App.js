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
      /*   { id: 1, title: "wake up" },
      { id: 2, title: "make breakfast" },
      { id: 3, title: "wake up" }, */
    ],
    id: uuid(),
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };

    /*    const updateItems = [];
updateItems.push(newItem); */
    const updateItems = [...this.state.items, newItem];

    this.setState({
      items: updateItems,
      item: "",
      id: uuid(),
      editItem: false,
    });
  };

  clearList = () => {
    const array = [];
    this.setState({
      items: array,
    });
  };

  handleDelete = (id) => {
    const filterItem = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: filterItem,
    });
  };

  handleEdit = (id) => {
    const filterItem = this.state.items.filter((item) => item.id !== id);
    const selectedItem = this.state.items.find((item) => item.id === id);
    this.setState({
      items: filterItem,
      item: selectedItem.title,
      id:id,
      editItem : true
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
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
