import React, { Component } from 'react'

export default class home extends Component {
  volver(){
    window.location.href='./'
  }
  
  
  render() {
    
    return (
      <div>
        <h1>Muy bien has logrado entrar!
        </h1>
        <button className="btn btn-primary" onClick={()=>this.volver()}  >cerrar sesion</button>
      </div>
    )
  }
}
