import React, { Component } from "react";
import "../css/Login.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Login extends Component {
  state = {
    form: {
      username: "",
      password: "",
    },
  };
  handleChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <div className="containerPrincipal">
        <div className="containerSecundario">
          <h2>Login</h2>
          <div className="form-group">
            <label>Usuario: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={this.handleChange}
            />
            <br />
            <label>Contraseña: </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.handleChange}
            />
            <br />
            <button className="btn btn-primary">Iniciar Sesión</button>
          </div>
          <br></br>
          <p>
            Si no tienes cuenta creada<a href="url">Sign Up</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
