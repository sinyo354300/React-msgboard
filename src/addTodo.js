import React, { Component } from "react";

export default class AddTodo extends Component {
  state={
    nickname: "",
    msgcontent:""
  }
  render(){
    let {add} = this.props;
    let {nickname,msgcontent} = this.state;
    return <div class="addMessage">
            <input type="text" 
                  placeholder="请输入昵称" 
                  value={nickname}  
                  onChange={({target})=>{
                    this.setState({
                      nickname:target.value
                    })
                  }}
                  />
            <textarea placeholder="请输入留言"
                      value={msgcontent}
                      onChange={({target})=>{
                      this.setState({
                        msgcontent:target.value
                        })
                      }}
                      onKeyDown={({keyCode})=>{
                        //console.log(keyCode);
                        if(keyCode===13&&msgcontent.trim()){
                          add(nickname,msgcontent);
                          this.setState({
                            nickname:"",
                            msgcontent:""
                          })
                        }
                      }}></textarea>
            <button onClick={()=>{
              add(nickname,msgcontent);
              this.setState({
                nickname:"",
                msgcontent:""
              })
            }}>提交留言</button>
        </div>
  }
}