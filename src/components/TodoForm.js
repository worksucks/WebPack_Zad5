import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
        <form>
          <input id="Input" placeholder={'Wpisz coś'}></input>
          var c = document.getElementById('Input').value;
          <button onClick={() => this.props.FuncAdd(this.props.input.value)}>Add Task</button>
        </form>
    );
  }
}

export default TodoForm
