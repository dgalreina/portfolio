export type Dictionary = typeof es;

export const es = {
  meta: {
    title: "Portfolio · Desarrollador full-stack senior",
    description:
      "Portfolio de un desarrollador full-stack senior JavaScript/TypeScript: proyectos, CV y contacto.",
  },
  nav: { projects: "Proyectos", cv: "CV", contact: "Contacto", language: "Idioma" },
  hero: {
    role: "Desarrollador full-stack senior",
    tagline:
      "Construyo aplicaciones web de punta a punta con React, Node.js, NestJS y MongoDB.",
    seeProjects: "Ver proyectos",
    contactMe: "Contactar",
  },
  projects: {
    title: "Proyectos",
    subtitle: "Tres apps, cada una con su propio backend. Pasa el ratón para verlas en acción y pulsa para ver el detalle.",
    demo: "Demo",
    repo: "Repositorio",
    inProgress: "En desarrollo",
    back: "Proyectos",
    features: "Qué hace",
    technologies: "Tecnologías",
    items: {
      "zitytraining": {"name": "Zitytraining", "description": "Gestión para entrenadores personales: agenda de sesiones, clientes, fichajes y festivos.", "details": ["Zitytraining es una aplicación web, pensada para usarse desde el móvil, con la que entrenadores personales organizan su día a día: la agenda de sesiones, sus clientes, el control horario y los planes de entrenamiento.", "El vídeo recorre el flujo principal: consultar el calendario por día o por semana, crear una sesión recurrente con varios clientes y comprobar cómo aparece en la agenda."], "features": ["Calendario por día y por semana, con filtros y envío de recordatorios a los clientes.", "Creación de sesiones: entrenador, hora, duración, repetición puntual o semanal, hasta 3 clientes por sesión y notas.", "Fichaje de entrada y salida, con registro manual y cierre automático a las 22:00 si se olvida fichar la salida.", "Festivos nacionales y de Castilla y León cargados automáticamente, más festivos locales añadidos a mano.", "Gestión de clientes, entrenamientos, planes, entrenadores y contabilidad.", "Perfil de cada entrenador, con su propio color en el calendario."], "gallery": []},
      "china-history": {"name": "Historia de China", "description": "Mapa interactivo de la historia de China: eliges un punto y un año y la IA reconstruye el momento con texto e ilustración basados en fuentes reales.", "details": ["China History es un mapa interactivo para recorrer la historia de China de la dinastía Xia a la Qing. Se elige un punto del mapa y un año en una línea de tiempo por dinastías, y la aplicación reconstruye ese momento con una narrativa histórica y una ilustración generada.", "Detrás hay un pipeline de IA que combina varios modelos y una base de conocimiento real: Claude escribe la narrativa y el prompt de la imagen, OpenAI genera la ilustración tomando como referencia fotos reales de piezas arqueológicas, y un tercer modelo revisa cada imagen y retroalimenta al historiador."], "features": ["Mapa satélite con la división territorial de cada época y línea de tiempo por dinastías, de Xia a Qing.", "Vista de mapa y vista de texto por hito, con la narrativa, la ilustración y enlaces a eventos cercanos y a la continuación de la historia.", "Geolocalización histórica real (CHGIS) y detección de hitos documentados en MongoDB.", "RAG sobre un libro de historia indexado con búsqueda vectorial en MongoDB Atlas, más contexto de arquitectura por dinastía y región.", "Más de 600 figuras reales para la vestimenta, filtradas por año, capítulo y lugar, y hasta 16 fotos reales como referencia de cada imagen.", "Revisión automática de las imágenes con un modelo de visión (Claude Opus) y panel de sugerencias donde el usuario aprueba o descarta cada una; las aprobadas se consolidan en una guía que mejora las narrativas."], "gallery": ["Pantalla de inicio y mapa satélite con la línea de tiempo por dinastías.", "Vista de texto de un hito: Nanyang, año 25 d. C., con la narrativa y la ilustración generadas.", "Arquitectura del pipeline de IA: orquestación con LangGraph, RAG, Claude, OpenAI y revisión de imágenes."]},
      "historical-documents-reader": {"name": "Historical Documents Reader", "description": "Aplicación para leer y explorar documentos históricos. Actualmente en construcción.", "details": ["TODO: descripción detallada del proyecto."], "features": [], "gallery": []},
    },
  },
  cv: {
    title: "CV",
    subtitle: "Experiencia, formación y tecnologías.",
    download: "Descargar CV (PDF)",
    summary: "Ingeniero de software senior con más de 14 años de experiencia construyendo aplicaciones web escalables, especializado en visualización 3D y soluciones con IA basadas en LLMs. Sólida base en desarrollo full-stack, diseño de sistemas y optimización de rendimiento.",
    experience: "Experiencia",
    education: "Formación",
    skills: "Tecnologías",
    languages: "Idiomas",
    skillLabels: {"frontend": "Frontend", "backend": "Backend", "databases": "Bases de datos", "ai": "IA / LLMs", "other": "Otros"},
    experienceItems: [
      {"title": "Desarrollador full-stack", "place": "Freelance · Madrid", "period": "may 2026 – actualidad", "description": "", "tech": []},
      {"title": "Desarrollador full-stack", "place": "Scriptum-AI · Madrid", "period": "feb 2025 – may 2026", "description": "Aplicaciones de producción basadas en LLMs. Leonardo: análisis de vistas judiciales (vídeo y audio) con transcripción, resumen e informes estructurados. Scriptum Contract: comparación inteligente de documentos. Integración de LLMs en producción, prompt engineering y arquitectura.", "tech": ["React", "Node.js", "Angular", "Python", "LLMs (Claude)"]},
      {"title": "Desarrollador full-stack", "place": "Nexplore (Dimática) · Madrid · clientes Nexplore US y Hotchief Germany", "period": "dic 2020 – feb 2025", "description": "Plataforma 3D de alto rendimiento para nubes de puntos, modelos 3D y ortofotos. Herramientas de medición, cálculo de volúmenes y mapeo de elementos; optimización del renderizado de grandes datasets en el navegador, en equipos remotos internacionales.", "tech": ["Angular", "Python", "React", "Three.js", "Node.js", "MongoDB", "WebGL"]},
      {"title": "Desarrollador full-stack", "place": "Mapfre (Capgemini) · Madrid", "period": "oct 2019 – dic 2020", "description": "NSEc, gestión de vehículos: aplicación interna construida desde cero, desde el análisis. Lideré el frontend en Angular, integré servicios REST y SOAP y colaboré en el backend con Java (Spring), en entorno Scrum.", "tech": ["Angular", "Java", "Spring", "REST/SOAP", "JUnit"]},
      {"title": "Coordinador del equipo DSD China", "place": "DigitalSmileDesign · Madrid", "period": "jul 2018 – oct 2019", "description": "Coordinación diaria del equipo de diseñadores de Shanghái, con viajes frecuentes para su formación y gestión, y desarrollo de herramientas para facilitar su trabajo, en un entorno de habla china.", "tech": ["Visual Basic"]},
      {"title": "Desarrollador full-stack", "place": "Vintegris · Madrid · cliente BBVA", "period": "jul 2015 – jul 2018", "description": "Sistema central de seguridad de BBVA: migración a microservicios, nuevas funcionalidades en componentes críticos, bases de datos SQL y MongoDB y herramientas internas de configuración con Vaadin, en entornos de alta seguridad y disponibilidad.", "tech": ["Java", "Spring", "Kubernetes", "MongoDB", "SQL", "Angular"]},
      {"title": "Desarrollador gráfico", "place": "Continex · Madrid · cliente Nolve", "period": "mar 2015 – jul 2015", "description": "Librería gráfica propia, con soporte de fuentes FreeType, para sustituir SDL y mejorar la flexibilidad y el rendimiento del renderizado.", "tech": ["C/C++", "SDL", "FreeType"]},
      {"title": "Desarrollador web", "place": "Freelance · Madrid y Londres", "period": "ago 2013 – mar 2015", "description": "Sitios y aplicaciones web para clientes y proyectos propios, del desarrollo al despliegue.", "tech": ["HTML", "CSS", "JavaScript"]},
      {"title": "Desarrollador Unity y technical artist", "place": "Topcells · Shanghái, China", "period": "jul 2012 – jun 2013", "description": "Aplicaciones interactivas 2D/3D: sistemas de juego en Unity3D y creación e integración de assets en tiempo real.", "tech": ["Unity3D", "C#"]},
      {"title": "Ingeniero informático y diseñador gráfico", "place": "Consulado General de España · Shanghái, China", "period": "dic 2010 – oct 2011", "description": "Infraestructura IT, servidores, redes y web, y soporte técnico en conferencias y eventos, en un entorno internacional.", "tech": []},
    ],
    educationItems: [
      {"title": "Ingeniería Informática", "place": "Universidad de Valladolid (UVA)", "period": "", "description": "Proyecto final de carrera aprobado con matrícula de honor.", "tech": []},
      {"title": "Máster en Desarrollo de Videojuegos", "place": "Universidad Complutense de Madrid (UCM)", "period": "", "description": "", "tech": []},
      {"title": "Máster en Diseño 3D", "place": "Trazos · Madrid", "period": "", "description": "", "tech": []},
    ],
    languageItems: [
      {"name": "Español", "level": "Nativo"},
      {"name": "Inglés", "level": "C1"},
      {"name": "Chino", "level": "Avanzado · HSK 4 (B1), certificado HSK 3"},
    ],
  },
  contact: {
    title: "Contacto",
    text: "¿Tienes un proyecto o una oferta? Escríbeme y te respondo en cuanto pueda.",
    email: "Enviar un email",
  },
  footer: "Hecho con Next.js y Tailwind CSS",
};
