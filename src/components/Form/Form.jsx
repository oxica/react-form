import { Component } from 'react';
// import s from './Form.module.css';

class Form extends Component {
  state = {
    tag: '',
    name: '',
    experience: 'Junior',
    license: false,
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  // handleNameChange = event => {
  //   this.setState({ name: event.currentTarget.value });
  // };
  // handleTagChange = event => {
  //   this.setState({ tag: event.currentTarget.value });
  // };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  handleLicenseChange = e => {
    this.setState({ license: e.currentTarget.checked });
  };

  reset = () => {
    this.setState({
      tag: '',
      name: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Surname{' '}
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Name{' '}
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>

        <p>Developer level:</p>
        <label>
          <input
            type="radio"
            name="experience"
            value="Junior"
            onChange={this.handleChange}
            checked={this.state.experience === 'Junior'}
          />
          Junior
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="Middle"
            onChange={this.handleChange}
            checked={this.state.experience === 'Middle'}
          />
          Middle
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="Senior"
            onChange={this.handleChange}
            checked={this.state.experience === 'Senior'}
          />
          Senior
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            name="license"
            checked={this.state.license}
            onChange={this.handleLicenseChange}
          />
          I agree
        </label>

        <br />
        <button type="submit" disabled={!this.state.license}>
          {' '}
          Submit{' '}
        </button>
      </form>
    );
  }
}

export default Form;
