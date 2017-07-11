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


let InitializeFromStateForm = props => {
  const { handleSubmit, pristine, load, reset, submitting } = props;
  load(data)
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="employed">Employed</label>
        <div>
          <Field
            name="employed.enabled"
            id="employed"
            component="input"
            type="checkbox"
          />
          <Field
            name="employed.value"
            id="employed2"
            component="input"
            type="text"
          />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Undo Changes
        </button>
      </div>
    </form>
  );
};
class FormRedux extends React.Component {
  componentWillMount() {
    this.props.load(data);
  }

  render() {
    return (<InitializeFromStateForm ></InitializeFromStateForm>);
  }
}
// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
InitializeFromStateForm = reduxForm({
  form: 'initializeFromState', // a unique identifier for this form
})(InitializeFromStateForm);

// You have to connect() to any reducers that you wish to connect to yourself
InitializeFromStateForm = connect(
  state => {
    console.log(state, 'state');
    return ({ initialValues: state.account.data })// pull initial values from account reducer
  },
  { load: loadAccount }, // bind account loading action creator
)(InitializeFromStateForm);

export default FormRedux;
