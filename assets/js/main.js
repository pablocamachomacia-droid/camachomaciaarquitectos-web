(function(){var img=document.getElementById("estudio-parallax-img");if(!img)return;window.addEventListener("scroll",function(){var rect=img.parentElement.getBoundingClientRect();var center=rect.top+rect.height/2;var vCenter=window.innerHeight/2;var offset=(center-vCenter)*0.12;img.style.transform="scale(1.15) translateY("+offset+"px)";});})();

const PHOTOS={"0":"/assets/img/proyectos/0/img1.jpg","1":"/assets/img/proyectos/1/img4.jpg","2":"/assets/img/proyectos/2/img4.jpg","3":"/assets/img/proyectos/3/img1.jpg","4":"/assets/img/proyectos/4/img1.jpg","5":"/assets/img/proyectos/5/img1.jpg","6":"/assets/img/proyectos/6/img1.jpg","7":"/assets/img/proyectos/7/img2.jpg","8":"/assets/img/proyectos/8/hero.jpg","9":"/assets/img/proyectos/9/img1.jpg","10":"/assets/img/proyectos/10/img3.jpg","11":"/assets/img/proyectos/11/hero.jpg","12":"/assets/img/proyectos/12/img2.jpg","13":"/assets/img/proyectos/13/img1.jpg","14":"/assets/img/proyectos/14/img1.jpg","15":"/assets/img/proyectos/15/img4.jpg","16":"/assets/img/proyectos/16/img4.jpg","17":"/assets/img/proyectos/17/img1.jpg","18":"/assets/img/proyectos/18/img6.jpg","19":"/assets/img/proyectos/19/img3.jpg","20":"/assets/img/proyectos/20/img2.jpg","21":"/assets/img/proyectos/21/img3.jpg","22":"/assets/img/proyectos/22/img1.jpg","23":"/assets/img/proyectos/23/img1.jpg","24":"/assets/img/proyectos/24/img2.jpg"};

const HOVERS={"0":"/assets/img/proyectos/0/img14.jpg","1":"/assets/img/proyectos/1/img1.jpg","2":"/assets/img/proyectos/2/img10.jpg","3":"/assets/img/proyectos/3/img2.jpg","4":"/assets/img/proyectos/4/img2.jpg","5":"/assets/img/proyectos/5/img3.jpg","6":"/assets/img/proyectos/6/img2.jpg","7":"/assets/img/proyectos/7/img4.jpg","8":"/assets/img/proyectos/8/img10.jpg","9":"/assets/img/proyectos/9/img3.jpg","10":"/assets/img/proyectos/10/img5.jpg","11":"/assets/img/proyectos/11/img5.jpg","12":"/assets/img/proyectos/12/img6.jpg","13":"/assets/img/proyectos/13/img7.jpg","14":"/assets/img/proyectos/14/img3.jpg","15":"/assets/img/proyectos/15/img7.jpg","16":"/assets/img/proyectos/16/img13.jpg","17":"/assets/img/proyectos/17/img2.jpg","18":"/assets/img/proyectos/18/img5.jpg","19":"/assets/img/proyectos/19/hero.jpg","20":"/assets/img/proyectos/20/img4.jpg","21":"/assets/img/proyectos/21/img7.jpg","22":"/assets/img/proyectos/22/img7.jpg","23":"/assets/img/proyectos/23/img3.jpg","24":"/assets/img/proyectos/24/img3.jpg"};

const PROJ_GALLERY={"0":["/assets/img/proyectos/0/img1.jpg","/assets/img/proyectos/0/img2.jpg","/assets/img/proyectos/0/img3.jpg","/assets/img/proyectos/0/img4.jpg","/assets/img/proyectos/0/img5.jpg","/assets/img/proyectos/0/img6.jpg","/assets/img/proyectos/0/img7.jpg","/assets/img/proyectos/0/img8.jpg","/assets/img/proyectos/0/img9.jpg","/assets/img/proyectos/0/img10.jpg","/assets/img/proyectos/0/img11.jpg","/assets/img/proyectos/0/img12.jpg","/assets/img/proyectos/0/img13.jpg","/assets/img/proyectos/0/img14.jpg"],"1":["/assets/img/proyectos/1/img1.jpg","/assets/img/proyectos/1/img2.jpg","/assets/img/proyectos/1/img3.jpg","/assets/img/proyectos/1/img4.jpg","/assets/img/proyectos/1/img5.jpg","/assets/img/proyectos/1/img6.jpg","/assets/img/proyectos/1/img7.jpg","/assets/img/proyectos/1/img8.jpg","/assets/img/proyectos/1/img9.jpg"],"2":["/assets/img/proyectos/2/img1.jpg","/assets/img/proyectos/2/img2.jpg","/assets/img/proyectos/2/img3.jpg","/assets/img/proyectos/2/img4.jpg","/assets/img/proyectos/2/img5.jpg","/assets/img/proyectos/2/img6.jpg","/assets/img/proyectos/2/img7.jpg","/assets/img/proyectos/2/img8.jpg","/assets/img/proyectos/2/img9.jpg","/assets/img/proyectos/2/img10.jpg","/assets/img/proyectos/2/img11.jpg","/assets/img/proyectos/2/img12.jpg","/assets/img/proyectos/2/img13.jpg","/assets/img/proyectos/2/img14.jpg","/assets/img/proyectos/2/img15.jpg","/assets/img/proyectos/2/img16.jpg"],"3":["/assets/img/proyectos/3/img1.jpg","/assets/img/proyectos/3/img2.jpg","/assets/img/proyectos/3/img3.jpg","/assets/img/proyectos/3/img4.jpg","/assets/img/proyectos/3/img5.jpg","/assets/img/proyectos/3/img6.jpg","/assets/img/proyectos/3/img7.jpg","/assets/img/proyectos/3/img8.jpg","/assets/img/proyectos/3/img9.jpg","/assets/img/proyectos/3/img10.jpg","/assets/img/proyectos/3/img11.jpg"],"4":["/assets/img/proyectos/4/img1.jpg","/assets/img/proyectos/4/img2.jpg","/assets/img/proyectos/4/img3.jpg","/assets/img/proyectos/4/img4.jpg","/assets/img/proyectos/4/img5.jpg","/assets/img/proyectos/4/img6.jpg","/assets/img/proyectos/4/img7.jpg"],"5":["/assets/img/proyectos/5/img1.jpg","/assets/img/proyectos/5/img2.jpg","/assets/img/proyectos/5/img3.jpg","/assets/img/proyectos/5/img4.jpg","/assets/img/proyectos/5/img5.jpg","/assets/img/proyectos/5/img6.jpg","/assets/img/proyectos/5/img7.jpg","/assets/img/proyectos/5/img8.jpg","/assets/img/proyectos/5/img9.jpg"],"6":["/assets/img/proyectos/6/img1.jpg","/assets/img/proyectos/6/img2.jpg","/assets/img/proyectos/6/img3.jpg","/assets/img/proyectos/6/img4.jpg","/assets/img/proyectos/6/img5.jpg","/assets/img/proyectos/6/img6.jpg","/assets/img/proyectos/6/img7.jpg","/assets/img/proyectos/6/img8.jpg"],"7":["/assets/img/proyectos/7/img1.jpg","/assets/img/proyectos/7/img2.jpg","/assets/img/proyectos/7/img3.jpg","/assets/img/proyectos/7/img4.jpg","/assets/img/proyectos/7/img5.jpg","/assets/img/proyectos/7/img6.jpg","/assets/img/proyectos/7/img7.jpg","/assets/img/proyectos/7/img8.jpg"],"8":["/assets/img/proyectos/8/img1.jpg","/assets/img/proyectos/8/img2.jpg","/assets/img/proyectos/8/img3.jpg","/assets/img/proyectos/8/img4.jpg","/assets/img/proyectos/8/img5.jpg","/assets/img/proyectos/8/img6.jpg","/assets/img/proyectos/8/img7.jpg","/assets/img/proyectos/8/img8.jpg","/assets/img/proyectos/8/img9.jpg","/assets/img/proyectos/8/img10.jpg","/assets/img/proyectos/8/img11.jpg","/assets/img/proyectos/8/img12.jpg","/assets/img/proyectos/8/img13.jpg","/assets/img/proyectos/8/img14.jpg","/assets/img/proyectos/8/img15.jpg"],"9":["/assets/img/proyectos/9/img1.jpg","/assets/img/proyectos/9/img2.jpg","/assets/img/proyectos/9/img3.jpg","/assets/img/proyectos/9/img4.jpg","/assets/img/proyectos/9/img5.jpg","/assets/img/proyectos/9/img6.jpg","/assets/img/proyectos/9/img7.jpg","/assets/img/proyectos/9/img8.jpg","/assets/img/proyectos/9/img9.jpg"],"10":["/assets/img/proyectos/10/img1.jpg","/assets/img/proyectos/10/img2.jpg","/assets/img/proyectos/10/img3.jpg","/assets/img/proyectos/10/img4.jpg","/assets/img/proyectos/10/img5.jpg","/assets/img/proyectos/10/img6.jpg","/assets/img/proyectos/10/img7.jpg","/assets/img/proyectos/10/img8.jpg","/assets/img/proyectos/10/img9.jpg"],"11":["/assets/img/proyectos/11/img1.jpg","/assets/img/proyectos/11/img2.jpg","/assets/img/proyectos/11/img3.jpg","/assets/img/proyectos/11/img4.jpg","/assets/img/proyectos/11/img5.jpg","/assets/img/proyectos/11/img6.jpg","/assets/img/proyectos/11/img7.jpg"],"12":["/assets/img/proyectos/12/img1.jpg","/assets/img/proyectos/12/img2.jpg","/assets/img/proyectos/12/img3.jpg","/assets/img/proyectos/12/img4.jpg","/assets/img/proyectos/12/img5.jpg","/assets/img/proyectos/12/img6.jpg","/assets/img/proyectos/12/img7.jpg","/assets/img/proyectos/12/img8.jpg","/assets/img/proyectos/12/img9.jpg"],"13":["/assets/img/proyectos/13/img1.jpg","/assets/img/proyectos/13/img2.jpg","/assets/img/proyectos/13/img3.jpg","/assets/img/proyectos/13/img4.jpg","/assets/img/proyectos/13/img5.jpg","/assets/img/proyectos/13/img6.jpg","/assets/img/proyectos/13/img7.jpg","/assets/img/proyectos/13/img8.jpg","/assets/img/proyectos/13/img9.jpg","/assets/img/proyectos/13/img10.jpg","/assets/img/proyectos/13/img11.jpg","/assets/img/proyectos/13/img12.jpg","/assets/img/proyectos/13/img13.jpg","/assets/img/proyectos/13/img14.jpg","/assets/img/proyectos/13/img15.jpg","/assets/img/proyectos/13/img16.jpg","/assets/img/proyectos/13/img17.jpg","/assets/img/proyectos/13/img18.jpg","/assets/img/proyectos/13/img19.jpg","/assets/img/proyectos/13/img20.jpg"],"14":["/assets/img/proyectos/14/img1.jpg","/assets/img/proyectos/14/img2.jpg","/assets/img/proyectos/14/img3.jpg","/assets/img/proyectos/14/img4.jpg","/assets/img/proyectos/14/img5.jpg"],"15":["/assets/img/proyectos/15/img1.jpg","/assets/img/proyectos/15/img2.jpg","/assets/img/proyectos/15/img3.jpg","/assets/img/proyectos/15/img4.jpg","/assets/img/proyectos/15/img5.jpg","/assets/img/proyectos/15/img6.jpg","/assets/img/proyectos/15/img7.jpg","/assets/img/proyectos/15/img8.jpg","/assets/img/proyectos/15/img9.jpg","/assets/img/proyectos/15/img10.jpg"],"16":["/assets/img/proyectos/16/img1.jpg","/assets/img/proyectos/16/img2.jpg","/assets/img/proyectos/16/img3.jpg","/assets/img/proyectos/16/img4.jpg","/assets/img/proyectos/16/img5.jpg","/assets/img/proyectos/16/img6.jpg","/assets/img/proyectos/16/img7.jpg","/assets/img/proyectos/16/img8.jpg","/assets/img/proyectos/16/img9.jpg","/assets/img/proyectos/16/img10.jpg","/assets/img/proyectos/16/img11.jpg","/assets/img/proyectos/16/img12.jpg","/assets/img/proyectos/16/img13.jpg"],"17":["/assets/img/proyectos/17/img1.jpg","/assets/img/proyectos/17/img2.jpg","/assets/img/proyectos/17/img3.jpg","/assets/img/proyectos/17/img4.jpg","/assets/img/proyectos/17/img5.jpg","/assets/img/proyectos/17/img6.jpg"],"18":["/assets/img/proyectos/18/img1.jpg","/assets/img/proyectos/18/img2.jpg","/assets/img/proyectos/18/img3.jpg","/assets/img/proyectos/18/img4.jpg","/assets/img/proyectos/18/img5.jpg","/assets/img/proyectos/18/img6.jpg","/assets/img/proyectos/18/img7.jpg","/assets/img/proyectos/18/img8.jpg"],"19":["/assets/img/proyectos/19/img1.jpg","/assets/img/proyectos/19/img2.jpg","/assets/img/proyectos/19/img3.jpg","/assets/img/proyectos/19/img4.jpg"],"20":["/assets/img/proyectos/20/img1.jpg","/assets/img/proyectos/20/img2.jpg","/assets/img/proyectos/20/img3.jpg","/assets/img/proyectos/20/img4.jpg","/assets/img/proyectos/20/img5.jpg","/assets/img/proyectos/20/img6.jpg","/assets/img/proyectos/20/img7.jpg","/assets/img/proyectos/20/img8.jpg","/assets/img/proyectos/20/img9.jpg","/assets/img/proyectos/20/img10.jpg","/assets/img/proyectos/20/img11.jpg","/assets/img/proyectos/20/img12.jpg","/assets/img/proyectos/20/img13.jpg","/assets/img/proyectos/20/img14.jpg","/assets/img/proyectos/20/img15.jpg","/assets/img/proyectos/20/img16.jpg"],"21":["/assets/img/proyectos/21/img1.jpg","/assets/img/proyectos/21/img2.jpg","/assets/img/proyectos/21/img3.jpg","/assets/img/proyectos/21/img4.jpg","/assets/img/proyectos/21/img5.jpg","/assets/img/proyectos/21/img6.jpg","/assets/img/proyectos/21/img7.jpg","/assets/img/proyectos/21/img8.jpg","/assets/img/proyectos/21/img9.jpg","/assets/img/proyectos/21/img10.jpg"],"22":["/assets/img/proyectos/22/img1.jpg","/assets/img/proyectos/22/img2.jpg","/assets/img/proyectos/22/img3.jpg","/assets/img/proyectos/22/img4.jpg","/assets/img/proyectos/22/img5.jpg","/assets/img/proyectos/22/img6.jpg","/assets/img/proyectos/22/img7.jpg","/assets/img/proyectos/22/img8.jpg","/assets/img/proyectos/22/img9.jpg","/assets/img/proyectos/22/img10.jpg"],"23":["/assets/img/proyectos/23/img1.jpg","/assets/img/proyectos/23/img2.jpg","/assets/img/proyectos/23/img3.jpg","/assets/img/proyectos/23/img4.jpg","/assets/img/proyectos/23/img5.jpg","/assets/img/proyectos/23/img6.jpg","/assets/img/proyectos/23/img7.jpg"],"24":["/assets/img/proyectos/24/img1.jpg","/assets/img/proyectos/24/img2.jpg","/assets/img/proyectos/24/img3.jpg","/assets/img/proyectos/24/img4.jpg","/assets/img/proyectos/24/img5.jpg","/assets/img/proyectos/24/img6.jpg","/assets/img/proyectos/24/img7.jpg"]};

