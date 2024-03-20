import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ilustration from "../assets/Women Power - Meditating.png";
import ilustration2 from "../assets/pngegg (16).png";
function Acordeon() {
  return (
    <Accordion type="single" collapsible className="w-full text-slate-950 mb-24">
      <AccordionItem key="item1" className="border-b-4 border-b-[#a87ed6]" value="item-1">
        <AccordionTrigger className="text-xl ">
          ¿Que son las emociones?
        </AccordionTrigger>
        <AccordionContent className="AccordionContent text-start text-lg text-gray-600 w-full md:w-2/3 ">
          Las <span className="font-bold">emociones</span> son respuestas psicofisiológicas complejas que surgen
          como reacción a estímulos internos o externos. Estas respuestas
          involucran varios componentes, como experiencias subjetivas,
          expresiones faciales, cambios fisiológicos y tendencias
          comportamentales.<span className="font-bold">Las emociones juegan un papel crucial en la vida
          humana, influenciando nuestra percepción del mundo, decisiones,
          pensamientos y relaciones sociales.</span>  Son fundamentales para la
          adaptación al entorno, ya que nos ayudan a reaccionar ante situaciones
          de peligro, oportunidades y desafíos sociales.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem key="item2" value="item-2" className="border-b-4 border-b-[#95caad]">
        <AccordionTrigger className="text-xl">
          ¿Que tipos de emociones hay?
        </AccordionTrigger>
        <AccordionContent className="AccordionContent text-start text-base mb-7">
          <h1 className="text-4xl font-bitter mt-1">Emociones Primarias</h1>
          <p className="text-lg w-full md:w-2/3  text-gray-600">
          Las <span className="font-bold">emociones primarias</span> son aquellas que se consideran universales y
            biológicamente arraigadas, experimentadas por todos los seres
            humanos a lo largo de la historia. Estas emociones son inmediatas,
            automáticas y responden a estímulos específicos. <span className="underline">A menudo se
            mencionan seis emociones primarias:</span>
          </p>
          <ul className="text-lg flex flex-col gap-2 text-gray-600">
            <li className="mt-2">
              <span className="font-medium text-black">Alegría:</span>{" "}
              Sentimiento de placer o felicidad.{" "}
            </li>
            <li>
              <span className="font-medium text-black">Tristeza:</span>{" "}
              Sentimiento de pérdida, desesperanza o desilusión.
            </li>
            <li>
              <span className="font-medium text-black">Ira:</span> Respuesta a
              una percepción de injusticia o frustración.
            </li>
            <li>
              {" "}
              <span className="font-medium text-black">Miedo:</span> Sensación
              de amenaza o peligro.
            </li>
            <li>
              {" "}
              <span className="font-medium text-black">Sorpresa:</span>{" "}
              Respuesta a algo inesperado.
            </li>
            <li>
              {" "}
              <span className="font-medium text-black">Asco:</span> Reacción
              ante algo desagradable o repulsivo.
            </li>
          </ul>
          <div className="flex md:justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="md:float-right" width="500" height="300" viewBox="0 0 598.25299 581.49793"><path id="uuid-207e1ec5-f316-41d7-bdda-8b0dd0a2bd60-388" d="M317.37575,441.36116c-8.89671,1.36364-15.40463,7.05944-14.53588,12.72122,.86876,5.66178,8.78434,9.14461,17.68405,7.7793,3.56255-.49662,6.95436-1.83918,9.89166-3.91538l37.62277-6.25382-2.511-14.87153-37.53792,5.31177c-3.42552-1.10114-7.06497-1.36572-10.61369-.77157Z" fill="#ffb6b6"/><polygon points="479.50058 395.00508 464.91227 425.96119 391.57489 450.64909 330.71947 453.89578 329.19546 439.2792 395.14843 425.48908 462.82463 393.50814 479.50058 395.00508" fill="#e6e6e6"/><g><rect x="313.0222" y="330.24459" width="2.0005" height="173.77644" transform="translate(-9.1013 7.00975) rotate(-1.26066)" fill="#3f3d56"/><path d="M313.1538,407.16797c-.18115-.61621-4.32715-15.26855,4.65088-29.6709l1.69727,1.05859c-8.48975,13.61816-4.47021,27.90723-4.42871,28.05078l-1.91943,.56152Z" fill="#3f3d56"/><path d="M318.50651,378.60915s-2.72937-18.65506,22.41425-23.77492c5.23825-1.06664,10.16278-1.79561,14.67694-2.28132,5.32851-.57333,7.40701,6.72083,2.59337,9.0768-6.97123,3.41197-13.52893,7.71085-16.94694,12.80161-9.42681,14.04022-22.73764,4.17784-22.73764,4.17784Z" fill="#6c63ff"/><path d="M315.74023,461.11523l-1.91943-.56152c.0415-.14355,4.06104-14.43262-4.42871-28.05078l1.69727-1.05859c8.97803,14.40234,4.83203,29.05469,4.65088,29.6709Z" fill="#3f3d56"/><path d="M310.3877,432.55605s2.72937-18.65506-22.41425-23.77492c-5.23825-1.06664-10.16278-1.79561-14.67694-2.28132-5.32851-.57333-7.40701,6.72083-2.59337,9.0768,6.97123,3.41197,13.52893,7.71085,16.94694,12.80161,9.42681,14.04022,22.73764,4.17784,22.73764,4.17784Z" fill="#6c63ff"/><path d="M345.38308,306.12152c5.06107-1.33443,9.79382-3.65962,9.63686-5.95984-.18646-2.73252-7.21292-4.56342-13.27465-4.84202,4.57215-3.57699,8.77317-8.52168,7.48846-10.75799-1.1811-2.05594-6.67554-1.25956-11.74486,.5512,2.99995-4.28898,5.10906-9.12193,3.50282-10.77588-2.00087-2.06027-9.10218,1.49577-13.9485,5.42651,.94344-6.1237,.46649-13.8534-2.2801-14.55274-2.29776-.58506-5.55432,3.91139-7.78706,8.80952-.98679-5.1402-2.98444-10.02026-5.29-10.02026-3.28439,0-5.9469,9.9025-5.9469,16.35398,0,.36468,.00967,.70797,.02632,1.03597-.32965-.38218-.70745-.78145-1.1383-1.19988-4.62815-4.49466-13.58691-9.48355-15.8751-7.12744-1.60625,1.65395,.50287,6.4869,3.50282,10.77588-5.06932-1.81075-10.56375-2.60714-11.74486-.5512-1.58701,2.76251,5.19664,9.65864,10.71068,13.00291-.33147-.03993-.67971-.07355-1.05033-.09883-6.4365-.43917-16.49728,1.54306-16.72087,4.81983-.15696,2.30022,4.57578,4.62541,9.63686,5.95984-5.03878,1.89411-9.74642,4.83707-9.31913,7.16931,.51858,2.8306,8.42853,3.82148,14.64789,3.24148-4.64633,4.4579-9.68446,12.44383-7.5819,14.78429,1.54078,1.71511,6.50608-.06012,10.98934-2.76114-2.15166,4.93429-3.32024,10.36176-1.34945,11.68009,2.60449,1.74223,9.74743-4.32147,13.51348-9.53904-.38374,6.38314,1.14359,15.15229,4.17408,15.49836,2.29068,.2616,4.82911-4.36033,6.39273-9.35537,1.66258,5.11982,4.38795,9.95671,6.73724,9.63613,3.05486-.41687,4.38668-9.40546,3.81684-15.79319,3.88469,5.00287,10.42248,10.35339,12.88884,8.70356,1.9708-1.31833,.80222-6.7458-1.34945-11.68009,4.48325,2.70102,9.44855,4.47625,10.98934,2.76114,2.10256-2.34046-2.93557-10.3264-7.5819-14.78429,6.21936,.58,14.12931-.41088,14.64789-3.24148,.42729-2.33224-4.28035-5.2752-9.31913-7.16931Zm-27.25118,18.05535c-1.30094,.17752-2.49049,.43103-3.39512,1.07838-.96104-.95404-2.3647-1.2446-3.92539-1.42282-1.74749-.19956-3.33551-.21882-4.54651,.78962-.44311-1.23164-1.53269-2.1066-2.80192-2.95564-1.09135-.73004-2.14972-1.3293-3.2561-1.44485-.08644-1.35139-.94416-2.4999-1.99392-3.66846-.66934-.7451-1.33902-1.41125-2.08213-1.85683,1.07214-1.3054,.94852-2.9553,.61679-4.76601-.2366-1.2915-.54407-2.46827-1.23197-3.34246,.90927-1.00353,1.13558-2.41899,1.24252-3.98616,.11675-1.7112,.06824-3.26269-.91948-4.41797,2.55254,.32468,3.78435-1.26552,4.92929-3.25854,.65405-1.13848,1.17989-2.23522,1.21986-3.3469,1.34239-.17824,2.42983-1.11217,3.52418-2.23903,.93486-.96262,1.73007-1.91578,2.02877-3.01283,1.0712,.90022,2.53281,1.03646,4.14527,1.03646,1.57083,0,2.99839-.12942,4.06148-.96827,.82534,.7458,1.97845,1.13265,3.25084,1.45663,1.21463,.30928,2.36117,.51612,3.4036,.30795,.38052,.86931,1.05707,1.65872,1.82981,2.4544,1.09435,1.12687,2.18179,2.06079,3.52418,2.23903,.03998,1.11167,.56582,2.20841,1.21986,3.3469,.76989,1.34014,1.57848,2.49889,2.80151,3.01589-.1428,.77844-.12753,1.63528-.06603,2.53672,.10695,1.56718,.33326,2.98266,1.24252,3.98616-.68791,.87419-.99537,2.05096-1.23197,3.34246-.33173,1.8107-.45535,3.46061,.61679,4.76601-.7431,.44557-1.41278,1.11173-2.08213,1.85683-1.04976,1.16856-1.90749,2.31707-1.99392,3.66846-1.10638,.11555-2.16475,.71482-3.2561,1.44485-1.49056,.99708-2.73218,2.03061-2.97065,3.63515-1.11854-.54256-2.45752-.47248-3.90393-.27513Z" fill="#6c63ff"/><circle cx="314.6595" cy="306.0531" r="21.23894" fill="#3f3d56"/></g><path d="M58.50921,563.59732c0,.66003,.53003,1.19,1.19006,1.19H581.98925c.65997,0,1.19-.52997,1.19-1.19,0-.65997-.53003-1.19-1.19-1.19H59.69927c-.66003,0-1.19006,.53003-1.19006,1.19Z" fill="#3f3d56"/><polygon points="344.23894 512.546 331.14162 545.67451 314.19215 534.11806 324.20774 499.44869 344.23894 512.546" fill="#ffb6b6"/><polygon points="289.53838 500.21912 254.86901 533.34763 268.73676 547.9858 304.17655 520.25031 289.53838 500.21912" fill="#ffb6b6"/><polygon points="485.99813 392.35886 485.61291 389.66236 476.75296 372.32767 447.47661 380.03198 452.86962 403.91532 485.99813 392.35886" fill="#ffb6b6"/><path d="M473.67124,507.92342l.90036,11.57162s3.72223,48.52195-26.32456,52.3741c-30.04679,3.85215-43.1441,7.7043-60.864-22.34248l-27.73549-49.30754-16.20027,19.27593-21.55082-16.96463s15.40861-60.09357,27.73549-62.40486c1.54086-.28891,3.08172-.43337,4.59851-.46497,10.20508-.21261,19.82492,4.77897,25.93085,12.95861l34.95723,46.82949,12.7121-5.77823,45.84061,14.25296Z" fill="#2f2e41"/><path d="M307.25828,544.13365l6.93387-13.09732,20.03119,13.86775s4.62258,16.94947-2.31129,19.26076c-6.93387,2.31129-26.19463-.77043-26.19463-.77043,0,0-35.4398,7.7043-36.21023,.77043s16.17904-8.47473,16.17904-8.47473l21.57205-11.55646Z" fill="#2f2e41"/><path d="M382.76045,534.88849l-53.54491-33.73818-27.35028,24.49301-18.49033-21.57205s33.89894-50.07798,43.91453-52.38927,26.19463-3.85215,26.19463-3.85215l49.30754,45.45539-20.03119,41.60324Z" fill="#2f2e41"/><path d="M254.09858,530.2659l17.7199,19.26076-2.33678,1.99887s-4.59709,20.02209-15.38312,13.24898c-10.78603-6.77311-11.55646-8.31398-11.55646-8.31398,0,0-30.81722,6.93387-33.89894-5.39301-3.08172-12.32689,5.39301-10.0156,5.39301-10.0156l7.6952,4.62258,32.36718-15.40861Z" fill="#2f2e41"/><circle cx="456.72177" cy="363.85294" r="24.65377" fill="#ffb6b6"/><path d="M450.94354,398.90752l35.4398-10.78603s13.86775,32.35808,11.55646,46.99625c-2.31129,14.63818-23.3682,84.37729-23.3682,84.37729l-46.74096-25.82458s-.77043-15.40861-3.08172-22.34248-9.63038-28.12071,6.54866-45.84061c16.17904-17.7199,19.64597-26.57985,19.64597-26.57985Z" fill="#e6e6e6"/><g><rect x="107.34447" y="155.95049" width="1.99952" height="409.09901" transform="translate(-7.90461 2.47077) rotate(-1.26058)" fill="#3f3d56"/><path d="M107.59862,336.66016c-.10254-.34961-10.01758-35.3584,10.79932-68.75146l1.69727,1.05811c-20.34814,32.6416-10.67773,66.78906-10.57764,67.13086l-1.91895,.5625Z" fill="#3f3d56"/><path d="M118.90075,269.80903s-6.42539-43.91713,52.76688-55.97014c12.33172-2.51104,23.92488-4.22717,34.55197-5.3706,12.54419-1.34971,17.43734,15.82195,6.10524,21.36829-16.41144,8.03236-31.84935,18.15263-39.89591,30.13712-22.19228,33.05303-53.52818,9.83533-53.52818,9.83533Z" fill="#6c63ff"/><path d="M111.08984,463.66016l-1.91895-.5625c.09961-.34082,9.75146-34.52051-10.57764-67.13086l1.69727-1.05859c20.81689,33.39355,10.90186,68.40234,10.79932,68.75195Z" fill="#3f3d56"/><path d="M99.78771,396.80903s6.42539-43.91713-52.76688-55.97014c-12.33172-2.51104-23.92488-4.22717-34.55197-5.3706-12.54419-1.34971-17.43734,15.82195-6.10524,21.36829,16.41144,8.03236,31.84935,18.15263,39.89591,30.13712,22.19228,33.05303,53.52818,9.83533,53.52818,9.83533Z" fill="#6c63ff"/><path d="M182.17266,99.16107c11.91461-3.14148,23.05627-8.61536,22.68677-14.03046-.43896-6.4328-16.98041-10.74304-31.25073-11.39893,10.76361-8.42084,20.6535-20.06146,17.62909-25.32611-2.78052-4.84003-15.71533-2.96521-27.64935,1.29761,7.06238-10.09698,12.02759-21.47455,8.24622-25.36823-4.71039-4.85022-21.42804,3.5213-32.8371,12.7749,2.22101-14.4162,1.09821-32.61322-5.36774-34.25958-5.4093-1.37732-13.07581,9.20807-18.33203,20.73907-2.32306-12.10089-7.02588-23.58936-12.45355-23.58936-7.73199,0-14,23.31213-14,38.5,0,.85852,.02277,1.66669,.06195,2.43884-.77606-.89972-1.66547-1.83966-2.67975-2.82471-10.89545-10.58118-31.98584-22.32587-37.37262-16.77917-3.78137,3.89368,1.18384,15.27124,8.24622,25.36823-11.93402-4.26282-24.86884-6.13763-27.64935-1.29761-3.73608,6.50342,12.23376,22.73804,25.21472,30.61102-.78033-.09399-1.60016-.17316-2.47266-.23267-15.15259-1.03387-38.83734,3.63263-39.36371,11.34668-.36951,5.4151,10.77216,10.88898,22.68677,14.03046-11.86212,4.45905-22.9447,11.38727-21.93878,16.87775,1.22083,6.6637,19.84216,8.9964,34.48358,7.63098-10.93823,10.49463-22.79883,29.29486-17.84906,34.80469,3.62726,4.03766,15.31641-.14154,25.87073-6.50018-5.06537,11.61615-7.81641,24.39331-3.17682,27.49689,6.13141,4.1015,22.94708-10.17346,31.81299-22.45648-.90338,15.02698,2.6922,35.67102,9.82648,36.48572,5.39264,.61584,11.36853-10.26495,15.04956-22.02411,3.914,12.05292,10.32996,23.43976,15.8606,22.68506,7.19165-.98138,10.32697-22.14203,8.98547-37.17981,9.1452,11.77759,24.53625,24.3736,30.34247,20.48962,4.63959-3.10358,1.88855-15.88074-3.17682-27.49689,10.55432,6.35864,22.24347,10.53784,25.87073,6.50018,4.94977-5.50983-6.91083-24.31006-17.84906-34.80469,14.64142,1.36542,33.26276-.96729,34.48358-7.63098,1.00592-5.49048-10.07666-12.4187-21.93878-16.87775Zm-64.15381,42.50531c-3.06262,.41791-5.86304,1.01471-7.99268,2.5387-2.26245-2.24597-5.56689-2.92999-9.24103-3.34955-4.11389-.46979-7.85236-.51514-10.70325,1.85889-1.04315-2.89948-3.60822-4.95929-6.59619-6.95807-2.56921-1.71863-5.06079-3.12939-7.66541-3.40143-.20349-3.1814-2.22272-5.88519-4.69403-8.63617-1.57574-1.75409-3.15228-3.32233-4.90167-4.37128,2.52399-3.07312,2.23297-6.95728,1.45203-11.21997-.55701-3.04041-1.28082-5.81073-2.90027-7.86871,2.14056-2.36249,2.67334-5.6947,2.92511-9.38409,.27484-4.02844,.16064-7.68091-2.16461-10.40063,6.00909,.76434,8.909-2.97925,11.60437-7.67114,1.53973-2.68018,2.77765-5.26208,2.87177-7.87915,3.16022-.41962,5.72021-2.61823,8.29651-5.27106,2.20081-2.26617,4.07288-4.51007,4.77606-7.09271,2.52179,2.11926,5.96265,2.44,9.75867,2.44,3.698,0,7.05872-.30469,9.5614-2.27948,1.94299,1.75574,4.65759,2.66644,7.65302,3.42914,2.85944,.72809,5.55859,1.21503,8.01263,.72498,.89581,2.04651,2.48853,3.90491,4.30768,5.77808,2.57629,2.65283,5.13629,4.85144,8.29651,5.27106,.09412,2.61707,1.33203,5.19897,2.87177,7.87915,1.81244,3.15491,3.716,5.88281,6.59521,7.09991-.33618,1.83258-.30023,3.84973-.15546,5.97186,.25177,3.68939,.78455,7.02167,2.92511,9.38409-1.61945,2.05798-2.34326,4.82831-2.90027,7.86871-.78094,4.2627-1.07196,8.14685,1.45203,11.21997-1.74939,1.04895-3.32593,2.61719-4.90167,4.37128-2.47131,2.75098-4.49054,5.45477-4.69403,8.63617-2.60461,.27203-5.09619,1.6828-7.66541,3.40143-3.50903,2.34729-6.43201,4.7804-6.99341,8.55774-2.63324-1.27728-5.7854-1.1123-9.19049-.64771Z" fill="#6c63ff"/><circle cx="109.84423" cy="99" r="50" fill="#3f3d56"/></g><g><rect x="570.88768" y="466.26258" width="2.00002" height="97.74925" transform="translate(-11.19664 12.70857) rotate(-1.26084)" fill="#3f3d56"/><path d="M570.979,509.65527c-.104-.35449-2.48779-8.7793,2.66504-17.04492l1.69727,1.05859c-4.66504,7.48242-2.46533,15.34668-2.44287,15.4248l-1.91943,.56152Z" fill="#3f3d56"/><path d="M574.40991,493.46765s-1.53527-10.49347,12.60802-13.3734c2.94652-.59998,5.71656-1.01003,8.25578-1.28324,2.99728-.3225,4.16644,3.78047,1.45877,5.1057-3.92132,1.91924-7.61002,4.33735-9.53265,7.2009-5.30258,7.89763-12.78992,2.35003-12.78992,2.35003Z" fill="#6c63ff"/><path d="M573.27392,540l-1.91943-.56152c.02246-.07812,2.22217-7.94141-2.44287-15.42383l1.69727-1.05859c5.15283,8.26562,2.76904,16.68945,2.66504,17.04395Z" fill="#3f3d56"/><path d="M569.84308,523.81278s1.53527-10.49347-12.60802-13.3734c-2.94652-.59998-5.71656-1.01003-8.25578-1.28324-2.99728-.3225-4.16644,3.78047-1.45877,5.1057,3.92132,1.91924,7.61002,4.33735,9.53265,7.2009,5.30258,7.89763,12.78992,2.35003,12.78992,2.35003Z" fill="#6c63ff"/><path d="M589.52798,452.69335c2.84685-.75062,5.50902-2.05854,5.42073-3.35241-.10489-1.53704-4.05727-2.56692-7.46699-2.72364,2.57184-2.01206,4.93491-4.79345,4.21226-6.05137-.66437-1.15647-3.75499-.7085-6.60648,.31005,1.68747-2.41255,2.87385-5.13109,1.97033-6.06143-1.12549-1.1589-5.11997,.84137-7.84603,3.05241,.53068-3.44458,.2624-7.79254-1.28256-8.18592-1.29249-.32909-3.12431,2.20016-4.38022,4.95535-.55507-2.89136-1.67875-5.63639-2.97563-5.63639-1.84747,0-3.34513,5.57016-3.34513,9.19912,0,.20513,.00544,.39823,.0148,.58273-.18543-.21498-.39794-.43956-.64029-.67493-2.60334-2.52825-7.64263-5.3345-8.92974-4.00918-.90351,.93035,.28286,3.64888,1.97033,6.06143-2.85149-1.01855-5.94211-1.46651-6.60648-.31005-.89269,1.55391,2.92311,5.43298,6.02476,7.31414-.18645-.02246-.38234-.04137-.59081-.05559-3.62053-.24703-9.27972,.86797-9.40549,2.71115-.08829,1.29387,2.57388,2.60179,5.42073,3.35241-2.83431,1.06544-5.48236,2.72085-5.24201,4.03274,.2917,1.59221,4.74105,2.14958,8.23944,1.82333-2.61356,2.50757-5.44751,6.99966-4.26482,8.31616,.86669,.96475,3.65967-.03382,6.1815-1.55314-1.21031,2.77554-1.86764,5.82849-.75906,6.57005,1.46503,.98,5.48293-2.43083,7.60133-5.36571-.21585,3.59052,.64327,8.52316,2.34792,8.71783,1.28851,.14715,2.71637-2.45269,3.59591-5.2624,.9352,2.8799,2.46822,5.60065,3.7897,5.42032,1.71836-.23449,2.4675-5.29057,2.14697-8.88367,2.18514,2.81411,5.86264,5.82378,7.24997,4.89575,1.10857-.74156,.45125-3.79451-.75906-6.57005,2.52183,1.51932,5.31481,2.51789,6.1815,1.55314,1.18269-1.31651-1.65126-5.8086-4.26482-8.31616,3.49839,.32625,7.94774-.23112,8.23944-1.82333,.24035-1.31188-2.4077-2.9673-5.24201-4.03274Zm-15.32879,10.15614c-.73178,.09985-1.4009,.24245-1.90975,.60659-.54059-.53665-1.33014-.70009-2.20803-.80033-.98297-.11225-1.87623-.12309-2.55741,.44416-.24925-.69279-.86214-1.18496-1.57608-1.66255-.61388-.41065-1.20922-.74773-1.83156-.81273-.04862-.76016-.53109-1.4062-1.12158-2.06351-.37651-.41912-.7532-.79383-1.1712-1.04446,.60308-.73429,.53354-1.66236,.34694-2.68088-.13309-.72647-.30604-1.3884-.69298-1.88014,.51146-.56449,.63876-1.36068,.69892-2.24222,.06567-.96255,.03838-1.83526-.51721-2.48511,1.4358,.18263,2.1287-.71186,2.77273-1.83293,.3679-.6404,.66369-1.25731,.68617-1.88263,.7551-.10026,1.36678-.62559,1.98235-1.25946,.52586-.54148,.97317-1.07763,1.14118-1.69472,.60255,.50637,1.4247,.58301,2.33172,.58301,.88359,0,1.6866-.0728,2.28458-.54465,.46426,.41951,1.11288,.63711,1.8286,.81935,.68323,.17397,1.32816,.29032,1.91452,.17322,.21404,.48899,.5946,.93303,1.02927,1.3806,.61557,.63386,1.22726,1.15919,1.98235,1.25946,.02249,.62532,.31827,1.24223,.68617,1.88263,.43306,.75383,.88789,1.40563,1.57585,1.69644-.08033,.43787-.07174,.91985-.03714,1.42691,.06016,.88154,.18746,1.67774,.69892,2.24222-.38695,.49173-.55989,1.15367-.69298,1.88014-.1866,1.01852-.25613,1.94659,.34694,2.68088-.418,.25063-.79469,.62535-1.1712,1.04446-.59049,.65731-1.07296,1.30335-1.12158,2.06351-.62234,.065-1.21767,.40209-1.83156,.81273-.83844,.56086-1.53685,1.14222-1.67099,2.04477-.62918-.30519-1.38235-.26577-2.19596-.15476Z" fill="#6c63ff"/><circle cx="572.24597" cy="452.65487" r="11.9469" fill="#3f3d56"/></g><g><path id="uuid-fcc96ddd-8a9b-4008-9e3e-ba4d42e134c9-389" d="M372.9429,560.6837c-5.76763,6.90981-6.87749,15.48672-2.47944,19.15655,4.39805,3.66983,12.6373,1.04277,18.40606-5.87027,2.34226-2.72987,3.99672-5.98097,4.82492-9.48131l24.06795-29.58576-11.72388-9.48778-24.62774,28.82333c-3.29686,1.44132-6.20051,3.65139-8.46786,6.44523Z" fill="#ffb6b6"/><polygon points="478.12744 414.451 486.50417 447.63127 445.50568 513.25891 403.65242 555.32266 390.08694 544.06849 432.29671 491.54901 464.29146 423.87933 478.12744 414.451" fill="#e6e6e6"/></g><path d="M433.99408,359.61557c6.32276-.01514,6.68173,.02699,7.7043,0,7.84218-.20681,9.89286-3.2921,13.86775-3.08172,7.09451,.37553-2.26916,35.94511-6.16344,52.38927-3.81924,16.12741,9.08811,30.5789,10.0156,31.58765,13.10117,14.24835,36.11364,16.85373,40.06238,10.78603,3.19618-4.91121-8.13109-12.37871-5.39301-23.11291,2.67657-10.49307,15.03562-9.3757,18.49033-19.26076,3.61798-10.35219-8.54038-15.57338-16.17904-40.83281-4.3869-14.50661-3.61083-17.20961-7.7043-26.19463-10.94177-24.01645-64.57358-13.7909-58.55271,8.47473,1.16467,4.307-1.93482,9.25899,3.85215,9.24516Z" fill="#2f2e41"/></svg></div>

          <h1 className="text-4xl font-bitter mt-8">Emociones Secundarias</h1>
          <p className="text-lg  text-gray-600">
            Las <span className="font-bold">emociones secundarias</span> son más complejas y a menudo <span className="underline">se
            desarrollan a partir de las emociones primarias</span>. Estas emociones son
            influenciadas por el contexto social, cultural y personal, y pueden
            incluir una mezcla de emociones primarias. Ejemplos de emociones
            secundarias incluyen:
          </p>
          <ul className="text-lg flex flex-col gap-2 text-gray-600">
            <li className="mt-2">
              <span className="font-medium text-black">Vergüenza:</span>
              Sentimiento de malestar por una acción que se percibe como indigna
              o inapropiada.{" "}
            </li>
            <li>
              <span className="font-medium text-black">Culpa:</span> Sentimiento
              de remordimiento por haber hecho algo mal, ya sea real o
              percibido.
            </li>
            <li>
              <span className="font-medium text-black">Orgullo:</span> Sensación
              de satisfacción por los propios logros o los de alguien cercano.
            </li>
            <li>
              {" "}
              <span className="font-medium text-black">Envidia:</span>Deseo por
              lo que otros tienen y uno carece.
            </li>
            <li>
              {" "}
              <span className="font-medium text-black">Gratitud:</span>{" "}
              Apreciación por lo que se ha recibido de otros.
            </li>
            <li>
              {" "}
              <span className="font-medium text-black">Celos:</span> Temor de
              perder algo o alguien valioso a favor de otra persona.
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" key="item3"  className="border-b-4 border-b-[#FFD397]">
        <AccordionTrigger className="text-xl">
          ¿Como identificar las emociones?
        </AccordionTrigger>
        <AccordionContent className="AccordionContent text-start flex  items-start text-base h-full">
          <div className="flex flex-col md:flex-row w-full h-full mb-10 z-10">
            <div className="w-full md:w-4/5 z-10">
              <p className="text-lg text-gray-600">
                Identificar las emociones correctamente es fundamental para la
                inteligencia emocional y puede mejorar significativamente las
                relaciones interpersonales, la toma de decisiones y el bienestar
                personal. Aquí te dejo algunas estrategias que pueden ayudarte a
                identificar tanto tus emociones como las de los demás:
              </p>
              <h2 className="font-bitter  text-[20pt] md:text-[26pt]">
                <span className="font-indie text-4xl me-3 text-[#e06c6c]">
                  1
                </span>{" "}
                Presta Atención a las Señales Corporales
              </h2>
              <p className="w-full text-lg text-gray-600">
                Las emociones a menudo se manifiestan a través de señales
                físicas en el cuerpo. Por ejemplo:
              </p>
              <ul>
                <li>
                  <span className="font-medium text-black">Ira</span>: Puede
                  manifestarse como tensión en los músculos, eindiemente en la
                  mandíbula o los puños cerrados.
                </li>
                <li>
                  <span className="font-medium text-black">Miedo</span>: Puede
                  causar un aumento del ritmo cardíaco, sudoración o una
                  sensación de frío.
                </li>
                <li>
                  <span className="font-medium text-black">Tristeza</span>:
                  Puede sentirse como un peso en el pecho o un vacío estomacal.
                </li>
                <li>
                  <span className="font-medium text-black">Alegría</span>: Puede
                  provocar una sensación de ligereza o una sonrisa espontánea.
                </li>
              </ul>
              Aprender a reconocer estas señales puede darte pistas sobre qué
              emociones estás experimentando.
              <h2 className="font-bitter  mt-8 text-[20pt] md:text-[26pt]">
                <span className="font-indie text-4xl me-3 text-[#95caad]">
                  2
                </span>{" "}
                Reflexiona Sobre tus Pensamientos
              </h2>
              <p className="mb-4  w-full text-lg text-gray-600">
                Las emociones suelen estar vinculadas a pensamientos
                específicos. Pregúntate:<br></br> ¿Qué estaba pensando justo
                antes de sentir esta emoción?<br></br> ¿Hay algún patrón en mis
                pensamientos que pueda indicar por qué me siento de esta manera?
                <br></br> Esta reflexión puede ayudar a identificar la fuente de
                la emoción.
              </p>
              <h2 className="font-bitter mt-8 text-[20pt] md:text-[26pt] leading-8">
                <span className="font-indie text-4xl me-3 text-[#a87ed6]">
                  3
                </span>{" "}
                Observa las Expresiones Faciales y el Lenguaje Corporal
              </h2>
              <p className="mb-4 w-full text-lg text-gray-600">
                Tanto en ti mismo como en los demás, las expresiones faciales y
                el lenguaje corporal pueden ser indicadores claros de emociones.
                La investigación de Ekman sobre las emociones universales
                muestra que ciertas emociones tienen expresiones faciales
                distintas que son reconocibles a través de culturas.
              </p>
              <h2 className="font-bitter  mt-8 text-[22pt] md:text-[26pt]">
                <span className="font-indie text-4xl me-3">4</span> Escucha el
                Tono de Voz
              </h2>
              <p className="mt-2 w-full text-lg text-gray-600">
                El tono de voz, tanto el propio como el de los demás, puede
                revelar emociones ocultas detrás de las palabras. Por ejemplo,
                un tono de voz agudo puede indicar tensión o ira, mientras que
                un tono suave puede sugerir tristeza o cariño.
              </p>
              <h2 className="font-bitter  mt-8 text-[22pt] md:text-[26pt]">
                <span className="font-indie text-4xl me-3 text-[#e2e272]">
                  5
                </span>{" "}
                Identifica las Reacciones Automáticas
              </h2>
              <p className="mb-4 w-full text-lg text-gray-600">
                A veces, las emociones provocan reacciones automáticas, como
                llorar durante la tristeza o reír durante la alegría. Notar
                estas reacciones puede ayudar a identificar la emoción
                subyacente.
              </p>
              <h2 className="font-bitter  mt-8 text-[20pt] md:text-[26pt] w-full">
                <span className="font-indie text-4xl me-3 text-[#95caad]">
                  6
                </span>{" "}
                Lleva un Diario de Emociones
              </h2>
              <p className="mb-4  w-full text-lg text-gray-600">
                Registrar tus emociones diariamente puede ayudarte a identificar
                patrones y desencadenantes emocionales. Describe situaciones
                específicas, cómo te sentiste y cómo reaccionaste.
              </p>
              <h2 className="font-bitter  mt-8 text-[20pt] md:text-[26pt]">
                <span className="font-indie text-4xl me-3 text-[#FFD397]">
                  7
                </span>{" "}
                Consulta con un Profesional
              </h2>
              <p className="mb-4  w-full text-lg text-gray-600">
                Si encuentras difícil manejar o identificar tus emociones,
                consultar a un psicólogo o terapeuta puede proporcionar
                estrategias personalizadas y apoyo.
              </p>
            </div>
            <div className="flex flex-col justify-between z-0">
              <img className="w-96 mt-2 md:mt-60" src={ilustration}></img>
              <img className="w-96 hidden md:block" src={ilustration2}></img>
            </div>{" "}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
export default Acordeon;
