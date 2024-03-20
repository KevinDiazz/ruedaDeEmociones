import { useEffect, useRef, useState } from "react";
import Rueda from "./ruedaD3.ts";
import { allEmociones } from "../variables.js";
import showInfo from "../logicRueda.ts";
function RuedaInfo({windowWidth}) {
  const [showRueda, setShowRueda] = useState(false);
  const [emocionInfo, setEmocionInfo] = useState("");
  const svgRef = useRef("");
  useEffect(() => {
    if (svgRef.current) {
      // Selecciona todos los segmentos después de que se han montado.
      const segmentos = document.querySelectorAll(".segment");
console.log(windowWidth)
      // Función para manejar el clic.
      const handleSegmentClick = (e) => {
        const textContent = e.currentTarget.querySelector("text").textContent;
        console.log(textContent);
        const valor = showInfo(textContent, allEmociones); // Asegúrate de que `allEmociones` esté definido y accesible
        setEmocionInfo(valor); // Asegúrate de que `setEmocionInfo` esté definido y accesible
      };

      // Función para manejar el mouseover.
      const handleMouseOver = (e) => {
        e.currentTarget.querySelector("path").style.strokeWidth = "4";
        // e.currentTarget.querySelector("path").style.stroke = "White";
      };

      // Función para manejar el mouseout.
      const handleMouseOut = (e) => {
        e.currentTarget.querySelector("path").style.strokeWidth = "1";
      };

      // Agregar manejadores de eventos.
      segmentos.forEach((segmento) => {
        segmento.addEventListener("click", handleSegmentClick);
        segmento.addEventListener("mouseover", handleMouseOver);
        segmento.addEventListener("mouseout", handleMouseOut);
      });

      // Limpiar los manejadores de eventos al desmontar.
      return () => {
        segmentos.forEach((segmento) => {
          segmento.removeEventListener("click", handleSegmentClick);
          segmento.removeEventListener("mouseover", handleMouseOver);
          segmento.removeEventListener("mouseout", handleMouseOut);
        });
      };
    }
  }, [emocionInfo, showRueda,windowWidth]);

  useEffect(() => {
    if (svgRef.current) {
      setShowRueda(true);
    }
  }, []);
  return (
    <div className="flex justify-center mt-8 flex-col  xl:flex-row">
      <div className="ruedaContainer mt-0  order-2 xl:order-1 w-full">
      <svg
        className="font-extrabold text-[4pt] sm:text-[6pt] md:text-[8pt]"
        ref={svgRef}
        width={Number(windowWidth)<510?  "300":Number(windowWidth)<720 ? "520":"650"}
        height={Number(windowWidth)>510 ? "650":Number(windowWidth)<720 ? "520":"650"}
      ></svg>
      {showRueda && (
        <Rueda svgElem={svgRef.current} setEmocionInfo={setEmocionInfo}></Rueda>
      )}</div>
      <div className="w-full flex items-center justify-start order-1 xl:order-2  mx-8">
        {emocionInfo ? (
          <div className="w-full">
            <div>
              <p className="text-4xl text-start md:text-center md:text-5xl w-full font-bitter">{emocionInfo.label}</p>
            </div>
            <div className="mt-4 md:mt-9 flex justify-start">
              <p className="text-2xl text-start"> {emocionInfo.definicion}</p>
            </div>
            <div className="mt-4">
              <p className="text-2xl text-start">
                <span className="text-2xl italic font-medium">Situación:</span>
                <br></br> {emocionInfo.situacion}
              </p>
            </div>
          </div>
        ) : (
          <div className="w-full">
            <div className="mt-9 mb-2 flex justify-end">
              <p className="text-2xl text-start">
                Haz <span className="italic">Click</span> encima de la emoción
                que quieras conocer,aprenderas su definición y una situación
                para ayudarte a entenderla mejor.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RuedaInfo;
