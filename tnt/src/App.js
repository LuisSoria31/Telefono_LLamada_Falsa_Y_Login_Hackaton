import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Registro from './Registro'; // Importa tu componente Registro

const App = () => {
  return (
    <Router>
      <div className="body">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
      </div>
    </Router>
  );
}

const Login = () => {
  return (
    <div className="card shadow p-4" style={{ width: '400px', borderRadius: '10px' }}>
      <h2 className="text-center mb-4">Login</h2>
      <form action="#">
        <div className="buttons">
          <a href="https://identity.ic0.app/">
            <img src="https://seeklogo.com/images/I/internet-computer-icp-logo-02DE976C1A-seeklogo.com.png" className="button-image" alt="Login" />
          </a>
        </div>
        <br></br>
        <div className="form-group mb-3">
          <label htmlFor="curp" className="form-label">CURP</label>
          <input
            placeholder="Ingresa tu CURP"
            type="text"
            name="curp"
            id="curp"
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Enviar</button>
      </form>
      <div className="text-center mt-3">
        <p>¿No tienes cuenta? <Link to="/registro">Regístrate aquí</Link></p>
      </div>
    </div>
  );
}

export default App;
