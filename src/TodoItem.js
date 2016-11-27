import React, { Component } from 'react';
import classnames from 'classnames'

import Icon from './Icon'
import './TodoItem.css';

class TodoItem extends Component {

  constructor() {
    super()
    this.handleIconClick = this.handleIconClick.bind(this)
  }

  handleIconClick() {
    this.props.onIconClick && this.props.onIconClick(this.props.todo)
  }

  render() {
    var todo = this.props.todo
    var className = classnames('TodoItem', todo.completed && 'TodoItem--completed')
    return (
      <li className={className}>
        <Icon icon={todo.completed ? "check-circle" : "circle-o"} className="TodoItem__icon"
          onClick={this.handleIconClick}/>
        <span>{todo.text}</span>
      </li>
    );
  }
}

export default TodoItem;
