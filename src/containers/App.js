
import React from 'react';
import {hot} from 'react-hot-loader';
import style from './App.css';
import Title from '../components/Title.js';
import TodoList from '../components/TodoList.js'
import TodoForm from '../components/TodoForm.js'
import Todo from '../components/Todo.js'
import uuid from 'uuid';
//import TodoList from './components/TodoList.js';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [{
                id: 1,
                text: 'clean room'
              }, {
                id: 2,
                text: 'wash the dishes'
              }, {
                id: 3,
                text: 'feed my cat'
              }]
        };
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }

    removeTodo(id) {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({data: remainder});
    }

    render() {
      return (
          <div className={style.TodoApp}>
              Tutaj pojawią się komponenty naszej aplikacji.
              <Title data={this.state.data.length}/>
              <TodoList FuncDelete={this.removeTodo.bind(this)} zmienna={this.state.data}/>
              <Todo/>
              <TodoForm FuncAdd={this.addTodo.bind(this)}/>
          </div>
      );
    }

}

export default hot(module)(App);
