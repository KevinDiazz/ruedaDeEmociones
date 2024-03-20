const emocionesExteriores = [
  {
    situacion:
      "Te sientes inspirado después de visitar una exposición de arte.",
    definicion:
      "Sentimiento de motivación y creatividad estimulado por alguien o algo.",
    valor: 1,
    label: "INSPIRADO",
    tipo: "Felicidad",
  },
  {
    situacion:
      "Estás abierto a cambiar de carrera después de reflexionar sobre tus verdaderas pasiones.",
    definicion:
      "Disposición a recibir nuevas ideas, experiencias o a aceptar cambios.",
    valor: 1,
    label: "ABIERTO",
    tipo: "Felicidad",
  },
  {
    situacion:
      "Actúas de forma bromista para levantar el ánimo de un amigo que está pasando por un mal momento.",
    definicion: "Inclinación a hacer bromas o a actuar de manera juguetona.",
    valor: 1,
    label: "BROMISTA",
    tipo: "Felicidad",
  },
  {
    situacion: "Te sientes sensible y lloras durante una película emotiva.",
    definicion:
      "Capacidad de percibir o sentir con facilidad; susceptible a estímulos emocionales.",
    valor: 1,
    label: "SENSIBLE",
    tipo: "Felicidad",
  },
  {
    situacion:
      " Estás esperanzado de que el mundo puede ser un lugar mejor a través del activismo y la educación.",
    definicion:
      "Sentimiento de optimismo respecto al futuro o al éxito de algo.",
    valor: 1,
    label: "ESPERANZADO",
    tipo: "Felicidad",
  },
  {
    situacion: "Te muestras cariñoso con tu mascota, abrazándola y cuidándola.",
    definicion: "Sentimiento de afecto y ternura hacia otra persona.",
    valor: 1,
    label: "CARIÑOSO",
    tipo: "Felicidad",
  },
  {
    situacion:
      "Usas un atuendo provocativo para desafiar las normas conservadoras en un evento social.",
    definicion:
      "Tendencia a provocar reacciones en los demás, a menudo de manera intencional o desafiante.",
    valor: 1,
    label: "PROVOCATIVO",
    tipo: "Felicidad",
  },
  {
    situacion:
      "Te sientes valiente al defender a un desconocido de un acto de injusticia en la calle.",
    definicion: "Capacidad de enfrentar el miedo o la adversidad con coraje.",
    valor: 1,
    label: "VALIENTE",
    tipo: "Felicidad",
  },
  {
    situacion:
      "Te sientes satisfecho después de una comida deliciosa y nutritiva.",
    definicion:
      "Sentimiento de contento y complacencia por haber cumplido con las propias expectativas o deseos.",
    valor: 1,
    label: "SATISFECHO",
    tipo: "Felicidad",
  },
  {
    situacion:
      " Te sientes respetado cuando tus colegas valoran y buscan tu opinión en reuniones importantes.",
    definicion:
      "Reconocimiento de la valía o calidad de una persona por parte de los demás.",
    valor: 1,
    label: "RESPETADO",
    tipo: "Felicidad",
  },
  {
    situacion:
      "Te sientes seguro al caminar solo por una calle bien iluminada y familiar.",
    definicion:
      " Confianza en uno mismo o en la situación en la que se encuentra.",
    valor: 1,
    label: "SEGURO",
    tipo: "Felicidad",
  },
  {
    situacion:
      "Te sientes importante al contribuir con una idea que resuelve un problema complicado en el trabajo.",
    definicion:
      "Sentimiento de tener significado, valor o ser crucial en un contexto específico.",
    valor: 1,
    label: "IMPORTANTE",
    tipo: "Felicidad",
  },
  {
    situacion:
      " Sientes curiosidad por la astronomía después de ver un documental sobre el universo.",
    definicion: " Deseo de aprender o saber más sobre algo.",
    valor: 1,
    label: "CURIOSO",
    tipo: "Felicidad",
  },
  {
    situacion:
      "Te sientes entretenido viendo tu serie de comedia favorita, olvidándote de las preocupaciones del día.",
    definicion:
      "Estado de estar divertido o disfrutar de una actividad o espectáculo.",
    valor: 1,
    label: "ENTRETENIDO",
    tipo: "Felicidad",
  },
  {
    situacion:
      " Experimentas euforia cuando te enteras de que has ganado un premio importante.",
    definicion: "Sensación extrema de felicidad o excitación.",
    valor: 1,
    label: "EUFÓRICO",
    tipo: "Felicidad",
  },
  {
    situacion:
      "Te sientes liberado después de terminar un proyecto grande que te ha ocupado mucho tiempo y energía.",
    definicion:
      " Sentimiento de alivio o liberación después de ser liberado de una restricción o carga emocional.",
    valor: 1,
    label: "LIBERADO",
    tipo: "Felicidad",
  },
  {
    situacion:
      "Te sientes apenado después de una discusión con un amigo cercano donde dijiste cosas hirientes.",
    definicion:
      " Sentimiento de tristeza por una pérdida o por haber causado daño.",
    valor: 1,
    label: "APENADO",
    tipo: "Ira",
  },
  {
    situacion:
      " Te sientes devastado al escuchar noticias sobre un desastre natural que afectó a tu comunidad.",
    definicion:
      "Sentimiento de shock o tristeza profunda por una pérdida grande o desastre.",
    valor: 1,
    label: "DESVASTADO",
    tipo: "Ira",
  },
  {
    situacion:
      "Te sientes atacado cuando recibes críticas no constructivas de forma pública.",
    definicion: "Sensación de ser agredido física o emocionalmente.",
    valor: 1,
    label: "ATACADO",
    tipo: "Ira",
  },
  {
    situacion:
      " Te sientes celoso cuando tu mejor amigo pasa más tiempo con otra persona.",
    definicion:
      "Sentimiento de envidia hacia el éxito o ventajas de otros, temiendo perder afecto o posición.",
    valor: 1,
    label: "CELOSO",
    tipo: "Ira",
  },
  {
    situacion:
      " Te sientes resentido después de ser pasado por alto para un ascenso en el trabajo.",
    definicion:
      "Sentimiento de amargura o indignación por haber sido tratado injustamente.",
    valor: 1,
    label: "RESENTIDO",
    tipo: "Ira",
  },
  {
    situacion: "Te sientes ultrajado por una ley nueva que consideras injusta.",
    definicion:
      "Sentimiento intenso de ira o indignación causado por algo percibido como injusto o inmoral.",
    valor: 1,
    label: "ULTRAJADO",
    tipo: "Ira",
  },
  {
    situacion:
      " Te sientes furioso cuando alguien daña intencionalmente tu propiedad.",
    definicion: "Extremadamente enojado o iracundo.",
    valor: 1,
    label: "FURIOSO",
    tipo: "Ira",
  },
  {
    situacion:
      "Te sientes rabioso cuando alguien daña intencionadamente algo de gran valor sentimental para ti.",
    definicion: "Extremadamente enojado, al punto de perder el control.",
    valor: 1,
    label: "RABIOSO",
    tipo: "Ira",
  },
  {
    situacion:
      "Actúas de manera provocadora en una discusión, desafiando las opiniones tradicionales para incitar a una respuesta.",
    definicion:
      "Que incita o estimula a otros a reaccionar, a menudo de manera desafiante.",
    valor: 1,
    label: "PROVOCADOR",
    tipo: "Ira",
  },
  {
    situacion:
      "Adoptas una actitud hostil cuando sientes que tus ideas están siendo injustamente criticadas en una reunión.",
    definicion: "Mostrando antagonismo o aversión hacia alguien o algo.",
    valor: 1,
    label: "HOSTIL",
    tipo: "Ira",
  },
  {
    situacion:
      "Te sientes enfurecido cuando descubres que alguien ha mentido sobre ti, afectando tu reputación.",
    definicion: "Muy enojado, al borde de la ira violenta.",
    valor: 1,
    label: "ENFURECIDO",
    tipo: "Ira",
  },
  {
    situacion:
      " Te sientes irritado cuando alguien interrumpe constantemente tu concentración con preguntas triviales.",
    definicion: " Ligeramente enojado o molestado por algo.",
    valor: 1,
    label: "IRRITADO",
    tipo: "Ira",
  },
  {
    situacion:
      " Sientes tu lado introvertido resaltar después de pasar mucho tiempo en grandes grupos, deseando tiempo a solas para recargar energías.",
    definicion:
      " Persona que prefiere actividades solitarias o con poca gente, a menudo encontrando el exceso de estímulo social agotador.",
    valor: 1,
    label: "INTROVERTIDO",
    tipo: "Ira",
  },
  {
    situacion:
      "Te sientes desconfiado cuando un desconocido te ofrece un trato que parece demasiado bueno para ser verdad.",
    definicion: " Falta de confianza en las intenciones o acciones de otros.",
    valor: 1,
    label: "DESCONFIADO",
    tipo: "Ira",
  },
  {
    situacion:
      "Adoptas una postura escéptica hacia las afirmaciones de un producto milagroso que promete resultados instantáneos.",
    definicion:
      "Inclinado a cuestionar o dudar de las afirmaciones hasta que se presenten pruebas.",
    valor: 1,
    label: "ESCÉPTICO",
    tipo: "Ira",
  },
  {
    situacion:
      "Respondes de manera sarcástica cuando alguien hace una observación obvia como si fuera una gran revelación.",
    definicion: " Uso de ironía para burlarse o mostrar desprecio.",
    valor: 1,
    label: "SARCÁSTICO",
    tipo: "Ira",
  },
  {
    situacion:
      "Te sientes arrepentido después de decir algo hiriente a un amigo en un momento de ira.",
    definicion: "Sentimiento de pesar o remordimiento por acciones pasadas.",
    valor: 1,
    label: "ARREPENTIDO",
    tipo: "Tristeza",
  },
  {
    situacion:
      " Te sientes avergonzado cuando tropiezas y caes en frente de una multitud.",
    definicion:
      "Sentimiento de humillación o vergüenza causada por haber hecho algo inapropiado o equivocado.",
    valor: 1,
    label: "AVERGONZADO",
    tipo: "Tristeza",
  },
  {
    situacion:
      "Te sientes ignorado cuando tus comentarios en una reunión de trabajo no reciben ninguna respuesta o reconocimiento.",
    definicion:
      "Sentimiento de ser pasado por alto o no reconocido por otros, especialmente en situaciones sociales.",
    valor: 1,
    label: "IGNORADO",
    tipo: "Tristeza",
  },
  {
    situacion:
      "Te sientes victimizado después de ser acusado falsamente de un error que no cometiste.",
    definicion:
      " Sentirse como el destinatario injusto de acciones negativas o daño por parte de otros.",
    valor: 1,
    label: "VICTIMIZADO",
    tipo: "Tristeza",
  },
  {
    situacion:
      "Experimentas una sensación de desvalimiento cuando te encuentras en una situación de emergencia sin saber cómo actuar.",
    definicion:
      "Falta de fuerza, poder o capacidad para ayudarse a sí mismo o a otros.",
    valor: 1,
    label: "DESVALIDO",
    tipo: "Tristeza",
  },
  {
    situacion:
      "Te sientes vulnerable al compartir tus secretos más profundos con alguien por primera vez.",
    definicion: " Estado de estar expuesto al daño físico o emocional.",
    valor: 1,
    label: "VULNERABLE",
    tipo: "Tristeza",
  },
  {
    situacion:
      "Un día lluvioso y gris te sume en un estado melancólico, reflexionando sobre los momentos agridulces de la vida.",
    definicion:
      "Sentimiento persistente de tristeza o pesimismo, a menudo sin una causa clara.",
    valor: 1,
    label: "MELANCÓLICO",
    tipo: "Tristeza",
  },
  {
    situacion:
      "Te sientes vacío después de alcanzar un objetivo importante, preguntándote '¿qué sigue ahora?'",
    definicion:
      "Sensación de falta de propósito, significado o satisfacción en la vida.",
    valor: 1,
    label: "VACÍO",
    tipo: "Tristeza",
  },
  {
    situacion:
      "Te sientes desamparado cuando una enfermedad prolongada te impide participar en actividades que disfrutas.",
    definicion:
      "Sentirse incapaz de cambiar una situación difícil o de cuidar de uno mismo.",
    valor: 1,
    label: "DESAMPARADO",
    tipo: "Tristeza",
  },
  {
    situacion:
      "Viviendo lejos de la familia y amigos, te sientes aislado en una gran ciudad.",
    definicion:
      "Sentirse solo y separado de otros, tanto física como emocionalmente.",
    valor: 1,
    label: "AISLADO",
    tipo: "Tristeza",
  },
  {
    situacion:
      "Te sientes apático durante una etapa de la vida donde nada parece motivarte o emocionarte.",
    definicion:
      "Falta de interés, entusiasmo o preocupación por lo que sucede a su alrededor.",
    valor: 1,
    label: "APÁTICO",
    tipo: "Tristeza",
  },
  {
    situacion:
      "Te muestras indiferente cuando amigos discuten sobre un tema que no te interesa en absoluto.",
    definicion:
      ": No tener preferencia o interés particular; carecer de simpatía o atención hacia algo o alguien.",
    valor: 1,
    label: "INDIFERENTE",
    tipo: "Tristeza",
  },
  {
    situacion:
      "Te sientes aterrado cuando estás a punto de dar un discurso frente a una gran audiencia y te asusta la idea de olvidar tus palabras.",
    definicion:
      " Sentimiento extremo de miedo frente a algo percibido como una amenaza grave o peligrosa.",
    valor: 1,
    label: "ATERRADO",
    tipo: "Miedo",
  },
  {
    situacion:
      " Quedas espantado al presenciar un accidente de tráfico justo delante de ti en la carretera.",
    definicion:
      " Impactado o asustado por una sorpresa repentina o un evento inesperado.",
    valor: 1,
    label: "ESPANTADO",
    tipo: "Miedo",
  },
  {
    situacion:
      " Te sientes agobiado por la carga de trabajo que se acumula justo antes de los exámenes finales.",
    definicion:
      "Sentimiento de estar abrumado por problemas o preocupaciones, hasta el punto de sentirse incapaz de lidiar con ellos.",
    valor: 1,
    label: "AGOBIADO",
    tipo: "Miedo",
  },
  {
    situacion:
      "Estás preocupado por la salud de un familiar cercano que está pasando por una enfermedad grave.",
    definicion: " Inquietud o ansiedad por problemas actuales o futuros.",
    valor: 1,
    label: "PREOCUPADO",
    tipo: "Miedo",
  },
  {
    situacion:
      "Te sientes insuficiente cuando comparas tus logros con los de tus compañeros, sintiendo que no has logrado tanto como ellos.",
    definicion:
      " Sentimiento de no estar a la altura de las expectativas propias o ajenas.",
    valor: 1,
    label: "INSUFICIENTE",
    tipo: "Miedo",
  },
  {
    situacion:
      "Te sientes inferior cuando te rodeas de personas que consideras más talentosas o exitosas que tú en un campo específico.",
    definicion:
      "Sensación de ser menos en comparación con los demás, ya sea en habilidades, logros o estatus.",
    valor: 1,
    label: "INFERIOR",
    tipo: "Miedo",
  },
  {
    situacion:
      " Te sientes inútil cuando no puedes ayudar a un amigo que está pasando por un problema complejo y te gustaría poder hacer más por él.",
    definicion:
      "Creencia de no tener valor o capacidad para contribuir de manera significativa.",
    valor: 1,
    label: "INÚTIL",
    tipo: "Miedo",
  },
  {
    situacion:
      "Te sientes insignificante cuando tus opiniones o pensamientos son ignorados durante una discusión grupal importante.",
    definicion: "Sentimiento de ser pequeño o sin importancia.",
    valor: 1,
    label: "INSIGNIFICANTE",
    tipo: "Miedo",
  },
  {
    situacion:
      "Te sientes marginado cuando te das cuenta de que no fuiste invitado a una reunión social entre colegas de trabajo.",
    definicion: "Sentirse excluido de un grupo o actividad.",
    valor: 1,
    label: "MARGINADO",
    tipo: "Miedo",
  },
  {
    situacion:
      "Te sientes alienado en tu nuevo trabajo cuando notas que todos tus colegas comparten intereses muy distintos a los tuyos y no logras encajar.",
    definicion:
      "Sentimiento de estar aislado o separado de un grupo o sociedad a la que se pertenece o se desea pertenecer.",
    valor: 1,
    label: "ALIENADO",
    tipo: "Miedo",
  },
  {
    situacion:
      "Te sientes irrespetado cuando tus contribuciones en un proyecto grupal son ignoradas o minimizadas.",
    definicion:
      "Sentimiento de no recibir el debido respeto o consideración por parte de otros.",
    valor: 1,
    label: "IRRESPETADO",
    tipo: "Miedo",
  },
  {
    situacion:
      "Experimentas ser ridiculizado cuando compañeros de trabajo se ríen de tu propuesta sin intentar entenderla.",
    definicion: "Objeto de burla o escarnio, a menudo de manera humillante.",
    valor: 1,
    label: "RIDICULIZADO",
    tipo: "Miedo",
  },
  {
    situacion:
      " Te sientes enérgico después de una buena noche de descanso, listo para enfrentar los desafíos del día.",
    definicion: "Lleno de vigor y entusiasmo.",
    valor: 1,
    label: "ENÉRGETICO",
    tipo: "Sorpresa",
  },
  {
    situacion:
      "Estás entusiasmado con el inicio de una nueva clase que coincide con tus pasiones.",
    definicion: "Mostrar gran interés o admiración por algo.",
    valor: 1,
    label: "ENTUSIASTA",
    tipo: "Sorpresa",
  },
  {
    situacion:
      "Te sientes impresionado por la habilidad de un amigo para aprender rápidamente un instrumento musical.",
    definicion:
      "Afectado profundamente por la admiración o el respeto hacia alguien o algo.",
    valor: 1,
    label: "IMPRESIONADO",
    tipo: "Sorpresa",
  },
  {
    situacion:
      "Quedas estupefacto ante la complejidad y belleza de una obra de arte en un museo.",
    definicion: "Asombrado a un grado extremo.",
    valor: 1,
    label: "ESTUPEFACTO",
    tipo: "Sorpresa",
  },
  {
    situacion:
      "Te sientes perplejo intentando resolver un acertijo matemático complejo.",
    definicion: "Completamente desconcertado o confundido.",
    valor: 1,
    label: "PERPLEJO",
    tipo: "Sorpresa",
  },
  {
    situacion:
      "Te sientes desilusionado después de que tu restaurante favorito baja la calidad de sus platos.",
    definicion:
      " Desencantado o decepcionado por descubrir que algo no es tan bueno como se creía.",
    valor: 1,
    label: "DESILUSIONADO",
    tipo: "Sorpresa",
  },
  {
    situacion:
      " Te sientes abatido después de no lograr un objetivo importante que te habías propuesto.",
    definicion: " Desanimado o deprimido.",
    valor: 1,
    label: "ABATIDO",
    tipo: "Sorpresa",
  },
  {
    situacion:
      "Estás conmocionado al enterarte de un giro inesperado en los acontecimientos de tu vida personal.",
    definicion:
      "Impactado o sorprendido profundamente, especialmente por algo inesperado.",
    valor: 1,
    label: "CONMOCIONADO",
    tipo: "Sorpresa",
  },
  {
    situacion:
      "Te muestras moralista al criticar las decisiones de estilo de vida de un amigo, basándote en tus propios valores.",
    definicion:
      ": Persona que adopta una actitud de juzgar según un conjunto de principios éticos, a menudo de manera crítica hacia los demás.",
    valor: 1,
    label: "MORALISTA",
    tipo: "Asco",
  },
  {
    situacion:
      " Te sientes reacio a probar nuevas actividades de riesgo, prefiriendo la comodidad de lo familiar.",
    definicion: "Inclinado a resistirse o mostrarse renuente a algo.",
    valor: 1,
    label: "REACIO",
    tipo: "Asco",
  },
  {
    situacion:
      " Encuentras repugnante ver cómo alguien tira basura en un parque natural, mostrando falta de respeto por el medio ambiente.",
    definicion:
      "Causa una fuerte aversión o desagrado; algo que se considera moralmente despreciable o físicamente nauseabundo.",
    valor: 1,
    label: "REPUGNANTE",
    tipo: "Asco",
  },
  {
    situacion:
      "Te comportas de manera revoltosa durante una reunión familiar, incitando a los primos más jóvenes a jugar y hacer travesuras.",
    definicion:
      " Inclinado a causar disturbios o desorden, a menudo de manera juguetona o desafiante.",
    valor: 1,
    label: "REVOLTOSO",
    tipo: "Asco",
  },
  {
    situacion:
      "Sientes asco al oler alimentos descompuestos olvidados en el refrigerador.",
    definicion:
      "Sensación intensa de disgusto o repulsión, especialmente provocada por algo desagradable a los sentidos.",
    valor: 1,
    label: "ASCO",
    tipo: "Asco",
  },
  {
    situacion:
      " Encuentras odioso el comportamiento de un personaje en una película que manipula y daña a otros para su beneficio personal.",
    definicion:
      "Despierta sentimientos intensos de aversión o antipatía; detestable.",
    valor: 1,
    label: "ODIOSO",
    tipo: "Asco",
  },
  {
    situacion:
      " Desarrollas una aversión a volar después de experimentar un vuelo particularmente turbulento.",
    definicion:
      "Sentimiento de fuerte desdén o desagrado hacia algo o alguien, evitando encuentros o situaciones.",
    valor: 1,
    label: "AVERSIÓN",
    tipo: "Asco",
  },
  {
    situacion:
      "Te sientes vacilante al elegir entre dos ofertas de trabajo, cada una con sus propias ventajas y desventajas.",
    definicion: " Falta de decisión o certeza, mostrando indecisión.",
    valor: 1,
    label: "VACILANTE",
    tipo: "Asco",
  },
];
const emocionesInteriores = [
  {
    situacion:
      "A pesar de un pequeño fracaso en un proyecto, te sientes optimista sobre tus posibilidades de éxito en el futuro.",
    definicion:
      "Tendencia a esperar que el futuro traiga resultados positivos o a ver el lado positivo de las situaciones.",
    valor: 1,
    label: "OPTIMISTA",
    tipo: "Felicidad",
  },
  {
    situacion:
      "Sientes una conexión íntima con un amigo cercano mientras comparten secretos y experiencias personales",
    definicion:
      "Sentimiento de cercanía, familiaridad y afecto profundo hacia otra persona, a menudo en un contexto privado o personal.",
    valor: 1,
    label: "ÍNTIMO",
    tipo: "Felicidad",
  },
  {
    situacion:
      "Disfrutas de un momento pacífico al amanecer en una playa tranquila, escuchando las olas del mar.",
    definicion: "Estado de tranquilidad, calma o ausencia de conflicto.",
    valor: 1,
    label: "PACÍFICO",
    tipo: "Felicidad",
  },
  {
    situacion:
      " Te sientes poderoso al liderar un equipo exitosamente hacia la finalización de un proyecto desafiante.",
    definicion:
      "Sensación de tener gran fuerza, influencia o control sobre las propias circunstancias o sobre los demás.",
    valor: 1,
    label: "PODEROSO",
    tipo: "Felicidad",
  },
  {
    situacion:
      " Sientes aceptación cuando tus nuevos compañeros de trabajo te invitan a almorzar para conocerte mejor.",
    definicion:
      "Sentimiento de ser recibido y valorado por lo que uno es por parte de otros individuos o grupos.",
    valor: 1,
    label: "ACEPTADO",
    tipo: "Felicidad",
  },
  {
    situacion:
      "Te sientes orgulloso después de graduarte con honores de tu universidad.",
    definicion:
      "Sentimiento de satisfacción por los propios logros, cualidades o pertenencia a un determinado grupo.",
    valor: 1,
    label: "ORGULLOSO",
    tipo: "Felicidad",
  },
  {
    situacion:
      " Quedas asombrado al ver las auroras boreales por primera vez en un viaje al norte.",
    definicion:
      "Emoción de sorpresa intensa ante algo inesperado, extraordinario o difícil de creer.",
    valor: 1,
    label: "ASOMBRADO",
    tipo: "Felicidad",
  },
  {
    situacion:
      "Te sientes interesado en aprender un nuevo idioma después de un viaje inspirador al extranjero.",
    definicion:
      "Sentimiento de curiosidad o atención hacia algo que parece ser atractivo, importante o valioso.",
    valor: 1,
    label: "INTERESADO",
    tipo: "Felicidad",
  },
  {
    situacion: "Te sientes alegre durante una reunión familiar festiva.",
    definicion: "Estado de felicidad, satisfacción o júbilo.",
    valor: 1,
    label: "ALEGRE",
    tipo: "Felicidad",
  },
  {
    situacion:
      "Te sientes herido cuando un amigo cercano te traiciona confiando tus secretos a otros.",
    definicion:
      "Sentimiento de dolor emocional causado por experiencias de rechazo, traición o fracaso.",
    valor: 1,
    label: "HERIDO",
    tipo: "Ira",
  },
  {
    situacion:
      "Te sientes amenazado cuando alguien desconocido te sigue camino a casa durante la noche.",
    definicion:
      "Sensación de estar en peligro o bajo la posibilidad de ser dañado física o emocionalmente.",
    valor: 1,
    label: "AMENAZADO",
    tipo: "Ira",
  },
  {
    situacion:
      "Te sientes lleno de odio hacia una injusticia social flagrante que observas en las noticias.",
    definicion: "Sentir una aversión intensa y profunda hacia alguien o algo.",
    valor: 1,
    label: "LLENO DE ODIO",
    tipo: "Ira",
  },
  {
    situacion:
      "Te sientes loco y desinhibido bailando con amigos en un concierto.",
    definicion:
      "Estado de gran excitación, entusiasmo o desinhibición, a menudo considerado fuera de lo común.",
    valor: 1,
    label: "LOCO",
    tipo: "Ira",
  },
  {
    situacion:
      "Te sientes agresivo durante un debate acalorado cuando alguien desestima tus opiniones sin consideración.",
    definicion:
      " Tendencia a actuar o responder con hostilidad o violencia, ya sea física o verbalmente.",
    valor: 1,
    label: "AGRESIVO",
    tipo: "Ira",
  },
  {
    situacion:
      " Experimentas frustración cuando, a pesar de tus mejores esfuerzos, no logras avanzar en un proyecto personal.",
    definicion:
      "Sentimiento de descontento y molestia debido a la incapacidad de cambiar o lograr algo.",
    valor: 1,
    label: "FRUSTRADO",
    tipo: "Ira",
  },
  {
    situacion:
      "Te sientes distante en una reunión social donde no conoces a nadie y te resulta difícil entablar conversaciones.",
    definicion:
      "Sentimiento de desconexión emocional o falta de interés hacia los demás o hacia situaciones específicas.",
    valor: 1,
    label: "DISTANTE",
    tipo: "Ira",
  },
  {
    situacion:
      "Te sientes crítico al revisar un proyecto de trabajo y notar múltiples errores que podrían haberse evitado.",
    definicion:
      "Tendencia a encontrar fallos o aspectos negativos en situaciones, obras o en el comportamiento de los demás.",
    valor: 1,
    label: "CRÍTICO",
    tipo: "Ira",
  },
  {
    situacion:
      "Te sientes culpable después de mentir a un amigo sobre tus planes para evitar herir sus sentimientos.",
    definicion:
      " Sensación de remordimiento o responsabilidad por haber cometido una falta, error o por haber hecho algo mal.",
    valor: 1,
    label: "CULPABLE",
    tipo: "Tristeza",
  },
  {
    situacion:
      "Te sientes abandonado cuando tus amigos se olvidan de invitarte a un evento importante.",
    definicion:
      "Sensación de soledad y desolación por haber sido dejado atrás o excluido por otros.",
    valor: 1,
    label: "ABANDONADO",
    tipo: "Tristeza",
  },
  {
    situacion:
      "Te sientes desesperado al no encontrar trabajo después de meses de búsqueda intensiva.",
    definicion:
      "Sentimiento intenso de pérdida de esperanza, especialmente en situaciones difíciles o apremiantes.",
    valor: 1,
    label: "DESESPERADO",
    tipo: "Tristeza",
  },
  {
    situacion:
      "Te sientes deprimido durante los días grises y cortos del invierno, afectando tu motivación y energía.",
    definicion:
      "Estado de tristeza profunda, falta de interés y placer en actividades habituales, y posible sensación de desesperanza.",
    valor: 1,
    label: "DEPRIMIDO",
    tipo: "Tristeza",
  },
  {
    situacion:
      "Te sientes solo en una ciudad nueva sin amigos ni familiares cercanos.",
    definicion:
      "Sensación de aislamiento y desconexión de los demás, incluso en presencia de otras personas.",
    valor: 1,
    label: "SOLO",
    tipo: "Tristeza",
  },
  {
    situacion:
      "Experimentas aburrimiento durante una conferencia que encuentras monótona y poco relevante.",
    definicion:
      "Estado de desinterés y falta de entusiasmo hacia las actividades o situaciones actuales.",
    valor: 1,
    label: "ABURRIDO",
    tipo: "Tristeza",
  },
  {
    situacion:
      " Te sientes asustado cuando escuchas un ruido desconocido en tu casa durante la noche.",
    definicion:
      "Sentimiento de miedo o temor ante una amenaza real o percibida.",
    valor: 1,
    label: "ASUSTADO",
    tipo: "Miedo",
  },
  {
    situacion:
      " Experimentas ansiedad antes de presentar un proyecto importante frente a tus superiores en el trabajo.",
    definicion:
      "Sensación de nerviosismo o preocupación, a menudo sobre eventos futuros o resultados inciertos.",
    valor: 1,
    label: "ANSIOSO",
    tipo: "Miedo",
  },
  {
    situacion:
      "Te sientes inseguro sobre tu apariencia el primer día en un nuevo empleo.",
    definicion: "Falta de confianza en uno mismo o en las propias capacidades.",
    valor: 1,
    label: "INSEGURO",
    tipo: "Miedo",
  },
  {
    situacion:
      "Actúas de manera sumisa durante una discusión, aceptando rápidamente el punto de vista de otra persona aunque no estés de acuerdo.",
    definicion:
      "Tendencia a ceder ante los deseos o la autoridad de otros, a menudo por falta de confianza o por deseo de evitar conflictos.",
    valor: 1,
    label: "SUMISO",
    tipo: "Miedo",
  },
  {
    situacion: "Sientes rechazo cuando tus amigos hacen planes sin ti.",
    definicion: "Sentimiento de ser excluido o despreciado por otros.",
    valor: 1,
    label: "RECHAZADO",
    tipo: "Miedo",
  },
  {
    situacion:
      "Te sientes humillado cuando tropiezas y caes en público, y la gente se ríe de ti.",
    definicion:
      "Sentimiento de vergüenza o disminución de la dignidad debido a una situación embarazosa o al trato despectivo de otros.",
    valor: 1,
    label: "HUMILLADO",
    tipo: "Miedo",
  },
  {
    situacion:
      "Estás entusiasmado con el viaje de tus sueños que finalmente vas a realizar.",
    definicion:
      "Sensación de excitación o euforia por algo que se anticipa o se está experimentando.",
    valor: 1,
    label: "ENTUSIASMADO",
    tipo: "Sorpresa",
  },
  {
    situacion:
      "Quedas asombrado al ver un espectáculo de magia que desafía tu entendimiento.",
    definicion:
      "Sentimiento de asombro o sorpresa ante algo extraordinariamente impresionante o inesperado.",
    valor: 1,
    label: "ASOMBRADO",
    tipo: "Sorpresa",
  },
  {
    situacion:
      "Te sientes confundido al tratar de aprender un concepto complejo sin una explicación clara.",
    definicion:
      "Estado de incertidumbre o incapacidad para entender claramente una situación o información.",
    valor: 1,
    label: "CONFUNDIDO",
    tipo: "Sorpresa",
  },
  {
    situacion:
      " Sientes sorpresa cuando amigos y familiares te organizan una fiesta de cumpleaños sorpresa.",
    definicion:
      " Reacción emocional repentina causada por algo inesperado o inusual.",
    valor: 1,
    label: "SORPRENDIDO",
    tipo: "Sorpresa",
  },
  {
    situacion: "",
    definicion: "",
    valor: 1,
    label: "DISCONFORME",
    tipo: "Asco",
  },
  {
    situacion:
      "Te sientes decepcionado después de no obtener la promoción laboral que esperabas.",
    definicion:
      "Sensación de insatisfacción al no cumplirse las expectativas o deseos.",
    valor: 1,
    label: "DECEPCIONADO",
    tipo: "Asco",
  },
  {
    situacion:
      " Encuentras una escena de un accidente horrible y no puedes dejar de pensar en ella.",
    definicion: "Sensación extrema de repulsión o disgusto.",
    valor: 1,
    label: "HORRIBLE",
    tipo: "Asco",
  },
  {
    situacion: "Sientes síntomas de abstinencia al intentar dejar de fumar.",
    definicion:
      "Dificultad y malestar experimentado al cesar o reducir el consumo de una sustancia adictiva.",
    valor: 1,
    label: "ABSTINENCIA",
    tipo: "Asco",
  },
];
const emocionesCentrales = [
  {
    situacion: "",
    definicion: "",
    label: "TRISTEZA",
    tipo: "Tristeza",
    valor: 2.3,
  },
  {
    situacion: "",
    definicion: "",
    label: "FELICIDAD",
    tipo: "Felicidad",
    valor: 3.2,
  },
  {
    situacion: "",
    definicion: "",
    label: "SORPRESA",
    tipo: "Sorpresa",
    valor: 1.5,
  },
  { situacion: "", definicion: "", label: "MIEDO", tipo: "Miedo", valor: 2 },
  {
    situacion:
      "Sientes ira cuando alguien se lleva el crédito por el trabajo duro que has realizado.",
    definicion:
      "Emoción intensa que surge como respuesta a la percepción de una injusticia, amenaza o frustración.",
    label: "IRA",
    tipo: "Ira",
    valor: 3,
  },
  {
    situacion:
      "Experimentas asco al encontrar moho en un alimento que ibas a comer.",
    definicion:
      "Sentimiento de aversión o repulsión hacia algo que se considera desagradable o inaceptable.",
    label: "ASCO",
    tipo: "Asco",
    valor: 1.5,
  },
];

