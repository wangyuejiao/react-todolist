import React, { Component } from 'react'



export default class Todoinput extends Component {

    handleInput = (e)=>{

        if(e.keyCode === 13){//获取键入值，为enter时

            this.props.addTodo(e.target.value);//将input内value值传入

            e.target.value = '';//enter后清空input框

            // localStorage.setItem('todo',)

        }

    }

    render() {

        return (

            <div style={{background:'grey',height:'50px'}}>

                <div style={{fontSize:'30px',marginLeft:'100px'}}>ToDoList<input style={{width:'400px',height:'30px',fontSize:'20px',borderRadius:'8px',marginLeft:'50px'}}className='add' type="text" onKeyDown={this.handleInput}  placeholder="添加ToDo" required="required"/></div>

            </div>

        )

    }

}