const HERO_SLIDES = [
  {
    "photo": "/assets/img/proyectos/13/hero.jpg",
    "num": "01",
    "name": "Centro de Creación de las Artes"
  },
  {
    "photo": "/assets/img/proyectos/2/hero.jpg",
    "num": "02",
    "name": "Teatro-Auditorio de Campo de Criptana"
  },
  {
    "photo": "/assets/img/proyectos/4/hero.jpg",
    "num": "03",
    "name": "101 Viviendas VPP"
  },
  {
    "photo": "/assets/img/proyectos/24/hero.jpg",
    "num": "04",
    "name": "Vivienda en Vitoria-Gasteiz"
  },
  {
    "photo": "/assets/img/proyectos/8/hero.jpg",
    "num": "05",
    "name": "Vivienda Unifamiliar en Montepríncipe"
  }
];

const PROJS = [
  {id:0, name:"Pabellón de España — Expo Milán 2015", cat:"pabellón exposiciones", year:"2014", loc:"Milán, Italia",
    desc:"UN LUGAR DE REUNIÓN Y DESCANSO\nSe propone una arquitectura acogedora, con vocación de convertirse en el gran lugar de descanso y disfrute de la expo de Milán.\nFrente a grandes arquitecturas intensas y abigarradas, ofrecemos un gran espacio público exterior de descanso, una PLAZA, como mejor representación de la cultura y el modo de vida  al aire libre  en España.\nVivimos LA CALLE, disfutamos de nuestro ocio en la calle, incluso comemos en la calle... sea pues éste, el modelo espacial que nos represente.\nRESPUESTA AL LUGAR\nLa parcela presenta una forma de L con acceso desde el lado corto, generando una larga crugia estrecha, con una dilatación final rectangular.\nResulta determinante la existencia de una plaza de uso compartido con el pabellón adyacente, destinada a usos de actividades al aire libre, de libre disposición.\nPlanteamos una propuesta que genera un suelo creciente desde el acceso, totalmente accesible al visitante, que genera de forma natural una gran terraza de total accesibilidad, además de  dos elementos de graderío hacia la plaza exterior de eventos.\nEsta cualidad de Arquitectura totalmente permeable, genera la cualidad de acogimiento y descanso pretendido, contribuyendo de este modo al éxito del futuro Pabellón.\nSe disponen exteriormente de elementos de bancos y merenderos, protegidos por elementos ligeros y replegables de textil para sombreamiento, así como un sistema de enfriamiento evaporativo, que generen un mejorado confort térmico para los meses de verano.\nEsto unido a la cualidad natural del los graderios como eventual elemento de asiento,  conforman este gran espacio público de descanso.\nLA CALLE EXPOSITIVA\nLa exposición principal también hereda la tipología de Calle Exterior en su formalización.\nUna Calle semiexterior , que recorra nuestra cultura, gastronomía, ocio y paisaje, envuelta en una piel seductora y sorprendente .\nNo es una exposición cerrada más, es una experiencia expositiva de gran intensidad y atractivo.",
    data:{Año:"2014",Tipología:"Pabellón internacional",Estado:"Construido",Ubicación:"Milán, Italia",Cliente:"Ministerio de Cultura- Gobierno de España",Arquitectos:"Javier Camacho,Mª Eugenia Maciá,Pablo Delgado,Alejandro Postigo,Aurora Herrera"}},
  {id:1, name:"Guggenheim Helsinki Museum", cat:"museo", year:"2014", loc:"Helsinki, Finlandia",
    desc:"La construcción del Guggenheim en Helsinki supone la oportunidad de erigir un edificio «que refleje el espíritu de toda una civilización».\nUn edificio que sirva de hito para representar al ciudadano nórdico, su historia y sus costumbres, su personalidad e identidad. Un edificio que sitúe, proyecte y amplifique su cultura al resto del mundo, funcionando al mismo tiempo como lugar de encuentro y de acogida de otras culturas del mundo.\nUn edificio urbano donde se invita a los ciudadanos a descansar, reflexionar, disfrutar, entretenerse, relacionarse, aprender, formarse, trabajar...\nPara ello, no hay mejor lugar que el elegido, que cuenta con todos los componentes que requiere el edificio para dar una respuesta culta y consciente al contexto en el que se encuentra.\nLa idea del proyecto es sintetizar el aspecto industrial del antiguo puerto en el exterior y dotarlo de una habitabilidad cálida y acogedora en el interior. Los aspectos opuestos se compensan y definen la esencia, el espíritu, la experiencia y la vida nórdicos.\nURBANO\nSe propone una arquitectura acogedora con el objetivo de convertirse en el gran lugar para descansar y disfrutar del puerto de Helsinki.\nFrente a intensas y variopintas arquitecturas, ofrece un gran espacio al aire libre para el descanso, una nueva plaza para la ciudad.\nSe crea un nuevo hito urbano que aprovecha el potencial del nuevo museo, pero con una gran vocación urbana.\nAdemás, el edificio se convierte en una infraestructura de comunicaciones que conecta el parque\n\nESTRUCTURA\nLa estructura está formada por tableros de madera laminada de estilo finlandés. La solidez de esta estructura se percibe tanto desde el exterior como desde el interior. El objetivo suele ser crear espacios amplios, diáfanos y aireados, separados por robustas estructuras de madera.\n\nMATERIAL\nLos materiales del exterior son de metal o piedra, teniendo en cuenta el frío invierno de Helsinki y su desgaste natural debido a las condiciones climáticas.\nLa calle cuenta con madera tratada para exteriores, donde los ciudadanos pueden descansar sobre un material más cálido para evitar el enfriamiento debido a la absorción de calor.\n\nEn el interior, todas las paredes y techos son de madera, lo que aporta la calidez que requiere un lugar como Helsinki, mostrando respeto por la cultura y las tradiciones nórdicas de la madera.",
    data:{Año:"2014",Tipología:"Museo",Estado:"Concurso internacional",Ubicación:"Helsinki, Finlandia",Cliente:"STATE OF FINLAND",Arquitectos:"Javier Camacho,Mª Eugenia Maciá, Alejandro Postigo, Pablo Delgado"}},
  {id:2, name:"Teatro-Auditorio de Campo de Criptana", cat:"auditorio", year:"2008", loc:"Campo de Criptana, CLM",
    desc:"La propuesta trata de dar respuesta a la dificultad de plantear una arquitectura integradora de las cualidades espaciales de Campo de Criptana a la vez que asume la condición singular y de gran escala del programa previsto. Se trabaja en dos líneas de adecuación, una de acciones de regulación de la escala y otra del empleo de tipologías reconocibles del entorno.\nSe busca una adecuación del gran volumen del auditorio (caja de escenario), acordándola con la escala ajustada del resto de edificaciones del entorno. Se decide semienterrar la planta baja y principal y de un modo más radical en la caja escénica. A partir de la cota superior de caja de escena se disgregan distintos niveles decrecientes de planos de fachada, hasta que los planos inferiores se acuerdan con la escala del resto del entorno.\nEn la búsqueda de adecuación en el uso de tipologías reconocibles del lugar, encontramos en la tipología singular de los molinos de Campo de Criptana las leyes de generación formal deseadas, a través de superficies cilíndricas con distintas interacciones.",
    data:{Año:"2008",Tipología:"Teatro y auditorio",Estado:"1er Premio · Concurso",Ubicación:"Campo de Criptana, CLM"}},
  {id:3, name:"Centro ATENPRO — Ministerio de Igualdad", cat:"terciario", year:"2025", loc:"Alcorcón, Madrid",
    desc:"El proyecto desarrolla la adecuación de un edificio dotacional en Alcorcón para albergar la sede del Servicio Telefónico de Atención y Protección para Víctimas de Violencia de Género (ATENPRO). Este servicio cumple una función social esencial: ofrecer atención inmediata, protección y acompañamiento a mujeres víctimas de violencia machista, contribuyendo a la seguridad y bienestar de las personas más vulnerables. La creación de esta sede refuerza el compromiso del ministerio de igualdad con la protección de los derechos fundamentales de los ciudadanos.\nATENPRO no es solo un recurso tecnológico, sino un pilar en la lucha contra la violencia de género. El desarrollo de esta edificación permitirá una atención más cercana, rápida y eficaz, generando confianza en las usuarias y fortaleciendo la red de apoyo institucional. Además, la sede se concibe como un espacio abierto a la ciudadanía, fomentando la sensibilización y la participación comunitaria.\nLos espacios de atención se vertebran desde un espacio servidor lineal donde la escalera central organiza funcional y espacialmente todo el edificio. Esta escalera se conforma como un artefacto liviano y luminoso, potenciado por una iluminación cenital natural y lineal , que conecta diagonalmente con todos los espacios en tres niveles. Se generan unos paramentos de alistonados de madera, organizados en estratos de diferentes despieces que logran humanizar el espacio central, generando una deseable percepción más domestica del edificio final.",
    data:{Año:"2025",Tipología:"Edificio dotacional",Estado:"1er Premio · Construido",Ubicación:"Alcorcón, Madrid",Cliente:"GOBIERNO DE ESPAÑA - MINISTERIO DE IGUALDAD",Arquitectos:"CAMACHO MACIA ARQUITECTOS"}},
  {id:4, name:"101 Viviendas VPP — NSA1 Madrid", cat:"vivienda social", year:"2020", loc:"Madrid",
    desc:"Con el fin de optimizar las orientaciones y las visuales posibles de la parcela que da frente a la estrecha Calle Puerto de la Bonaigua, el nuevo frente construido opta por generar una fachada quebrada en sus frentes longitudinales.  \nEsta disposición esquinada de las fachadas y sus huecos genera dos posibles orientaciones a las viviendas, aumentando las posibilidades de soleamiento y vistas de cada vivienda.\n\nProponemos la agrupación residencial en un bloque lineal, que disponga todas las viviendas en una crujía doble, con una galería de accesos ventilada, vinculadas a conexiones verticales y zonas comunes. Al generar esta galería ventilada, dotamos a todas las viviendas de ventilación cruzada.\nLa disposición de la vivienda se organiza en torno a un gran espacio de usos de estar y dormitorios ocupando el contorno exterior de la edificación, flanqueado por una banda inmueble de servicios al interior.\n\nSe producen unos espacios generosos para las zonas comunes vinculados a la gran escalera central, totalmente abierta a la fachada posterior y en continuidad con el soportal abierto.",
    data:{Año:"2020",Tipología:"Vivienda social",Viviendas:"101 uds.",Estado:"1er Premio · Construido",Ubicación:"Madrid",Cliente:"EMVS - AYUNTAMIENTO DE MADRID",Arquitectos:"Javier Camacho, Mª Eugenia Maciá"}},
  {id:5, name:"77 Viviendas Lagos Park — Ikasa", cat:"vivienda colectiva", year:"2019", loc:"Las Rozas, Madrid",
    desc:"Situado en un entorno inigualable a orillas del embalse sobre el rio Guadarrama, Lagos Park es el Complejo Residencial Patrimonial de referencia de iKasa, está formado por 77 apartamentos de 1, 2, 3 y 4 dormitorios, todos ellos con amplias terrazas, con cocinas totalmente equipadas (mobiliario opcional) y distribuidos en una amplia variedad de tipologías, desde bajos con jardín a dúplex.\nLo que confiere un valor añadido ha sido el empleo de los sistemas constructivos de fachada ventilada y SATE. Además, se ha dotado a cada apartamento de un sistema de climatización a través de bomba de calor centralizada con recuperadores de calor individuales. Cuentan con carpintería de aluminio con rotura de puente térmico y doble cristal de baja emisibilidad.\nEl complejo cuenta además con 109 plazas de aparcamiento, con dotación de la infraestructura técnica para la recarga de vehículos eléctricos en las plazas señalizadas al efecto y con la previsión de preinstalación para aumentar los puntos de recarga en el futuro si fuera necesario. Además, sabemos que es importante el almacenaje por lo que en este nuevo ciclo del edificio hemos incorporado 34 trasteros.\nLagos Park es, sin duda, el lugar ideal para vivir con animales de compañía por su carácter de \"pet friendly\". Los más de 18.000 m2 de zonas comunes ajardinadas, la pista de running perimetral y sus servicios adicionales, entre los que se incluyen buzones inteligentes de la mano de Citibox, hacen de Lagos Park un complejo residencial de referencia en la zona. Se encuentra en la urbanización de Molino de la Hoz, rodeado de tranquilidad y naturaleza, a escasos minutos de colegios, centros de salud, centro urbano de Las Rozas y a 20 minutos de Madrid (Moncloa).",
    data:{Año:"2019",Tipología:"Vivienda colectiva",Viviendas:"77 uds.",Estado:"Construido",Ubicación:"Las Rozas, Madrid",Cliente:"Ikasa",Arquitectos:"Javier Camacho, DHOCE Arquitectos,"}},
  {id:6, name:"74 Viviendas Lagos Park — Ikasa", cat:"vivienda colectiva", year:"2018", loc:"Las Rozas, Madrid",
    desc:"Situado en un entorno inigualable a orillas del embalse sobre el rio Guadarrama, Lagos Park es el Complejo Residencial Patrimonial de referencia de iKasa, está formado por 151 apartamentos de 1, 2, 3 y 4 dormitorios, todos ellos con amplias terrazas, con cocinas totalmente equipadas (mobiliario opcional) y distribuidos en una amplia variedad de tipologías, desde bajos con jardín a dúplex.\nLo que confiere un valor añadido ha sido el empleo de los sistemas constructivos de fachada ventilada y SATE. Además, se ha dotado a cada apartamento de un sistema de climatización a través de bomba de calor centralizada con recuperadores de calor individuales. Cuentan con carpintería de aluminio con rotura de puente térmico y doble cristal de baja emisibilidad.\nEl complejo cuenta además con 109 plazas de aparcamiento, con dotación de la infraestructura técnica para la recarga de vehículos eléctricos en las plazas señalizadas al efecto y con la previsión de preinstalación para aumentar los puntos de recarga en el futuro si fuera necesario. Además, sabemos que es importante el almacenaje por lo que en este nuevo ciclo del edificio hemos incorporado 34 trasteros.\nLagos Park es, sin duda, el lugar ideal para vivir con animales de compañía por su carácter de \"pet friendly\". Los más de 18.000 m2 de zonas comunes ajardinadas, la pista de running perimetral y sus servicios adicionales, entre los que se incluyen buzones inteligentes de la mano de Citibox, hacen de Lagos Park un complejo residencial de referencia en la zona. Se encuentra en la urbanización de Molino de la Hoz, rodeado de tranquilidad y naturaleza, a escasos minutos de colegios, centros de salud, centro urbano de Las Rozas y a 20 minutos de Madrid (Moncloa).",
    data:{Año:"2018",Tipología:"Vivienda colectiva",Viviendas:"74 uds.",Estado:"Construido",Ubicación:"Las Rozas, Madrid",Cliente:"Ikasa",Arquitectos:"Javier Camacho, Q Arquitectos,"}},
  {id:7, name:"Remodelación de la Plaza de España", cat:"infraestructura", year:"2016", loc:"Madrid",
    desc:"MEMORIA\nLa Plaza de España constituye uno de los espacios urbanos vertebradores del centro consolidado de Madrid.\nSe pretende la subsanación de las condiciones que han propiciado el actual proceso de degradación de este fundamental espacio urbano de la ciudad:\nDesconexión topográfica.\nDesconexión peatonal.\nContaminación acústica.\nContaminación ambiental.\nEspacios en desuso.\nFalta de criterios de sostenibilidad.\nEstado deficiente de los pavimentos, mobiliario urbano, flora…\nCreemos que no es necesaria una desfiguración excesiva del espacio actual de la Plaza. \nAdemás la condición de Mantener la ubicación de los grupos monumentales y la totalidad del arbolado, tampoco lo propician.\n\nCreemos que es mejor un replanteamiento más somero de los usos, parterres, mobiliario y acabados existentes.\n\nEl bosque\nPotenciamos el carácter de gran espacio arbolado  (con una deseable sombra en verano) del borde oeste de la plaza, manteniendo la totalidad del arbolado, y desdibujando los parterres inferiores, con soluciones de bandas de ajardinamientos de plantas de sombra de bajo porte que se van fundiendo con las pavimentaciones previstas.\nEl claro\nProponemos eliminar el estanque frente al monumento de Cervantes y convertirlo en un gran espacio de césped, a modo de claro dentro del bosque, que propicie en necesario uso de descanso buscado por vecinos y turistas. \nLas rondas\nLas dos rondas del borde oeste, flanqueadas por Plátanos de gran porte, las reconvertimos en espacio de juegos de niños de diversas edades, con juegos y pavimentaciones adaptadas.\nLos paseos\nSe mantienen los dos paseos perimetrales al norte y al sur como lugar de paseo y descanso (especialmente utilizado por los vecinos de avanzada edad).\nEl Foro de actividades\nMantenemos la ubicación de la explanada pavimentada enfrentada al Monumento a Cervantes como lugar de actividades y eventos de la plaza.\nFomentamos su utilización a tal efecto, atendiendo a su situación estratégica, dotándola de un pavimento adecuado y canalizaciones de electricidad y datos, que posibiliten su uso.\nSe propone un espacio polifuncional que acoja ferias, exposiciones, conciertos… sin alterar los otros uso del parque.\nLa escalera, graderío\nEnfrentado a este foro de actividades, y salvando el desnivel con la acera en continuación a Gran Via, se dispone de un espacio alargado de escaleras y graderío.\nSe potencia el actual uso de elemento de descanso, especialmente grato en los atardecederes invernales de Madrid, a la vez que cumple su función de comunicación.\nSe formaliza este elemento con tabicas acristaladas que dotan de iluminación natural a los espacios culturales enterrados previstos.\nDurante la noche, las vidrios rasgados de iluminación se convierten en líneas de luz que iluminan dramáticamente el borde este de la Plaza.\nSe mantiene el grupo monumental de la fuente, encontrando un atractivo marco en el gradería que la enfrenta.",
    data:{Año:"2016",Tipología:"Espacio público",Superficie:"30.000 m²",Estado:"Concurso",Ubicación:"Madrid",Cliente:"Ayuntamiento de Madrid",Arquitectos:"Javier Camacho, Mª Eugenia Maciá, Alejandro Postigo, Pablo Delgado, Q Arquitectos,"}},
  {id:8, name:"Vivienda Unifamiliar en Montepríncipe", cat:"casa", year:"2012", loc:"Boadilla del Monte, Madrid",
    desc:"La propuesta intenta adecuar la implantación de la edificación con la topografía acusada de la parcela, aprovechando la solución aterrazada para la creación de distintos espacios semiexteriores que intensifican los valores espaciales de la vegetación existente (pinos-encinas) en relación con el nuevo objeto construido.\nLa vivienda se disgrega en dos unidades independientes, creando un ámbito de vivienda y otro de estudio profesional.\nFormalmente se manifiestan en varios volúmenes abocinados abiertos a las encinas centenarias exteriores existentes.\nEstas unidades se materializan con el diálogo básico de dos materiales: Granito amarello en los paramentos expuestos y fachadas ventiladas de madera de Kumaru en los paramentos resguardados, generando el contraste de solidez constructiva y calidez  del habitar deseado.",
    data:{Año:"2012",Tipología:"Vivienda unifamiliar",Estado:"Construido",Ubicación:"Boadilla del Monte, Madrid",Cliente:"Javier Camacho;Mª Eugenia Maciá",Arquitectos:"Javier Camacho,Mª Eugenia Maciá"}},
  {id:9, name:"Rehabilitación de la Antigua Fábrica CLESA", cat:"terciario", year:"2016", loc:"Madrid",
    desc:"La Fábrica de Clesa se concibió como un eficaz CONTINENTE a la FUNCIÓN industrial por desempeñar. En el tiempo la función desaparece y el CONTINENTE queda. Volvamos a dotar de contenido los valiosos espacios preefinidos en el pasado, sin alterar su vocación FABRIL. \nLUGAR, NECESIDADES ACTUALES\nLa Fábrica de Clesa se sitúa en un enclave estratégico, tanto por la cercanía del Hospital Ramón y Cajal, y la estación de tren de cercanías, como por su posición física como charnela entre el tejido residencial del Poblado dirigido de Fuencarral, con el área industrial / terciario existente. En un futuro cercano el contexto se verá afectado por la cercanía del desarrollo de la operación Castellana Norte,  además de la implantación de una nueva parada de metro junto a la estación existente y la continuación de la Avenida de  Herrera Oria hasta las tablas, dotando de mayor relevancia la potencialidad de su emplazamiento.\nLas necesidades actuales del tejido residencial del entorno demandan espacios de comercio, aparcamiento, dotaciones culturales y vecinales... así como un espacio de plaza que condense la difusa actividad urbana existente. \nEl área industrial / terciario adyacente demanda aparcamiento y espacios de hostelería para los trabajadores (restaurantes y comercio).\nEl Hospital demanda aparcamiento, espacios de hostelería, espacios comerciales (de apoyo al personal y la población flotante entorno a los pacientes), así como la conveniencia de implantación de un Hotel. Las relaciones actuales del Hospital con la universidad y la investigación demandan espacios educativos y de congresos.\nESPACIOS EXTERIORES Y SOSTENIBILIDAD\nUNA NUEVA PLAZA. La realidad actual del contexto físico de la parcela y su entorno presenta una ausencia generalizada de espacios urbanos de calidad, por lo que se entiende como elemento fundamental de atención en el proyecto la conformación de una nueva plaza pavimentada entre el hotel y la fábrica.\nPara garantizar la intensidad de uso del nuevo espacio urbano ubicamos en él los accesos principales de la nueva actuación. Además se disponen de locales comerciales flanqueando los límites este/oeste de la plaza, bajo el hotel, aprovechando el desnivel existente, y solapados a la nave inferior de CLESA.\nSe atiende a las necesidades de descanso y sombra en verano por la disposición de elementos de mobiliario urbano tipo  banco/jardinera. Estos elementos de mobiliario exterior disponen de pérgolas extensibles entre bancos para soporte de enredaderas de hoja caduca (tipo parra virgen), evidenciando  las variaciones estivales  de hoja (sol/ sombra) en invierno/verano así como la tornación rojiza de sus hojas en otoño.  Estos elementos además se pueden trasladar para conformar un espacio de plaza diáfana que permita acoger eventos culturales o musicales (conciertos), que fomenten la vocación de espacio urbano activo deseado.\nUN NUEVO JARDÍN. En la parcela restante, hacia el oeste, se plantea un gran jardín con arbolado. Se varía intencionadamente su topografía por acopio de tierras resultantes de la excavación de los sótanos, generando un entorno más protegido de los efectos de focos de ruido existentes (tráfico-ambulancias y tren). Se plantea un arbolado de hoja perenne y gran densidad, como elemento natural de colchón acústico. Todas las plantaciones requieren bajas necesidades hídricas, satisfechas en gran medida por aljibes de recogida de pluviales dispuestos en sótano.\nEl nuevo edificio de hotel se plantea desde una sensibilidad medioambiental alta, mediante planteamientos de sostenibilidad pasiva (orientaciones, ventilaciones, parasoles…) así como en el empleo de materiales y tecnologías sostenibles. Se opta por soluciones constructivas de huecos y cerramientos que aseguren una calificación energética A.\nREHABILITACIÓN DE LA FABRICA\nSe atiende a todos los requerimientos de protección de la nave principal y espacios con protección auxiliar.\nSe acomete estrictamente la recuperación original de los elementos de de restauración obligatoria:\n- Fachada principal , así como la fachada oeste y las fachadas recayentes al muelle de carga y descarga situado al oeste del\nedificio.\n- Las dos naves centrales, incluidas las cubiertas de las mismas.\nSe acomete estrictamente la recuperación original  para las Áreas de protección auxiliar:\n- La zona situada al noroeste del edificio destinada a accesos y vestuarios.\nSe eliminan los elementos de Edificación no protegida y de Impacto negativo:\n- La nave lateral adosada al este de los cuerpos centrales, así como a nave trasversal situada al sur del edificio principal y el volumen de edificación ubicados al sur oeste .\n-Volúmenes añadidos en el cuerpo de acceso y vestuarios situado al noroeste de la edificación.\n- Cuerpos añadidos al sureste de la edificación principal\n-Cuerpo de estructura metálica situado sobre la nave central a cota +4.33.\n- Cerramientos entre pilares en planta baja de la fachada oeste.\n- Eliminación de paneles separadores entre las naves centrales.",
    data:{Año:"2016",Tipología:"Rehabilitación industrial",Superficie:"8.500 m²",Estado:"Finalista · Concurso",Ubicación:"Madrid",Cliente:"METROVACESA",Arquitectos:"Javier Camacho, Mª Eugenia Maciá, Alejandro Postigo"}},
  {id:10, name:"Centro Integral de Transporte — Metro Madrid", cat:"infraestructura", year:"2016", loc:"Madrid",
    desc:"Espacio urbano\nSe atiende preferentemente a la oportunidad de reconfiguración del espacio urbano del entorno de Plaza de Castilla. Además de afrontar las necesidades programáticas demandadas con una arquitectura que ofrezca espacios de calidad, entendemos fundamental la ocasión de intervención en este espacio urbano consolidado de Madrid.\n\nEn la búsqueda de una identidad espacial que dote a la nueva plaza  de significación para  intensificar la actividad urbana del entorno, recurrimos a consolidar la personalidad industrial/ferroviaria del lugar a través de la revalorización de las preexistencias históricas del lugar, coexistiendo con un nuevo entendimiento  del espacio urbano futuro.\n\nEn particular se atiende con especial sensibilidad a la necesidad de conexión entre las distintas cotas del perímetro de la parcela con la actual explanada. En este sentido disponemos dos rampas, con pendientes del 6% que comunican de modo fluido las dos esquinas colindantes con la Avenida de Asturias, y dos escaleras/escalinatas en las esquinas opuestas.\nSe genera un acceso rodado y peatonal a la plataforma existente (+723.6) desde la Calle de S. Aquilino.\n\nReciclaje \nCerchas de las naves existentes\nLas naves existentes del antiguo depósito están generadas por la repetición de 80 cerchas iguales de  21 metros de luz, con perfilería de acero en buen estado, cubriendo una superficie de cubiertas ligeras de 9800m2. Proponemos la recuperación, rehabilitación y reutilización de dichas cerchas como elementos conformadores de la nueva nave del \"espacio metro\", y de soporte de los elementos de sombra en la terraza superior del CTO.\nRecreamos la tipología de nave del nuevo \"espacio metro\", con un nuevo entendimiento geométrico, generado por una agregación en acordeón de las cerchas recuperadas, y como soporte de nuevas cubiertas y envolventes de policarbonato celular.\n\nInfraestructuras ferroviarias\nEntendemos como valiosos los restos existentes de un pasado  de fuerte identidad industrial/ferroviaria, que pueden convivir con la nueva realidad urbana deseable.\nEs así que recuperamos los restos de elementos fabriles y de infraestructura ferroviaria, revalorizándolos  como actores de una escenografía adaptada al nuevo espacio urbano propuesto. \nRecuperamos las torres y tendidos de catenarias como elementos soporte a una vegetación de trepadoras de elementos de sombra.\nMantenemos las vías, niveladas con nuevas pavimentaciones, como rastro de un pasado presente.\n\nSostenibilidad\nSe plantean estrategias de proyecto, soluciones técnicas y materiales con vocación de cumplimiento de la directiva 2012/31/ue sobre edificios de energia casi nula.\nSe dispone un cerramiento interior con capacidad de aporte de inercia térmica y una envolvente exterior ventilada de lamas de vidrio de distinta translucided/opacidad en función de las orientaciones.\nSe disponen superficies fotocataliticas integradas en las envolventes del edificio.\nLas cubiertas accesibles emplean soluciones de cubierta ajardinada con plantaciones de bajas necesidades hídricas, con reutilización de aguas pluviales en aljibes de recogida.\nSe plantean espacios diáfanos con soluciones estructurales de grandes luces que permiten una gran flexibilidad de uso, favorecida por el empleo de particiones ligeras y reconfigurables.",
    data:{Año:"2016",Tipología:"Infraestructura de transporte",Cliente:"Metro de Madrid",Estado:"Proyecto",Ubicación:"Madrid",Arquitectos:"Javier Camacho, Mª Eugenia Maciá, Alejandro Postigo"}},
  {id:11, name:"Liget Budapest — Hungarian House of Music", cat:"museo", year:"2014", loc:"Budapest, Hungría",
    desc:"Idea\nThe idea of the Project is to reinterpretate the shape of a seashell as an instrument shape that also generates a acoustic augmentation of the music played on the top trough the park, like a wind instrument does. There are also references to the inner ear and its geometry.the shape is a sweep by an espiral curve with different sections that defines a continuous ribbon from the park to the top.\nThe enviroment\nThe enviroment of the building in the park with the big size trees that immerse the building into the forestal landscape, the big window on the top of the building watches the landscape over the trees giving the espectator  that incledible view . The lake behind the building is a recreational zone in winter , with the ice track , and the building  gives the posibility of seating outside to watch the people skating.\nGeometry\nThe full building is a geometrical effort of fusion of shapes.The geometry of the building startes with an espiral curve that generates an sloped and continuous plane for the full exibition path, and also a path straugth to the top of the building into the viewpoint on top. The section of the building increases from the down part to the top giving to the exibition path a continuous changing space, ending on the events hall with a big viewpoint inside.\nThe roof\nThe roof of the building is a continuous ribbon path that en don the viewpoint and generates  stands for music events on top. It is also a continuity with the park so the people can walk though the building just for fun or relax. It is a public space open to the park very usefull for a relaxing time or a small event.\n\nThe exibition\nThe exibition Works as a continuous plane that folds over itself to get  the full square metres of the program in a simple plane. The path is going upguards into the elevator to the top of the building in order to walk through the exibition downwards. The path finishes in the last floor where the temporary exibition in shown.",
    data:{Año:"2014",Tipología:"Museo de la música",Superficie:"9.500 m²",Estado:"Concurso internacional",Ubicación:"Budapest, Hungría",Cliente:"HUNGARIAN GOVERNMENT",Arquitectos:"Javier Camacho,Mª Eugenia Maciá, Pablo Delgado, Alejandro Postigo"}},
  {id:12, name:"Symphonic Concert Hall — Varsovia", cat:"auditorio", year:"2010", loc:"Varsovia, Polonia",
    desc:"1.1 URBAN FORMALIZATION\nA new covered square\n The emplacement is located in an urban consolidated area, with generous free and wooded spaces.\n The project tries to be sensitive to the current court between existing buildings. The proyect tries to minimize the constructed impact of the important demanded program.\nA great covered court is created, as foyer of the principal uses and as a flexible space that could be opened for the city.\n\nWe aboid the habitual image of the new concert halls as opaque and closed buildings. We bet firmly for a building opened for the city and for his inhabitants. A place that generates urban life both in the moments of representations and in the rest of the time, across the possibilities of the new covered square and of the existence of Restaurants and shops linked to the world of the art and of the music.\nIn addition the great covered square, a desirable continuity generates with the exterior street, which makes his use possible as urban covered space, place of foyer before the entry of the spectacles, enclosed space of programming exhibition and congresses.\n\n1.2 FORMALIZATION OF THE BUILDING\nThree solid  and one skin\nThe building tries across his expressive qualities to generate the necessary representation demanded.\n This way the building is conceived as three big sculptural volumes shaped as big stones beached in an environment allegedly neutral wrapped by a delicate skin of glass.\nThe solution of glass skin, between the metallic structure generates a spectacular translucency in the night, insinuating the interior volumes between the life of the night spectacles. \n\nThe final form of the building arises from the internal logic of the wrapped volumes, bending to the programmatical needs of the interior uses.\nThe solution of court stands out perimetral, in the meeting of the skin with the paved square, generating a few conditions of major habitability to the numerous uses of the basement, they providing with lighting and natural ventilation simultaneously that turning out to be an interesting formal levity of the constructed perimeter.",
    data:{Año:"2010",Tipología:"Sala de conciertos",Superficie:"18.000 m²",Estado:"Concurso internacional",Ubicación:"Varsovia, Polonia",Cliente:"GOVERNMENT INSTITUTION OF CULTURE OF THE CAPITAL CITY OF WARSAW",Arquitectos:"Javier Camacho,Mª Eugenia Maciá"}},
  {id:13, name:"Centro de Creación de las Artes — Alcorcón", cat:"auditorio", year:"2005", loc:"Alcorcón, Madrid",
    desc:"El solar de Los Castillos destaca en su entorno residencial por ser un gran espacio abierto y verde de uso público con una escala desmesurada para los cuatro edificios aislados que contiene.\nEn este contexto se propone modificar el nivel del suelo existente, intensificando su carácter de espacio verde público y ocupar el espacio que queda bajo el mismo, revalorizando Los Castillos y su marco urbano, y englobando la biblioteca existente en nuestra propuesta.\nSobre este paisaje de colinas de distintos materiales - piedra madera, tierra, vegetación…-  se alza el auditorio como una piedra preciosa y enigmática, variable a lo largo del día y las estaciones, diferente desde cada ángulo de visión, dejando entrever su actividad interior como si de un organismo vivo se tratase, un objeto pregnante y seductor que se identifique con la cultura y las artes en el sur de Madrid.\nLos diferentes edificios que integran el conjunto se sitúan en serie para poder funcionar de forma independiente o simultánea y compartir servicios y personal. A un lado, un auditorio de 1500 butacas, una sala configurable de 300 butacas, áreas de congresos y exposiciones y el conservatorio de música y danza. Al otro lado, la escuela y sala de circo estable de 500 butacas, talleres de producción artística y salas de exposiciones. Completan el conjunto tiendas, cafeterías y un restaurante, con posibilidad de acceso y uso independientes del resto y generando actividad urbana en el frente de la Avenida de la Libertad.\nLas cubiertas del nuevo Centro de Producción de las Artes serán un parque público que pueda acoger actividades culturales tradicionales en Alcorcón como el carnaval, el festival internacional de teatro de calle, bailes de disfraces y máscaras, desfiles de charangas, entierro de la sardina, belenes populares, certámenes de chirigotas y murgas, ferias de artesanía…",
    data:{Año:"2005",Tipología:"Centro cultural",Superficie:"60.000 m²",Estado:"1er Premio · Concurso",Ubicación:"Alcorcón, Madrid",Cliente:"AYUNTAMIENTO DE ALCORCÓN",Arquitectos:"Javier Camacho,P. Bustamante"}},
  {id:14, name:"Villa Olímpica — Dossier Candidatura Madrid 2016", cat:"infraestructura", year:"2009", loc:"Madrid",
    desc:"La Villa Olímpica y Paralímpica están en una ubicación ideal para acoger los Juegos, al este de Madrid, a tan sólo 10 km del aeropuerto, lo que proporcionará a los atletas y oficiales un entorno cómodo, accesible y seguro.\nLa Villa, que formará parte del Parque Olímpico, gozará de excelentes conexiones de transporte a través de autovía, líneas de autobuses y metro y estará a sólo diez minutos en coche del centro de la ciudad. En Madrid, todos los atletas y oficiales podrán desplazarse desde la Villa a sus sedes en un tiempo máximo de 20 minutos.\nEl diseño de la Villa se basa en el sentir mediterráneo, con amplios espacios abiertos y edificios residenciales intercalados con zonas verdes y agua, fomentando la interacción social y promoviendo el sentimiento de comunidad. Desde el principio se han tenido en cuenta los más altos estándares de diseño técnico y medioambiental y se asegurará un proyecto totalmente sostenible y accesible para los Juegos Olímpicos y Paralímpicos, con una transición fácil de uno a otro. Los planes de la Villa están listos, contándose con los permisos y la propiedad del terreno. La Villa representará el mejor ejemplo de la visión de Madrid 2016 sobre un nuevo modelo de coexistencia urbana sostenible.\nLa Villa, como parte del desarrollo urbanístico planificado en la Zona Núcleo con posterioridad a los Juegos, proporcionará un área residencial de viviendas de alquiler, de las que un 15% serán destinadas a los atletas, un parque empresarial y otras instalaciones comunitarias locales, incluyendo instalaciones deportivas y de ocio para los ciudadanos de Madrid.",
    data:{Año:"2009",Tipología:"Master plan olímpico",Estado:"1er Premio · Candidatura",Ubicación:"Madrid",Cliente:"AYUNTAMIENTO DE MADRID",Arquitectos:"Javier Camacho"}},
  {id:15, name:"1690 Viviendas — Villa Olímpica Madrid 2016", cat:"vivienda colectiva", year:"2008", loc:"Madrid",
    desc:"Frente  a tipologías excesivamente compactas y ante la necesidad de desarrollar un número muy elevado de viviendas planteamos una tipología hibrida entre torre y bloque abierto. Pretendemos una creciente disolución de los elementos construidos y una máxima permeabilidad entre los espacios libres comunes.\nAsí la edificación se fragmenta en cuatro manzanas con tres unidades bloque-torre cada una, esponjados sistemáticamente por importantes oquedades abiertas y vinculadas a conexiones verticales y zonas comunes, favoreciendo definitivamente a la generación de espacios libres comunes de calidad.\nLa solución en torre permite concentrar gran cantidad de viviendas, permitiendo que los bloques disminuyan su altura, minimizando el impacto global de la edificación resultante en la villa.\nLa distribución de bloque y torres responde a criterios de maximo soleamiento y ventilación. La ubicación de las torres protege de los perjuicios del viento dominante, y no genera sombras sobre el resto de viviendas.\nSe prevén dos tipologías de viviendas, de un dormitorio dispuestas en las torre y de dos dormitorios  vinculadas a los bloques lineales.\nEn ambos casos disponemos las viviendas en una única crujía de 15 m posibilitando la ventilación cruzada de las mismas.\nSe atiende a la muy determinante orientación del solar, disponiendo gran parte de los los espacios habitables en orientaciones fundamentalmente sur, y los accesos, aseos y cocinas a norte.\nLa disposición de la  vivienda se organiza en torno a un gran espacio de usos de estar/cocina y dormitorios y ocupando el contorno exterior de la edificación,  flanqueado por una banda inmueble de servicios al interior.\nPor la reducida dimensión de las viviendas de 1 dormitorio, proponemos soluciones en doble altura, que desahoguen el espacio resultante sin aumentar la edificabilidad global.",
    data:{Año:"2008",Tipología:"Vivienda colectiva",Viviendas:"1.690 uds.",Estado:"1er Premio · Concurso",Ubicación:"Madrid",Cliente:"AYUNTAMIENTO DE MADRID",Arquitectos:"Javier Camacho,Mª Eugenia Maciá"}},
  {id:16, name:"Viviendas VPP en Ensanche de Vallecas 16", cat:"vivienda social", year:"07", loc:"Madrid",
    desc:"La propuesta se ubica en una zona de nueva creación peri urbana, donde el marco espacial de la ciudad histórica es inexistente, y donde la arquitectura no debe eludir su capacidad de crear \"lugar\". Por ello el edificio se muestra formalmente rotundo, intentando crear, a través de sus cualidades expresivas, entornos definidos y reconocibles que tejan la nueva ciudad.\nFrente  a la tipología de manzana cerrada, sugerida por la normativa existente, se pretende una creciente disolución del bloque y una máxima permeabilidad entre los espacios libres comunes y el espacio de la ciudad. Así la edificación se fragmenta en unidades independientes, separadas por capilares abiertos y  elevadas sobre plantas bajas porticadas.\nEl bloque se coloniza con viviendas cruzadas, en una crujía fundamental de 15 metros , a partir de la cual vuelan los espacios de estar sobre las zonas comunes interiores, participando intencionadamente de éstas. La fachada exterior, de orientación oeste, se muestra sensiblemente opaca hacia la ciudad inexistente, mientras que la fachada interior, de orientación este, se abre decididamente hacia un cuidado espacio natural interior.\nLa disposición de la  vivienda se organiza en dos grandes espacios de usos día-noche, separados entre bandas inmuebles de servicios. El espacio de día (salón-comedor) se vincula a la banda de cocina-tendedero y el espacio de noche (dormitorios) se vincula a la banda de usos de aseo. La disposición pretende ser flexible mediante el agrupamiento de usos no móviles (baños-cocinas...), y liberando los espacios día-noche hacia futuras variaciones en su distribución.\nEntre las bandas de servicios se dispone un patio interior, que a su vez ilumina y despeja el espacio porticado inferior\nSe propone un nuevo entendimiento de los espacios libres comunes, no como un espacio residual ajardinado entre las edificaciones, sino como un espacio fundamental del proyecto. Se intenta que la edificación participe de este nuevo espacio de alto valor natural, disgregando los núcleos de comunicación vertical del bloque y ubicándolos entre la trama natural, creando un intenso bosque artificial entre árboles de gran porte y las cajas semiconstruidas de comunicaciones\nSe resuelve la fachada con cerramientos ligeros transventilados a base de paneles de madera de alta densidad baquelizados, que junto a la formalización de los diversos pliegues de la fachada, y la orientación oeste, genere un atractivo juego de matices dorados en los atardeceres de Madrid.",
    data:{Año:"2004-07",Tipología:"Vivienda social",Cliente:"EMVS · Ayuntamiento de Madrid",Estado:"1er Premio · Construido",Ubicación:"Madrid",Arquitectos:"Javier Camacho, Mª Eugenia Maciá"}},
  {id:17, name:"Sede Olímpica para el Velódromo — Madrid 2016", cat:"infraestructura", year:"2008", loc:"Madrid",
    desc:"Basa su propuesta formal en un intento de vibración espacial, manipulando un mismo radio de elipse desplegado para crear sensación de movimiento y levedad. Generado por la misma ley estructural que un \"farolillo chino\" se da \"un aire\" especial de elemento iluminado que aportará calidad paisajística al conjunto de edificios cercanos a la famosa \"peineta\". De lejos su aspecto blanco traslúcido se perderá con las nubes del cielo en \"un aire\" de borrosidad inusual.\nComo si de un farolillo de feria se tratara se proyecta una cubierta de estructura ligera, con acero y membranas de plástico blanco traslúcido. Este tipo de cerramiento que cubre toda la sede proporciona la ventaja del ahorro energético así como su \"fácil montaje y desmontaje\". Se basará en una estructura tensada, cuyas característica es que mantienen su integridad a partir de un sistema de estructuras y cables tensionados, permitiendo una gran variedad formal.\nDe las características de las membranas textiles se destaca:\n-su alto valor de resistencia a la tracción y al desgarro.\n-estabilidad dimensional.\n-resistencia a la degradación uv, a la abrasión y a la llama, y a la decoración .\n-alta adhesión de la capa de recubrimiento al soporte.",
    data:{Año:"2008",Tipología:"Instalación deportiva",Estado:"Accésit · Concurso",Ubicación:"Madrid",Cliente:"AYUNTAMIENTO DE MADRID",Arquitectos:"Javier Camacho, Mª Eugenia Maciá"}},
  {id:18, name:"Nuevo Mercado Barceló y Plaza de Santa Bárbara", cat:"terciario", year:"2007", loc:"Madrid",
    desc:"La solución urbana - una gran plaza (de abastos)\nLa decisión planteada de demoler el actual mercado de Barceló, implica la oportunidad de encontrar un nuevo espacio libre para la ciudad, actuación muy conveniente para el colmatado casco histórico de Madrid.\nLa intención primera de nuestra propuesta es la de edificar todo el programa objeto del concurso, sin perder la potencialidad de este gran espacio verde para madrid, por lo que entendemos el nuevo mercado, no como una enorme edificación que merma y ensombrece el espacio público, sino que al contrario se subordina e intensifica la vida de la gran plaza.  Así  la nueva edificación  se formaliza como un elemento de mobiliario urbano más, un artefacto de cubiertas y parasoles en disolución con los espacios arbolados, a través de cerramientos livianos y transparentes.  \nPretendemos difuminar los límites del edificio construido, confiando todo el protagonismo a la expresividad de las cubiertas, mostrandose , no como el edificio cerrado y autista a la ciudad que hoy tenemos , sino como una continuación natural  del parque y las calles adyacentes, donde se funden el ocio del paseo, la contemplación y la compra.\nLa potencia y expresividad pretendida en este nuevo espacio se nutre del resto de actuaciones de remodelación y peatonalización de la plaza de santa bárbara y su entorno, convirtiendose así en el nuevo foco de atracción de los paseos peatonales propuestos.\nTambién se observa la necesidad de cerrar la manzana amputada del colegio píblico isabel la católica. Proponemos cerrar dicha manzana con la edificación residencial , dotacional deportiva y el espacio destinado a servicios públicos del ayuntamiento.\nFormalizamos la conclusión de la manzana con una arquitectura contenida y respetuosa con su entorno en la adopción de materiales y geometrías, generando un nuevo fondo neutro al vibrante parque propuesto.",
    data:{Año:"2007",Tipología:"Mercado y espacio público",Superficie:"12.000 m²",Estado:"Concurso",Ubicación:"Madrid",Cliente:"AYUNTAMIENTO DE MADRID",Arquitectos:"Javier Camacho,Mª Eugenia Maciá"}},
  {id:19, name:"Viviendas VPO — Ministerio de la Vivienda, Mieres", cat:"vivienda social", year:"2006", loc:"Mieres, Asturias",
    desc:"La propuesta se ubica en el casco urbano de Mieres, en un área históricamente degradada, de escaso valor ambiental y arquitectónico.\nSe pretende construir un nuevo marco espacial rotundo, y en donde la arquitectura no debe eludir su capacidad de crear \"lugar\". \nAsí el edificio se muestra formalmente rotundo, intentando crear, a través de sus cualidades expresivas, entornos definidos y reconocibles que tejan la nueva ciudad.\nLa propuesta se muestra sensible a la necesidad de crear un nuevo borde de los espacios urbanos, especialmente en la formalización del gran parque central.\nSe busca una resolución homogénea de las manzanas, acentuando el carácter expresivo de los frentes construidos del parque.\nAsí las edificaciones se muestran como grandes bloques de piedra tallada, en dialogo con las imponentes montañas que flanquean la ciudad.\n\nEl bloque se coloniza con viviendas de dos, tres y cuatro dormitorios dispuestas en una crujía, manteniendo el área edificable del solar. (la crujía de 12m y las dimensiones de las viviendas posibilitan soluciones de vivienda cruzada). \nLa disposición de la  vivienda se organiza disponiendo los usos de estar y dormitorios en el contorno exterior de la edificación,  flanqueado por una banda inmueble de servicios al interior.\nLa disposición pretende ser flexible mediante el agrupamiento de usos no móviles (baños-cocinas...), y liberando los espacios día-noche hacia futuras variaciones en la distribución.",
    data:{Año:"2006",Tipología:"Vivienda social",Cliente:"SEPES · Ministerio de Vivienda",Estado:"1er Premio · Concurso",Ubicación:"Mieres, Asturias",Arquitectos:"Javier Camacho,Mª Eugenia Maciá"}},
  {id:20, name:"Viviendas VPP — Ensanche de Vallecas 36", cat:"vivienda social", year:"2005", loc:"Madrid",
    desc:"La propuesta se ubica en el ensanche 36 de la villa de Vallecas, en una zona de nueva creación urbana, donde el marco espacial de la ciudad histórica es inexistente, y donde la arquitectura no debe eludir su capacidad de crear \"lugar\". Así el edificio se muestra formalmente rotundo, intentando crear, a través de sus cualidades expresivas, entornos definidos y reconocibles que tejan la nueva ciudad.\nFrente  a la tipología de manzana cerrada, sugerida por la normativa existente, se pretende una creciente disolución del bloque construido y una máxima permeabilidad entre los espacios libres comunes y el espacio de la ciudad. Así la edificación se fragmenta en grandes bloques, esponjados en sus encuentros por importantes oquedades abiertas y vinculadas a conexiones verticales y zonas comunes.\nEl bloque se coloniza con viviendas de uno y dos dormitorios dispuestas en doble crujía, manteniendo el área edificable del solar. (la crujía de 15m y las dimensiones mínimas de las viviendas impide soluciones de vivienda cruzada). La disposición de la  vivienda se organiza entorno a un gran espacio de usos de estar y dormitorios ocupando el contorno exterior de la edificación,  flanqueado por una banda inmueble de servicios al interior.\nLa disposición pretende ser flexible mediante el agrupamiento de usos no móviles (baños-cocinas...), y liberando los espacios día-noche hacia futuras variaciones en la distribución.\nSe entiende como determinante de la propuesta la resolución de la esquina, no asumiendo la solución achaflanada indicada por la alineación existente, y proponiendo una rotura decidida de la edificación en dicha esquina, abriendo e iluminando las zonas comunes interiores.\nSe vincula a dicha rotura la ubicación del núcleo de comunicación vertical principal, así como el acceso peatonal a la edificación.",
    data:{Año:"2005",Tipología:"Vivienda social",Cliente:"EMVS · Ayuntamiento de Madrid",Estado:"1er Premio · Concurso",Ubicación:"Madrid",Arquitectos:"Javier Camacho"}},
  {id:21, name:"324 Viviendas VPP — Leganés", cat:"vivienda social", year:"2025", loc:"Leganés, Madrid",
    desc:"El proyecto desarrolla una promoción residencial para 324 viviendas, en tres fases de 108 viviendas, 108 trasteros y 162 aparcamientos, formada cada fase por un único volumen edificatorio cuya altura varía escalonadamente.\nSe trata de una promoción de Emsule (Ayuntamiento de Leganés)  para viviendas sociales en régimen de alquiler asequible, ubicada en Leganés, Madrid. El objetivo principal del diseño ha sido ofrecer soluciones habitacionales dignas, sostenibles y adaptadas a las necesidades contemporáneas, integrando criterios de eficiencia energética, confort doméstico y cohesión social.\nEste proyecto responde a la creciente demanda de vivienda accesible en entornos urbanos, apostando por una arquitectura que no solo resuelva la funcionalidad, sino que también fomente la interacción vecinal y la calidad de vida. La propuesta se articula mediante volúmenes escalonados, zonas ajardinadas y materiales de alta inercia térmica, garantizando sostenibilidad y eficiencia.\nEl diseño parte de la premisa de crear espacio doméstico que se perciba cercano, humano y adaptable, evitando la rigidez de los bloques masivos. Para ello, se ha optado por una composición volumétrica escalonada, que genera diferentes alturas y retranqueos, aportando dinamismo y evitando la monotonía visual.\nEste escalonamiento no es solo estético, sino que fomenta prestaciones sostenibles: permitiendo que cada vivienda disponga de orientaciones óptimas para iluminación natural, vistas despejadas y privacidad. Además, la fragmentación volumétrica contribuye a la integración del conjunto en el tejido urbano, reduciendo el impacto visual y creando transiciones suaves hacia el espacio público.\nLa disposición escalonada responde a la necesidad de humanizar la escala del edificio. En lugar de grandes bloques homogéneos, se generan subvolúmenes que se perciben como unidades más pequeñas, evocando la sensación de barrio. Esta estrategia favorece la identificación del usuario con su vivienda y refuerza el sentido de pertenencia.\nSe generan espacios intermedios de relación como soportales, jardines, patios y zonas comunes que actúan como amortiguadores entre lo privado y lo colectivo. Estos espacios fomentan la interacción social y permiten usos flexibles, adaptándose a diferentes dinámicas familiares.",
    data:{Año:"2025",Tipología:"Vivienda social",Viviendas:"324 uds.",Cliente:"EMSULE · Ayuntamiento de Leganés",Estado:"1er Premio · Obra",Ubicación:"Leganés, Madrid",Arquitectos:"Camacho Maciá Arquitectos . Sumar Arquitectos /Rafael Suarez)"}},
  {id:22, name:"Palacio de Congresos y Auditorio de Vitoria-Gasteiz", cat:"auditorio", year:"2009", loc:"Vitoria-Gasteiz",
    desc:"La particular formalización del edificio también tiene una vocación de edificio urbano amable, que a través de su ausencia de aristas y el vibrante movimiento de sus bandas, nos invita a recorrerlo.\nSe huye premeditadamente de la habitual  imagen de los nuevos auditorios como edificios opacos y cerrados, como tesoros presos en hermosas urnas…. Y apostamos decididamente por un edificio abierto a la ciudad y a sus habitantes. Un lugar que genere vida urbana tanto en los momentos de representaciones como en el resto del tiempo, a través de las posibilidades de la nueva plaza cubierta y de la existencia de cafeterías y tiendas vinculadas al mundo del arte y de la música. Así el edificio se formaliza con un perímetro sinuoso, con distintos entrantes que invitan a acceder y recorrer el edificio, a modo de una gran mano abierta a la ciudad, acogiendo a los ciudadanos y visitantes de las distintas actividades programadas.\nAdemás se propone la posibilidad de abrir el gran espacio entre los usos principales, a modo de gran plaza cubierta, generando una deseable continuidad con la nueva plaza exterior, a la vez que posibilita su uso como espacio urbano cubierto, lugar de vestíbulo previo a la entrada de los espectáculos, incluso espacio de programación de exposiciones y congresos. Atendiendo a la climatología propia de Vitoria-Gasteiz parece interesante esta posibilidad de generar un espacio urbano cubierto previo a los accesos y a las inevitables colas previas a las funciones.\nEsta opción es posible por la redefinición de la independencia de accesos de los usos principales, generando además la necesaria capacidad de eventos simultáneos en las distintas salas.\nEl edificio intenta a través de sus cualidades expresivas generar la necesaria representatividad del uso que nos ocupa. Es así que se busca un controlado impacto espacial que genere las cualidades urbanas deseables del nuevo entorno urbano, pero siempre con una vocación de edificio amable a su entorno residencial, de acuerdo con las excepcionales cualidades ambientales de la ciudad de Vitoria-Gasteiz.\nAsí el edificio se concibe como cuatro grandes volúmenes escultóricos, conformados como masas metálicas facetadas (pretendiendo un lenguaje cercano la magnífica escultura vasca), varadas en un entorno pretendidamente neutro y abstracto, y envueltas por una delicada piel de vidrio y celosías metálicas.\nLa piel primera se desgaja en vibrantes bandas de acuerdo a los distintos volúmenes a envolver, con una ausencia total de aristas, generando  bandas continuas y sinuosas, que invitan a recorrer el edificio y muestra su cara más amable al entorno urbano y residencial preexistente.\nEl envoltorio se formaliza como una doble piel: una interior de vidrio serigrafiado como envolvente térmica y estanca y una exterior de celosía metálica con grado variable de calado ajustado a las distintas necesidades de orientación.\nLa parte metálica envuelve únicamente el perímetro exterior, y se desfasa de la interior vítrea que continua al interior generando la separación física y no visual de las distintas salas.\nLa solución de piel construida en virio y celosías metálicas genera una imagen de cierta masividad durante el día, y una espectacular translucidez por la noche, insinuando los volúmenes interiores entre la vida de los espectáculos nocturnos. \nEl edificio se enciende como un enorme farolillo en la noche, y muestra el espectáculo del público asistente a modo de reclamo al resto de la ciudad. \nLa forma final del edificio surge de la lógica interna de los volúmenes envueltos, plegándose a las necesidades programáticas de los usos interiores, abandonando una actitud de formalizaciones a priori que menoscabe la funcionalidad de los usos fundamentales.\nLas bandas se repliegan en altura generando unos interesantes espacios sobre la cubierta a modo de patio sirviente del área de congresos, (descanso, cocktails, actos congresuales al aire libre…)\nDestaca la solución de patio perimetral, en el encuentro de la piel con la plaza pavimentada, generando unas condiciones de mayor habitabilidad a los numerosos usos del sótano, dotándoles de iluminación y ventilación natural a la vez que resultando una interesante levedad formal del perímetro construido.",
    data:{Año:"2009",Tipología:"Auditorio y congresos",Superficie:"22.000 m²",Estado:"Accésit · Concurso",Ubicación:"Vitoria-Gasteiz",Cliente:"AYUNTAMIENTO DE VITORIA-GASTEIZ",Arquitectos:"Javier Camacho,Mª Eugenia Maciá"}},
  {id:23, name:"116 Viviendas y Club Social — Santa Clara, Marbella", cat:"vivienda colectiva", year:"2016", loc:"Marbella, Málaga",
    desc:"MEMORIA\nAportamos una reflexión sobre el reto planteado de reformular las tipologías de viviendas de alta calidad en el marco privilegiado  de la urbanización Santa Clara de Marbella.\nLos conceptos principales sobre los que fundamentamos nuestra propuesta son:\nEl lugar:\nAtendemos a las excepcionales cualidades naturales del lugar donde nos ubicamos, pretendiendo trasladar la experiencia espacial del de dicho entorno a los espacios fundamentales que vertebran las viviendas desarrolladas. Éstos son los espacios  semi cubiertos de porches y terrazas de grandes dimensiones, abiertos decididamente a las excepcionales vistas,  en torno a los cuales se formalizan el resto de espacios vivideros.\nEl hogar:\nEntendemos la necesidad de replantear los modelos existentes de villas y apartamentos en nuevos espacios que exploren las capacidades lúdicas y perceptivas del habitar. La casa ya no solo es un cobijo dotado de confort térmico, es además el espacio propiciador de experiencias deseables de tranquilidad, refugio, disfrute y contemplación. Así disponemos espacios vivideros abiertos, en total comunión con el entorno natural que les envuelve, difuminando en lo posible los límites construidos.\nEl agua:\nEl agua como elemento fundamental de la vida se convierte en un cualificador eficaz de los espacios semiabiertos planteados. No es sólo dotar a las viviendas de piscinas privativas, es convertirlas en los elementos generadores de relajación contemplativa, en su uso , en su percepción directa, y en  la percepción del entorno a través del reflejo de los planos de agua que se introducen en la arquitectura. Desde cada espacio de la casa contemplamos el agua y a través de él, nuestro  entorno reflejado.\nLa colectividad:\nAtendemos al reto de  conseguir un espacio colectivo en el que se fomente las relaciones entre los residentes. Buscamos un claro equilibrio entre la necesaria privacidad y la conveniencia de propiciar la interrelación del habitante, enfatizando las cualidades de la promoción a este respecto. Por eso reservamos los espacios centrales y más elevados de las parcelas para la configuracion de ágoras y espacios comunes de relación, deporte y ocio.\nAdemás, por a las cualidades formales de las arquitecturas planteadas, que se desmaterializan al ganar altura en elementos de celosías muy diáfanas, junto a la realidad topográfica de las parcelas , se favorece el poder  disfrutar en estos privilegiados espacios colectivos de las mejores vistas a la sierra, a los campos de golf y al cercano mar.\nTIPOLOGIAS\nProponemos tres tipologías para la ordenación de la parcela:\nAdosado vertical: \nEsta disposición permite una mejor inserción en las laderas con más pendiente, al generar un ancho de crujía menor.\nAdosado horizontal:\n Esta disposición se adapta mejor a las laderas de baja pendiente inferiores, desarrollándose en una crujía de mayor ancho, que permite una continuidad de la piscina con la parcela ajardinada.\nApartamentos dúplex: \nBásicamente responde a la tipología de adosado horizontal, pero en disposición apilada. Genera la sensación de habitar una vivienda unifamiliar, tanto en la solución de bajo ajardinado como la de piso superior con terrazas y solárium.",
    data:{Año:"2016",Tipología:"Vivienda colectiva",Viviendas:"116 uds.",Estado:"2º Premio · Concurso",Ubicación:"Marbella, Málaga",Cliente:"DOM3",Arquitectos:"Javier Camacho, Mª Eugenia Maciá, Q Arquitectos"}},
  {id:24, name:"Vivienda Unifamiliar en Vitoria-Gasteiz", cat:"casa", year:"2001", loc:"Vitoria-Gasteiz",
    desc:"La propuesta nace del encargo de una vivienda unifamiliar en un barrio residencial de Vitoria, para un matrimonio con hijos mayores que viven en distintas ciudades, pero que periódicamente habitan la casa.\nPor ello la vivienda se disgrega en dos unidades independientes, creando un ámbito habitual de vivienda y otro excepcional de visitas (pretendiendo eludir una sensación de casa vacía a los habitantes habituales). \nFormalmente se manifiestan estas dos piezas separadas, mirándose entre si y generando un intenso espacio exterior entre ellas. En planta la vivienda se desarrolla creando una barrera construida al norte y abriendo el espacio exterior al sur, protegiéndose de los vientos habituales y de la crudeza de las estaciones especialmente frías de la zona.\nEstas unidades se materializan con el diálogo básico de dos materiales: Piedra caliza en los paramentos expuestos y fachadas ventiladas de madera de iroko y carpinterías de iroko en los paramentos resguardados, generando el contraste de solidez constructiva y calidez  del habitar deseado.",
    data:{Año:"2001",Tipología:"Vivienda unifamiliar",Estado:"Construido",Ubicación:"Vitoria-Gasteiz",Cliente:"Manuel Camacho, Inmaculada Diez",Arquitectos:"Javier Camacho,Mª Eugenia Maciá"}}
];
const AWARDS = [
  {year:'2023',name:'ATENPRO — Centro Estatal de Coordinación FEMP',type:'1.er Premio · Concurso de ideas'},
  {year:'2022',name:'Renovación I.C. Facultad Ciencias Biológicas — UCM',type:'1.er Premio · Concurso nacional'},
  {year:'2022',name:'324 Viviendas VPP PP4 Leganés — EMSULE',type:'1.er Premio · Concurso de ideas'},
  {year:'2017',name:'963 Viviendas «Manzana Verde» — Málaga',type:'Mención · Concurso internacional'},
  {year:'2016',name:'DOM3 Prize — Architectural Excellence',type:'2.º Premio · Concurso internacional'},
  {year:'2016',name:'144 Viviendas Molino de la Hoz — LAGOSPARK',type:'1.er Premio · Concurso de ideas'},
  {year:'2015',name:'EPSmart — Resilience Innovation Awards',type:'Accésit · Concurso internacional'},
  {year:'2015',name:'104 Viviendas Energía Cero — Torrejón de Ardoz',type:'2.º Premio · COAM–Solvia'},
  {year:'2010',name:'103 Viviendas NSA1 — EMVS Madrid',type:'1.er Premio · Concurso internacional'},
  {year:'2009',name:'Palacio de Música, Congresos y Exposiciones — Vitoria',type:'Accésit · Concurso internacional'},
  {year:'2008',name:'Auditorio y Teatro — Campo de Criptana',type:'1.er Premio · Concurso nacional'},
  {year:'2008',name:'Villa Olímpica Madrid 2016 — Parcela RZ2 (1.690 viv.)',type:'1.er Premio · Concurso internacional'},
  {year:'2008',name:'3 Sedes Olímpicas — Madrid 2016',type:'Accésit · Concurso internacional'},
  {year:'2007',name:'Cocheras de Bravo Murillo — EMVS',type:'Mención 1.ª · Concurso de ideas'},
  {year:'2006',name:'5.688 Viviendas Protegidas Proyecto VIVA — Mieres',type:'1.er Premio · Ministerio de Vivienda'},
  {year:'2005',name:'Viviendas VPP Vallecas Ensanche 36 — EMVS',type:'1.er Premio · Concurso nacional'},
  {year:'2005',name:'Auditorio, Circo y C. Cultural «Los Castillos» — Alcorcón',type:'1.er Premio · Concurso nacional'},
  {year:'2004',name:'90 Viviendas VPPA «Paseo de la Dirección» — EMVS',type:'1.er Premio · Concurso nacional'},
  {year:'2003',name:'Viviendas VPP Vallecas Ensanche 16 — EMVS',type:'1.er Premio · COAM–EMVS'},
  {year:'2002',name:'Concurso Cerramientos Cerámicos — HISPALYT',type:'Mención honorífica'},
  {year:'1998',name:'II Concurso Nacional Formica Funcional — Bilbao',type:'Mención especial'},
  {year:'1994',name:'Concurso «Puertas y Máquinas» — CEU Arquitectura',type:'1.er Premio'},
  {year:'1994',name:'Bienal de Arquitectura y Urbanismo BAUZ — Zaragoza',type:'Mención 1.ª'},
  {year:'2019',name:'Premio Excelencia de la Vivienda 2019 — La Razón',type:'Reconocimiento'},
  {year:'2019',name:'Best Infrastructure Architecture Studio — BUILD',type:'Reconocimiento internacional'},
  {year:'2018',name:'Best of Houzz — Categoría Diseño',type:'Premio Houzz'},
  {year:'2017',name:'Premio Estrella de Oro a la Excelencia Profesional',type:'Reconocimiento'},
  {year:'2017',name:'Best of Houzz 2017',type:'Premio Houzz'},
  {year:'2016',name:'Premio Ángel Herrera a la Mejor Labor de Investigación',type:'Fundación USP CEU'},
  {year:'2014',name:'5.º Foro Internacional Arquitectura en Madera Egurtek',type:'Seleccionado · BEC Bilbao'},
  {year:'2014',name:'Premio Ángel Herrera — Patente Airbus Military',type:'Fundación USP CEU'},
  {year:'2011',name:'Sustainable Building 2011 — Helsinki',type:'Seleccionado equipo español · CSCAE–ICEX'},
  {year:'2011',name:'Premio Extraordinario de Tesis Doctoral 2010–11',type:'Universidad Politécnica de Madrid'},
  {year:'2011',name:'XI Bienal Española de Arquitectura — Vallecas 36',type:'Seleccionado · Ministerio de Fomento'},
  {year:'2010',name:'«Loading Madrid» — CREAA y Villa Olímpica',type:'Seleccionado · CONSTRUTEC–COAM'},
  {year:'2009',name:'Premio ASPRIMA-SIMA — Mejor Vivienda Protegida',type:'Premio · Vallecas 16'},
  {year:'2009',name:'X Bienal de Arquitectura y Urbanismo — Vallecas 16',type:'Seleccionado · Ministerio de Vivienda'},
  {year:'2008',name:'Premio APCE — Mejor Edificación Vivienda Protegida',type:'Premio nacional · Vallecas 16'},
  {year:'2008',name:'Sustainable Building 2008 — Melbourne',type:'Seleccionado equipo español · CSCAE–ICEX'},
  {year:'2008',name:'JAE — Jóvenes Arquitectos de España · CREAA',type:'Seleccionado · Ministerio de Vivienda'},
];

