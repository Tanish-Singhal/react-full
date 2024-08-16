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



import React from "react"

class ClassUser extends React.Component {
  constructor(props) {
    super(props);     // this is used for props

    this.state = {
      count: 0,
      count2: 2
    }

    console.log("Child Constructor");
  }

  // componentDidMount is used to make API call 
  componentDidMount() {
    console.log("Child Component Did Mount");  
  }

  render() {
    console.log("Child Render");

    return (
      <div className='flex justify-center items-center border-2 border-lime-500 w-60'>
        Class Based Components
        <br />
        ({this.props.type}, {this.props.random})
        <br />
        Count: {this.state.count}
        <br />
        Count2: {this.state.count2}
        <br />
        <button onClick={() => {
          this.setState({
            count: this.state.count + 1,
            count2: this.state.count2 + 2,
          })
        }}>Click me</button>
      </div>
    )
  }
}

export default ClassUser;