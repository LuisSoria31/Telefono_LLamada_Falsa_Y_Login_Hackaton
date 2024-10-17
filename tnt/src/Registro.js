import React from 'react';

const Registro = () => {
  return (
    <div className="card shadow p-4" style={{ width: '400px', borderRadius: '10px' }}>
      <h2 className="text-center mb-4">Registro</h2>
      <form>
        <div className="form-group mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input
            placeholder="Ingresa tu nombre"
            type="text"
            name="nombre"
            id="nombre"
            className="form-control"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email" className="form-label">Correo Electrónico</label>
          <input
            placeholder="Ingresa tu correo"
            type="email"
            name="email"
            id="email"
            className="form-control"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input
            placeholder="Ingresa tu contraseña"
            type="password"
            name="password"
            id="password"
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Registrarse</button>
      </form>
    </div>
  );
}

export default Registro;