const EXPOS = [
  {year:'2026',name:'La Arquitectura de los Arquitectos IV',place:'COAM, Madrid'},
  {year:'2024',name:'La Arquitectura de los Arquitectos III',place:'COAM, Madrid'},
  {year:'2022',name:'La Arquitectura de los Arquitectos',place:'COAM, Madrid'},
  {year:'2021',name:'40 Años Transformando Madrid',place:'Ayuntamiento de Madrid'},
  {year:'2017',name:'Proyectos Premiados «Manzana Verde»',place:'Ayuntamiento de Málaga'},
  {year:'2016',name:'Concurso Rehabilitación Nave CLESA',place:'COAM, Madrid'},
  {year:'2015',name:'Concurso Edificio Cultural Sector 1 Ensanche',place:'Centro Cultural Villa del Escorial, Madrid'},
  {year:'2015',name:'Concurso Ideas Madrid 0,0',place:'Fundación COAM, Madrid'},
  {year:'2015',name:'Paréntesis — Prácticas Arquitectónicas Madrileñas',place:'Fundación COAM, Madrid'},
  {year:'2014',name:'5.º Foro Internacional Arquitectura en Madera Egurtek',place:'BEC, Bilbao'},
  {year:'2013',name:'Mostra Espanha — Jovens Arquitetos Espanhois',place:'Museo Soares dos Reis, Oporto'},
  {year:'2013',name:'YAS — Young Architects of Spain',place:'Universidad de Carleton, Ottawa'},
  {year:'2013',name:'YAS — Young Architects of Spain',place:'CCE de Miami, EEUU'},
  {year:'2012',name:'YAS — Young Architects of Spain',place:'Texas A&M, College Station, Texas'},
  {year:'2012',name:'YAS — Young Architects of Spain',place:'Instituto Cervantes, Nueva York'},
  {year:'2012',name:'YAS — Young Architects of Spain',place:'Virginia Center for Architecture, Richmond'},
  {year:'2012',name:'YAS — Young Architects of Spain',place:'Cornell University, Ithaca, Nueva York'},
  {year:'2012',name:'YAS — Young Architects of Spain',place:'Hines College of Architecture, Houston'},
  {year:'2011',name:'Bienal de Arquitectura y Urbanismo',place:'Arquerías Nuevos Ministerios, Madrid'},
  {year:'2011',name:'Mind the Gap',place:'Fundación COAM, Madrid'},
  {year:'2011',name:'Madrid, Diseño Urbano Sostenible',place:'Matadero Madrid'},
  {year:'2011',name:'YAS — Young Architects of Spain',place:'AIA, Washington D.C.'},
  {year:'2011',name:'YAS — Young Architects of Spain',place:'Instituto Cervantes, Chicago'},
  {year:'2011',name:'JAE — Jóvenes Arquitectos de España',place:'Academia de España, Roma'},
  {year:'2010',name:'Unga Arkitekter Från Spanien',place:'Escuela KTH, Estocolmo'},
  {year:'2010',name:'Loading Madrid — CONSTRUTEC-COAM',place:'Madrid'},
  {year:'2010',name:'More Than Houses — Expo Universal',place:'Shanghái, China'},
  {year:'2010',name:'JAE — Jóvenes Arquitectos de España',place:'Casa de Asturias, Bruselas'},
  {year:'2009',name:'5688 Paisajes Domésticos — Domestic Landscapes',place:'ETSAM, Madrid'},
  {year:'2009',name:'Congreso Nacional de Arquitectos 2009',place:'Palacio de Congresos, Valencia'},
  {year:'2009',name:'YAS — Young Architects of Spain',place:'GSAPP Columbia University, Nueva York'},
  {year:'2008',name:'16 Contemporary Projects — Sustainable Building 2008',place:'CSCAE–ICEX, Melbourne'},
  {year:'2008',name:'Concurso Villa Olímpica Madrid 2016',place:'EMVS y Fundación COAM, Madrid'},
  {year:'2008',name:'Concurso Teatro-Auditorio Campo de Criptana',place:'Ayuntamiento de Campo de Criptana'},
  {year:'2008',name:'El Proyecto Olímpico Madrid 2016',place:'Ayuntamiento de Madrid'},
  {year:'2008',name:'JAE — Jóvenes Arquitectos de España',place:'Arquerías Nuevos Ministerios, Madrid'},
  {year:'2008',name:'Madrid in Progress — Developing Social Housing',place:'Museo Ciencias Naturales, Turín'},
  {year:'2007',name:'Horizons — Madrid Social Housing 1981–2006',place:'Aedes am Pfefferberg, Berlín'},
  {year:'2007',name:'Concurso 5.688 Viviendas Protegidas',place:'Arquerías Nuevos Ministerios, Madrid'},
  {year:'2007',name:'Horizons — Madrid Social Housing 1981–2006',place:'RIBA, Londres'},
  {year:'2007',name:'Centro de Creación de las Artes de Alcorcón',place:'Círculo de Bellas Artes, Madrid'},
  {year:'2006',name:'CREAA — Centro de Creación de las Artes de Alcorcón',place:'Museo del Vidrio, Alcorcón'},
  {year:'2006',name:'Centro de Producción de las Artes de Alcorcón',place:'ARCO, Madrid'},
];

