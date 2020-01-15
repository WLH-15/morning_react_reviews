import React, {Component} from 'react';
import './App.css';
// import Practice from './Components/Practice'
// import Header from './Components/Header'
// import Profile from './Components/Profile'

class App extends Component {
  constructor(){
    super()
    this.state = {
      name: 'Lucas',
      age: 27
    }
  }

  updateInfo = (newName, newAge) => {
    if(!newName || !newAge) {
      alert('NO BLANK INPUTS PLEASE!')
    } else {
      this.setState({
        name: newName,
        age: newAge
      })
    }
  }

  render(){
    return (
			<div className="App">
        {/* <Practice/> */}
				{/* <Header name={this.state.name} age={this.state.age} />
				<Profile name={this.state.name} age={this.state.age} updateInfo={this.updateInfo}/> */}
			</div>
		);
  }
}

export default App;
