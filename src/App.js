import React from 'react';
import './style.css';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">Tryunfo</h1>
        <Form />
        <Card value={ this.props } />
      </div>
    );
  }
}

export default App;
