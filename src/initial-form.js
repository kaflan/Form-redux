import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { load as loadAccount } from './actions/load';
const data = {
  // used to populate "account" reducer when "Load" is clicked
  employed: {
    enabled: 'true',
    value: '111'
  }
};

const DropDownMenu = (props) => {
  return (
    <div className="dropdown"  role="group">
     
    <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
        <span className="beforecaret">Dropdown</span>
    <span className="caret" ></span>
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
        <li><a>Action</a></li>
        <li onClick={(e) => props.chacngeDropdown(e)} ><a>Buttons</a></li>
      </ul>
    </div>)
};

const Buttons = (props) => (
  <div className="btn-group" role="group" aria-label="...">
    <button type="button" className="btn btn-default" onClick={(e) => props.chacngeDropdown(e)}>Cancel</button>
    <button type="button" className="btn btn-default">Apply</button>
  </div>);

let InitializeFromStateForm = props => {
  return (
    props.visibleDropdown ? <Buttons {...props} /> : <DropDownMenu {...props} />
  );
};

class FormRedux extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleDropdown: false
    };
  }
  chacngeDropdown = (e) => {
    if (this.state.visibleDropdown) {
      this.setState({
        visibleDropdown: false
      });
      return false;
    }
    this.setState({
      visibleDropdown: true
    });
  };
  render() {
    return (<InitializeFromStateForm visibleDropdown={this.state.visibleDropdown} chacngeDropdown={this.chacngeDropdown}></InitializeFromStateForm>);
  }
}
// Decorate with reduxForm(). It will read the initialValues prop provided by connect()

export default FormRedux;
