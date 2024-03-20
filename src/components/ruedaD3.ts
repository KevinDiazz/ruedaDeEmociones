import * as d3 from "d3";
import {
  emocionesCentrales,
  emocionesExteriores,
  emocionesInteriores,
} from "../variables.js";
function Rueda({ svgElem }) {
  const colorPorEmocion = {
    Felicidad: "#FFD397", // Amarillo dorado
    Tristeza: "#ECDAFF", // Azul dodger
    Ira: "rgb(255,185,185)", // Rojo
    Miedo: "#DBDBDB", // Púrpura
    Sorpresa: "#FEFEB9",
    Asco: "#C3FEDE", // Naranja
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
    const datos = anillo.datos;

    const arc = d3
      .arc()
      .innerRadius(anillo.innerRadius)
      .outerRadius(anillo.outerRadius);

    const arcs = pie(datos);

    const segmentGroups = svg
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`)
      .selectAll("g.segment")
      .data(arcs)
      .enter()
      .append("g") // Crea un grupo para cada segmento
      .attr("class", "segment");
    segmentGroups
      .append("path")
      .attr("d", arc)
      .attr("fill", (d) => colorPorEmocion[d.data.tipo])
      .attr("stroke", "black")
      .attr("stroke-width", 1);

    // Añade el texto a cada grupo
    segmentGroups
      .append("text")
      .attr("transform", function (d) {
        // Calcula el centroide para posicionar el texto
        const [x, y] = arc.centroid(d);
        // Calcula el ángulo medio del arco en grados
        const ang = ((d.startAngle + d.endAngle) / 2) * (180 / Math.PI) - 90;
        // Ajusta la rotación para que el texto siempre esté orientado de manera legible
        const rot = ang > 90 ? ang + 180 : ang;
        return `translate(${x}, ${y}) rotate(${rot})`;
      })
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .text((d) => d.data.label);
  });
}
export default Rueda;
