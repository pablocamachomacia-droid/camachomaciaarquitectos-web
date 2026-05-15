(function(){var img=document.getElementById("estudio-parallax-img");if(!img)return;window.addEventListener("scroll",function(){var rect=img.parentElement.getBoundingClientRect();var center=rect.top+rect.height/2;var vCenter=window.innerHeight/2;var offset=(center-vCenter)*0.12;img.style.transform="scale(1.15) translateY("+offset+"px)";});})();

const PHOTOS={"0":"assets/img/proyectos/0/hero.jpg","1":"assets/img/proyectos/1/hero.jpg","2":"assets/img/proyectos/2/hero.jpg","3":"assets/img/proyectos/3/hero.jpg","4":"assets/img/proyectos/4/hero.jpg","5":"assets/img/proyectos/5/hero.jpg","6":"assets/img/proyectos/6/hero.jpg","7":"assets/img/proyectos/7/hero.jpg","8":"assets/img/proyectos/8/hero.jpg","9":"assets/img/proyectos/9/hero.jpg","10":"assets/img/proyectos/10/hero.jpg","11":"assets/img/proyectos/11/hero.jpg","12":"assets/img/proyectos/12/hero.jpg","13":"assets/img/proyectos/13/hero.jpg","14":"assets/img/proyectos/14/hero.jpg","15":"assets/img/proyectos/15/hero.jpg","16":"assets/img/proyectos/16/hero.jpg","17":"assets/img/proyectos/17/hero.jpg","18":"assets/img/proyectos/18/hero.jpg","19":"assets/img/proyectos/19/hero.jpg","20":"assets/img/proyectos/20/hero.jpg","21":"assets/img/proyectos/21/hero.jpg","22":"assets/img/proyectos/22/hero.jpg","23":"assets/img/proyectos/23/hero.jpg","24":"assets/img/proyectos/24/hero.jpg","25":"assets/img/proyectos/25/hero.jpg","26":"assets/img/proyectos/26/hero.jpg","27":"assets/img/proyectos/27/hero.jpg","28":"assets/img/proyectos/28/hero.jpg","29":"assets/img/proyectos/29/hero.jpg","30":"assets/img/proyectos/30/hero.jpg","31":"assets/img/proyectos/31/hero.jpg","32":"assets/img/proyectos/32/hero.jpg","33":"assets/img/proyectos/33/hero.jpg","34":"assets/img/proyectos/34/hero.jpg"};

const HERO_SLIDES = [
  {photo: PHOTOS[0], num:'01', name:'Pabellón de España'},
  {photo: PHOTOS[2], num:'02', name:'Auditorio Campo de Criptana'},
  {photo: PHOTOS[4], num:'03', name:'NSA1 Madrid'},
  {photo: PHOTOS[10], num:'04', name:'Metro Madrid'},
  {photo: PHOTOS[8], num:'05', name:'Casa Montepríncipe'},
];

