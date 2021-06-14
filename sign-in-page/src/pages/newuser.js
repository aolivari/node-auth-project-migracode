import React, { Component } from "react";
import "../css/Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'



const apiUrl = 'http://localhost:4000/user/sign-up'

class Newuser extends Component {
  take="prueba"
  state = {
    form: {
      name: "",
      email:"",
      password: ""
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
  await axios.post(apiUrl,{name: this.state.form.name, email: this.state.form.email, password: this.state.form.password})
  .then (res=>{
  return res.data;
})
  .then (res=>{
    if (res.isAuthenticated){
      console.log(res)
    alert('tu usuario '+this.state.form.name + " ha sido creado con exito")
    window.location.href='./home';
    } 
  })
 .catch(error=>{
    console.log(error);
    alert('el usuario ya ha sido creado')
 })

  
  
  render() {
    return (
      <div className="containerPrincipal">
        <div className="containerSecundario">
          <h2>New User</h2>
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
            <label>Email: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="Email"
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
            Si no tienes cuenta creada<a href="./newuser" onClick="" >Sign Up</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Newuser;
