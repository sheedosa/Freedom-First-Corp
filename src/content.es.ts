import { type Content } from './content';

// Spanish (es) mirror of content.ts. Neutral international Spanish, formal
// corporate register. AI-authored draft — flag for native-speaker review before
// launch (especially energy/technical terminology).
// Non-translatable fields (href, link, image, bgImage, id, coordinates, email,
// social URLs, language codes, US postal address, stat units, brand/company/place
// proper nouns) are kept identical to the English source.
export const contentEs: Content = {
  nav: {
    items: [
      {
        label: 'Inicio',
        href: '/',
      },
      {
        label: 'Nosotros',
        href: '/about',
        dropdown: [
          { label: 'Fundamento', href: '/about#who-we-are' },
          { label: 'Liderazgo', href: '/about#leadership' },
          { label: 'Mensaje del CEO', href: '/about#ceomessage' }
        ]
      },
      {
        label: 'Capacidades',
        href: '/capabilities',
        dropdown: [
          { label: 'Exploración y Producción', href: '/capabilities#upstream' },
          { label: 'Transporte y Almacenamiento', href: '/capabilities#midstream' },
          { label: 'Refinación y Distribución', href: '/capabilities#downstream' },
          { label: 'Protección de Activos', href: '/capabilities#asset-protection' },
          { label: 'Comercialización de Energía', href: '/capabilities#energy-trading' }
        ]
      },
      {
        label: 'Enfoque',
        href: '/approach',
        dropdown: [
          { label: 'Ejecución Directa en el Activo', href: '/approach#direct-to-asset' },
          { label: 'HSE y Capacidad Local', href: '/approach#hse-capability' },
          { label: 'Alineación Comercial', href: '/approach#commercial-alignment' }
        ]
      },
      {
        label: 'Perspectivas',
        href: '/insights'
      }
    ],
    languages: [
      { code: 'EN', label: 'Inglés', active: true },
      { code: 'AR', label: 'Árabe', active: true },
      { code: 'ES', label: 'Español', active: true }
    ],
    cta: 'Contacto'
  },
  hero: {
    eyebrow: 'FREEDOM FIRST',
    title: 'Soluciones del Sector Privado para la Estabilidad y el Crecimiento',
    subhead: 'Al combinar el desarrollo energético, la inversión en infraestructura y la protección estratégica de activos, ayudamos a construir economías más fuertes y autosuficientes.',
    ctaPrimary: 'Nuestras Capacidades',
    bgImage: '/images/hero-bg.jpg'
  },
  capabilitiesSection: {
    header: 'Impulsamos el Crecimiento de la Producción a lo Largo de la Vida del Activo',
    items: [
      {
        title: 'Exploración y Producción',
        description: 'Maximice la producción desde el yacimiento hasta la cabeza de pozo con una ejecución en campo estadounidense de primer nivel.',
        image: '/images/cap-upstream.jpg',
        link: '/capabilities#upstream'
      },
      {
        title: 'Transporte y Almacenamiento',
        description: 'Atacamos los cuellos de botella y desplegamos infraestructura de alta capacidad para garantizar un flujo continuo de hidrocarburos.',
        image: '/images/cap-midstream.jpg',
        link: '/capabilities#midstream'
      },
      {
        title: 'Refinación y Distribución',
        description: 'Aseguramos la máxima disponibilidad de las instalaciones y maximizamos los rendimientos de refinación mediante ingeniería estadounidense de primer nivel.',
        image: '/images/cap-downstream.jpg',
        link: '/capabilities#downstream'
      },
      {
        title: 'Protección de Activos',
        description: 'Creamos entornos seguros que reducen el riesgo, atraen inversión y protegen los activos críticos.',
        image: '/images/cap-asset-protection.jpg',
        link: '/capabilities#asset-protection'
      },
      {
        title: 'Comercialización de Energía',
        description: 'Conectamos la producción física directamente con los mercados de alta demanda y aseguramos el máximo retorno comercial.',
        image: '/images/cap-trading.jpg',
        link: '/capabilities#energy-trading'
      }
    ]
  },
  whereWeDoIt: {
    header: 'En los Lugares Donde la Ejecución Comprobada Más Importa',
    message: 'Cuando los proyectos se estancan, la producción rinde por debajo de lo esperado o los enfoques convencionales se quedan cortos, Freedom First aporta experiencia estadounidense para liberar el potencial energético.',
    cta: 'Con Quién Trabajamos',
    ctaLink: '/approach#stakeholders',
    legendLabel: 'Nuestra Presencia Operativa',
    countries: [
      {
        id: 'libya',
        name: 'Libia',
        brief: 'Asociación técnica y mejora de la producción, aportando estabilidad y disciplina de ejecución a activos críticos.',
        coordinates: [17.2283, 26.3351]
      },
      {
        id: 'venezuela',
        name: 'Venezuela',
        brief: 'Asesoría estratégica y soporte técnico para la reactivación de campos maduros, con foco en la recuperación de crudo pesado y la modernización de la infraestructura.',
        coordinates: [-66.5897, 6.4238]
      },
      {
        id: 'somalia',
        name: 'Somalia',
        brief: 'Exploración en campos nuevos y asesoría regulatoria, ayudando a establecer estándares de clase mundial para un sector energético en desarrollo.',
        coordinates: [46.1996, 5.1521]
      }
    ]
  },
  advantages: {
    header: 'Diseñados para la Realidad del Terreno',
    message: 'Freedom First aplica un enfoque «por, con y a través de» para ejecutar con la rapidez, la flexibilidad y la preparación local necesarias para mantener el trabajo en marcha en entornos difíciles.',
    items: [
      {
        title: 'Experiencia *Probada en Campo*',
        description: 'Aplicamos métodos probados en campo y estrategias técnicas que reducen las conjeturas, mejoran el desempeño y cumplen las metas de producción.',
        image: '/images/us-expertise.jpg'
      },
      {
        title: 'Red de Especialistas en Energía',
        description: 'Aprovechamos profundas redes del sector para incorporar ingenieros y especialistas técnicos de probada trayectoria de Estados Unidos y del sector mundial de hidrocarburos.',
        image: '/images/adv-network.jpg'
      },
      {
        title: 'Ejecución Ágil e Independiente',
        description: 'Nos movemos sin el lastre de la burocracia de las grandes compañías, con capacidad para adaptarnos a las realidades técnicas, logísticas y comerciales y lograr resultados.',
        image: '/images/adv-agile.jpg'
      },
      {
        title: 'Ventaja Directa en la Cadena de Suministro',
        description: 'Al trabajar más cerca de la fuente, ayudamos a reducir la fuga de valor, controlar los costos y mejorar la economía del proyecto en toda la cadena.',
        image: '/images/adv-supply.jpg'
      }
    ],
    ctaPrimary: 'Nuestras Capacidades',
    ctaPrimaryLink: '/capabilities',
    ctaSecondary: 'Conozca a Nuestro Equipo de Expertos',
    ctaSecondaryLink: '/about#leadership'
  },
  homeCta: {
    eyebrow: 'Listos para Avanzar',
    header: 'Libere el Verdadero Valor de Sus Activos',
    message: 'Vea cómo nuestro equipo diagnostica sus limitaciones, diseña las soluciones y vuelve a poner en marcha la producción detenida.',
    ctaLabel: 'Explore Nuestras Capacidades',
    ctaLink: '/capabilities'
  },
  partnerships: {
    section1: {
      header: 'Dotamos a los mercados emergentes de las herramientas para lograr la autosuficiencia',
      message: 'Con demasiada frecuencia, los mercados más ricos en recursos del mundo se ven frenados por la falta de inversión y por barreras técnicas.\n\nEn Freedom First creemos que estas naciones deben contar con las herramientas para desarrollar sus propios activos, superar la dependencia de la ayuda externa y construir una verdadera autosuficiencia económica.'
    },
    section2: {
      header: 'Nuestro enfoque se basa en la colaboración directa, no solo en la extracción',
      message: 'Mediante la inversión estratégica y una capacitación integral, devolvemos el valor de los recursos a las personas.\n\nTrabajamos codo a codo con los países anfitriones para desarrollar de forma responsable su potencial energético, asegurando que el crecimiento de la producción de hoy construya una fuerza laboral autosuficiente para el futuro.'
    },
    ctaPrimary: 'Nuestro Enfoque',
    ctaPrimaryLink: '/approach',
    ctaSecondary: 'Vea Nuestras Últimas Noticias',
    ctaSecondaryLink: '/insights'
  },
  footer: {
    navigate: {
      title: 'Navegación',
      links: [
        { label: 'Inicio', href: '/' },
        { label: 'Nosotros', href: '/about' },
        { label: 'Capacidades', href: '/capabilities' },
        { label: 'Enfoque', href: '/approach' },
        { label: 'Perspectivas', href: '/insights' },
        { label: 'Contacto', href: '/contact' },
      ]
    },
    contactForm: {
      title: 'Contáctenos',
      fields: [
        { name: 'name', label: 'Nombre', type: 'text' },
        { name: 'email', label: 'Correo electrónico', type: 'email' },
        { name: 'company', label: 'Empresa', type: 'text' },
        { name: 'message', label: 'Mensaje', type: 'textarea' }
      ],
      cta: 'Enviar Mensaje'
    },
    company: {
      name: 'Freedom First Global',
      offices: [
        {
          city: 'The Woodlands, TX',
          address: '2700 Research Forest Dr.\nSuite 105\nThe Woodlands, TX 77381'
        },
        {
          city: 'Abu Dabi, EAU',
          address: '811N, Piso 8, Tamouh Tower,\nTamouh, Al Reem Island, Abu Dabi\nEmiratos Árabes Unidos'
        }
      ],
      social: {
        email: 'info@freedomfirstglobal.com',
        linkedin: 'https://www.linkedin.com/company/freedom-first-corp',
        facebook: 'https://www.facebook.com/profile.php?id=61560491723699',
        x: '#'
      }
    }
  },
  about: {
    hero: {
      title: 'Un Socio Técnico de Producción Creado para el Terreno',
      image: '/images/about-hero.jpg'
    },
    content: {
      title: 'Nuestro Fundamento',
      paragraphs: [
        'Freedom First nació de una convicción sencilla: el desarrollo energético debe fortalecer a las naciones, ampliar las oportunidades económicas y generar una estabilidad duradera, no solo para los gobiernos o los inversionistas, sino para las personas que llaman hogar a esas naciones.',
        'Forjados en Texas, llevamos el espíritu emprendedor, la experiencia en ingeniería y la cultura orientada a la ejecución que transformaron la producción energética estadounidense a los mercados emergentes de todo el mundo. Creemos que el sector privado rinde mejor cuando lo guían la responsabilidad, la rapidez y la resolución práctica de problemas, no la burocracia. Y damos un paso al frente allí donde otros se han retirado.',
        'Nos asociamos directamente con las naciones anfitrionas y los operadores locales para restablecer la producción, modernizar la infraestructura y liberar todo el valor de los activos energéticos críticos. Pero nuestro trabajo va más allá del campo. Invertimos en la capacidad local, fortalecemos la independencia energética y construimos sistemas resilientes diseñados para el crecimiento a largo plazo, porque el verdadero desarrollo significa comunidades capaces de valerse por sí mismas.',
        'No nos limitamos a extraer valor y marcharnos. Construimos sistemas, desarrollamos talento y creamos motores de oportunidad que permiten a las personas recuperar las riendas de su futuro. Los verdaderos accionistas de cualquier nación rica en recursos son sus habitantes, y es exactamente para ellos para quienes trabajamos.',
        'Nuestra misión es clara: ayudar a las naciones a convertir sus activos naturales en una fortaleza económica duradera mediante alianzas de confianza, excelencia técnica y resultados que perduran.'
      ]
    },
    principles: {
      header: 'Guiados por el Mandato de Ejecutar, Optimizar y Localizar Capacidades',
      vision: {
        title: 'Nuestra Visión',
        text: 'Ver a las naciones ricas en recursos alcanzar una verdadera autosuficiencia económica al contar con la capacidad técnica y la infraestructura para controlar, operar y maximizar plenamente su propio potencial energético.'
      },
      mission: {
        title: 'Nuestra Misión',
        text: 'Llevar capacidades comprobadas en campo directamente al activo. Sorteamos los obstáculos para acelerar la producción, optimizar los campos existentes y desarrollar la capacidad de la fuerza laboral local para un sector energético resiliente e independiente.'
      },
      principles: {
        title: 'Nuestros Principios',
        intro: 'Rechazamos el ciclo de la dependencia externa centrándonos estrictamente en la entrega y el desarrollo de capacidades. Nuestro trabajo se guía por tres principios fundamentales:',
        items: [
          {
            label: 'Ejecutar con Disciplina',
            text: 'Eliminamos las conjeturas operativas desplegando metodologías probadas que garantizan una entrega segura y fiable en entornos complejos.'
          },
          {
            label: 'Optimizar el Activo',
            text: 'Alineamos nuestro éxito directamente con las prioridades del país anfitrión, maximizando la producción para alcanzar las metas nacionales.'
          },
          {
            label: 'Localizar la Fuerza Laboral',
            text: 'No nos limitamos a extraer valor; nos aseguramos de que cada proyecto impulse una verdadera transferencia de conocimiento para empoderar a quienes operan los activos.'
          }
        ]
      }
    },
    leadership: {
      members: [
        {
          name: 'Ryan Manicom',
          role: 'Cofundador, Presidente y CEO',
          paragraphs: [
            'Ryan es Cofundador, Presidente y CEO de Freedom First Global, donde dirige una cartera diversa de empresas internacionales. Graduado de Texas Tech University, comenzó su carrera en desarrollo de negocios, ayudando a expandir soluciones avanzadas de rendimiento de activos desde el sector de la defensa hacia el sector energético.',
            'Posteriormente ocupó cargos de liderazgo en mercados energéticos de todo el mundo, incluidos Papúa Nueva Guinea, Myanmar e Irak. Su trabajo se ha centrado en el desarrollo de proyectos a gran escala, el liderazgo operativo y enfoques innovadores para la infraestructura energética, destacando especialmente soluciones pioneras para la mitigación de la quema de gas en mercados emergentes.',
            'Con base en Houston, Ryan es un firme defensor del liderazgo del sector privado en el desarrollo global. Le apasiona especialmente extender el éxito y la innovación de la industria energética de Texas, incluida la Cuenca Pérmica, a regiones de alto crecimiento en todo el mundo.',
            'A través de Freedom First Global, Ryan está comprometido con invertir en las comunidades, formarlas y empoderarlas, impulsado por la convicción de que el ingenio y la oportunidad existen en todos los mercados.'
          ]
        },
        {
          name: 'Erik Prince',
          role: 'Cofundador',
          paragraphs: [
            'Erik es un empresario, inversionista y autor estadounidense, y exoficial de los Navy SEAL de Estados Unidos, que fundó Blackwater, una de las primeras compañías militares privadas de alcance global. Bajo el liderazgo de Erik, Blackwater ejecutó más de USD 2.000 millones en contratos de seguridad gubernamentales, abarcando operaciones en países de todo el mundo, como Irak, Afganistán, Bosnia, Israel, Azerbaiyán, Japón, Pakistán y Uzbekistán.'
          ],
          bullets: [
            'Es Cofundador de Freedom First, que invierte en proyectos de energía, agricultura, tecnología e infraestructura en regiones donde convergen la seguridad, la logística y la inversión.',
            'Anteriormente, Erik fundó Frontier Resource Group, una firma de capital privado, y fue Presidente de Frontier Service Group, cotizada en Hong Kong, hasta 2021; Frontier se centraba en las industrias extractivas en Asia y África.',
            'La actual empresa de Erik orientada a la seguridad, Vectus, ayuda a los gobiernos en asuntos de seguridad nacional y contribuye a financiar las soluciones de seguridad incrementando los ingresos internos mediante la implementación de planes eficaces de recaudación de impuestos y aranceles, entre otras medidas.'
          ]
        }
      ]
    },
    dataStrip: {
      header: 'Definidos por una Trayectoria de Ejecución',
      stats: [
        { label: 'Pozos Gestionados', value: '1.000+', sublabel: '(En tierra y costa afuera)' },
        { label: 'Producción Máxima Alcanzada', value: '1 BSCFD', sublabel: '(Barnett Shale)' },
        { label: 'Presupuestos de Proyecto Ejecutados', value: 'USD 1.000 M+', sublabel: 'Gestionados con éxito' }
      ]
    },
    advisors: {
      header: 'Respaldados por Asesores Estratégicos Experimentados',
      members: [
        {
          name: 'Ted Hogan',
          role: 'Vicepresidente',
          summary: 'Ted aporta décadas de experiencia en crecimiento operativo y comercial dentro del sector de servicios petroleros. Cofundó Light Tower Rentals (LTR) en 1994, llevando el negocio de equipos a convertirse en una organización de alcance nacional. Tras alianzas institucionales estratégicas y una fusión, LTR se convirtió en Gravity Oilfield Services, donde Ted pasó a ocupar el cargo de Vicepresidente.',
          expandedBio: 'Su especialidad radica en escalar operaciones de equipos industriales, estructurar inversiones institucionales y mantener una prestación de servicios rigurosa en todo el sector energético.'
        },
        {
          name: 'Colby Fuser',
          role: 'Asesor',
          summary: 'Colby aporta más de 20 años de liderazgo ejecutivo y operativo en la industria mundial del petróleo y el gas. Durante su etapa en Halliburton Energy Services, gestionó operaciones a gran escala como Vicepresidente Regional para la región de Asia-Pacífico y ocupó cargos ejecutivos de alto nivel en el norte de África y el Medio Oriente.',
          expandedBio: 'Actualmente se desempeña como Presidente y CEO de E3 Company tras su exitosa adquisición por capital privado. Colby aporta a Freedom First una profunda experiencia en operaciones de campo internacionales, integración de fusiones y adquisiciones, y rigurosos estándares de seguridad.'
        },
        {
          name: 'Richard Anderson',
          role: 'Asesor',
          summary: 'Richard es un ejecutivo del sector energético y contador público certificado con amplia experiencia en exploración internacional y gobernanza financiera. Recientemente se desempeñó como CEO de Coastline Exploration, dirigiendo operaciones de petróleo y gas costa afuera en Somalia.',
          expandedBio: 'Su trayectoria incluye haberse desempeñado como Director Financiero de Eurasia Drilling Company Limited y haber ocupado cargos directivos en importantes operadores globales como Transocean Ltd. y Vanguard Natural Resources. Richard aporta un rigor financiero crítico, disciplina de capital y experiencia en gobernanza de mercados cotizados a las operaciones internacionales de Freedom First.'
        }
      ]
    },
    ceoMessage: {
      header: 'Mensaje del CEO',
      subheader: 'De la Cuenca Pérmica a los Mercados Emergentes',
      quote: '«Freedom First nació de la convicción de que el liderazgo estadounidense, la libre empresa y una gobernanza sólida pueden impulsar una prosperidad duradera en los mercados emergentes. Inspirados por la fortaleza, la innovación y la independencia energética de la Cuenca Pérmica, buscamos exportar los principios comprobados que convirtieron a Texas en un líder energético mundial.\n\nNuestro equipo reúne a los mejores expertos en cada faceta del desarrollo energético, unidos por la misión de invertir en mercados estratégicos, empoderar a las fuerzas laborales locales y promover la próxima generación de liderazgo del sector privado. Mediante la inversión estratégica, la excelencia operativa y alianzas orientadas al valor, Freedom First se compromete a fortalecer la seguridad energética, el crecimiento económico y la estabilidad a largo plazo en todo el mundo.»',
      author: 'Ryan Manicom',
      authorTitle: 'Presidente/CEO'
    },
    finalCta: {
      header: 'Impulse la Producción Detenida',
      message: 'Vea cómo nuestro equipo diagnostica sus limitaciones, diseña las soluciones y vuelve a poner en marcha la producción detenida.',
      ctaLabel: 'Explore Nuestras Capacidades',
      ctaLink: '/capabilities'
    }
  },
  capabilitiesPage: {
    hero: {
      title: 'Impulsando la Ejecución en Toda la Cadena de Valor Energética',
      subtitle: 'Desde las operaciones de exploración y producción hasta el acceso a mercados globales, maximizamos el valor de los activos energéticos en cada etapa de su ciclo de vida.'
    },
    subNav: [
      { label: 'Exploración y Producción', href: '#upstream' },
      { label: 'Transporte y Almacenamiento', href: '#midstream' },
      { label: 'Refinación y Distribución', href: '#downstream' },
      { label: 'Protección de Activos', href: '#asset-protection' },
      { label: 'Comercialización y Logística de Energía', href: '#energy-trading' }
    ],
    sections: [
      {
        id: 'upstream',
        tag: 'Exploración y Producción',
        header: 'Generando un Crecimiento Medible de la Producción',
        message: 'Aportamos experiencia estadounidense de primer nivel para impulsar un crecimiento verificable de la producción. Desde acelerar el camino hacia el primer barril hasta reactivar activos maduros (brownfield) detenidos, nuestra especialidad es diseñar las soluciones necesarias para romper los bloqueos operativos, desplegar tecnologías de extracción avanzadas y mantener el flujo de los barriles.',
        deliverables: [
          { title: 'Exploración y Evaluación del Subsuelo', text: 'Realizamos evaluaciones geológicas y sísmicas detalladas para identificar reservas viables y modelar los datos necesarios para fundamentar las decisiones de desarrollo.' },
          { title: 'Servicios de Perforación Avanzada', text: 'Desplegamos tecnologías avanzadas y equipos de campo de élite para ejecutar programas de perforación que optimizan el emplazamiento, reducen el tiempo no productivo y aseguran las reservas.' },
          { title: 'Reacondicionamiento y Optimización de Pozos', text: 'Ejecutamos intervenciones de pozo específicas, desde el mantenimiento rutinario hasta reacondicionamientos mecánicos complejos, para restaurar la integridad del pozo y optimizar el desempeño del flujo.' },
          { title: 'Operaciones de Campo y Soporte de Instalaciones', text: 'Dirigimos la gestión integral del campo, desde la puesta en marcha y el mantenimiento preventivo hasta los protocolos de respuesta rápida ante emergencias, para garantizar la fiabilidad del activo.' }
        ]
      },
      {
        id: 'midstream',
        tag: 'Transporte y Almacenamiento',
        header: 'Optimizando el Camino de la Producción al Procesamiento',
        message: 'Construimos, gestionamos y escalamos la infraestructura de transporte y almacenamiento crítica necesaria para mover los hidrocarburos de forma segura desde la cabeza de pozo hasta las instalaciones de procesamiento. Mediante una ingeniería rigurosa y una gestión logística precisa, eliminamos los cuellos de botella de la cadena de suministro y maximizamos el flujo de recursos hacia las instalaciones de procesamiento y los mercados finales.',
        deliverables: [
          { title: 'Desarrollo y Soporte de Infraestructura', text: 'Dirigimos la planificación, construcción y soporte operativo de ductos, terminales e instalaciones de almacenamiento para entregar una infraestructura escalable diseñada para el flujo continuo.' },
          { title: 'Coordinación de Transporte y Logística', text: 'Brindamos una logística integral y una supervisión operativa total hacia y desde entornos complejos, integrando la gestión de la cadena de suministro directamente con la ejecución en campo.' },
          { title: 'Soluciones de Almacenamiento y Manejo', text: 'Gestionamos operaciones de almacenamiento complejas para garantizar la contención segura y la transferencia de productos energéticos, ayudando a sostener un suministro de mercado ininterrumpido.' }
        ]
      },
      {
        id: 'downstream',
        tag: 'Refinación y Distribución',
        header: 'Maximizando el Rendimiento, la Disponibilidad y la Entrega al Mercado',
        message: 'Aplicamos una ejecución estadounidense de primer nivel directamente a los activos de refinación y distribución para maximizar los rendimientos de procesamiento y asegurar la fiabilidad de la refinería. Trabajamos para convertir los hidrocarburos en productos de alto valor y gestionamos las operaciones finales de las terminales para lograr un flujo estable hacia el mercado.',
        deliverables: [
          { title: 'Soporte Operativo y Técnico', text: 'Ejecutamos intervenciones técnicas y operativas específicas para maximizar los rendimientos de la refinería y aumentar la capacidad de procesamiento de las instalaciones.' },
          { title: 'Integridad de Activos y Ejecución de Paradas de Planta', text: 'Dirigimos programas de mantenimiento y paradas de planta para asegurar la integridad técnica, mitigar el riesgo operativo y eliminar el tiempo de inactividad no planificado.' },
          { title: 'Operaciones de Terminal y Distribución Final', text: 'Gestionamos la logística integral de terminales y aseguramos las redes de distribución para garantizar un flujo estable e ininterrumpido de productos energéticos listos para el mercado.' }
        ]
      },
      {
        id: 'asset-protection',
        tag: 'Protección de Activos',
        header: 'Protegiendo los Activos Críticos y la Continuidad Operativa',
        message: 'El desarrollo energético y la protección de activos son fundamentales para el crecimiento nacional. A medida que las naciones amplían la producción e invierten en infraestructura crítica, asegurar estos activos es esencial para proteger los ingresos, mantener la continuidad operativa y atraer inversión a largo plazo.',
        deliverables: [
          { title: 'Evaluaciones de seguridad de infraestructura crítica y planificación de su protección' },
          { title: 'Programas de seguridad para petróleo, gas, energía eléctrica y ductos' },
          { title: 'Capacitación de fuerzas de protección y desarrollo de capacidades' },
          { title: 'Servicios de asesoría en operaciones de seguridad y centros de comando' },
          { title: 'Evaluación de riesgos, análisis de amenazas y planificación de respuesta a crisis' },
          { title: 'Programas de preparación ante emergencias y continuidad del negocio' },
          { title: 'Doctrina de seguridad, procedimientos y desarrollo de la fuerza laboral' },
          { title: 'Apoyo de asesoría estratégica para gobiernos y operadores energéticos' }
        ]
      },
      {
        id: 'energy-trading',
        tag: 'Comercialización y Logística de Energía',
        header: 'Conectando la Producción con los Mercados de Alta Demanda',
        message: 'Nuestra división de comercialización de energía integra una logística de primer nivel con el acceso a mercados globales, ejecutando operaciones físicas de crudo, productos refinados, GNL y LGN. Conectamos a los productores directamente con los usuarios finales industriales, gobernando el flujo físico de los recursos para garantizar un suministro fiable y maximizar el valor comercial en toda la cadena de valor energética.',
        deliverables: [
          { title: 'Comercialización Global y Compraventa (Offtake)', text: 'Ejecutamos operaciones físicas de crudo, productos refinados y líquidos del gas. Aseguramos contratos de compra directa (offtake) y estructuramos acuerdos de suministro que conectan la producción directamente con los mercados de alta demanda.' },
          { title: 'Ejecución Logística Integral', text: 'Gestionamos el flujo de hidrocarburos desde el activo hasta el comprador —transporte marítimo, almacenamiento y coordinación de la entrega— para garantizar una entrega global fiable.' },
          { title: 'Estructuración Comercial y Monetización', text: 'Gestionamos el ciclo de vida comercial completo, desde las transacciones spot hasta el suministro a largo plazo, con la visión de mercado necesaria para optimizar los precios y posicionar los activos para obtener el máximo retorno.' }
        ]
      }
    ],
    advantage: {
      header: 'La Ventaja de Ejecución de las Medianas Empresas Estadounidenses',
      message: 'Ejecutamos a un nivel de élite, sirviendo como su puerta de acceso a los equipos comerciales y técnicos ágiles y altamente especializados que impulsaron la revolución no convencional estadounidense.'
    },
    midMarket: [
      {
        title: 'Pedigrí de Élite',
        description: 'Acceda a los equipos técnicos especializados que impulsaron el crecimiento de los hidrocarburos en EE. UU.',
        image: '/images/midmarket-1.jpg'
      },
      {
        title: 'Ejecución Directa en el Activo',
        description: 'Asegure ingeniería y ejecución en campo de primer nivel directamente en la operación.',
        image: '/images/midmarket-2.jpg'
      },
      {
        title: 'Cero Lastre Burocrático',
        description: 'Evite la burocracia de las grandes compañías para acelerar los plazos y ejecutar con agilidad.',
        image: '/images/midmarket-3.jpg'
      }
    ],
    cta: {
      header: 'La Experiencia de la Cuenca Pérmica Llevada Directamente al Activo',
      message: 'Vea cómo llevamos las capacidades de la Cuenca Pérmica directamente a sus campos más exigentes en todo el mundo.',
      primary: { label: 'Explore Nuestro Enfoque', href: '/approach' },
      secondary: { label: 'Contacte a Nuestro Equipo', href: '/contact' }
    }
  },
  approachPage: {
    hero: {
      title: 'Convertir los Recursos en Libertad Económica y Estabilidad',
      subtitle: 'Intervenimos como un verdadero socio de producción. Ejecutamos en los lugares logísticamente más exigentes y construimos sistemas técnicos que su fuerza laboral puede sostener, todo respaldado por un modelo comercial orientado al desempeño.'
    },
    stakeholderTabs: {
      header: 'Alianzas Creadas para Impulsar el Crecimiento Energético',
      message: 'Freedom First trabaja con operadores, naciones anfitrionas y socios estratégicos para hacer avanzar los proyectos de hidrocarburos en entornos difíciles mediante una ejecución comprobada y modelos de alianza diseñados para generar valor a largo plazo.',
      tabs: {
        operators: {
          id: 'operators',
          title: 'Operadores',
          subtitle: 'Propietarios de Activos y Productores',
          text: 'Trabajamos con operadores que gestionan activos maduros, heredados o detenidos, donde la producción se ve frenada por cuellos de botella técnicos, desafíos de ejecución o limitaciones comerciales.',
          partnership: 'Freedom First aporta la ingeniería, el liderazgo de proyecto y el modelo de ejecución necesarios para hacer avanzar proyectos difíciles. Donde los modelos de contratistas convencionales se quedan cortos, intervenimos para romper los bloqueos, mejorar la economía del campo y elevar la producción.',
          points: [
            { title: 'Alineación Orientada a la Producción', text: 'Estructuramos nuestro rol en torno a un único objetivo: aumentar la producción y mejorar la economía del campo.' },
            { title: 'Ejecución Donde Importa', text: 'Asumimos los desafíos operativos, logísticos y de subsuelo que mantienen estancada la producción.' },
            { title: 'Modelo Orientado al Desempeño', text: 'Operamos con un modelo diseñado para recompensar el avance de la producción, no solo la actividad.' }
          ],
          ctaMsg: 'Lleve una Ejecución Comprobada a Sus Campos Más Exigentes',
          ctaText: 'Explore Nuestras Capacidades',
          ctaHref: '/capabilities'
        },
        'host-nations': {
          id: 'host-nations',
          title: 'Naciones Anfitrionas',
          subtitle: 'Estados Soberanos y Planificadores Energéticos Nacionales',
          text: 'Trabajamos con gobiernos e instituciones energéticas nacionales que buscan aumentar la producción interna, fortalecer la capacidad local y desarrollar sus recursos energéticos conforme a las prioridades nacionales.',
          partnership: 'Freedom First trabaja codo a codo con las naciones anfitrionas para elevar la producción, construir una capacidad operativa más sólida y dejar atrás sistemas que la fuerza laboral local pueda sostener a largo plazo.',
          points: [
            { title: 'Alineados con las Prioridades Nacionales', text: 'Estructuramos los proyectos para apoyar el crecimiento de la producción, el valor del activo a largo plazo y los objetivos nacionales más amplios.' },
            { title: 'Integración de la Fuerza Laboral Local', text: 'Trabajamos con el talento local y lo desarrollamos como parte de la ejecución, integrando a los equipos locales en los sistemas y estándares establecidos.' },
            { title: 'Estándares Estrictos en el Campo', text: 'Aplicamos sólidos estándares de HSE y operativos para proteger a las personas, la infraestructura y la continuidad de las operaciones.' }
          ],
          ctaMsg: 'Lleve la Ingeniería Estadounidense Directamente a Sus Activos Soberanos',
          ctaText: 'Conozca al Equipo Directivo',
          ctaHref: '/about#leadership'
        },
        'strategic-partners': {
          id: 'strategic-partners',
          title: 'Socios Estratégicos',
          subtitle: 'Socios de Apoyo en el País',
          text: 'Trabajamos con empresas de servicios locales, socios de la cadena de suministro y proveedores de infraestructura que aportan acceso local crítico, conocimiento operativo y capacidad de ejecución de última milla.',
          partnership: 'Lideramos con una gestión de proyectos especializada y una inversión de capital directa que se integra con socios locales de confianza. Creemos que los mejores resultados surgen de combinar la profundidad técnica con las capacidades locales, no de prescindir de ellas.',
          points: [
            { title: 'Apoyo a Nivel de Campo', text: 'Operamos a través de la infraestructura local, las cadenas de suministro y las relaciones operativas para reducir los retrasos y mantener el ritmo.' },
            { title: 'Estándares Compartidos', text: 'Nos asociamos con entidades locales dispuestas a operar bajo nuestros estándares de cumplimiento, ayudando a elevar las operaciones a un nivel de primera categoría.' },
            { title: 'Valor a Largo Plazo', text: 'Construimos alianzas diseñadas para generar trabajo recurrente, una ejecución más sólida y un valor sostenido para ambas partes.' }
          ],
          ctaMsg: 'Descubra Cómo Su Presencia Puede Apoyar Nuestras Operaciones de Campo',
          ctaText: 'Explore Nuestras Capacidades',
          ctaHref: '/capabilities'
        }
      }
    },
    focus: [
      {
        id: 'direct-to-asset',
        title: 'Diseñados para Cumplir en Entornos Exigentes y sin Demoras',
        eyebrow: 'Ejecución Directa en el Activo',
        desc: 'Llegar a los activos energéticos más remotos del mundo exige dominar una logística internacional compleja. Freedom First está diseñada para movilizar equipos especializados, maquinaria pesada y tecnología avanzada hacia y desde las ubicaciones más difíciles de alcanzar. Al controlar la logística, podemos movernos con la rapidez y la agilidad necesarias para resolver los cuellos de botella en tiempo real, aplicar metodologías comprobadas y volver a poner en marcha la producción detenida sin demoras.',
        subHeader: 'Nuestra Ventaja de Ejecución',
        points: [
          { title: 'Despliegue Ágil', text: 'Movilizamos talento de ingeniería especializado y cadenas de suministro directamente al campo, eliminando los retrasos de los intermediarios.' },
          { title: 'Soluciones Probadas en Campo', text: 'Aplicamos metodologías probadas para superar los desafíos de superficie y subsuelo más complejos.' },
          { title: 'Impulso Ininterrumpido', text: 'Lideramos con una gestión experimentada para asegurar que el trabajo avance según el cronograma y el presupuesto, acelerando los plazos de producción.' }
        ]
      },
      {
        id: 'hse-capability',
        title: 'Estructurados para una Ejecución Segura y una Transferencia de Conocimiento Sostenida',
        eyebrow: 'HSE y Capacidad Local',
        desc: 'La verdadera sostenibilidad exige proteger a las personas, el activo y el medio ambiente. Freedom First lleva estándares estadounidenses de Salud, Seguridad y Medio Ambiente (HSE) y una estricta cultura de cumplimiento a cada sitio donde operamos. Al mismo tiempo, estructuramos cada proyecto como una plataforma para la transferencia de conocimiento. Trabajamos codo a codo con los equipos locales para desarrollar la capacidad técnica necesaria, de modo que la nación anfitriona pueda operar y sostener los activos de forma independiente mucho después de la intervención inicial.',
        subHeader: 'Nuestro Estándar Operativo',
        points: [
          { title: 'Seguridad Inquebrantable (HSE)', text: 'Implementamos protocolos operativos desde el primer día para proteger al personal, mitigar el riesgo y asegurar operaciones de campo seguras e ininterrumpidas.' },
          { title: 'Protección de Activos', text: 'Gestionamos la infraestructura heredada con una estricta integridad técnica para asegurar que las intervenciones maximicen la producción sin comprometer la salud del yacimiento.' },
          { title: 'Transferencia de Conocimiento Práctica', text: 'Capacitamos a la fuerza laboral local mediante formación estructurada, integrándola en los sistemas establecidos para una continuidad operativa a largo plazo.' }
        ]
      },
      {
        id: 'commercial-alignment',
        title: 'Sustentados en el Riesgo Compartido y la Recompensa Orientada a la Producción',
        eyebrow: 'Alineación Comercial',
        desc: 'Nos comprometemos como verdaderos socios de producción, plenamente dispuestos a respaldar nuestra experiencia operativa con inversión de capital directa. En lugar de depender de los modelos de servicio tradicionales que se benefician de la producción existente, aportamos la flexibilidad de compartir el riesgo. Seguros de nuestra ejecución, estamos dispuestos a invertir nuestro propio capital y a obtener ganancias únicamente por los barriles incrementales que producimos. Esto alinea directamente nuestros retornos con sus objetivos nacionales: aumentar la producción, controlar los costos y asegurar el valor del activo a largo plazo.',
        subHeader: 'Nuestra Estructura Ideal',
        points: [
          { title: 'Retornos Orientados al Desempeño', text: 'Respaldamos nuestra confianza operativa con acuerdos comerciales vinculados exclusivamente al crecimiento incremental de la producción del activo.' },
          { title: 'Inversión Local Directa', text: 'Llevamos capital privado directamente a campos desatendidos o detenidos para liberar su potencial energético sin aumentar la deuda nacional.' },
          { title: 'Alineación con los Objetivos Nacionales', text: 'Estructuramos cada proyecto para apoyar directamente los objetivos más amplios del país anfitrión de autosuficiencia económica y estabilidad.' }
        ]
      }
    ]
  },
  insightsPage: {
    eyebrow: 'Perspectivas',
    title: 'Perspectivas desde el Campo sobre el Trabajo, los Mercados y lo que se Necesita para Cumplir',
    subhead: 'Freedom First comparte perspectivas desde el campo sobre cómo hacer avanzar los proyectos de hidrocarburos en entornos exigentes. Desde la ejecución en campo hasta las novedades del mercado y de la empresa, nuestra visión se forja en el propio trabajo.',
    categories: { all: 'Todas', emergingMarkets: 'Mercados Emergentes', fieldExecution: 'Ejecución en Campo', companyUpdates: 'Novedades de la Empresa' },
    articles: [
      { id: 1, title: 'La Reconstrucción de Libia Dependerá de la Ejecución, No de las Declaraciones', category: 'Mercados Emergentes' },
      { id: 2, title: 'El CEO de Freedom First Participa en un Panel del U.S. Africa Energy Forum', category: 'Novedades de la Empresa' },
      { id: 3, title: 'Las Lecciones y los Métodos Transferibles Aprendidos en la Cuenca Pérmica', category: 'Ejecución en Campo' }
    ],
    readMore: 'Leer Más',
    comingSoon: 'Próximamente',
    imageComingSoon: 'Imagen próximamente',
    noArticles: 'No se encontraron artículos para esta categoría.'
  },
  insightLibya: {
    backToInsights: 'Volver a Perspectivas',
    allInsights: 'Todas las Perspectivas',
    category: 'Mercados Emergentes',
    title: 'La Reconstrucción de Libia Dependerá de la Ejecución, No de las Declaraciones',
    paragraphs: [
      'Lo que ocurra en Libia determinará el norte de África, la seguridad del Mediterráneo, las dinámicas migratorias y los flujos energéticos regionales durante décadas. La estabilidad no surgirá únicamente de declaraciones, conferencias o simbolismos diplomáticos. La historia reciente lo ha dejado claro. La estabilidad a largo plazo de Libia provendrá de sistemas eléctricos en funcionamiento, infraestructura reconstruida, servicios esenciales fiables y la presencia operativa sostenida necesaria para que esos sistemas funcionen. Ese esfuerzo está siendo impulsado por actores externos, y Estados Unidos debería liderarlo.',
      'En Libia, la rapidez importa. Los retrasos no solo cuestan oportunidades comerciales: erosionan la confianza, debilitan la estabilidad y abren espacio para que competidores y adversarios establezcan su influencia.',
      'Estados Unidos no está ausente por falta de capacidad. Las empresas estadounidenses siguen estando entre las más competitivas del mundo en energía, infraestructura, logística, ingeniería e integración de sistemas avanzados. El desafío es estructural. Washington aún carece de un modelo coherente para desplegar con rapidez la fuerza comercial estadounidense en entornos frágiles o de transición. Y, sin embargo, las empresas estadounidenses suelen ser las más capaces y las más dispuestas a operar en condiciones difíciles.',
      'Los competidores se han adaptado más rápido. La Iniciativa de la Franja y la Ruta de China integra financiación, diplomacia, construcción y alineación política en una única oferta coordinada. Se mueven temprano, mantienen presencia física y entregan resultados visibles sobre el terreno.',
      'El enfoque estadounidense sigue siendo fragmentado y lento. Instituciones como la U.S. International Development Finance Corporation y el EXIM son herramientas poderosas, pero rara vez están sincronizadas para una ejecución rápida. Para cuando la financiación, las aprobaciones y los mecanismos de apoyo se alinean, la ventana estratégica a menudo se ha estrechado o cerrado por completo. En muchos casos, no se trata solo de un retraso, sino de una ausencia más amplia de interés sostenido.',
      'La respuesta no son más documentos de política ni marcos estratégicos. La respuesta es un modelo operativo diferente.',
      'La empresa privada estadounidense debería convertirse en el principal instrumento de la diplomacia económica en los mercados emergentes. La estabilidad en Libia no se logrará, en última instancia, solo mediante el lenguaje diplomático. La construirán empresas que inviertan capital, levanten infraestructura, restablezcan servicios, generen empleo y operen sistemas críticos a lo largo del tiempo. En la práctica, la influencia duradera suele establecerse mediante contratos, transacciones y una presencia operativa de largo plazo.',
      'El papel de Washington debería ser habilitar ese esfuerzo de forma temprana y decidida: alinear los instrumentos de financiación, reducir el riesgo de los proyectos, apoyar la ejecución comercial y operar en plazos medidos en semanas y meses, no en años. La función del gobierno no es sustituir a la empresa estadounidense, sino potenciarla como la vanguardia del compromiso estadounidense.',
      'Eso exige presencia física. La estrategia económica no puede ejecutarse de forma remota.',
      'La confianza no se construye solo mediante una interacción virtual o esporádica. Una Embajada de Estados Unidos plenamente operativa en Libia enviaría una señal clara a las empresas estadounidenses, a las partes interesadas libias y a los competidores regionales: que Estados Unidos habla en serio, está comprometido y dispuesto a permanecer involucrado. Es difícil lograr un compromiso comercial significativo sin una presencia diplomática y un apoyo reales sobre el terreno.',
      'Ningún paquete de financiación ni marco de política puede sustituir por completo esa señal. La presencia no es un lujo diplomático: es una necesidad estratégica y competitiva. El papel de la embajada no es dirigir el comercio, sino apoyar a las empresas estadounidenses dispuestas a ejecutar en entornos difíciles.',
      'Esto va más allá de Libia. En todos los mercados emergentes, el desarrollo y la estabilidad son inseparables. Allí donde las empresas estadounidenses invierten, construyen y permanecen presentes, ayudan a definir los resultados políticos y económicos de largo plazo. Donde no lo hacen, otros lo harán.',
      'Libia representa una oportunidad para demostrar que Estados Unidos aún puede competir donde más importa: no declarando la estabilidad, sino ayudando a construirla.'
    ]
  },
  contactPage: {
    eyebrow: 'Contacto',
    title: 'Conecte con los Ingenieros detrás de la Producción de Alto Rendimiento',
    subhead: 'Cuéntenos sobre su activo y reactivaremos la producción detenida.',
    formEyebrow: 'Recepción de Proyectos',
    formHeading: 'Cuéntenos sobre Su Activo',
    fields: {
      name: 'Nombre y Apellidos',
      company: 'Empresa / Organización',
      title: 'Cargo',
      email: 'Correo electrónico',
      phone: 'Teléfono',
      location: 'Ubicación del Activo / Proyecto',
      objective: 'Objetivo Operativo',
      challenge: 'Defina el Desafío Principal'
    },
    objectivePlaceholder: '— Seleccione un objetivo —',
    objectiveOptions: [
      'Exploración y Producción: Optimización y Recuperación de la Producción',
      'Transporte y Almacenamiento: Infraestructura y Aceleración del Flujo',
      'Refinación y Distribución: Optimización del Rendimiento y Fiabilidad',
      'Comercialización y Logística: Acceso a Mercados y Compra Física (Offtake)'
    ],
    challengePlaceholder: 'Proporcione una breve descripción del cuello de botella operativo o la limitación comercial que necesita resolver...',
    submit: 'Iniciar Contacto',
    directEyebrow: 'Contacto Directo',
    directHeading: 'Comuníquese Directamente con Nuestro Equipo',
    hqEyebrow: 'Sede Central',
    hqCity: 'The Woodlands, TX',
    hqAddress: '2700 Research Forest Dr.\nSuite 105\nThe Woodlands, Texas 77381',
    hqCountry: 'Estados Unidos de América',
    getDirections: 'Cómo Llegar',
    emailEyebrow: 'Correo electrónico',
    emailHeading: 'Póngase en Contacto',
    generalInquiries: 'Consultas Generales',
    footprintEyebrow: 'Presencia Operativa',
    footprintHeading: 'Presencia Global',
    footprintText: 'Freedom First despliega ingenieros y operadores en todo el mundo. Ya sea que los activos se encuentren en cuencas nacionales maduras o en los mercados emergentes logísticamente más desafiantes del mundo, llevamos la ejecución directamente a la cabeza de pozo.'
  },
  ui: {
    explore: 'Explorar',
    comingSoon: 'Próximamente',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    capabilitiesEyebrow: 'Capacidades',
    advantagesEyebrow: 'Ventajas',
    partnershipEconomic: 'Empoderamiento Económico',
    partnershipSynergy: 'Sinergia e Impacto',
    serviceMapEyebrow: 'Operaciones Globales',
    serviceMapAll: 'Todas las Operaciones',
    serviceMapActive: 'Activo',
    serviceMapHover: 'Pase el cursor sobre las regiones resaltadas para ver detalles',
    aboutMissionOrigin: 'Misión y Origen',
    aboutTechnicalPartner: 'Socio Técnico',
    aboutCoreValues: 'Valores Fundamentales',
    aboutLeadership: 'Liderazgo',
    aboutNextStep: 'Siguiente Paso',
    capAdvantageEyebrow: 'La Ventaja',
    capNextSteps: 'Siguientes Pasos',
    approachEyebrow: 'Nuestro Enfoque',
    thePartnership: 'La Alianza',
    stakeholdersEyebrow: 'Partes Interesadas',
    counsel: 'Asesoría',
    background: 'Trayectoria',
    readMore: 'Leer Más',
    close: 'Cerrar',
    rightsReserved: 'Todos los derechos reservados.'
  },
  seo: {
    home: { title: 'Freedom First Global — Soluciones Energéticas del Sector Privado para Mercados Emergentes', description: 'Freedom First Global lleva experiencia energética estadounidense comprobada en campo —exploración y producción, transporte y almacenamiento, refinación y distribución, protección de activos y comercialización— directamente a los activos críticos de los mercados emergentes. Soluciones del sector privado para la estabilidad y el crecimiento.' },
    about: { title: 'Nosotros', description: 'Freedom First Global es un socio técnico de producción creado para el terreno. Fundada en Texas, llevamos una experiencia energética emprendedora y una cultura orientada a la ejecución a los mercados emergentes: restablecemos la producción, modernizamos la infraestructura y desarrollamos la capacidad local.' },
    capabilities: { title: 'Capacidades', description: 'Desde las operaciones de exploración y producción y la infraestructura de transporte hasta el procesamiento de refinación, la protección de activos y la comercialización de energía, Freedom First Global impulsa un crecimiento medible de la producción en toda la cadena de valor energética.' },
    approach: { title: 'Nuestro Enfoque', description: 'Freedom First Global convierte los recursos en libertad económica y estabilidad, ejecutando en los entornos logísticamente más exigentes con logística directa al activo, desarrollo de la fuerza laboral local y alianzas orientadas al desempeño.' },
    insights: { title: 'Perspectivas', description: 'Perspectivas desde el campo de Freedom First Global sobre cómo hacer avanzar los proyectos de hidrocarburos en entornos exigentes: desde la ejecución en campo y los mercados emergentes hasta las novedades de la empresa.' },
    insightLibya: { title: 'La Reconstrucción de Libia Dependerá de la Ejecución, No de las Declaraciones', description: 'La estabilidad de Libia la construirán empresas que inviertan capital, levanten infraestructura y operen sistemas críticos, y la empresa privada estadounidense debería liderar. Una perspectiva de campo de Freedom First Global.' },
    contact: { title: 'Contacto', description: 'Conecte con los ingenieros detrás de la producción de alto rendimiento. Comuníquese con Freedom First Global para diagnosticar limitaciones, diseñar soluciones y reactivar la producción detenida. Oficinas en The Woodlands, Texas y Abu Dabi, EAU.' }
  }
};