const PROJ_GALLERY={"0":["assets/img/proyectos/0/img1.jpg","assets/img/proyectos/0/img2.jpg","assets/img/proyectos/0/img3.jpg","assets/img/proyectos/0/img4.jpg","assets/img/proyectos/0/img5.jpg","assets/img/proyectos/0/img6.jpg","assets/img/proyectos/0/img7.jpg","assets/img/proyectos/0/img8.jpg"],"1":["assets/img/proyectos/1/img1.jpg","assets/img/proyectos/1/img2.jpg","assets/img/proyectos/1/img3.jpg","assets/img/proyectos/1/img4.jpg","assets/img/proyectos/1/img5.jpg","assets/img/proyectos/1/img6.jpg","assets/img/proyectos/1/img7.jpg","assets/img/proyectos/1/img8.jpg"],"2":["assets/img/proyectos/2/img1.jpg","assets/img/proyectos/2/img2.jpg","assets/img/proyectos/2/img3.jpg","assets/img/proyectos/2/img4.jpg","assets/img/proyectos/2/img5.jpg","assets/img/proyectos/2/img6.jpg","assets/img/proyectos/2/img7.jpg","assets/img/proyectos/2/img8.jpg"],"3":["assets/img/proyectos/3/img1.jpg","assets/img/proyectos/3/img2.jpg","assets/img/proyectos/3/img3.jpg","assets/img/proyectos/3/img4.jpg","assets/img/proyectos/3/img5.jpg","assets/img/proyectos/3/img6.jpg","assets/img/proyectos/3/img7.jpg","assets/img/proyectos/3/img8.jpg"],"4":["assets/img/proyectos/4/img1.jpg","assets/img/proyectos/4/img2.jpg","assets/img/proyectos/4/img3.jpg","assets/img/proyectos/4/img4.jpg","assets/img/proyectos/4/img5.jpg","assets/img/proyectos/4/img6.jpg"],"5":["assets/img/proyectos/5/img1.jpg","assets/img/proyectos/5/img2.jpg","assets/img/proyectos/5/img3.jpg","assets/img/proyectos/5/img4.jpg","assets/img/proyectos/5/img5.jpg","assets/img/proyectos/5/img6.jpg","assets/img/proyectos/5/img7.jpg","assets/img/proyectos/5/img8.jpg"],"6":["assets/img/proyectos/6/img1.jpg","assets/img/proyectos/6/img2.jpg","assets/img/proyectos/6/img3.jpg","assets/img/proyectos/6/img4.jpg","assets/img/proyectos/6/img5.jpg","assets/img/proyectos/6/img6.jpg","assets/img/proyectos/6/img7.jpg"],"7":["assets/img/proyectos/7/img1.jpg","assets/img/proyectos/7/img2.jpg","assets/img/proyectos/7/img3.jpg","assets/img/proyectos/7/img4.jpg","assets/img/proyectos/7/img5.jpg","assets/img/proyectos/7/img6.jpg","assets/img/proyectos/7/img7.jpg"],"8":["assets/img/proyectos/8/img1.jpg","assets/img/proyectos/8/img2.jpg","assets/img/proyectos/8/img3.jpg","assets/img/proyectos/8/img4.jpg","assets/img/proyectos/8/img5.jpg","assets/img/proyectos/8/img6.jpg","assets/img/proyectos/8/img7.jpg","assets/img/proyectos/8/img8.jpg"],"9":["assets/img/proyectos/9/img1.jpg","assets/img/proyectos/9/img2.jpg","assets/img/proyectos/9/img3.jpg","assets/img/proyectos/9/img4.jpg","assets/img/proyectos/9/img5.jpg","assets/img/proyectos/9/img6.jpg","assets/img/proyectos/9/img7.jpg","assets/img/proyectos/9/img8.jpg"],"10":["assets/img/proyectos/10/img1.jpg","assets/img/proyectos/10/img2.jpg","assets/img/proyectos/10/img3.jpg","assets/img/proyectos/10/img4.jpg","assets/img/proyectos/10/img5.jpg","assets/img/proyectos/10/img6.jpg","assets/img/proyectos/10/img7.jpg","assets/img/proyectos/10/img8.jpg"],"11":["assets/img/proyectos/11/img1.jpg","assets/img/proyectos/11/img2.jpg","assets/img/proyectos/11/img3.jpg","assets/img/proyectos/11/img4.jpg","assets/img/proyectos/11/img5.jpg","assets/img/proyectos/11/img6.jpg","assets/img/proyectos/11/img7.jpg"],"12":["assets/img/proyectos/12/img1.jpg","assets/img/proyectos/12/img2.jpg","assets/img/proyectos/12/img3.jpg","assets/img/proyectos/12/img4.jpg","assets/img/proyectos/12/img5.jpg","assets/img/proyectos/12/img6.jpg","assets/img/proyectos/12/img7.jpg","assets/img/proyectos/12/img8.jpg"],"13":["assets/img/proyectos/13/img1.jpg","assets/img/proyectos/13/img2.jpg","assets/img/proyectos/13/img3.jpg","assets/img/proyectos/13/img4.jpg","assets/img/proyectos/13/img5.jpg","assets/img/proyectos/13/img6.jpg","assets/img/proyectos/13/img7.jpg","assets/img/proyectos/13/img8.jpg"],"14":["assets/img/proyectos/14/img1.jpg","assets/img/proyectos/14/img2.jpg","assets/img/proyectos/14/img3.jpg","assets/img/proyectos/14/img4.jpg","assets/img/proyectos/14/img5.jpg"],"15":["assets/img/proyectos/15/img1.jpg","assets/img/proyectos/15/img2.jpg","assets/img/proyectos/15/img3.jpg","assets/img/proyectos/15/img4.jpg","assets/img/proyectos/15/img5.jpg","assets/img/proyectos/15/img6.jpg","assets/img/proyectos/15/img7.jpg"],"16":["assets/img/proyectos/16/img1.jpg","assets/img/proyectos/16/img2.jpg","assets/img/proyectos/16/img3.jpg","assets/img/proyectos/16/img4.jpg","assets/img/proyectos/16/img5.jpg","assets/img/proyectos/16/img6.jpg","assets/img/proyectos/16/img7.jpg","assets/img/proyectos/16/img8.jpg"],"17":["assets/img/proyectos/17/img1.jpg","assets/img/proyectos/17/img2.jpg","assets/img/proyectos/17/img3.jpg","assets/img/proyectos/17/img4.jpg","assets/img/proyectos/17/img5.jpg","assets/img/proyectos/17/img6.jpg","assets/img/proyectos/17/img7.jpg"],"18":["assets/img/proyectos/18/img1.jpg","assets/img/proyectos/18/img2.jpg","assets/img/proyectos/18/img3.jpg","assets/img/proyectos/18/img4.jpg","assets/img/proyectos/18/img5.jpg","assets/img/proyectos/18/img6.jpg"],"19":["assets/img/proyectos/19/img1.jpg","assets/img/proyectos/19/img2.jpg","assets/img/proyectos/19/img3.jpg","assets/img/proyectos/19/img4.jpg","assets/img/proyectos/19/img5.jpg","assets/img/proyectos/19/img6.jpg"],"20":["assets/img/proyectos/20/img1.jpg","assets/img/proyectos/20/img2.jpg","assets/img/proyectos/20/img3.jpg","assets/img/proyectos/20/img4.jpg","assets/img/proyectos/20/img5.jpg","assets/img/proyectos/20/img6.jpg","assets/img/proyectos/20/img7.jpg","assets/img/proyectos/20/img8.jpg"],"21":["assets/img/proyectos/21/img1.jpg","assets/img/proyectos/21/img2.jpg","assets/img/proyectos/21/img3.jpg","assets/img/proyectos/21/img4.jpg"],"22":["assets/img/proyectos/22/img1.jpg","assets/img/proyectos/22/img2.jpg","assets/img/proyectos/22/img3.jpg","assets/img/proyectos/22/img4.jpg"],"23":["assets/img/proyectos/23/img1.jpg","assets/img/proyectos/23/img2.jpg","assets/img/proyectos/23/img3.jpg","assets/img/proyectos/23/img4.jpg","assets/img/proyectos/23/img5.jpg","assets/img/proyectos/23/img6.jpg","assets/img/proyectos/23/img7.jpg","assets/img/proyectos/23/img8.jpg"],"24":["assets/img/proyectos/24/img1.jpg","assets/img/proyectos/24/img2.jpg","assets/img/proyectos/24/img3.jpg","assets/img/proyectos/24/img4.jpg","assets/img/proyectos/24/img5.jpg","assets/img/proyectos/24/img6.jpg","assets/img/proyectos/24/img7.jpg","assets/img/proyectos/24/img8.jpg"],"25":["assets/img/proyectos/25/img1.jpg","assets/img/proyectos/25/img2.jpg","assets/img/proyectos/25/img3.jpg","assets/img/proyectos/25/img4.jpg","assets/img/proyectos/25/img5.jpg","assets/img/proyectos/25/img6.jpg","assets/img/proyectos/25/img7.jpg","assets/img/proyectos/25/img8.jpg"],"26":["assets/img/proyectos/26/img1.jpg","assets/img/proyectos/26/img2.jpg","assets/img/proyectos/26/img3.jpg","assets/img/proyectos/26/img4.jpg","assets/img/proyectos/26/img5.jpg","assets/img/proyectos/26/img6.jpg"],"27":["assets/img/proyectos/27/img1.jpg","assets/img/proyectos/27/img2.jpg","assets/img/proyectos/27/img3.jpg","assets/img/proyectos/27/img4.jpg","assets/img/proyectos/27/img5.jpg","assets/img/proyectos/27/img6.jpg"],"28":["assets/img/proyectos/28/img1.jpg","assets/img/proyectos/28/img2.jpg","assets/img/proyectos/28/img3.jpg","assets/img/proyectos/28/img4.jpg","assets/img/proyectos/28/img5.jpg","assets/img/proyectos/28/img6.jpg","assets/img/proyectos/28/img7.jpg"],"29":["assets/img/proyectos/29/img1.jpg","assets/img/proyectos/29/img2.jpg","assets/img/proyectos/29/img3.jpg","assets/img/proyectos/29/img4.jpg","assets/img/proyectos/29/img5.jpg","assets/img/proyectos/29/img6.jpg","assets/img/proyectos/29/img7.jpg","assets/img/proyectos/29/img8.jpg"],"30":["assets/img/proyectos/30/img1.jpg","assets/img/proyectos/30/img2.jpg","assets/img/proyectos/30/img3.jpg","assets/img/proyectos/30/img4.jpg","assets/img/proyectos/30/img5.jpg"],"31":["assets/img/proyectos/31/img1.jpg","assets/img/proyectos/31/img2.jpg","assets/img/proyectos/31/img3.jpg","assets/img/proyectos/31/img4.jpg"],"32":["assets/img/proyectos/32/img1.jpg","assets/img/proyectos/32/img2.jpg","assets/img/proyectos/32/img3.jpg","assets/img/proyectos/32/img4.jpg","assets/img/proyectos/32/img5.jpg","assets/img/proyectos/32/img6.jpg"],"33":["assets/img/proyectos/33/img1.jpg","assets/img/proyectos/33/img2.jpg","assets/img/proyectos/33/img3.jpg","assets/img/proyectos/33/img4.jpg","assets/img/proyectos/33/img5.jpg","assets/img/proyectos/33/img6.jpg","assets/img/proyectos/33/img7.jpg"],"34":["assets/img/proyectos/34/img1.jpg","assets/img/proyectos/34/img2.jpg","assets/img/proyectos/34/img3.jpg","assets/img/proyectos/34/img4.jpg","assets/img/proyectos/34/img5.jpg","assets/img/proyectos/34/img6.jpg","assets/img/proyectos/34/img7.jpg","assets/img/proyectos/34/img8.jpg"]};
const PROJS = [
  {id:0, name:'Pabellón de España — Expo Milán 2015', cat:'pabellón exposiciones', year:'2015', loc:'Milán, Italia',
    desc:'Un lugar de reunión y descanso. Frente a grandes arquitecturas intensas y abigarradas, el pabellón ofrece un gran espacio público exterior —una PLAZA— como mejor representación de la cultura y el modo de vida al aire libre en España.\n\nLa parcela en L genera una larga crujía con una dilatación rectangular final. Se plantea un suelo creciente desde el acceso, totalmente accesible, que forma de manera natural una gran terraza y dos elementos de graderío hacia la plaza exterior de eventos.\n\nLa exposición principal hereda la tipología de calle exterior: una calle semiexterior que recorre la cultura, gastronomía, ocio y paisaje español, envuelta en una piel seductora y sorprendente. No es una exposición cerrada más, sino una experiencia expositiva de gran intensidad y atractivo.',
    data:{Año:'2014–2015',Tipología:'Pabellón internacional',Ubicación:'Milán, Italia',Cliente:'Ministerio de Cultura · Gobierno de España',Arquitectos:'J. Camacho, Mª E. Maciá, P. Delgado, A. Postigo, A. Herrera',Consultores:'Setisa, JG Ingenieros, Inés Ingenieros, Ibertrasa',Estado:'Construido'}},
  {id:1, name:'Guggenheim Helsinki Museum', cat:'museo', year:'2014', loc:'Helsinki, Finlandia',
    desc:'La construcción del Guggenheim en Helsinki supone la oportunidad de erigir un edificio que refleje el espíritu de toda una civilización. Un hito urbano que represente al ciudadano nórdico y proyecte su cultura al mundo, funcionando al mismo tiempo como lugar de encuentro y acogida.\n\nLa idea sintetiza el aspecto industrial del antiguo puerto en el exterior y lo dota de una habitabilidad cálida y acogedora en el interior. El tejado alberga una nueva calle elevada y protegida del viento que conecta el parque, la ciudad y el puerto —un lugar de paso y estancia ideal para eventos y descanso con vistas al mar.\n\nLa geometría se basa en los métodos de construcción del antiguo puerto industrial: un volumen puro recortado y desplazado para generar entradas de luz natural hacia las salas de exposición. La estructura se inspira en los entramados de madera de los barcos y astilleros, arraigando el edificio en su contexto.',
    data:{Año:'2014',Tipología:'Museo',Ubicación:'Helsinki, Finlandia',Cliente:'State of Finland',Arquitectos:'J. Camacho, Mª E. Maciá, A. Postigo, P. Delgado',Colaboradores:'Álvaro Rivera',Superficie:'12.000 m²',Estado:'Concurso internacional'}},
  {id:2, name:'Nuevo Auditorio de Campo de Criptana', cat:'auditorio', year:'2025', loc:'Campo de Criptana, CLM',
    desc:'Equipamiento cultural de escala singular en La Mancha. El nuevo auditorio articula usos culturales, cívicos y de ocio en torno a un foyer de triple altura. Sala principal para 600 espectadores.',
    data:{Año:'2025',Tipología:'Auditorio',Ubicación:'Campo de Criptana',Cliente:'Ayuntamiento',Superficie:'4.800 m²',Estado:'Proyecto ejecutivo'}},
  {id:3, name:'Sede ATENPRO — Ministerio de Igualdad', cat:'terciario', year:'2025', loc:'Madrid',
    desc:'Nueva sede para el servicio de teleasistencia del Ministerio de Igualdad. Los espacios de trabajo se organizan en torno a un patio central con fachada modular de alto rendimiento energético.',
    data:{Año:'2025',Tipología:'Edificio terciario',Ubicación:'Madrid',Cliente:'Ministerio de Igualdad',Superficie:'6.200 m²',Estado:'Proyecto'}},
  {id:4, name:'101 Viviendas VPP NSA1 — Madrid', cat:'vivienda social', year:'2020', loc:'Madrid',
    desc:'101 viviendas de protección pública para la EMVS en Madrid. Proyecto ganador de concurso que combina eficiencia energética con calidad espacial y tipologías adaptadas a la demanda actual.',
    data:{Año:'2020',Tipología:'Vivienda social',Ubicación:'Madrid',Cliente:'EMVS',Viviendas:'101 uds.',Estado:'1er Premio · Concurso'}},
  {id:5, name:'Lagos Park 2 — 77 viviendas Ikasa', cat:'vivienda colectiva', year:'2019', loc:'Madrid',
    desc:'Segunda fase de la promoción Lagos Park para Ikasa. 77 viviendas con espacios comunes de calidad y fachada de composición contemporánea.',
    data:{Año:'2019',Tipología:'Vivienda colectiva',Ubicación:'Madrid',Cliente:'Ikasa',Viviendas:'77 uds.',Estado:'Construido'}},
  {id:6, name:'Lagos Park 1 — 74 viviendas Ikasa', cat:'vivienda colectiva', year:'2018', loc:'Madrid',
    desc:'Primera fase de la promoción Lagos Park. 74 viviendas con especial atención a las zonas comunes y la integración con el entorno.',
    data:{Año:'2018',Tipología:'Vivienda colectiva',Ubicación:'Madrid',Cliente:'Ikasa',Viviendas:'74 uds.',Estado:'Construido'}},
  {id:7, name:'Remodelación Plaza de España', cat:'infraestructura', year:'2017', loc:'Madrid',
    desc:'La propuesta devuelve la plaza a los peatones eliminando el tráfico rodado perimetral, conectando el Palacio Real con la calle Princesa.',
    data:{Año:'2017',Tipología:'Espacio público',Ubicación:'Madrid',Estado:'Concurso',Superficie:'30.000 m²'}},
  {id:8, name:'Casa–Estudio en Montepríncipe', cat:'casa', year:'2015', loc:'Boadilla del Monte, Madrid',
    desc:'Vivienda unifamiliar y estudio profesional en la urbanización de Montepríncipe. El proyecto explora la relación entre espacio doméstico y de trabajo en un lenguaje contemporáneo.',
    data:{Año:'2015',Tipología:'Vivienda unifamiliar',Ubicación:'Boadilla del Monte, Madrid',Estado:'Construido'}},
  {id:9, name:'Rehabilitación Fábrica CLESA', cat:'terciario', year:'2016', loc:'Madrid',
    desc:'Recuperación del carácter industrial de la nave principal manteniendo la cubierta de shed original. El interior se transforma en mercado de proximidad, co-working y usos culturales.',
    data:{Año:'2016',Tipología:'Rehabilitación industrial',Ubicación:'Madrid',Estado:'1er Premio COAM',Superficie:'8.500 m²'}},
  {id:10, name:'Centro Integral de Transporte — Metro Madrid', cat:'infraestructura', year:'2016', loc:'Madrid',
    desc:'Nodo de intercambio multimodal que integra metro, autobús, bicicleta y vehículo privado. La propuesta prioriza la claridad de los flujos y la orientación del viajero.',
    data:{Año:'2016',Tipología:'Infraestructura de transporte',Ubicación:'Madrid',Cliente:'Metro de Madrid',Superficie:'5.400 m²',Estado:'Proyecto'}},
  {id:11, name:'Liget Budapest — Hungarian House of Music', cat:'auditorio', year:'2015', loc:'Budapest, Hungría',
    desc:'El edificio emerge del parque Liget de forma orgánica, con cubierta ajardinada que continúa el verde sobre el volumen. Los espacios expositivos dialogan continuamente con la naturaleza.',
    data:{Año:'2015',Tipología:'Museo de la música',Ubicación:'Budapest, Hungría',Superficie:'9.500 m²',Estado:'Concurso internacional'}},
  {id:12, name:'Symphonic Concert Hall — Varsovia', cat:'auditorio', year:'2015', loc:'Varsovia, Polonia',
    desc:'Sala de conciertos sinfónica con capacidad para 1.800 espectadores. La caja acústica de madera interior flota independiente de la estructura exterior, creando un hito urbano singular.',
    data:{Año:'2015',Tipología:'Sala de conciertos',Ubicación:'Varsovia, Polonia',Superficie:'18.000 m²',Estado:'Concurso internacional'}},
  {id:13, name:'Centro de Creación de las Artes — Alcorcón', cat:'auditorio', year:'2015', loc:'Alcorcón, Madrid',
    desc:'Equipamiento cultural que aúna auditorio, museo y espacios de creación artística. Una pieza urbana de referencia para Alcorcón que favorece la porosidad entre usos y espacio público.',
    data:{Año:'2015',Tipología:'Centro cultural',Ubicación:'Alcorcón, Madrid',Estado:'Construido'}},
  {id:14, name:'Dossier Candidatura Olímpica Madrid 2016', cat:'infraestructura', year:'2009', loc:'Madrid',
    desc:'Desarrollo del dossier de candidatura olímpica de Madrid 2016 incluyendo la propuesta de Villa Olímpica. Planteamiento integral de los equipamientos y el legado urbano post-olímpico.',
    data:{Año:'2009',Tipología:'Master plan olímpico',Ubicación:'Madrid',Estado:'Candidatura oficial'}},
  {id:15, name:'Teatro–Auditorio de Campo de Criptana', cat:'auditorio', year:'2013', loc:'Campo de Criptana, CLM',
    desc:'Primer proyecto para el equipamiento cultural de Campo de Criptana. El teatro-auditorio articula el programa cultural de la ciudad manchega en torno a una sala principal y espacios complementarios.',
    data:{Año:'2013',Tipología:'Teatro y auditorio',Ubicación:'Campo de Criptana',Estado:'Concurso'}},
  {id:16, name:'1690 Viviendas Villa Olímpica Madrid 2016', cat:'vivienda colectiva', year:'2009', loc:'Madrid',
    desc:'Propuesta residencial para la Villa Olímpica de la candidatura de Madrid 2016. 1.690 viviendas con un planteamiento de legado urbano post-olímpico transformable en barrio residencial sostenible.',
    data:{Año:'2009',Tipología:'Vivienda colectiva',Ubicación:'Madrid',Viviendas:'1.690 uds.',Estado:'Candidatura olímpica'}},
  {id:17, name:'Viviendas VPP Vallecas16 — Noche', cat:'vivienda social', year:'2015', loc:'Madrid',
    desc:'Visión nocturna del conjunto de viviendas de protección pública en Vallecas. La fachada iluminada muestra la calidad espacial y la articulación volumétrica del bloque.',
    data:{Año:'2015',Tipología:'Vivienda social',Ubicación:'Ensanche de Vallecas, Madrid',Cliente:'EMVS Madrid',Estado:'Construido'}},
  {id:18, name:'Viviendas VPP Vallecas16 — Día', cat:'vivienda social', year:'2015', loc:'Madrid',
    desc:'Conjunto de viviendas de protección pública para la EMVS en Vallecas. El bloque combina eficiencia energética, calidad espacial y economía constructiva en vivienda pública de referencia.',
    data:{Año:'2015',Tipología:'Vivienda social',Ubicación:'Ensanche de Vallecas, Madrid',Cliente:'EMVS Madrid',Estado:'Construido'}},
  {id:19, name:'Sede Olímpica — Velódromo Madrid 2016', cat:'infraestructura', year:'2009', loc:'Madrid',
    desc:'Propuesta para la sede olímpica del velódromo en el marco de la candidatura de Madrid 2016. El proyecto integra la instalación deportiva con el legado urbano y los accesos públicos.',
    data:{Año:'2009',Tipología:'Instalación deportiva',Ubicación:'Madrid',Estado:'Candidatura olímpica'}},
  {id:20, name:'Nuevo Mercado Barceló y Plaza Santa Bárbara', cat:'terciario', year:'2015', loc:'Madrid',
    desc:'El nuevo Mercado de Barceló integra el programa de mercado tradicional con usos culturales y la remodelación del entorno de la Plaza de Santa Bárbara, creando un nuevo centro cívico de barrio.',
    data:{Año:'2015',Tipología:'Mercado y espacio público',Ubicación:'Madrid',Estado:'Concurso',Superficie:'12.000 m²'}},
  {id:21, name:'Viviendas VPO — Ministerio de la Vivienda, Mieres', cat:'vivienda social', year:'2015', loc:'Mieres, Asturias',
    desc:'Viviendas de protección oficial para el Ministerio de la Vivienda en Mieres, Asturias. El proyecto se adapta a la topografía del terreno y al carácter del paisaje industrial asturiano.',
    data:{Año:'2015',Tipología:'Vivienda social',Ubicación:'Mieres, Asturias',Cliente:'Ministerio de la Vivienda',Estado:'Concurso'}},
  {id:22, name:'Centro de Creación de las Artes — Alcorcón (fase 1)', cat:'auditorio', year:'2009', loc:'Alcorcón, Madrid',
    desc:'Primera fase del Centro de Creación de las Artes de Alcorcón. El proyecto establece las bases del equipamiento cultural que se desarrollará en fases posteriores.',
    data:{Año:'2009',Tipología:'Centro cultural',Ubicación:'Alcorcón, Madrid',Estado:'Construido'}},
  {id:23, name:'Viviendas VPP Vallecas 36 — EMVS', cat:'vivienda social', year:'2015', loc:'Madrid',
    desc:'Viviendas de protección pública para la Empresa Municipal de Vivienda en el Ensanche de Vallecas. Combinación de eficiencia energética, calidad espacial y economía constructiva.',
    data:{Año:'2015',Tipología:'Vivienda social',Ubicación:'Ensanche de Vallecas, Madrid',Cliente:'EMVS Madrid',Estado:'Construido'}},
  {id:24, name:'108 Viviendas VPP — Leganés', cat:'vivienda social', year:'2025', loc:'Leganés, Madrid',
    desc:'Conjunto de 108 viviendas de protección pública para la EMVS en Leganés. Tipologías de 1, 2 y 3 dormitorios con espacios comunes de calidad y fachada eficiente.',
    data:{Año:'2025',Tipología:'Vivienda social',Ubicación:'Leganés, Madrid',Cliente:'EMVS',Viviendas:'108 uds.',Estado:'Proyecto básico'}},
  {id:25, name:'Palacio de Congresos — Vitoria-Gasteiz', cat:'auditorio', year:'2015', loc:'Vitoria-Gasteiz',
    desc:'Concurso para el nuevo Palacio de Congresos y Auditorio de la capital vasca. Auditorio para 1.200 personas y salas de congreso para 2.000 participantes.',
    data:{Año:'2015',Tipología:'Auditorio y congresos',Ubicación:'Vitoria-Gasteiz',Superficie:'22.000 m²',Estado:'Concurso'}},
  {id:26, name:'116 Viviendas y Club Social — Urbanización Santa Clara, Marbella', cat:'vivienda colectiva', year:'2016', loc:'Boadilla del Monte, Madrid',
    desc:'116 viviendas y Club Social en la urbanización Santa Clara. Los bloques escalonados maximizan la luz solar con terrazas privadas, jardines comunitarios y club social.',
    data:{Año:'2016',Tipología:'Vivienda colectiva',Ubicación:'Boadilla del Monte, Madrid',Viviendas:'116 uds.',Estado:'Proyecto'}},
  {id:27, name:'Vivienda Unifamiliar — Vitoria-Gasteiz', cat:'casa', year:'2015', loc:'Vitoria-Gasteiz',
    desc:'Vivienda unifamiliar en Vitoria-Gasteiz. El proyecto explora el lenguaje doméstico contemporáneo adaptado al clima vasco con especial atención a la eficiencia energética y la relación interior-exterior.',
    data:{Año:'2015',Tipología:'Vivienda unifamiliar',Ubicación:'Vitoria-Gasteiz',Estado:'Construido'}},
,
  {id:28,name:'Nuevo Parque de Los Castillos — Alcorcón',cat:'auditorio',year:'2005',loc:'Alcorcón, Madrid',
   desc:'Desde su concepción inicial de proyecto, además de resolver las extensas y complejas necesidades programáticas, se busca la formalización final de un gran nuevo parque urbano de más de 60.000m².\n\nCREAA dota a la ciudad de Alcorcón de una importante dotación cultural a la vez que se consolida un gran nuevo parque urbano. La solución adoptada de enterramiento de la mayor parte de la edificación genera importantes beneficios en sostenibilidad pasiva.',
   data:{'Tipo':'Proyecto','Año':'2005','Superficie':'60.000 m²','Localización':'Alcorcón, Madrid'}},
  {id:29,name:'Circo Estable de Alcorcón',cat:'auditorio',year:'2005',loc:'Alcorcón, Madrid',
   desc:'El Parque de Los Castillos destaca en su entorno residencial por ser un gran espacio abierto y verde de uso público.\n\nSobre este paisaje de colinas de distintos materiales —piedra, madera, tierra, vegetación— se alza el circo estable, un objeto cristalino y de formas depuradas, a modo de gran mirador de la actividad circense interior.',
   data:{'Tipo':'Proyecto','Año':'2005','Localización':'Alcorcón, Madrid'}},
  {id:30,name:'Viviendas en las Antiguas Cocheras de Bravo Murillo',cat:'vivienda colectiva',year:'2007',loc:'Madrid',
   desc:'La propuesta se ubica en el actual vacío urbano procedente de las antiguas cocheras de la EMT, situado al comienzo de Bravo Murillo desde Cuatro Caminos, en una zona de alta densidad urbana.\n\nProponemos la agrupación residencial en un bloque lineal que disponga todas las viviendas en una única crujía, esponjado sistemáticamente por oquedades abiertas vinculadas a conexiones verticales y zonas comunes.',
   data:{'Tipo':'Proyecto','Año':'2007','Localización':'Madrid'}},
  {id:31,name:'Centro Universitario, Biblioteca e Iglesia en Málaga',cat:'terciario',year:'2008',loc:'Málaga',
   desc:'Se plantea un gran centro de relación universitaria y parroquial en el Romeral de Málaga con usos de centro universitario, colegio mayor, biblioteca e iglesia.\n\nEl edificio se entiende como una gran cubierta que se despega del suelo y en su creciente formalización se convierte en la gran iglesia, generando un intenso espacio de relación interior.',
   data:{'Tipo':'Proyecto','Año':'2008','Localización':'Málaga'}},
  {id:32,name:'103 Viviendas Nuestra Señora de los Ángeles 1',cat:'vivienda colectiva',year:'2010',loc:'Madrid',
   desc:'Se opta por generar espacios de miradores entre dos pieles de fachada: una piel interior con huecos acristalados de suelo a techo; y una piel exterior de parasoles plegables de chapas estiradas de aluminio, generando una deseable vibración de la fachada a la calle.',
   data:{'Tipo':'Proyecto','Año':'2010','Viviendas':'103','Localización':'Madrid'}},
  {id:33,name:'Campus de la Justicia — Valladolid',cat:'terciario',year:'2014',loc:'Valladolid',
   desc:'La propuesta se ubica en un área urbanizada consolidada por edificación residencial. La parcela ocupa 24.462 m² de forma irregular, lindando a vías rodadas en todos sus lados.\n\nEl volumen edificado se ordena como elemento de remate de la Avenida José Luis Arrese, siendo su acceso principal desde la ciudad histórica.',
   data:{'Tipo':'Proyecto','Año':'2014','Superficie':'24.462 m²','Localización':'Valladolid'}},
  {id:34,name:'95 Viviendas — Proyecto Madrid 0.0',cat:'vivienda colectiva',year:'2015',loc:'Madrid',
   desc:'La propuesta se sitúa en dos parcelas del ámbito "Los Girasoles" UEDB22, un área de ensanche urbano de reciente creación con carácter principalmente residencial y terciario.\n\nProponemos una solución formal que aspira a crear entornos definidos y reconocibles a través de las cualidades expresivas de sus cerramientos.',
   data:{'Tipo':'Proyecto','Año':'2015','Viviendas':'95','Localización':'Madrid'}}
];

