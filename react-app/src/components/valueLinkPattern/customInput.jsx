import * as React from "react";

import Input from "./input";

class CustomInput extends React.Component {
  state = {
    name: "",
    email: "",
    isActive: true
  };

  linkState(component, attr) {
    return {
      value: component.state[attr],
      set(x) {
        component.setState({ [attr]: x });
      }
    };
  }

  onSubmit = e => {
    /* submit form logic */
  };

  render() {
    const { state, linkState } = this;
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          {" "}
          Name Value Link:
          <Input type="text" link={linkState(this, "name")} />{" "}
        </label>

        <label>
          {" "}
          Name:
          <input
            type="text"
            value={state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
        </label>

        <label>
          {" "}
          Email:
          <input
            type="text"
            value={state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
        </label>

        <label>
          {" "}
          Is active:
          <input
            type="checkbox"
            checked={state.isActive}
            onChange={e => this.setState({ isActive: e.target.checked })}
          />
        </label>
        <button type="submit">Add User</button>
      </form>
    );
  }
}

export default CustomInput;
