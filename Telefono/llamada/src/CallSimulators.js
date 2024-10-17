import React, { useState, useEffect } from 'react';

export function CallSimulator() {
  const [isCalling, setIsCalling] = useState(false);
  const [audio] = useState(new Audio('/voz.pm3')); // Instancia única del audio

  // Función para iniciar la llamada y reproducir el audio
  const startCall = () => {
    setIsCalling(true);

    // Verifica si el audio puede ser reproducido
    audio.play().catch((error) => {
      console.error("Error al reproducir el audio:", error);
    });

    // Detener la llamada después de 10 segundos
    setTimeout(() => {
      endCall();
    }, 10000);
  };

  // Función para detener el audio y reiniciar
  const endCall = () => {
    audio.pause();
    audio.currentTime = 0; // Reiniciar el audio
    setIsCalling(false);
  };

  // Efecto de limpieza cuando el componente se desmonta
  useEffect(() => {
    return () => {
      audio.pause();
      audio.currentTime = 0; // Reiniciar audio si el componente se desmonta
    };
  }, [audio]);

  return (
    <div>
      <button onClick={startCall} disabled={isCalling}>
        {isCalling ? 'Llamando...' : 'Simular Llamada Falsa'}
      </button>
    </div>
  );
}

export default CallSimulator;