const AWARDS = [
  {year:'2025',name:'Nuevo Auditorio Campo de Criptana',type:'1.er Premio · Concurso de ideas'},
  {year:'2025',name:'Sede ATENPRO Ministerio Igualdad',type:'Proyecto seleccionado'},
  {year:'2022',name:'La Arquitectura de los Arquitectos',type:'Exposición · COAM Madrid'},
  {year:'2021',name:'40 años transformando Madrid',type:'Exposición · Ayto. Madrid'},
  {year:'2020',name:'101 Viviendas VPP NSA1 Madrid',type:'1.er Premio · EMVS'},
  {year:'2017',name:'Remodelación Plaza de España',type:'Concurso internacional'},
  {year:'2016',name:'Rehabilitación Fábrica CLESA',type:'1.er Premio · COAM'},
  {year:'2015',name:'Pabellón España — Expo Milán',type:'Representación oficial'},
  {year:'2015',name:'Centro Creación Artes Alcorcón',type:'Premio obra construida'},
  {year:'2013',name:'Mostra Espanha — Jovens Arquitetos',type:'Exposición · Oporto'},
  {year:'2012',name:'YAS — Young Architects of Spain',type:'Exposición · Nueva York'},
  {year:'2011',name:'YAS — Young Architects of Spain',type:'Exposición · Washington'},
  {year:'2010',name:'JAE — Jóvenes Arquitectos de España',type:'Exposición · Bruselas'},
];

