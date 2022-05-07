import { Component } from 'react';
import Form from './Form/Form';
// import s from './App.module.css';

class App extends Component {
  state = {};

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 16,
          textTransform: 'uppercase',
          color: '#010101',
        }}
      >
        <Form onSubmit={this.formSubmitHandler} />
      </div>
    );
  }
}

export default App;
