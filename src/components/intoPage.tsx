import imagen3 from "../assets/7037042.jpg";
function IntroPage() {
  return (
    <>
      <div className="text-start text-base md:text-lg h-full">
        <h1 className="text-3xl text-start md:text-5xl font-bitter text-black">
          La rueda de las Emociones
        </h1>
        <p className=" text-gray-600">
          La{" "}
          <span className="font-medium text-black">"Rueda de Emociones"</span>,
          también conocida como el Círculo de Emociones, es un modelo visual
          utilizado para ilustrar y ayudar a las personas a identificar y
          expresar sus emociones de manera más precisa. La rueda se basa en la
          idea de que hay ocho emociones primarias que sirven como pilares para
          todas las demás experiencias emocionales.<br></br>
          La rueda se diseña usualmente como un círculo con diferentes capas que
          representan la intensidad de las emociones. Las emociones primarias se
          sitúan en el centro, y a medida que nos movemos hacia el exterior, las
          emociones se combinan y se vuelven más complejas y matizadas, similar
          a cómo se mezclan los colores en una rueda de color.{" "}
        </p>
        <br></br>
        <div className="mb-3 flex flex-col md:flex-row justify-center h-full">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h2 className="text-3xl font-medium font-bitter  text-black">
              Objetivos de la Rueda de Emociones
            </h2>
            <p className="mb-2 mt-2">
              <strong>Facilitar la Comprensión:</strong> Ayuda a las personas a
              entender mejor sus propias emociones y las de los demás.<br></br>
            </p>
            <p className="mb-2">
              <strong>Mejorar la Comunicación:</strong> Proporciona un
              vocabulario más rico y preciso para expresar sentimientos.
              <br></br>
            </p>
            <p className="mb-2">
              <strong>Fomentar la Inteligencia Emocional:</strong> Al
              identificar y nombrar las emociones con precisión, se puede
              trabajar hacia una mejor regulación emocional y empatía.<br></br>{" "}
            </p>
          </div>
          <div className="w-full mb-4 md:mt-0 md:w-1/2 flex justify-center order-1 md:order-2">
            <img className="w-1/2 h-full sm:w-2/3 sm:h-auto md:w-full md:h-auto lg:w-1/2" src={imagen3}></img>
          </div>
        </div>
      </div>
    </>
  );
}
export default IntroPage;
