import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Favian'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleSubmit(event) {
    console.log(this.state.name);

    event.preventDefault();
  } 

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Input Name</label> &nbsp;&nbsp; 
          <input type="text" value={this.state.name} onChange={this.handleNameChange} />

          <input type="submit" value="Change Name" />
        </form>

        <p>&nbsp;</p>
      </div>
    );
  }
}

export default NameForm;