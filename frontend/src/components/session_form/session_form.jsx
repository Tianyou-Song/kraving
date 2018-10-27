import React from 'react';
import { withRouter } from 'react-router-dom';
import "./session_form.css";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {Object.values(this.props.errors).map((error, i) => (
          <li className="errors" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return <div className="whole-page-container">
        <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div>Welcome to Kraving!</div>
          Please {this.props.formType} or {this.props.navLink}
          {this.renderErrors()}
          <div className="login-form">
            <br />
            <label className="name-field">
              Name
              <input type="text" value={this.state.name} onChange={this.update("name")} className="login-input" />
            </label>
            <br />
            <label className="email-field">
              Email
              <input type="text" value={this.state.email} onChange={this.update("email")} className="login-input" />
            </label>
            <br />
            <label className="password-field">
              Password:
              <input type="password" value={this.state.password} onChange={this.update("password")} className="login-input" />
            </label>
            <br />
            <div className="session-submit-container">
              <input className="session-submit" type="submit" value={this.props.formType} />
            </div>
          </div>
        </form>
      </div>
    </div>;
  }
}

export default withRouter(SessionForm);