const FILTERS = ['Todos','auditorio','museo','vivienda colectiva','vivienda social','terciario','infraestructura','pabellón exposiciones','casa'];
const ARR = '<svg width="14" height="10" viewBox="0 0 18 10" fill="none"><path d="M1 5H17M17 5L13 1M17 5L13 9" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';


/* NAV scroll */
function updateNav(){
  const n=document.getElementById('nav');
  const onHome=document.getElementById('pg-home').classList.contains('on');
  n.classList.toggle('sc',window.scrollY>60);
  if(onHome && window.scrollY < window.innerHeight - 100){
    n.classList.add('nav-hero');
  } else {
    n.classList.remove('nav-hero');
  }
}
window.addEventListener('scroll',updateNav,{passive:true});

/* MENU */
function toggleMenu(){
  const m=document.getElementById('menu');
  const t=document.querySelector('.nav-toggle');
  m.classList.toggle('open');
  t.classList.toggle('open');
}

/* HERO SLIDESHOW */
let slide=0,slideTimer;
function buildHero(){
  const w=document.getElementById('heroImgs');
  const nav=document.getElementById('heroNav');
  w.innerHTML=HERO_SLIDES.map((s,i)=>`<img src="${s.photo}" alt="${s.name}" class="${i===0?'on':''}" width="1500" height="951">`).join('');
  nav.innerHTML=HERO_SLIDES.map((s,i)=>`<button class="${i===0?'on':''}" onclick="setSlide(${i})"></button>`).join('');
}
function setSlide(n){
  const imgs=document.querySelectorAll('.hero-img img');
  const btns=document.querySelectorAll('.hero-nav button');
  if(imgs[slide])imgs[slide].classList.remove('on');
  if(btns[slide])btns[slide].classList.remove('on');
  slide=n;
  if(imgs[slide])imgs[slide].classList.add('on');
  if(btns[slide])btns[slide].classList.add('on');
  document.getElementById('heroNum').textContent=HERO_SLIDES[n].num;
  document.getElementById('heroProj').textContent=HERO_SLIDES[n].name;
  clearInterval(slideTimer);
  slideTimer=setInterval(()=>setSlide((slide+1)%HERO_SLIDES.length),5500);
}
buildHero();
setTimeout(updateNav,100);
slideTimer=setInterval(()=>setSlide((slide+1)%HERO_SLIDES.length),5500);

