import React, { Component } from 'react';

class Greeting extends Component {


  state = {
    anotherName: 'Thadeus'
  }

  handleFormSubmit(event) {
    event.preventDefault()
    this.setState({anotherName: event.target.newName.value})
  }

  render() {
    return (
      <>
        <h1>Hello {this.props.name}</h1>
        <h1>Hello {this.state.anotherName}</h1>
        <input
          onChange={(event) => { this.setState({anotherName: event.target.value}) }}
          placeholder="Give me a name"
          type="text"
        />
        {/* <button>Click me</button> */}
        <form onSubmit={this.handleFormSubmit.bind(this)}>
          <input type="text" name="newName"/>
          <input type="submit" value="Skicka"/>
        </form>
      </>
    );
  }
}

export default Greeting;