import React from "react";
import "./Settings.css";

function Settings({ onClose, setHastaCuanto, hastaCuanto  }) {
  const handleSelectChange = (event) => {
    setHastaCuanto(Number(event.target.value));
  };

  return (
    <div className="settings">
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>Configuración</h2>
          <div className="divPuntajes">
            <span>Jugar a: </span>
            <select name="puntajes" id="p" onChange={handleSelectChange} value={hastaCuanto}>
              <option value="30">30</option>
              <option value="24">24</option>
              <option value="20">20</option>
              <option value="18">18</option>
              <option value="15">15</option>
            </select>
          </div>
          <div className="divCerrar">
            {/* Este botón usa la prop onClose para cerrar el modal */}
            <button className="cerrar" onClick={onClose}>
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
