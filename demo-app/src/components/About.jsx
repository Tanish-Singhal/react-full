import React from "react";
import FunUser from "./FunUser";
import ClassUser from "./ClassUser";

// function About() {
//   return (
//     <div>
//       About Page

//       <div className="flex gap-4">
//         <FunUser type={"function"} random={"something"} />

//         <ClassUser type={"classes"} random={"something"} />
//       </div>
//     </div>
//   );
// }


class About extends React.Component {
  constructor(props){
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }
  
  render() {
    console.log("Parent Render");

    return (
      <div>
        About Page

        <div className="flex gap-4">
          <FunUser type={"function"} random={"something"} />

          <ClassUser type={"classes"} random={"something"} />
          <ClassUser type={"classes"} random={"something"} />
        </div>
      </div>
    );
  }
}

export default About;
