import * as React from 'react';
import './App.css';
import Editor from './editor';

class App extends React.Component {
  private editor = new Editor({});

  public render() {
    return (
      this.editor.renderEditor('Hi')
    );
  }
}

export default App;
