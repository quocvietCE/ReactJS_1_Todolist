import React, {Component} from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import tick from "./img/tick.svg";

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: "",
      todoItems: [
        { title: "Mua bim bim", isComplete: true },
        { title: "Đi đá bóng", isComplete: false },
        { title: "Đi đổ xăng", isComplete: false },
      ],
    };
  }

  onItemClick1 = (itemInput) => {
    console.log("item: ", itemInput);
    const newTodoItem = this.state.todoItems.map((item) => {
      if (item.title === itemInput.title) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });
    console.log("newTodoItem: ", newTodoItem);
    this.setState({ todoItems: newTodoItem });
  };

  onItemClick2(itemInput) {
    return (event) => {
      const isComplete = itemInput.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(itemInput);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...itemInput,
            isComplete: !isComplete,
          },
          ...todoItems.slice(index + 1),
        ],
      });
    };
  }

  onKeyUp = (event) => {
    let text = event.target.value;
    if (event.keyCode === 13) {
      if (!text) {
        return;
      }
      text = text.trim();
      if (!text) {
        return;
      }
      this.setState({
        todoItems: [
          { title: text, isComplete: false },
          ...this.state.todoItems,
        ],
        newItem: ''
      });
    }
  };

  onChange = (event) => {
    this.setState({newItem: event.target.value})
  }

  render() {
    const { todoItems, newItem } = this.state;
    return (
      <div className="App">
        <div className="Header">
          <img src={tick} width={32} height={32} />
          <input
            type="text"
            placeholder="Add a new item"
            onKeyUp={this.onKeyUp}
            value={newItem}
            onChange={this.onChange}
          />
        </div>
        {todoItems.length > 0
          ? todoItems.map((item, i) => (
              <TodoItem
                item={item}
                key={i}
                // onClick={()=>this.onItemClick1(item)}
                onClick={this.onItemClick2(item)}
              />
            ))
          : "Nothing Here"}
      </div>
    );
  }
}

export default App;
