import React, { Component } from "react";
import PropTypes from "prop-types";

class CsrfToken extends Component {

  getCookie = name => {
    var value;
    if (document.cookie && document.cookie !== "") {
      document.cookie.split(";").forEach(function(c) {
        var m = c.trim().match(/(\w+)=(.*)/);
        if (m !== undefined && m[1] === name) {
          value = decodeURIComponent(m[2]);
        }
      });
    }
    return value;
  };
  componentDidMount() {
    const token = this.getCookie("csrftoken");
    this.props.get_token(token);
  }

  render() {
    return (
      <React.Fragment>
        <input
          type="hidden"
          name="csrfmiddlewaretoken"
          value={this.getCookie("csrftoken")}
        />
      </React.Fragment>
    );
  }
}
CsrfToken.propTypes = {
  get_token: PropTypes.func.isRequired
};

export default CsrfToken;
