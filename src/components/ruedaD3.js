import * as d3 from "d3";
import {
  emocionesCentrales,
  emocionesExteriores,
  emocionesInteriores,
} from "../variables.js";
function rueda(svgElem) {
  const colorPorEmocion = {
    "Felicidad": "#FFD397", // Amarillo dorado
    "Tristeza": "#ECDAFF", // Azul dodger
    "Ira": "rgb(255,185,185)", // Rojo
    "Miedo": "#DBDBDB", // Púrpura
    "Sorpresa": "#FEFEB9",
    "Asco":"#C3FEDE" // Naranja
    // Añade más emociones y colores según sea necesario
  };
  const svg = d3.select(svgElem),
    width = +svg.attr("width"),
    height = +svg.attr("height"),
    radius = Math.min(width, height) / 2;

  const datosAnillos = [
    { datos: emocionesCentrales, innerRadius: 0, outerRadius: radius * 0.4 },
    {
      datos: emocionesInteriores,
      innerRadius: radius * 0.4,
      outerRadius: radius * 0.7,
    },
    {
      datos: emocionesExteriores,
      innerRadius: radius * 0.7,
      outerRadius: radius,
    },
  ];

  datosAnillos.forEach((anillo) => {
    const pie = d3.pie().value((d) => d.valor);
    const datos = anillo.datos// Asumimos que cada segmento tiene valor 1

    const arc = d3
      .arc()
      .innerRadius(anillo.innerRadius)
      .outerRadius(anillo.outerRadius);

    const arcs = pie(datos);

    const g = svg
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    // Dibuja los arcos
    g.selectAll("path")
      .data(arcs)
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", (d) => colorPorEmocion[d.data.tipo])
      .attr("stroke", "black") // Color del borde para cada segmento
      .attr("stroke-width", 3)
      g.selectAll("text")
      .data(arcs)
      .enter().append("text")
        .attr("transform", function(d) {
            // Calcula el ángulo para la rotación del texto
            const ang = (d.startAngle + d.endAngle) / 2; // Ángulo medio del arco
            const rot = (ang * 180 / Math.PI) - 90; // Convertir a grados y ajustar la rotación
            const rad = anillo.outerRadius; // Usar el radio exterior para la posición
            return `translate(${arc.centroid(d)}) rotate(${rot})`;
        })
        .attr("text-anchor", "middle")
        .attr("float","end")
        .attr("alignment-baseline", "middle")
        .text(d => d.data.label);
});
}
export default rueda;
