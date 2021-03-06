import React from "react";

export class AddTodo extends React.Component {
  state = {
    title: "",
  };

  onSubmit = (e) => {
    e.preventDefault(); //look this up again
    this.props.addTodo(this.state.title); //call the props object and grab the title prop to pass up
    this.setState({ title: "" }); //reset the title prop to be blank after submitting
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          style={{ flex: "10", padding: "5px" }}
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

export default AddTodo;
