import React from 'react';

class TodoList extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    return (
      <div>
        <ul>
         {this.props.zmienna.map((item) => {return <li>{item.text} <button onClick={() => {this.props.FuncDelete(item.id)}}> X </button> </li>})}
        </ul>
      </div>
    );
  }

}

export default TodoList
