// TODO:
// What is a Functional Components?
// - A Functional Components is a function which returns a piece of jsx.

// What is a Class based Components?
// - A Class based Components is a class which extends React.Component which has a render method which returns jsx.

// TODO: Life Cycle of a Class Based Component
/*
- Parent Constructor
- Parent Render
  - Child 1 Constructor           (Render Phase)
  - Child 1 Render

  - Child 2 Constructor
  - Child 2 Render

  (Mounting Phase) (here DOM updates in a single batch because react tries to optimize the application)
  - Child 1 ComponentDidMount
  - Child 2 ComponentDidMount
  
- Parent ComponentDidMount
*/

import React from "react";

class ClassUser extends React.Component {
  constructor(props) {
    super(props); // this is used for props

    this.state = {
      count: 0,
      count2: 2,
      userInfo: "",
    };

    console.log("Child Constructor");
  }

  // componentDidMount is used to make API call
  async componentDidMount() {
    console.log("Child Component Did Mount");

    const data = await fetch("https://api.github.com/users/Tanish-Singhal");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Child Component Did Update");
  }

  componentWillUnmount() {
    console.log("Child Component Will Unmount");
  }

  render() {
    console.log("Child Render");

    return (
      <div className="flex flex-col justify-center items-center border-2 border-lime-500 w-60 p-4">
        <div>
          Class Based Components
          <br />
          ({this.props.type}, {this.props.random})
        </div>

        <div>
          Count: {this.state.count}
          <br />
          Count2: {this.state.count2}
        </div>

        <div>
          <button
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
                count2: this.state.count2 + 2,
              });
            }}
          >
            Click me
          </button>
        </div>

        <div className="text-center mt-4">
          <img
            src={this.state.userInfo.avatar_url}
            alt="User Avatar"
            className="mb-2"
          />
          <h1>{this.state.userInfo.name}</h1>
        </div>
      </div>
    );
  }
}

export default ClassUser;

// TODO: Life Cycle
/**
 * ---- Mounting ----
 * Constructor (dummy)
 * Render (dummy)
 *    <HTML> (Dummy)
 * Component Did Mount
 *    <API Call>
 *    <this.setState>
 *
 * ---- Update ----
 *    render (with API data)
 *    <HTML> (new API data)
 *    component Did Update
 *
 * ---- Unmounting ----
 *    Component Will Unmounting
 */
