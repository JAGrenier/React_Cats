import React, { Component } from 'react';
import './App.css';
// import CatForm from './Components/CatForm';
import MyCats from './Components/MyCats';
import CatsContainer from './Components/CatsContainer';

export default class App extends Component {
  
  state = {
    cats: [],
    myCats: []
  }

  componentDidMount(){
    fetch('http://localhost:3001/cats')
      .then(response => response.json())
      .then(cats => this.setState({
        cats: cats
      }))
  }


  addToMyCats = (cat) => {
    let myCats = this.state.myCats.find(myCat => cat.id === myCat.id)

    if(!myCats){
      this.setState({
        myCats: [...this.state.myCats, cat]
      })
    }
  }

  removeMyCat = (cat) => {
    let myCats = this.state.myCats.filter(myCat => myCat !== cat)
    this.setState({myCats})
  }

  killMyCat = (cat) => {
    let cats = this.state.cats.filter(deadCat => deadCat !== cat)
    this.setState({cats})
    fetch(`http://localhost:3001/cats/${cat.id}`, {method: 'DELETE'})
  }

  render(){
    return (
      <main className="App">
        <h1>Cat Castle</h1>
        <img 
        src="https://i.ytimg.com/vi/BkI9SPYRdaU/maxresdefault.jpg" 
        alt="cardboard castle with 3 gret cats"
        />    
        {/* <CatForm />   */}
        <MyCats  myCats={this.state.myCats} clickAction={this.removeMyCat}/>
        <CatsContainer cats={this.state.cats} clickAction={this.addToMyCats} killMyCat={this.killMyCat} />
      </main>
    );
  }
}





