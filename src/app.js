import React from 'react';
import { render } from 'react-dom';
import ObservableComponent from 'rxjs-react-component';

class MyComponent extends ObservableComponent {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  onClick$(observable) {
    return observable.map(() => ({count: this.state.count + 1}));
  }

  bindDec$(observable){
    return observable.map(() => ({count: this.state.count - 1}));
  }

  render() {
    return (
      <div>
        <h1>Hello world ({this.state.count})</h1>
        <button onClick={this.onClick$}>Increase</button>
        <button onClick={this.bindDec$}>Decrease</button>
      </div>
    );
  }
}

let root = document.getElementById('app');
render(<MyComponent />, root);
