import React, { useState } from 'react';

  export function CallSimulator() {
  const [isCalling, setIsCalling] = useState(false);

  const startCall = () => {
    setIsCalling(true);
    const audio = new Audio('/ringtone.mp3'); // Asegúrate de que la ruta sea correcta
    audio.play();

    // Detener la llamada falsa después de 10 segundos (puedes ajustar esto)
    setTimeout(() => {
      audio.pause();
      audio.currentTime = 0; // Reinicia el audio
      setIsCalling(false);
    }, 10000);
  };

  return (
    <div>
      <button onClick={startCall} disabled={isCalling}>
        {isCalling ? 'Llamando...' : 'Simular Llamada Falsa'}
      </button>
    </div>
  );
}

export default CallSimulator;
