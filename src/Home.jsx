import React from "react";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Ani",
      users: [
        { name: "Ani1", surname: "Sargsyan1", age: 25 },
        { name: "Ani2", surname: "Sargsyan2", age: 26 },
        { name: "Ani3", surname: "Sargsyan3", age: 27 },
        { name: "Ani4", surname: "Sargsyan4", age: 28 },
        { name: "Ani5", surname: "Sargsyan5", age: 29 },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <h1 className="d1">Hello {this.state.name}</h1>
        <button id="btn" onClick={() => {
			alert('Button clicked!')
		}}>Click me</button>
        <hr />
        {this.state.users.map((elm, i) => {
          return (
            <h3 key={i}>
              {elm.name} {elm.surname} {elm.age}
            </h3>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Home;