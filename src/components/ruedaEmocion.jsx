import React, { useState, useEffect } from "react";
function Rueda() {
    const containerSize = 300; // Tamaño del contenedor para centrar el círculo.
    const sectionEmotions = [
        { count: 73, radius: 250 }, // Sección exterior
        { count: 36, radius: 150 }, // Sección media
        { count: 6, radius: 60 },   // Sección central
      ];
  const calculatePositions = (count, radius) => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      const angleDeg = (i * 360) / count; // Distribución uniforme de emociones.
      const angleRad = (angleDeg * Math.PI) / 180;
      const x = radius * Math.cos(angleRad) + containerSize / 2; // Centrar en el contenedor.
      const y = radius * Math.sin(angleRad) + containerSize / 2;
      positions.push({ x, y });
    }
    return positions;
  };

  // Genera todas las posiciones para cada sección.
  const allPositions = sectionEmotions.flatMap(section => calculatePositions(section.count, section.radius));


  // Estado para almacenar el ángulo de rotación del círculo.
  const [rotation, setRotation] = useState(0);
  // Estado para determinar si el ratón está sobre el círculo.
  const [isMouseOver, setIsMouseOver] = useState(false);

  // Función para calcular el ángulo de rotación basado en la posición del ratón.
  const calculateRotation = (e) => {
    const circle = document.getElementById("circle");
    const circleRect = circle.getBoundingClientRect();
    const centerX = circleRect.left + circleRect.width / 2;
    const centerY = circleRect.top + circleRect.height / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const angleDeg = angle(centerX, centerY, mouseX, mouseY);
    setRotation(angleDeg + 20);
  };

  // Agrega o elimina el listener basado en isMouseOver.
  useEffect(() => {
    if (!isMouseOver) {
      window.addEventListener("mousemove", calculateRotation);
    } else {
      window.removeEventListener("mousemove", calculateRotation);
    }

    // Limpieza al desmontar el componente.
    return () => {
      window.removeEventListener("mousemove", calculateRotation);
    };
  }, [isMouseOver]); // Dependencias del efecto.

  // Calcula el ángulo entre dos puntos.
  function angle(cx, cy, ex, ey) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = rad * (180 / Math.PI);
    return deg;
  }

  return (
    <>
      <div className="flex justify-center items-center mt-20 mb-16">
        <div
          id="circle"
          className="w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] md:w-[550px] md:h-[550px] lg:w-[500px] lg:h-[500px] bg-blue-500 rounded-full"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: "transform 0.2s ease-out",
          }}
          onMouseEnter={() => setIsMouseOver(true)}
          onMouseLeave={() => setIsMouseOver(false)}
        >
      {allPositions.map((position, index) => (
        <div
          key={index}
          style={{
            margin:"50px",
            padding:"50px",
            position: "absolute",
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: "translate(-50%, -50%)",
            whiteSpace: 'nowrap',
          }}
        >
          {`Emoción ${index + 1}`}
        </div>
      ))}
        </div>
      </div>
    </>
  );
}
export default Rueda;