/* ─── SEO: meta tags dinámicos ─── */
const BASE_URL = 'https://camachomaciaarquitectos.com';

const PAGE_META = {
  home: {
    title: 'Camacho Maciá Arquitectos | Estudio de arquitectura en Madrid',
    desc:  'Estudio de arquitectura en Madrid especializado en proyectos residenciales, culturales y de equipamiento público.'
  },
  proj: {
    title: 'Proyectos | Camacho Maciá Arquitectos',
    desc:  'Descubra los proyectos del estudio de arquitectura Camacho Maciá: vivienda, equipamiento cultural, espacio público y restauración.'
  },
  estudio: {
    title: 'El Estudio | Camacho Maciá Arquitectos',
    desc:  'Conozca Camacho Maciá Arquitectos, su trayectoria, equipo y filosofía de trabajo.'
  },
  premios: {
    title: 'Premios y reconocimientos | Camacho Maciá Arquitectos',
    desc:  'Premios y reconocimientos obtenidos por Camacho Maciá Arquitectos a lo largo de su trayectoria.'
  },
  cont: {
    title: 'Contacto | Camacho Maciá Arquitectos',
    desc:  'Contacte con Camacho Maciá Arquitectos para consultas, proyectos o colaboraciones.'
  }
};

function _setMeta(sel, attr, val){
  let el = document.querySelector(sel);
  if(el) el.setAttribute(attr, val);
}

