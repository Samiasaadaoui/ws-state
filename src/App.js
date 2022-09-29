import React from 'react';
import './App.css';
import Card from './Component/Card';
import Counter from './Component/Counter';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = { isShow: true };
  }
  toggleVisibility = () =>
    this.setState({
      isShow: !this.state.isShow,
    });
  render() {
    console.log("rendering");
    return (
      <div>
        <h1>Visite my Profil</h1>
        <button onClick={this.toggleVisibility}>click</button>
        {this.state.isShow && <Counter />}
    
        <Card/>
    
    </div>
    
  )
}}

export default App;