import React, { Component } from 'react'
import './TodoItem.css';

import checkImg from '../img/technology.svg';
import checkImgComplete from '../img/shapes-and-symbols.svg';

class TodoItem extends Component {
  onItemClick = () => {
    console.log(this.props.item)
  }
    render() {
        const {item, onClick} = this.props;
        var className = "TodoItem";
        var url = checkImg;
        if (item.isComplete) {
            className += " TodoItem-Complete";
            url = checkImgComplete;
        }
          return (
            <div className={className} >
              <img src={url} width={32} onClick={onClick}/>
              <p>{item.title}</p>
            </div>
          );
    }
}

export default TodoItem;