
import React, {Component} from 'react';
import './App.css';
import Todo from './Todo/Todo'

class App extends Component {
    state = {
        Todos: [
        ],
        showTODOs: false,
        counter: 0
        
    
    
    }



namechangehandler = (event, value) => {
    
    let Todoz = [...this.state.Todos];
    let Todom = {...this.state.Todos[value]}

    Todom.name = event.target.value;
    Todom.val = value;
    Todoz[value] = Todom;
    console.log('This is the updated Todoz')
    this.setState({Todos: Todoz});
                  
                      
}

toggle = () => {
    const show = this.state.showTODOs;
    this.setState({showTODOs: !show});
    
}
create = () => {
    let v = this.state.counter
    v = v+1
    this.setState({
        Todos: [ ...this.state.Todos,   {name:"Nothing here yet", val:this.state.counter} ],
        counter :v} )
    

    console.log(v)
                                            
    
    
}
deleteTodo = (event, value) =>{
    const result = this.state.Todos.filter(Todoz => Todoz.val !==value)
    this.setState({Todos: result});
                  
} 


  render() {
     var TodoList = 0
      const style = {
          font: 'inherit',
          border: '1x solid blue',
          padding: '8px',
          cursor: 'pointer'
      };
      
      
    
    return(

    <div className="App">
        <head> <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"/> 
        </head>
      <h1> TODO app </h1>
      <p> Welcome to the TODO app - A react based application created by Saleem Ibrahim </p>
      <p> Please Hire me :)</p>
{this.state.showTODOs === true ? 
        <div class = "ui inverted segment" style ={style}> 
      <div> <button class="ui button" onClick= {this.toggle}> Close TODO List </button> </div>
      
            {this.state.Todos.map( (item, index)=> 
            <Todo
            click = {(e) => this.deleteTodo(e, index)}
            name={this.state.Todos[index].name} 
            changed = { (e) =>  this.namechangehandler(e, index)}
            key = {index} 
        /> 
    
            )
            }

<div>
         <button class="ui button" onClick = {() => this.create(TodoList)}> Create New Card</button>    
</div>

            
            </div> :      
            <div> <button class="ui button" onClick= {this.toggle}> Open TODO List </button> </div>

}


</div>
  )
  };
}


export default App;
