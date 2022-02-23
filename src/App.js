import React from 'react';
import './style.css';
import Form from './components/Form';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">Tryunfo</h1>
        <Form />
      </div>
    );
  }
}

export default App;