const EXPOS = [
  {year:'2022',name:'La Arquitectura de los Arquitectos',place:'COAM, Madrid'},
  {year:'2021',name:'40 años transformando Madrid',place:'Ayuntamiento de Madrid'},
  {year:'2017',name:'Manzana Verde — Proyectos Premiados',place:'Málaga'},
  {year:'2016',name:'Concurso Rehabilitación CLESA',place:'COAM, Madrid'},
  {year:'2015',name:'Paréntesis — Prácticas Arquitectónicas',place:'COAM, Madrid'},
  {year:'2013',name:'Mostra Espanha — Jovens Arquitetos',place:'Museo Soares dos Reis, Oporto'},
  {year:'2012',name:'YAS — Young Architects of Spain',place:'Instituto Cervantes, Nueva York'},
  {year:'2011',name:'YAS — Young Architects of Spain',place:'AIA, Washington D.C.'},
  {year:'2010',name:'JAE — Jóvenes Arquitectos de España',place:'Casa de Asturias, Bruselas'},
  {year:'2009',name:'YAS — Young Architects of Spain',place:'GSAPP Columbia University, NY'},
];

const FILTERS = ['Todos','auditorio','museo','vivienda colectiva','vivienda social','terciario','infraestructura','pabellón exposiciones','casa'];
const ARR = '<svg width="14" height="10" viewBox="0 0 18 10" fill="none"><path d="M1 5H17M17 5L13 1M17 5L13 9" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

