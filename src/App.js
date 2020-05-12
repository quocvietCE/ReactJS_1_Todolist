import React, {Component} from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor() {
    super();
    this.todoItems = ['Mua bim bim', 'Đi đá bóng', 'Đi đổ xăng'];
  }
  render() {
    return (
      <div className="App">
        {
          this.todoItems.map((item, i) => <TodoItem title={item} key={i}/>)
        }
      </div>
    );
  }
  
}

export default App;
