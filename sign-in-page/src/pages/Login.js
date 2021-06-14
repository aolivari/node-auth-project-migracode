import React, { Component } from "react";
import "../css/Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'


const apiUrl = 'http://localhost:4000/user/sign-in'

class Login extends Component {
  state = {
    form: {
      name: "",
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
    console.log(this.state.form)
  };

  iniciarSesion=async()=>
  await axios.post(apiUrl,{email: this.state.form.name, password: this.state.form.password})
  .then (res=>{
  return res.data;
})
  .then (res=>{
    if (res.isAuthenticated){
      console.log(res)
    alert('Bienvenido de nuevo '+this.state.form.name)
    window.location.href='./home';
    } 
  })
 .catch(error=>{
    console.log(error);
    alert('el usuario o la contraseña no son correctos')
 })
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
              name="name"
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
            <button className="btn btn-primary" onClick={()=>this.iniciarSesion()} >Iniciar Sesión</button>
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
