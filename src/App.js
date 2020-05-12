import React, {Component} from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      { title: "Mua bim bim", isComplete: true },
      { title: "Đi đá bóng", isComplete: false },
      { title: "Đi đổ xăng", isComplete: false },
    ];
  }
  render() {
    return (
      <div className="App">
        {this.todoItems.map((item, i) => (
          <TodoItem item={item} key={i} />
        ))}
      </div>
    );
  }
  
}

export default App;
