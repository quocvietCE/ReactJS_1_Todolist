import React, {Component} from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems : [
        { title: "Mua bim bim", isComplete: true },
        { title: "Đi đá bóng", isComplete: false },
        { title: "Đi đổ xăng", isComplete: false },
      ]
    }
  }

  onItemClick = (itemInput) => {
    console.log('item: ', itemInput);
    const newTodoItem = this.state.todoItems.map((item) => {
      if(item.title === itemInput.title){
        item.isComplete = !item.isComplete;
      }
      return item;
  });
  console.log('newTodoItem: ', newTodoItem);
  this.setState({todoItems: newTodoItem})
  }

  render() {
    return (
      <div className="App">
        {this.state.todoItems.length > 0 ? this.state.todoItems.map((item, i) => (
          <TodoItem item={item} key={i} onClick={()=>this.onItemClick(item)}/>
        )) : 'Nothing Here'}
      </div>
    );
  }
  
}

export default App;
