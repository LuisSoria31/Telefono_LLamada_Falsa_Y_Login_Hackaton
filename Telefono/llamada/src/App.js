import React, { useState, useEffect } from 'react';
import './App.css'; // Importa el nuevo archivo CSS

export function CallSimulator() {
  const [isCalling, setIsCalling] = useState(false);
  const [audio] = useState(() => new Audio('/voz.mp3')); // Crear una instancia de audio al inicio

  // Función para iniciar la llamada y reproducir el audio
  const startCall = () => {
    if (!isCalling) {
      setIsCalling(true);
      playAudio();
      setTimeout(endCall, 10000); // Finalizar llamada después de 10 segundos
    }
  };

  // Reproducir audio con control de errores
  const playAudio = () => {
    audio.play().catch(err => console.error("Error al reproducir el audio:", err));
  };

  // Función para detener el audio y finalizar la llamada
  const endCall = () => {
    stopAudio();
    setIsCalling(false);
  };

  // Detener y reiniciar el audio
  const stopAudio = () => {
    audio.pause();
    audio.currentTime = 0;
  };

  // Efecto de limpieza al desmontar el componente
  useEffect(() => {
    return stopAudio; // Limpiar cuando se desmonte
  }, [audio]);

  return (
    <div className="call-simulator">
      <button className="call-button" onClick={startCall} disabled={isCalling}>
        {isCalling ? 'Llamando...' : 'Simular Llamada Falsa'}
      </button>
    </div>
  );
}

export default CallSimulator;
