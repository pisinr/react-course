import React, { Component } from 'react';
import _ from 'lodash'

import Panel from './Panel';
import TodoItem from './TodoItem';

import './css/font-awesome.css';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: []
    }
    this.addTodoItem = this.addTodoItem.bind(this)
    this.markTodoCompleted = this.markTodoCompleted.bind(this)
  }

  addTodoItem() {
    var text = _.trim(this.input.value)
    if (!text) { return; }
    this.state.todos.push({
      id: _.uniqueId(),
      text: text,
      completed: false
    })
    this.setState({
      todos: this.state.todos
    })
  }

  markTodoCompleted(todo) {
    todo.completed = true
    this.setState({
      todos: this.state.todos
    })
  }

  render() {
    var self = this;
    return (
      <div className="App">
      	<Panel title="A Panel">
          <input ref={(el)=>{this.input = el}} type="text" />
          <button onClick={this.addTodoItem}>Add TODO</button>
          <ol>
          {_.map(this.state.todos, (todo) => {
            return <TodoItem key={todo.id} todo={todo} onIconClick={self.markTodoCompleted}/>
          })}
          </ol>
        </Panel>
      </div>
    );
  }
}

export default App;
