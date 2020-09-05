import React from "react";
import logo from "./download.jpg";
import "./App.css";
class App extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={
      newitem:"",
      list:[]
    };
  }
  additem(todovalue)
  {
      if(todovalue!=="")
    {
        const newitem={
          id:Date.now(),
          value:todovalue,
          isdone:false
        };
        const list=[...this.state.list];
        list.push(newitem);
        this.setState({
          list,
          newitem:""
        });  
    }
  }
  deleteitem(id)
  {
      const list=[...this.state.list];
      const updatedlist=list.filter(item=>item.id!=id)
      this.setState({list:updatedlist});
  }
  updateinput(input){
      this.setState({newitem:input});
  }
  render(){
    return(
      <div>
        {/* <img className="logo"src={logo} width="100" height="100"/> */}
        <h1 className="app-title">TO DO APP</h1>
        <div className="container">
        All To Do....
        <br/>
        <input className="input-text" type="text" placeholder="Write to do"
        value={this.state.newitem}
        onChange={e=>this.updateinput(e.target.value)}
        />
        <button className="add-btn"
        onClick={() => this.additem(this.state.newitem)}
        disabled={!this.state.newitem.length}
        > Add ToDo </button>
        <div className="list"> 
          <ul>
            {this.state.list.map(item=>
              {return(
                  <li key={item.id}>
                    <input type="checkbox"/>
                    {item.value}
                    <button classname="btn"
                    onClick={()=>this.deleteitem(item.id)} >Delete</button>
                  </li>
              );
              })}
          </ul>
        </div>
        </div>
      </div>
  );
  }
}
export default App;