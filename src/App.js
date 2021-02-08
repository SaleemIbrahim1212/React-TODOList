
import React, {Component} from 'react';
import './App.css';
import Todo from './Todo/Todo'

class App extends Component {
    state = {
        Todos: [
        ],
        showTODOs: false,
        counter: 0,
        info: "",
        
    
    
    }



namechangehandler = (event) => {
    
    /*let Todoz = [...this.state.Todos];
    let Todom = {...this.state.Todos[value]}

    Todom.name = event.target.value;
    Todom.val = value;
    Todoz[value] = Todom;
    console.log('This is the updated Todoz')
    this.setState({Todos: Todoz});*/
    this.setState({info: event.target.value});
    return this.state.info;
                  
                      
}


clearstate = () => {
    this.setState({info: ""})
}
toggle = () => {
    const show = this.state.showTODOs;
    this.setState({showTODOs: !show});
    this.setState({info: ""})
    
}
create = () => {
    let v = this.state.counter
    v = v+1
    this.setState({
        Todos: [ ...this.state.Todos,   {name:this.state.info, val:this.state.counter} ],
        counter :v,
        info: ""} )
    document.getElementById('MYINPUT').value = ''
    
    
                                                
}
deleteTodo = (value) =>{
    let result = this.state.Todos.filter(Todoz => !(Todoz.name ===value))
    this.setState({Todos: result});
    console.log(value)
                  
} 


  render() {
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
    <body>
        
      <h1> TODO app </h1>
      <p> Welcome to the TODO app - A react based application created by Saleem Ibrahim </p>
{this.state.showTODOs === true ? 
        
        <div class = "ui inverted segment" style ={style}> 
        <div class ="ui focus input"> <input type="text" placeholder ="Add a task..." id ="MYINPUT" onChange = { this.namechangehandler}/>   
</div> 
        <button class ="ui button" onClick = {this.create} > Add task </button>
      <div> <button class="ui button" onClick= {this.toggle}> Close TODO List </button> </div>
      
            {this.state.Todos.map( (item, index)=> 
            <Todo
            name={this.state.Todos[index].name} 
            key = {this.state.Todos[index].name} 
            click = {() =>this.deleteTodo(this.state.Todos[index].name)
             }

        /> 
    
            )
            }


            
            </div> :      
            <div> <button class="ui button" onClick= {this.toggle}> Open TODO List </button>  </div> 

}
            

</body>

</div>
  )
  };
}


export default App;
   