const allEmociones = [
  {
    situacion:
      "Te sientes inspirado después de visitar una exposición de arte.",
    definicion:
      "Sentimiento de motivación y creatividad estimulado por alguien o algo.",
    valor: 1,
    label: "INSPIRADO",
    tipo: "Felicidad",
  },
  {
    situacion:
      "Estás abierto a cambiar de carrera después de reflexionar sobre tus verdaderas pasiones.",
    definicion:
      "Disposición a recibir nuevas ideas, experiencias o a aceptar cambios.",
    valor: 1,
    label: "ABIERTO",
    tipo: "Felicidad",
  },
  {
    situacion:
      "Actúas de forma bromista para levantar el ánimo de un amigo que está pasando por un mal momento.",
    definicion: "Inclinación a hacer bromas o a actuar de manera juguetona.",
    valor: 1,
    label: "BROMISTA",
    tipo: "Felicidad",
  },
  {
    situacion: "Te sientes sensible y lloras durante una película emotiva.",
    definicion:
      "Capacidad de percibir o sentir con facilidad; susceptible a estímulos emocionales.",
    valor: 1,
    label: "SENSIBLE",
    tipo: "Felicidad",
  },
  {
    situacion:
      " Estás esperanzado de que el mundo puede ser un lugar mejor a través del activismo y la educación.",
    definicion:
      "Sentimiento de optimismo respecto al futuro o al éxito de algo.",
    valor: 1,
    label: "ESPERANZADO",
    tipo: "Felicidad",
  },
  {
    situacion: "Te muestras cariñoso con tu mascota, abrazándola y cuidándola.",
    definicion: "Sentimiento de afecto y ternura hacia otra persona.",
    valor: 1,
    label: "CARIÑOSO",
    tipo: "Felicidad",
  },
  {
    situacion:
      "Usas un atuendo provocativo para desafiar las normas conservadoras en un evento social.",
    definicion:
      "Tendencia a provocar reacciones en los demás, a menudo de manera intencional o desafiante.",
    valor: 1,
    label: "PROVOCATIVO",
    tipo: "Felicidad",
  },
  {
    situacion:
      "Te sientes valiente al defender a un desconocido de un acto de injusticia en la calle.",
    definicion: "Capacidad de enfrentar el miedo o la adversidad con coraje.",
    valor: 1,
    label: "VALIENTE",
    tipo: "Felicidad",
  },
  {
    situacion:
      "Te sientes satisfecho después de una comida deliciosa y nutritiva.",
    definicion:
      "Sentimiento de contento y complacencia por haber cumplido con las propias expectativas o deseos.",
    valor: 1,
    label: "SATISFECHO",
    tipo: "Felicidad",
  },
  {
    situacion:
      " Te sientes respetado cuando tus colegas valoran y buscan tu opinión en reuniones importantes.",
    definicion:
      "Reconocimiento de la valía o calidad de una persona por parte de los demás.",
    valor: 1,
    label: "RESPETADO",
    tipo: "Felicidad",
  },
  {
    situacion:
      "Te sientes seguro al caminar solo por una calle bien iluminada y familiar.",
    definicion:
      " Confianza en uno mismo o en la situación en la que se encuentra.",
    valor: 1,
    label: "SEGURO",
    tipo: "Felicidad",
  },
  {
    situacion:
      "Te sientes importante al contribuir con una idea que resuelve un problema complicado en el trabajo.",
    definicion:
      "Sentimiento de tener significado, valor o ser crucial en un contexto específico.",
    valor: 1,
    label: "IMPORTANTE",
    tipo: "Felicidad",
  },
  {
    situacion:
      " Sientes curiosidad por la astronomía después de ver un documental sobre el universo.",
    definicion: " Deseo de aprender o saber más sobre algo.",
    valor: 1,
    label: "CURIOSO",
    tipo: "Felicidad",
  },
  {
    situacion:
      "Te sientes entretenido viendo tu serie de comedia favorita, olvidándote de las preocupaciones del día.",
    definicion:
      "Estado de estar divertido o disfrutar de una actividad o espectáculo.",
    valor: 1,
    label: "ENTRETENIDO",
    tipo: "Felicidad",
  },
  {
    situacion:
      " Experimentas euforia cuando te enteras de que has ganado un premio importante.",
    definicion: "Sensación extrema de felicidad o excitación.",
    valor: 1,
    label: "EUFÓRICO",
    tipo: "Felicidad",
  },
  {
    situacion:
      "Te sientes liberado después de terminar un proyecto grande que te ha ocupado mucho tiempo y energía.",
    definicion:
      " Sentimiento de alivio o liberación después de ser liberado de una restricción o carga emocional.",
    valor: 1,
    label: "LIBERADO",
    tipo: "Felicidad",
  },
  {
    situacion:
      "Te sientes apenado después de una discusión con un amigo cercano donde dijiste cosas hirientes.",
    definicion:
      " Sentimiento de tristeza por una pérdida o por haber causado daño.",
    valor: 1,
    label: "APENADO",
    tipo: "Ira",
  },
  {
    situacion:
      " Te sientes devastado al escuchar noticias sobre un desastre natural que afectó a tu comunidad.",
    definicion:
      "Sentimiento de shock o tristeza profunda por una pérdida grande o desastre.",
    valor: 1,
    label: "DESVASTADO",
    tipo: "Ira",
  },
  {
    situacion:
      "Te sientes atacado cuando recibes críticas no constructivas de forma pública.",
    definicion: "Sensación de ser agredido física o emocionalmente.",
    valor: 1,
    label: "ATACADO",
    tipo: "Ira",
  },
  {
    situacion:
      " Te sientes celoso cuando tu mejor amigo pasa más tiempo con otra persona.",
    definicion:
      "Sentimiento de envidia hacia el éxito o ventajas de otros, temiendo perder afecto o posición.",
    valor: 1,
    label: "CELOSO",
    tipo: "Ira",
  },
  {
    situacion:
      " Te sientes resentido después de ser pasado por alto para un ascenso en el trabajo.",
    definicion:
      "Sentimiento de amargura o indignación por haber sido tratado injustamente.",
    valor: 1,
    label: "RESENTIDO",
    tipo: "Ira",
  },
  {
    situacion: "Te sientes ultrajado por una ley nueva que consideras injusta.",
    definicion:
      "Sentimiento intenso de ira o indignación causado por algo percibido como injusto o inmoral.",
    valor: 1,
    label: "ULTRAJADO",
    tipo: "Ira",
  },
  {
    situacion:
      " Te sientes furioso cuando alguien daña intencionalmente tu propiedad.",
    definicion: "Extremadamente enojado o iracundo.",
    valor: 1,
    label: "FURIOSO",
    tipo: "Ira",
  },
  {
    situacion:
      "Te sientes rabioso cuando alguien daña intencionadamente algo de gran valor sentimental para ti.",
    definicion: "Extremadamente enojado, al punto de perder el control.",
    valor: 1,
    label: "RABIOSO",
    tipo: "Ira",
  },
  {
    situacion:
      "Actúas de manera provocadora en una discusión, desafiando las opiniones tradicionales para incitar a una respuesta.",
    definicion:
      "Que incita o estimula a otros a reaccionar, a menudo de manera desafiante.",
    valor: 1,
    label: "PROVOCADOR",
    tipo: "Ira",
  },
  {
    situacion:
      "Adoptas una actitud hostil cuando sientes que tus ideas están siendo injustamente criticadas en una reunión.",
    definicion: "Mostrando antagonismo o aversión hacia alguien o algo.",
    valor: 1,
    label: "HOSTIL",
    tipo: "Ira",
  },
  {
    situacion:
      "Te sientes enfurecido cuando descubres que alguien ha mentido sobre ti, afectando tu reputación.",
    definicion: "Muy enojado, al borde de la ira violenta.",
    valor: 1,
    label: "ENFURECIDO",
    tipo: "Ira",
  },
  {
    situacion:
      " Te sientes irritado cuando alguien interrumpe constantemente tu concentración con preguntas triviales.",
    definicion: " Ligeramente enojado o molestado por algo.",
    valor: 1,
    label: "IRRITADO",
    tipo: "Ira",
  },
  {
    situacion:
      " Sientes tu lado introvertido resaltar después de pasar mucho tiempo en grandes grupos, deseando tiempo a solas para recargar energías.",
    definicion:
      " Persona que prefiere actividades solitarias o con poca gente, a menudo encontrando el exceso de estímulo social agotador.",
    valor: 1,
    label: "INTROVERTIDO",
    tipo: "Ira",
  },
  {
    situacion:
      "Te sientes desconfiado cuando un desconocido te ofrece un trato que parece demasiado bueno para ser verdad.",
    definicion: " Falta de confianza en las intenciones o acciones de otros.",
    valor: 1,
    label: "DESCONFIADO",
    tipo: "Ira",
  },
  {
    situacion:
      "Adoptas una postura escéptica hacia las afirmaciones de un producto milagroso que promete resultados instantáneos.",
    definicion:
      "Inclinado a cuestionar o dudar de las afirmaciones hasta que se presenten pruebas.",
    valor: 1,
    label: "ESCÉPTICO",
    tipo: "Ira",
  },
  {
    situacion:
      "Respondes de manera sarcástica cuando alguien hace una observación obvia como si fuera una gran revelación.",
    definicion: " Uso de ironía para burlarse o mostrar desprecio.",
    valor: 1,
    label: "SARCÁSTICO",
    tipo: "Ira",
  },
  {
    situacion:
      "Te sientes arrepentido después de decir algo hiriente a un amigo en un momento de ira.",
    definicion: "Sentimiento de pesar o remordimiento por acciones pasadas.",
    valor: 1,
    label: "ARREPENTIDO",
    tipo: "Tristeza",
  },
  {
    situacion:
      " Te sientes avergonzado cuando tropiezas y caes en frente de una multitud.",
    definicion:
      "Sentimiento de humillación o vergüenza causada por haber hecho algo inapropiado o equivocado.",
    valor: 1,
    label: "AVERGONZADO",
    tipo: "Tristeza",
  },
  {
    situacion:
      "Te sientes ignorado cuando tus comentarios en una reunión de trabajo no reciben ninguna respuesta o reconocimiento.",
    definicion:
      "Sentimiento de ser pasado por alto o no reconocido por otros, especialmente en situaciones sociales.",
    valor: 1,
    label: "IGNORADO",
    tipo: "Tristeza",
  },
  {
    situacion:
      "Te sientes victimizado después de ser acusado falsamente de un error que no cometiste.",
    definicion:
      " Sentirse como el destinatario injusto de acciones negativas o daño por parte de otros.",
    valor: 1,
    label: "VICTIMIZADO",
    tipo: "Tristeza",
  },
  {
    situacion:
      "Experimentas una sensación de desvalimiento cuando te encuentras en una situación de emergencia sin saber cómo actuar.",
    definicion:
      "Falta de fuerza, poder o capacidad para ayudarse a sí mismo o a otros.",
    valor: 1,
    label: "DESVALIDO",
    tipo: "Tristeza",
  },
  {
    situacion:
      "Te sientes vulnerable al compartir tus secretos más profundos con alguien por primera vez.",
    definicion: " Estado de estar expuesto al daño físico o emocional.",
    valor: 1,
    label: "VULNERABLE",
    tipo: "Tristeza",
  },
  {
    situacion:
      "Un día lluvioso y gris te sume en un estado melancólico, reflexionando sobre los momentos agridulces de la vida.",
    definicion:
      "Sentimiento persistente de tristeza o pesimismo, a menudo sin una causa clara.",
    valor: 1,
    label: "MELANCÓLICO",
    tipo: "Tristeza",
  },
  {
    situacion:
      "Te sientes vacío después de alcanzar un objetivo importante, preguntándote '¿qué sigue ahora?'",
    definicion:
      "Sensación de falta de propósito, significado o satisfacción en la vida.",
    valor: 1,
    label: "VACÍO",
    tipo: "Tristeza",
  },
  {
    situacion:
      "Te sientes desamparado cuando una enfermedad prolongada te impide participar en actividades que disfrutas.",
    definicion:
      "Sentirse incapaz de cambiar una situación difícil o de cuidar de uno mismo.",
    valor: 1,
    label: "DESAMPARADO",
    tipo: "Tristeza",
  },
  {
    situacion:
      "Viviendo lejos de la familia y amigos, te sientes aislado en una gran ciudad.",
    definicion:
      "Sentirse solo y separado de otros, tanto física como emocionalmente.",
    valor: 1,
    label: "AISLADO",
    tipo: "Tristeza",
  },
  {
    situacion:
      "Te sientes apático durante una etapa de la vida donde nada parece motivarte o emocionarte.",
    definicion:
      "Falta de interés, entusiasmo o preocupación por lo que sucede a su alrededor.",
    valor: 1,
    label: "APÁTICO",
    tipo: "Tristeza",
  },
  {
    situacion:
      "Te muestras indiferente cuando amigos discuten sobre un tema que no te interesa en absoluto.",
    definicion:
      ": No tener preferencia o interés particular; carecer de simpatía o atención hacia algo o alguien.",
    valor: 1,
    label: "INDIFERENTE",
    tipo: "Tristeza",
  },
  {
    situacion:
      "Te sientes aterrado cuando estás a punto de dar un discurso frente a una gran audiencia y te asusta la idea de olvidar tus palabras.",
    definicion:
      " Sentimiento extremo de miedo frente a algo percibido como una amenaza grave o peligrosa.",
    valor: 1,
    label: "ATERRADO",
    tipo: "Miedo",
  },
  {
    situacion:
      " Quedas espantado al presenciar un accidente de tráfico justo delante de ti en la carretera.",
    definicion:
      " Impactado o asustado por una sorpresa repentina o un evento inesperado.",
    valor: 1,
    label: "ESPANTADO",
    tipo: "Miedo",
  },
  {
    situacion:
      " Te sientes agobiado por la carga de trabajo que se acumula justo antes de los exámenes finales.",
    definicion:
      "Sentimiento de estar abrumado por problemas o preocupaciones, hasta el punto de sentirse incapaz de lidiar con ellos.",
    valor: 1,
    label: "AGOBIADO",
    tipo: "Miedo",
  },
  {
    situacion:
      "Estás preocupado por la salud de un familiar cercano que está pasando por una enfermedad grave.",
    definicion: " Inquietud o ansiedad por problemas actuales o futuros.",
    valor: 1,
    label: "PREOCUPADO",
    tipo: "Miedo",
  },
  {
    situacion:
      "Te sientes insuficiente cuando comparas tus logros con los de tus compañeros, sintiendo que no has logrado tanto como ellos.",
    definicion:
      " Sentimiento de no estar a la altura de las expectativas propias o ajenas.",
    valor: 1,
    label: "INSUFICIENTE",
    tipo: "Miedo",
  },
  {
    situacion:
      "Te sientes inferior cuando te rodeas de personas que consideras más talentosas o exitosas que tú en un campo específico.",
    definicion:
      "Sensación de ser menos en comparación con los demás, ya sea en habilidades, logros o estatus.",
    valor: 1,
    label: "INFERIOR",
    tipo: "Miedo",
  },
  {
    situacion:
      " Te sientes inútil cuando no puedes ayudar a un amigo que está pasando por un problema complejo y te gustaría poder hacer más por él.",
    definicion:
      "Creencia de no tener valor o capacidad para contribuir de manera significativa.",
    valor: 1,
    label: "INÚTIL",
    tipo: "Miedo",
  },
  {
    situacion:
      "Te sientes insignificante cuando tus opiniones o pensamientos son ignorados durante una discusión grupal importante.",
    definicion: "Sentimiento de ser pequeño o sin importancia.",
    valor: 1,
    label: "INSIGNIFICANTE",
    tipo: "Miedo",
  },
  {
    situacion:
      "Te sientes marginado cuando te das cuenta de que no fuiste invitado a una reunión social entre colegas de trabajo.",
    definicion: "Sentirse excluido de un grupo o actividad.",
    valor: 1,
    label: "MARGINADO",
    tipo: "Miedo",
  },
  {
    situacion:
      "Te sientes alienado en tu nuevo trabajo cuando notas que todos tus colegas comparten intereses muy distintos a los tuyos y no logras encajar.",
    definicion:
      "Sentimiento de estar aislado o separado de un grupo o sociedad a la que se pertenece o se desea pertenecer.",
    valor: 1,
    label: "ALIENADO",
    tipo: "Miedo",
  },
  {
    situacion:
      "Te sientes irrespetado cuando tus contribuciones en un proyecto grupal son ignoradas o minimizadas.",
    definicion:
      "Sentimiento de no recibir el debido respeto o consideración por parte de otros.",
    valor: 1,
    label: "IRRESPETADO",
    tipo: "Miedo",
  },
  {
    situacion:
      "Experimentas ser ridiculizado cuando compañeros de trabajo se ríen de tu propuesta sin intentar entenderla.",
    definicion: "Objeto de burla o escarnio, a menudo de manera humillante.",
    valor: 1,
    label: "RIDICULIZADO",
    tipo: "Miedo",
  },
  {
    situacion:
      " Te sientes enérgico después de una buena noche de descanso, listo para enfrentar los desafíos del día.",
    definicion: "Lleno de vigor y entusiasmo.",
    valor: 1,
    label: "ENÉRGETICO",
    tipo: "Sorpresa",
  },
  {
    situacion:
      "Estás entusiasmado con el inicio de una nueva clase que coincide con tus pasiones.",
    definicion: "Mostrar gran interés o admiración por algo.",
    valor: 1,
    label: "ENTUSIASTA",
    tipo: "Sorpresa",
  },
  {
    situacion:
      "Te sientes impresionado por la habilidad de un amigo para aprender rápidamente un instrumento musical.",
    definicion:
      "Afectado profundamente por la admiración o el respeto hacia alguien o algo.",
    valor: 1,
    label: "IMPRESIONADO",
    tipo: "Sorpresa",
  },
  {
    situacion:
      "Quedas estupefacto ante la complejidad y belleza de una obra de arte en un museo.",
    definicion: "Asombrado a un grado extremo.",
    valor: 1,
    label: "ESTUPEFACTO",
    tipo: "Sorpresa",
  },
  {
    situacion:
      "Te sientes perplejo intentando resolver un acertijo matemático complejo.",
    definicion: "Completamente desconcertado o confundido.",
    valor: 1,
    label: "PERPLEJO",
    tipo: "Sorpresa",
  },
  {
    situacion:
      "Te sientes desilusionado después de que tu restaurante favorito baja la calidad de sus platos.",
    definicion:
      " Desencantado o decepcionado por descubrir que algo no es tan bueno como se creía.",
    valor: 1,
    label: "DESILUSIONADO",
    tipo: "Sorpresa",
  },
  {
    situacion:
      " Te sientes abatido después de no lograr un objetivo importante que te habías propuesto.",
    definicion: " Desanimado o deprimido.",
    valor: 1,
    label: "ABATIDO",
    tipo: "Sorpresa",
  },
  {
    situacion:
      "Estás conmocionado al enterarte de un giro inesperado en los acontecimientos de tu vida personal.",
    definicion:
      "Impactado o sorprendido profundamente, especialmente por algo inesperado.",
    valor: 1,
    label: "CONMOCIONADO",
    tipo: "Sorpresa",
  },
  {
    situacion:
      "Te muestras moralista al criticar las decisiones de estilo de vida de un amigo, basándote en tus propios valores.",
    definicion:
      ": Persona que adopta una actitud de juzgar según un conjunto de principios éticos, a menudo de manera crítica hacia los demás.",
    valor: 1,
    label: "MORALISTA",
    tipo: "Asco",
  },
  {
    situacion:
      " Te sientes reacio a probar nuevas actividades de riesgo, prefiriendo la comodidad de lo familiar.",
    definicion: "Inclinado a resistirse o mostrarse renuente a algo.",
    valor: 1,
    label: "REACIO",
    tipo: "Asco",
  },
  {
    situacion:
      " Encuentras repugnante ver cómo alguien tira basura en un parque natural, mostrando falta de respeto por el medio ambiente.",
    definicion:
      "Causa una fuerte aversión o desagrado; algo que se considera moralmente despreciable o físicamente nauseabundo.",
    valor: 1,
    label: "REPUGNANTE",
    tipo: "Asco",
  },
  {
    situacion:
      "Te comportas de manera revoltosa durante una reunión familiar, incitando a los primos más jóvenes a jugar y hacer travesuras.",
    definicion:
      " Inclinado a causar disturbios o desorden, a menudo de manera juguetona o desafiante.",
    valor: 1,
    label: "REVOLTOSO",
    tipo: "Asco",
  },
  {
    situacion:
      "Sientes asco al oler alimentos descompuestos olvidados en el refrigerador.",
    definicion:
      "Sensación intensa de disgusto o repulsión, especialmente provocada por algo desagradable a los sentidos.",
    valor: 1,
    label: "ASCO",
    tipo: "Asco",
  },
  {
    situacion:
      " Encuentras odioso el comportamiento de un personaje en una película que manipula y daña a otros para su beneficio personal.",
    definicion:
      "Despierta sentimientos intensos de aversión o antipatía; detestable.",
    valor: 1,
    label: "ODIOSO",
    tipo: "Asco",
  },
  {
    situacion:
      " Desarrollas una aversión a volar después de experimentar un vuelo particularmente turbulento.",
    definicion:
      "Sentimiento de fuerte desdén o desagrado hacia algo o alguien, evitando encuentros o situaciones.",
    valor: 1,
    label: "AVERSIÓN",
    tipo: "Asco",
  },
  {
    situacion:
      "Te sientes vacilante al elegir entre dos ofertas de trabajo, cada una con sus propias ventajas y desventajas.",
    definicion: " Falta de decisión o certeza, mostrando indecisión.",
    valor: 1,
    label: "VACILANTE",
    tipo: "Asco",
  },
  {
    situacion:
      "A pesar de un pequeño fracaso en un proyecto, te sientes optimista sobre tus posibilidades de éxito en el futuro.",
    definicion:
      "Tendencia a esperar que el futuro traiga resultados positivos o a ver el lado positivo de las situaciones.",
    valor: 1,
    label: "OPTIMISTA",
    tipo: "Felicidad",
  },
  {
    situacion:
      "Sientes una conexión íntima con un amigo cercano mientras comparten secretos y experiencias personales",
    definicion:
      "Sentimiento de cercanía, familiaridad y afecto profundo hacia otra persona, a menudo en un contexto privado o personal.",
    valor: 1,
    label: "ÍNTIMO",
    tipo: "Felicidad",
  },
  {
    situacion:
      "Disfrutas de un momento pacífico al amanecer en una playa tranquila, escuchando las olas del mar.",
    definicion: "Estado de tranquilidad, calma o ausencia de conflicto.",
    valor: 1,
    label: "PACÍFICO",
    tipo: "Felicidad",
  },
  {
    situacion:
      " Te sientes poderoso al liderar un equipo exitosamente hacia la finalización de un proyecto desafiante.",
    definicion:
      "Sensación de tener gran fuerza, influencia o control sobre las propias circunstancias o sobre los demás.",
    valor: 1,
    label: "PODEROSO",
    tipo: "Felicidad",
  },
  {
    situacion:
      " Sientes aceptación cuando tus nuevos compañeros de trabajo te invitan a almorzar para conocerte mejor.",
    definicion:
      "Sentimiento de ser recibido y valorado por lo que uno es por parte de otros individuos o grupos.",
    valor: 1,
    label: "ACEPTADO",
    tipo: "Felicidad",
  },
  {
    situacion:
      "Te sientes orgulloso después de graduarte con honores de tu universidad.",
    definicion:
      "Sentimiento de satisfacción por los propios logros, cualidades o pertenencia a un determinado grupo.",
    valor: 1,
    label: "ORGULLOSO",
    tipo: "Felicidad",
  },
  {
    situacion:
      " Quedas asombrado al ver las auroras boreales por primera vez en un viaje al norte.",
    definicion:
      "Emoción de sorpresa intensa ante algo inesperado, extraordinario o difícil de creer.",
    valor: 1,
    label: "ASOMBRADO",
    tipo: "Felicidad",
  },
  {
    situacion:
      "Te sientes interesado en aprender un nuevo idioma después de un viaje inspirador al extranjero.",
    definicion:
      "Sentimiento de curiosidad o atención hacia algo que parece ser atractivo, importante o valioso.",
    valor: 1,
    label: "INTERESADO",
    tipo: "Felicidad",
  },
  {
    situacion: "Te sientes alegre durante una reunión familiar festiva.",
    definicion: "Estado de felicidad, satisfacción o júbilo.",
    valor: 1,
    label: "ALEGRE",
    tipo: "Felicidad",
  },
  {
    situacion:
      "Te sientes herido cuando un amigo cercano te traiciona confiando tus secretos a otros.",
    definicion:
      "Sentimiento de dolor emocional causado por experiencias de rechazo, traición o fracaso.",
    valor: 1,
    label: "HERIDO",
    tipo: "Ira",
  },
  {
    situacion:
      "Te sientes amenazado cuando alguien desconocido te sigue camino a casa durante la noche.",
    definicion:
      "Sensación de estar en peligro o bajo la posibilidad de ser dañado física o emocionalmente.",
    valor: 1,
    label: "AMENAZADO",
    tipo: "Ira",
  },
  {
    situacion:
      "Te sientes lleno de odio hacia una injusticia social flagrante que observas en las noticias.",
    definicion: "Sentir una aversión intensa y profunda hacia alguien o algo.",
    valor: 1,
    label: "LLENO DE ODIO",
    tipo: "Ira",
  },
  {
    situacion:
      "Te sientes loco y desinhibido bailando con amigos en un concierto.",
    definicion:
      "Estado de gran excitación, entusiasmo o desinhibición, a menudo considerado fuera de lo común.",
    valor: 1,
    label: "LOCO",
    tipo: "Ira",
  },
  {
    situacion:
      "Te sientes agresivo durante un debate acalorado cuando alguien desestima tus opiniones sin consideración.",
    definicion:
      " Tendencia a actuar o responder con hostilidad o violencia, ya sea física o verbalmente.",
    valor: 1,
    label: "AGRESIVO",
    tipo: "Ira",
  },
  {
    situacion:
      " Experimentas frustración cuando, a pesar de tus mejores esfuerzos, no logras avanzar en un proyecto personal.",
    definicion:
      "Sentimiento de descontento y molestia debido a la incapacidad de cambiar o lograr algo.",
    valor: 1,
    label: "FRUSTRADO",
    tipo: "Ira",
  },
  {
    situacion:
      "Te sientes distante en una reunión social donde no conoces a nadie y te resulta difícil entablar conversaciones.",
    definicion:
      "Sentimiento de desconexión emocional o falta de interés hacia los demás o hacia situaciones específicas.",
    valor: 1,
    label: "DISTANTE",
    tipo: "Ira",
  },
  {
    situacion:
      "Te sientes crítico al revisar un proyecto de trabajo y notar múltiples errores que podrían haberse evitado.",
    definicion:
      "Tendencia a encontrar fallos o aspectos negativos en situaciones, obras o en el comportamiento de los demás.",
    valor: 1,
    label: "CRÍTICO",
    tipo: "Ira",
  },
  {
    situacion:
      "Te sientes culpable después de mentir a un amigo sobre tus planes para evitar herir sus sentimientos.",
    definicion:
      " Sensación de remordimiento o responsabilidad por haber cometido una falta, error o por haber hecho algo mal.",
    valor: 1,
    label: "CULPABLE",
    tipo: "Tristeza",
  },
  {
    situacion:
      "Te sientes abandonado cuando tus amigos se olvidan de invitarte a un evento importante.",
    definicion:
      "Sensación de soledad y desolación por haber sido dejado atrás o excluido por otros.",
    valor: 1,
    label: "ABANDONADO",
    tipo: "Tristeza",
  },
  {
    situacion:
      "Te sientes desesperado al no encontrar trabajo después de meses de búsqueda intensiva.",
    definicion:
      "Sentimiento intenso de pérdida de esperanza, especialmente en situaciones difíciles o apremiantes.",
    valor: 1,
    label: "DESESPERADO",
    tipo: "Tristeza",
  },
  {
    situacion:
      "Te sientes deprimido durante los días grises y cortos del invierno, afectando tu motivación y energía.",
    definicion:
      "Estado de tristeza profunda, falta de interés y placer en actividades habituales, y posible sensación de desesperanza.",
    valor: 1,
    label: "DEPRIMIDO",
    tipo: "Tristeza",
  },
  {
    situacion:
      "Te sientes solo en una ciudad nueva sin amigos ni familiares cercanos.",
    definicion:
      "Sensación de aislamiento y desconexión de los demás, incluso en presencia de otras personas.",
    valor: 1,
    label: "SOLO",
    tipo: "Tristeza",
  },
  {
    situacion:
      "Experimentas aburrimiento durante una conferencia que encuentras monótona y poco relevante.",
    definicion:
      "Estado de desinterés y falta de entusiasmo hacia las actividades o situaciones actuales.",
    valor: 1,
    label: "ABURRIDO",
    tipo: "Tristeza",
  },
  {
    situacion:
      " Te sientes asustado cuando escuchas un ruido desconocido en tu casa durante la noche.",
    definicion:
      "Sentimiento de miedo o temor ante una amenaza real o percibida.",
    valor: 1,
    label: "ASUSTADO",
    tipo: "Miedo",
  },
  {
    situacion:
      " Experimentas ansiedad antes de presentar un proyecto importante frente a tus superiores en el trabajo.",
    definicion:
      "Sensación de nerviosismo o preocupación, a menudo sobre eventos futuros o resultados inciertos.",
    valor: 1,
    label: "ANSIOSO",
    tipo: "Miedo",
  },
  {
    situacion:
      "Te sientes inseguro sobre tu apariencia el primer día en un nuevo empleo.",
    definicion: "Falta de confianza en uno mismo o en las propias capacidades.",
    valor: 1,
    label: "INSEGURO",
    tipo: "Miedo",
  },
  {
    situacion:
      "Actúas de manera sumisa durante una discusión, aceptando rápidamente el punto de vista de otra persona aunque no estés de acuerdo.",
    definicion:
      "Tendencia a ceder ante los deseos o la autoridad de otros, a menudo por falta de confianza o por deseo de evitar conflictos.",
    valor: 1,
    label: "SUMISO",
    tipo: "Miedo",
  },
  {
    situacion: "Sientes rechazo cuando tus amigos hacen planes sin ti.",
    definicion: "Sentimiento de ser excluido o despreciado por otros.",
    valor: 1,
    label: "RECHAZADO",
    tipo: "Miedo",
  },
  {
    situacion:
      "Te sientes humillado cuando tropiezas y caes en público, y la gente se ríe de ti.",
    definicion:
      "Sentimiento de vergüenza o disminución de la dignidad debido a una situación embarazosa o al trato despectivo de otros.",
    valor: 1,
    label: "HUMILLADO",
    tipo: "Miedo",
  },
  {
    situacion:
      "Estás entusiasmado con el viaje de tus sueños que finalmente vas a realizar.",
    definicion:
      "Sensación de excitación o euforia por algo que se anticipa o se está experimentando.",
    valor: 1,
    label: "ENTUSIASMADO",
    tipo: "Sorpresa",
  },
  {
    situacion:
      "Quedas asombrado al ver un espectáculo de magia que desafía tu entendimiento.",
    definicion:
      "Sentimiento de asombro o sorpresa ante algo extraordinariamente impresionante o inesperado.",
    valor: 1,
    label: "ASOMBRADO",
    tipo: "Sorpresa",
  },
  {
    situacion:
      "Te sientes confundido al tratar de aprender un concepto complejo sin una explicación clara.",
    definicion:
      "Estado de incertidumbre o incapacidad para entender claramente una situación o información.",
    valor: 1,
    label: "CONFUNDIDO",
    tipo: "Sorpresa",
  },
  {
    situacion:
      " Sientes sorpresa cuando amigos y familiares te organizan una fiesta de cumpleaños sorpresa.",
    definicion:
      " Reacción emocional repentina causada por algo inesperado o inusual.",
    valor: 1,
    label: "SORPRENDIDO",
    tipo: "Sorpresa",
  },
  {
    situacion:
      "Trabajar arduamente en un proyecto y recibir una evaluación negativa o críticas injustas.",
    definicion:
      " Sentimiento de descontento o desagrado frente a una situación o evento. ",
    valor: 1,
    label: "DISCONFORME",
    tipo: "Asco",
  },
  {
    situacion:
      "Te sientes decepcionado después de no obtener la promoción laboral que esperabas.",
    definicion:
      "Sensación de insatisfacción al no cumplirse las expectativas o deseos.",
    valor: 1,
    label: "DECEPCIONADO",
    tipo: "Asco",
  },
  {
    situacion:
      " Encuentras una escena de un accidente horrible y no puedes dejar de pensar en ella.",
    definicion: "Sensación extrema de repulsión o disgusto.",
    valor: 1,
    label: "HORRIBLE",
    tipo: "Asco",
  },
  {
    situacion: "Sientes síntomas de abstinencia al intentar dejar de fumar.",
    definicion:
      "Dificultad y malestar experimentado al cesar o reducir el consumo de una sustancia adictiva.",
    valor: 1,
    label: "ABSTINENCIA",
    tipo: "Asco",
  },
  {
    situacion: "Recibir la noticia del fallecimiento de un ser querido.",
    definicion:
      " Es una emoción que se caracteriza por sentimientos de desventaja, pérdida, desesperanza o impotencia.",
    label: "TRISTEZA",
    tipo: "Tristeza",
    valor: 2.3,
  },
  {
    situacion:
      "Celebrar un logro personal importante, como graduarse de la universidad o conseguir un nuevo trabajo.",
    definicion:
      "Es un estado emocional que se caracteriza por sentimientos de alegría, satisfacción, contentamiento y bienestar.",
    label: "FELICIDAD",
    tipo: "Felicidad",
    valor: 3.2,
  },
  {
    situacion:
      "Encontrar a tus amigos y familiares esperándote en casa para una fiesta sorpresa de cumpleaños.",
    definicion:
      " Es una emoción breve que se siente ante algo inesperado, pudiendo ser positivo o negativo.",
    label: "SORPRESA",
    tipo: "Sorpresa",
    valor: 1.5,
  },
  {
    situacion:
      "Caminar solo por un callejón oscuro y escuchar pasos desconocidos detrás de ti.",
    definicion:
      " Es una sensación de angustia provocada por la percepción de un peligro, real o supuesto, presente, futuro o incluso pasado",
    label: "MIEDO",
    tipo: "Miedo",
    valor: 2,
  },
  {
    situacion:
      "Sientes ira cuando alguien se lleva el crédito por el trabajo duro que has realizado.",
    definicion:
      "Emoción intensa que surge como respuesta a la percepción de una injusticia, amenaza o frustración.",
    label: "IRA",
    tipo: "Ira",
    valor: 3,
  },
  {
    situacion:
      "Experimentas asco al encontrar moho en un alimento que ibas a comer.",
    definicion:
      "Sentimiento de aversión o repulsión hacia algo que se considera desagradable o inaceptable.",
    label: "ASCO",
    tipo: "Asco",
    valor: 1.5,
  },
];

export {
  emocionesCentrales,
  emocionesExteriores,
  emocionesInteriores,
  allEmociones,
};

// 8, 25, 33, 45, 61, 71, 81, 90, 94, 100, 108, 113, 116, 117, 118, 119;