function updateMeta(page, id, url){
  let title, desc;

  if(page === 'single' && id != null){
    const p = PROJS[id];
    title = p.name + ' | Camacho Maciá Arquitectos';
    // Use first sentence of desc if available, else generic
    const rawDesc = (p.desc || '').split('\n\n')[0].trim();
    desc = rawDesc.length > 20
      ? (rawDesc.length > 155 ? rawDesc.substring(0, 152) + '...' : rawDesc)
      : 'Proyecto de arquitectura de Camacho Maciá Arquitectos. ' + p.cat + ' · ' + p.year + ' · ' + p.loc;
  } else {
    const m = PAGE_META[page] || PAGE_META['home'];
    title = m.title;
    desc  = m.desc;
  }

  const canonical = BASE_URL + url;

  // <title>
  document.title = title;
  // <meta name="description">
  _setMeta('meta[name="description"]', 'content', desc);
  // Open Graph
  _setMeta('meta[property="og:title"]',       'content', title);
  _setMeta('meta[property="og:description"]', 'content', desc);
  _setMeta('meta[property="og:url"]',         'content', canonical);
  // Twitter
  _setMeta('meta[name="twitter:title"]',       'content', title);
  _setMeta('meta[name="twitter:description"]', 'content', desc);
  // Canonical
  let canonEl = document.querySelector('link[rel="canonical"]');
  if(canonEl) canonEl.setAttribute('href', canonical);
}

