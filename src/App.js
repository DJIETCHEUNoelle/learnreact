import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Person from './person/person';


//function App()
 class App extends Component
{

  constructor(props){
    super(props);
    this.state=   {persons: [
      {name : 'manu', age: 28 },
      {name : 'max', age: 29 },
      {name : 'stephane', age: 26 },

       ],
       otherState: 'some other values'
      
      };
       
      
    } 
      switchNameHandler  = (newName) => {
     //   this.state.persons[0].name = 'Maxinilian';
    //   console.log('was clicked');
    this.setState(
      {
        persons: [
          {name : newName , age: 28 },
          {name : 'manu', age: 29 },
          {name : 'stephane', age: 27 },
    
           ]
      }
    )
  }
  nameChangedHandler = (event) => { 
    this.setState(
    {
      persons: [
        {name : 'max' , age: 28 },
        {name : event.target.value, age: 29 },
        {name : 'stephane', age: 26 },
  
         ]
    }
  )}
  


  //state = {
    //  persons: [
      //{name : 'manu', age: 28 },
      //{name : 'max', age: 29 },
      //{name : 'stephane', age: 26 },

      // ]
    //}
  render(){

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border : '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }
    
    return (
    <div className="App">
      
    <h1>hi, im react app</h1>
    <p>this is realy working</p>
    <button    style={style} 
    onClick={()=>this.switchNameHandler('Maximilian')}>Switch Name</button>
    <div>
    <Person name={this.state.persons[0].name}
    age={this.state.persons[0].age}/>
    <Person name={this.state.persons[1].name} 
    age={this.state.persons[1].age}
    click={this.switchNameHandler.bind(this,'Max')} changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
    <Person name={this.state.persons[2].name} 
    age={this.state.persons[2].age}/>
    </div>
    

</div>


      );
   }
  
   //  return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'does this work now'));
}

export default App;
