const emotions = [
  { name: "Felicidad", angle: 0 },
  { name: "Excitación", angle: 45 },
  { name: "Sorpresa", angle: 90 },
  // Añade más emociones con sus respectivos ángulos.
];

function EmotionWheel() {
  const radius = 100; // Radio del círculo donde se posicionarán las emociones.

  // Calcula las coordenadas de las emociones alrededor del círculo.
  const emotionPositions = emotions.map((emotion) => {
    const angleRad = (emotion.angle * Math.PI) / 180; // Convertir ángulo a radianes.
    const x = radius * Math.cos(angleRad) + radius; // Ajusta según el tamaño del contenedor.
    const y = radius * Math.sin(angleRad) + radius;
    return { ...emotion, x, y };
  });

  return (
    <div
      style={{
        position: "relative",
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
      }}
    >
      <div
        id="circle"
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "blue",
          borderRadius: "50%",
        }}
      />
      {emotionPositions.map((emotion, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            left: `${emotion.x}px`,
            top: `${emotion.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          {emotion.name}
        </div>
      ))}
    </div>
  );
}

export default EmotionWheel;