/* ROUTER */
/* ROUTING */
function toSlug(s){
  return s.split(/s[—–]s/)[0]
    .toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g,'')
    .replace(/[^a-z0-9\s]/g,'')
    .trim().replace(/\s+/g,'-').replace(/-+/g,'-')
    .substring(0,60);
}
const PAGE_URLS={home:'/',proj:'/proyectos',estudio:'/estudio',premios:'/premios',cont:'/contacto'};
const URL_PAGES=Object.fromEntries(Object.entries(PAGE_URLS).map(([k,v])=>[v,k]));
let _routeReady=false;

function go(page,id){
  // Close menu first
  document.getElementById('menu').classList.remove('open');
  document.querySelector('.nav-toggle').classList.remove('open');
  document.body.style.overflow='';

  // Scroll to top — multiple methods for cross-browser/mobile reliability
  window.scrollTo({top:0,left:0,behavior:'instant'});
  document.documentElement.scrollTop=0;
  document.body.scrollTop=0;

  // Switch page
  document.querySelectorAll('.pg').forEach(p=>p.classList.remove('on'));
  document.getElementById('pg-'+page).classList.add('on');
  setTimeout(updateNav, 50);

  if(page==='proj')renderProj();
  if(page==='single'&&id!=null)renderSingle(id);
  if(page==='estudio')renderEstudio();
  if(page==='premios')renderPremios();

  // Force scroll again after render — mobile browsers sometimes restore position
  requestAnimationFrame(()=>{
    window.scrollTo(0,0);
    document.documentElement.scrollTop=0;
    document.body.scrollTop=0;
  });
  setTimeout(()=>{
    window.scrollTo(0,0);
    document.documentElement.scrollTop=0;
  }, 50);

  setTimeout(observe,80);

  // Update URL
  let _url=PAGE_URLS[page]||'/';
  if(page==='single'&&id!=null)_url='/proyectos/'+toSlug(PROJS[id].name);
  const _state={page,id:id??null};
  if(_routeReady){history.pushState(_state,'',_url);}
  else{history.replaceState(_state,'',_url);_routeReady=true;}

  // Update meta tags + canonical (Tasks 1 & 4)
  updateMeta(page, id??null, _url);
}