/* CURSOR */
const C=document.getElementById('C'),CR=document.getElementById('CR');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;C.style.left=mx-2.5+'px';C.style.top=my-2.5+'px';},{passive:true});
(function a(){rx+=(mx-rx)*.1;ry+=(my-ry)*.1;CR.style.left=rx-15+'px';CR.style.top=ry-15+'px';requestAnimationFrame(a);})();
document.addEventListener('mouseover',e=>{if(e.target.closest('a,button,.g-item,.pl-item,.pm-row'))document.body.classList.add('h');},{passive:true});
document.addEventListener('mouseout',e=>{if(e.target.closest('a,button,.g-item,.pl-item,.pm-row'))document.body.classList.remove('h');},{passive:true});

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
  w.innerHTML=HERO_SLIDES.map((s,i)=>`<img src="${s.photo}" alt="${s.name}" class="${i===0?'on':''}">`).join('');
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
      renderVertList();
    });
  }
  renderVertList();
}

function renderVertList(){
  const list=document.getElementById('pjVertList');
  const items=af==='Todos'?PROJS:PROJS.filter(p=>p.cat===af);
  document.getElementById('pjCount').textContent=items.length+' proyecto'+(items.length!==1?'s':'');

  list.innerHTML=items.map((p,i)=>`
    <div class="pj-vert-item" data-pid="${p.id}">
      <div class="pj-vi-num">${String(i+1).padStart(2,'0')}</div>
      <div class="pj-vi-main">
        <div class="pj-vi-img">${PHOTOS[p.id]?`<img src="${PHOTOS[p.id]}" alt="${p.name}" loading="lazy">`:''}
        </div>
        <div class="pj-vi-text">
          <div class="pj-vi-cat">${CAT_LABELS[p.cat]||p.cat}</div>
          <div class="pj-vi-name">${p.name}</div>
        </div>
      </div>
      <div class="pj-vi-right">
        <span class="pj-vi-loc">${p.loc||''}</span>
        <span class="pj-vi-year">${p.year}</span>
        <div class="pj-vi-arrow"></div>
      </div>
    </div>`).join('');

  // Event delegation - no inline onclick needed
  list.querySelectorAll('.pj-vert-item').forEach(row=>{
    row.addEventListener('click',()=>go('single',parseInt(row.dataset.pid)));
  });

  setTimeout(()=>{
    const rows=list.querySelectorAll('.pj-vert-item');
    const io=new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting){e.target.classList.add('revealed');io.unobserve(e.target);}
      });
    },{threshold:.08,rootMargin:'0px 0px -20px 0px'});
    rows.forEach(r=>io.observe(r));
    observe();
  },60);
}

/* SINGLE */
function renderSingle(id){
  const p=PROJS[id];
  document.getElementById('spTitle').innerHTML=p.name;
  document.getElementById('spCat').textContent='— '+p.cat+' · '+p.year;
  const img=document.getElementById('spImg');
  if(PHOTOS[id]){img.src=PHOTOS[id];img.alt=p.name;}
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
        return '<div class="sp-img-item"><div class="sp-img-inner"><img src="'+src+'" alt="'+p.name+'" loading="lazy"></div></div>';
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