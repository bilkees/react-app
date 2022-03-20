import React, { Component } from "react";
import './TodoApp.css';
export class TodoApp extends Component{
    state = {
        input: "",
        items: []
    };

handleChange = (event) => {
    this.setState({
input: event.target.value
    });
   
};

storeItems = (event) =>{
    event.preventDefault();
    const { input } = this.state;
  
    this.setState({
        items: [...this.state.items,input],
        input: ""
    });

};
deleteItem = (index) =>{
    const allItems = this.state.items;
    allItems.splice(index,1);
this.setState({
    items : allItems
})
    

}

editItem  = (index) =>{
    var retVal = prompt("Enter text : ", "your text here");
    this.setState({
        items:[this.state.items,retVal]
        
    })
   
   
    
}


    render(){
        const { input,items }= this.state;
        console.log(items);
        return(
            <div className="todo-container">

<form className="input-section" onSubmit={this.storeItems}>
<h1>Todo App Running</h1>
    <input
     type = "text"
     value={input} 
     onChange={this.handleChange}
     placeholder="Enter Items..."/>
    
</form>
<ul>
    
        {
        items.map((data, index)=>(
            <li key={index}>{data}  <i className="fa-solid fa-trash-can" style={{color:'red'}} onClick={() => this.deleteItem(index)}>
                </i>
                <br></br>
                <i className='fas fa-edit' onClick={() => this.editItem(index)}></i>
                </li>
        ))
        }


    
    
    
    
</ul>
            </div>
        );
    }
}
export default TodoApp;