import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
const name = "Mika";
const greeting = "Welcome back, " + name;

class Greeting extends React.Component {
render(){
    return (
        <header className="App-header">
            <h1>{this.props.greeting}</h1>
        </header>
    )
}
}

class User extends React.Component {
    
    render() {
    return (
      <Greeting greeting={greeting} />
      
     );
    }
  }

export default User;
