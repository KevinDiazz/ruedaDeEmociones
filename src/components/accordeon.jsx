import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
function Acordeon() {
  return (
    <Accordion type="single" collapsible className="w-full text-slate-950">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg">
          ¿Que son las emociones?
        </AccordionTrigger>
        <AccordionContent className="text-start text-base">
          Las emociones son respuestas psicofisiológicas complejas que surgen
          como reacción a estímulos internos o externos. Estas respuestas
          involucran varios componentes, como experiencias subjetivas,
          expresiones faciales, cambios fisiológicos y tendencias
          comportamentales. Las emociones juegan un papel crucial en la vida
          humana, influenciando nuestra percepción del mundo, decisiones,
          pensamientos y relaciones sociales. Son fundamentales para la
          adaptación al entorno, ya que nos ayudan a reaccionar ante situaciones
          de peligro, oportunidades y desafíos sociales.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-lg">
          ¿Que tipos de emociones hay?
        </AccordionTrigger>
        <AccordionContent className="text-start text-base">
          <h1 className="text-xl font-bold">Emociones Primarias</h1>
          <p>
            Las emociones primarias son aquellas que se consideran universales y
            biológicamente arraigadas, experimentadas por todos los seres
            humanos a lo largo de la historia. Estas emociones son inmediatas,
            automáticas y responden a estímulos específicos. A menudo se
            mencionan seis emociones primarias:
          </p>
          <ul>
            <li>
              <strong>Alegría:</strong> Sentimiento de placer o felicidad.{" "}
            </li>
            <li>
              <strong> Tristeza:</strong> Sentimiento de pérdida, desesperanza o
              desilusión.
            </li>
            <li>
              <strong>Ira:</strong> Respuesta a una percepción de injusticia o
              frustración.
            </li>
            <li>
              {" "}
              <strong>Miedo:</strong> Sensación de amenaza o peligro.
            </li>
            <li>
              {" "}
              <strong>Sorpresa:</strong> Respuesta a algo inesperado.
            </li>
            <li>
              {" "}
              <strong>Asco:</strong> Reacción ante algo desagradable o
              repulsivo.
            </li>
          </ul>
          <h1 className="text-xl font-bold mt-2">Emociones Secundarias</h1>
          <p>
            Las emociones secundarias son más complejas y a menudo se
            desarrollan a partir de las emociones primarias. Estas emociones son
            influenciadas por el contexto social, cultural y personal, y pueden
            incluir una mezcla de emociones primarias. Ejemplos de emociones
            secundarias incluyen:
          </p>
          <ul>
            <li>
              <strong>Vergüenza:</strong>Sentimiento de malestar por una acción
              que se percibe como indigna o inapropiada.{" "}
            </li>
            <li>
              <strong>Culpa:</strong> Sentimiento de remordimiento por haber
              hecho algo mal, ya sea real o percibido.
            </li>
            <li>
              <strong>Orgullo:</strong> Sensación de satisfacción por los
              propios logros o los de alguien cercano.
            </li>
            <li>
              {" "}
              <strong>Envidia:</strong> Deseo por lo que otros tienen y uno
              carece.
            </li>
            <li>
              {" "}
              <strong>Gratitud:</strong> Apreciación por lo que se ha recibido
              de otros.
            </li>
            <li>
              {" "}
              <strong>Celos:</strong> Temor de perder algo o alguien valioso a
              favor de otra persona.
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-lg">
          ¿Como identificar las emociones?
        </AccordionTrigger>
        <AccordionContent className="text-start flex flex-col items-start text-base">
          Identificar las emociones correctamente es fundamental para la
          inteligencia emocional y puede mejorar significativamente las
          relaciones interpersonales, la toma de decisiones y el bienestar
          personal. Aquí te dejo algunas estrategias que pueden ayudarte a
          identificar tanto tus emociones como las de los demás:
          <div className="flex flex-col w-1/2">
            <h2 className="font-bitter text-lg">
              <span className="font-indie text-4xl me-3">1</span> Presta Atención a las
              Señales Corporales
            </h2>
            <p className="mb-4">
              Las emociones a menudo se manifiestan a través de señales físicas
              en el cuerpo. Por ejemplo:
              <ul>
                <li>
                  <strong>Ira</strong>: Puede manifestarse como tensión en los
                  músculos, eindiemente en la mandíbula o los puños cerrados.
                </li>
                <li>
                  <strong>Miedo</strong>: Puede causar un aumento del ritmo
                  cardíaco, sudoración o una sensación de frío.
                </li>
                <li>
                  <strong>Tristeza</strong>: Puede sentirse como un peso en el
                  pecho o un vacío estomacal.
                </li>
                <li>
                  <strong>Alegría</strong>: Puede provocar una sensación de
                  ligereza o una sonrisa espontánea.
                </li>
              </ul>
              Aprender a reconocer estas señales puede darte pistas sobre qué
              emociones estás experimentando.
            </p>
            <h2 className="font-bitter text-lg mt-2">
              <span className="font-indie text-4xl me-3">2</span> Reflexiona Sobre tus
              Pensamientos
            </h2>
            <p className="mb-4">
              Las emociones suelen estar vinculadas a pensamientos específicos.
              Pregúntate:<br></br> ¿Qué estaba pensando justo antes de sentir
              esta emoción?<br></br> ¿Hay algún patrón en mis pensamientos que
              pueda indicar por qué me siento de esta manera?<br></br> Esta
              reflexión puede ayudar a identificar la fuente de la emoción.
            </p>
            <h2 className="font-bitter text-lg mt-2">
              <span className="font-indie text-4xl me-3">3</span> Observa las Expresiones
              Faciales y el Lenguaje Corporal
            </h2>
            <p className="mb-4">
              Tanto en ti mismo como en los demás, las expresiones faciales y el
              lenguaje corporal pueden ser indicadores claros de emociones. La
              investigación de Ekman sobre las emociones universales muestra que
              ciertas emociones tienen expresiones faciales distintas que son
              reconocibles a través de culturas.
            </p>
            <h2 className="font-bitter font-bitter text-lg mt-2">
              <span className="font-indie text-4xl me-3">4</span> Escucha el Tono de Voz
            </h2>
            <p className="mb-4">
              El tono de voz, tanto el propio como el de los demás, puede
              revelar emociones ocultas detrás de las palabras. Por ejemplo, un
              tono de voz agudo puede indicar tensión o ira, mientras que un
              tono suave puede sugerir tristeza o cariño.
            </p>
                <h2 className="font-bitter text-lg mt-2">
              <span className="font-indie text-4xl me-3">5</span> Identifica las Reacciones
              Automáticas
            </h2>
            <p className="mb-4">
              A veces, las emociones provocan reacciones automáticas, como
              llorar durante la tristeza o reír durante la alegría. Notar estas
              reacciones puede ayudar a identificar la emoción subyacente.
            </p>
            <h2 className="font-bitter text-lg mt-2">
              <span className="font-indie text-4xl me-3">6</span> Lleva un Diario de
              Emociones
            </h2>
            <p className="mb-4">
              Registrar tus emociones diariamente puede ayudarte a identificar
              patrones y desencadenantes emocionales. Describe situaciones
              específicas, cómo te sentiste y cómo reaccionaste.
            </p>
            <h2 className="font-bitter text-lg mt-2">
            <span className="font-indie text-4xl me-3">7</span> Consulta con un Profesional
            </h2>
            <p className="mb-4">
              Si encuentras difícil manejar o identificar tus emociones,
              consultar a un psicólogo o terapeuta puede proporcionar
              estrategias personalizadas y apoyo.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
export default Acordeon;