/* PROJECTS */
const CAT_LABELS = {
  'auditorio':'Auditorios','museo':'Museos',
  'vivienda colectiva':'Vivienda colectiva','vivienda social':'Vivienda social',
  'terciario':'Terciario','infraestructura':'Infraestructura',
  'pabellon exposiciones':'Pabellones','casa':'Residencial',
  'pabellón exposiciones':'Pabellones'
};
const CAT_ORDER=['auditorio','museo','pabellón exposiciones','terciario','infraestructura','vivienda colectiva','vivienda social','casa'];
let af='Todos';

function renderProj(){
  const strip=document.getElementById('pjCats');
  if(!strip.children.length){
    strip.innerHTML=['Todos',...CAT_ORDER].map(c=>
      '<button class="pj-cat-btn'+(c==='Todos'?' on':'')+'" data-c="'+c+'">'+(c==='Todos'?'Todos':CAT_LABELS[c]||c)+'</button>'
    ).join('');
    strip.addEventListener('click',e=>{
      const b=e.target.closest('.pj-cat-btn');if(!b)return;
      af=b.dataset.c;
      strip.querySelectorAll('.pj-cat-btn').forEach(x=>x.classList.remove('on'));
      b.classList.add('on');
      renderProjGrid();
    });
  }
  renderProjGrid();
}

function renderProjGrid(){
  const grid=document.getElementById('pjGrid');
  const items=(af==='Todos'?PROJS:PROJS.filter(p=>p.cat===af)).slice().sort((a,b)=>parseInt(b.year||0)-parseInt(a.year||0));
  document.getElementById('pjCount').textContent=items.length+' proyecto'+(items.length!==1?'s':'');

  grid.innerHTML=items.map((p,i)=>{
    const hero=PHOTOS[p.id]||'';
    const alt=HOVERS[p.id]||'';
    const hasAlt=alt&&alt!==hero;
    return `<div class="pgi-item" data-pid="${p.id}">
      <div class="pgi-img">
        ${hero?`<img class="pgi-main" src="${hero}" alt="${p.name}" loading="${i<10?'eager':'lazy'}">`:''}
        ${hasAlt?`<img class="pgi-alt" src="${alt}" alt="${p.name}" loading="lazy">`:''}
      </div>
      <div class="pgi-name">${p.name}</div>
    </div>`;
  }).join('');

  grid.querySelectorAll('.pgi-item').forEach(item=>{
    item.addEventListener('click',()=>go('single',parseInt(item.dataset.pid)));
  });
}

/* SINGLE */
function renderSingle(id){
  const p=PROJS[id];
  document.getElementById('spTitle').innerHTML=p.name;
  document.getElementById('spCat').textContent='— '+p.cat+' · '+p.year;
  const img=document.getElementById('spImg');
  if(PHOTOS[id]){img.src=PHOTOS[id];img.alt=p.name;img.width=1500;img.height=951;}
  document.getElementById('spText').innerHTML=p.desc.split('\n\n').map(function(x){return '<p>'+x+'</p>';}).join('');
  document.getElementById('spData').innerHTML=
    Object.entries(p.data).map(function(e){return '<div class="sp-di"><div class="sp-dl">'+e[0]+'</div><div class="sp-dv">'+e[1]+'</div></div>';}).join('');
  // Gallery: ONLY project-specific photos. If none, just show hero again or nothing.
  var gallery = PROJ_GALLERY[id] || [];
  // No fallback to other projects - that was causing wrong photos to appear
  var gallerySlice = gallery.slice(0,4);
  if(gallerySlice.length > 0){
    document.getElementById('spImgs').innerHTML=
      '<div class="sp-imgs-title">Imágenes del proyecto</div>'+
      '<div class="sp-imgs-grid">'+
      gallerySlice.map(function(src,i){
        return '<div class="sp-img-item"><div class="sp-img-inner"><img src="'+src+'" alt="'+p.name+'" loading="lazy" width="1500" height="951"></div></div>';
      }).join('')+
      '</div>';
  } else {
    document.getElementById('spImgs').innerHTML='';
  }
}

/* ESTUDIO */
function renderEstudio(){
  const el=document.getElementById('expoList');
  if(!el.children.length)
    el.innerHTML=EXPOS.map(e=>`<div class="exp-row"><div class="exp-yr">${e.year}</div><div class="exp-nm">${e.name}</div><div class="exp-pl">${e.place}</div></div>`).join('');
}

/* PREMIOS */
function renderPremios(){
  const list=document.getElementById('pmList');
  if(!list.children.length)
    list.innerHTML=AWARDS.map(a=>`
      <div class="pm-row">
        <div class="pm-yr">${a.year}</div>
        <div class="pm-nm">${a.name}</div>
        <div class="pm-tp">${a.type}</div>
        <div class="pm-ar">${ARR}</div>
      </div>`).join('');
}

/* FORM */
const ctForm=document.getElementById('ct-form');
if(ctForm){
  ctForm.addEventListener('submit',async function(e){
    e.preventDefault();
    const b=ctForm.querySelector('.ct-sub');
    const orig=b.innerHTML;
    b.disabled=true;
    b.textContent='Enviando…';
    try{
      const r=await fetch(ctForm.action,{method:'POST',body:new FormData(ctForm),headers:{Accept:'application/json'}});
      if(r.ok){
        ctForm.reset();
        b.textContent='Mensaje enviado ✓';
        setTimeout(()=>{b.innerHTML=orig;b.disabled=false;},4000);
      }else{
        throw new Error();
      }
    }catch{
      b.textContent='Error al enviar. Inténtalo de nuevo.';
      setTimeout(()=>{b.innerHTML=orig;b.disabled=false;},4000);
    }
  });
}

/* REVEAL */
const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
},{threshold:.1});
function observe(){document.querySelectorAll('.rv:not(.in)').forEach(el=>io.observe(el));}
observe();
setTimeout(observe,200);

/* Back/forward buttons */
window.addEventListener('popstate',e=>{
  if(e.state)go(e.state.page,e.state.id);
});

/* Navigate to correct section on direct URL load */
(function(){
  const path=window.location.pathname.replace(/\/+$/,'')||'/';
  const slugMatch=path.match(/^\/proyectos\/(.+)$/);
  if(slugMatch){
    const id=PROJS.findIndex(p=>toSlug(p.name)===slugMatch[1]);
    if(id>=0){go('single',id);return;}
  }
  go(URL_PAGES[path]||'home');
})();