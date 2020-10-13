import React, { Component } from "react";
import "./index.css";
import Title from "./title";
import AddTodo from "./addTodo";
import List from "./list";

class App extends Component {
  state={
    data:[
      {
         id: 0,
         nickName: "",
         msgcontent:""
      }
    ]
  }
  add=(newNickName,newMsgcontent)=>{
    let {data} = this.state;
    data.push({
      id: Date.now() + newNickName,
      nickName: newNickName,
      msgcontent:newMsgcontent
    });
    this.setState({
      data
    })
  }
  remove=(id)=>{
    let {data} = this.state;
    this.setState({
      data:data.filter(item=>item.id!==id)
    })
  }
  render() {
    let {data} = this.state;
    return (
      <section class="wrap">
        <Title></Title>
        <AddTodo add = {this.add}></AddTodo>
        <List 
            data={data} 
            remove = {this.remove}
          />
      </section>
    );
  }
}


export default App;
