import React, { Component } from "react";

export default class Todo extends Component {
  render(){
    let {data,remove} = this.props;
    return <li>
            <h3>{data.nickName}</h3>
            <p>{data.msgcontent}</p>
            <a onClick={()=>{
                    remove(data.id);
                }}>删除</a>
          </li>
  }
}