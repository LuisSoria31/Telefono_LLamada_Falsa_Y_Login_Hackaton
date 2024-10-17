import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';

const App = () => {
  return (
    <div className="body">
      <div className="card shadow p-4" style={{ width: '400px', borderRadius: '10px' }}>
        <h2 className="text-center mb-4">Login</h2>
        <form action="#">
          <div className="buttons">
          <a href="https://identity.ic0.app/  ">
            <img src="https://seeklogo.com/images/I/internet-computer-icp-logo-02DE976C1A-seeklogo.com.png" className='button-image'/>
          </a>
          </div>
          <br></br>
          <center>
            <input placeholder='Ingresa tu ICP Token' className='form-control'
            
            />
            </center>
          <br></br>
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">CURP</label>
            <input
            placeholder="Ingresa tu CURP"
              type="email"
              name="email"
              id="email"
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Enviar</button>
        </form>
        <div className="text-center mt-3">
          <p>¿No tienes cuenta? <a href="#">Registrate aqui</a></p>
        </div>
      </div>
    </div>
  );
}

export default App;
