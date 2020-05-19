import React, { Component } from 'react'
import './TodoItem.css';

class TodoItem extends Component {
  onItemClick = () => {
    console.log(this.props.item)
  }
    render() {
        const {item, onClick} = this.props;
        var className = "TodoItem";
        if (item.isComplete) {
            className += " TodoItem-Complete";
        }
          return (
            <div className={className} onClick={onClick}>
              <p>{item.title}</p>
            </div>
          );
    }
}

export default TodoItem;