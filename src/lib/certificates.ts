export type ICertificate = {
  title: string;
  src: string;
  date: Date;
  type: "learningPath" | "course";
};

export const certificates: ICertificate[] = [
  {
    title: "Curso de Introducción a React Native",
    src: "https://platzi.com/simonflores_10/curso/2556-course/diploma-og/og.jpeg",
    date: new Date("2026-04-11"),
    type: "course",
  },
  {
    title: "Curso de Supabase",
    src: "https://platzi.com/simonflores_10/curso/12544-course/diploma-og/og.jpeg",
    date: new Date("2026-03-08"),
    type: "course",
  },
  {
    title: "Full Stack Developer con JavaScript",
    src: "https://platzi.com/simonflores_10/ruta/100-ruta/diploma-og/og.jpeg",
    date: new Date("2026-03-11"),
    type: "learningPath",
  },
  {
    title: "Curso de Responsive Design: Maquetación Mobile First",
    src: "https://platzi.com/simonflores_10/curso/2030-course/diploma-og/og.jpeg",
    date: new Date("2025-11-05"),
    type: "course",
  },
  {
    title: "Full Stack con Next.js",
    src: "https://platzi.com/simonflores_10/ruta/7049-ruta/diploma-og/og.jpeg",
    date: new Date("2025-11-15"),
    type: "learningPath",
  },
  {
    title: "Fundamentos de Data Science e Inteligencia Artificial",
    src: "https://platzi.com/simonflores_10/ruta/8263-ruta/diploma-og/og.jpeg",
    date: new Date("2023-03-01"),
    type: "learningPath",
  },
  {
    title: "Fundamentos de Programación",
    src: "https://platzi.com/simonflores_10/ruta/1-ruta/diploma-og/og.jpeg",
    date: new Date("2023-04-25"),
    type: "learningPath",
  },
  {
    title: "Inglés A1",
    src: "https://platzi.com/simonflores_10/ruta/1-ruta/diploma-og/og.jpeg",
    date: new Date("2023-06-29"),
    type: "learningPath",
  },
  {
    title: "Inglés A2",
    src: "https://platzi.com/simonflores_10/ruta/7049-ruta/diploma-og/og.jpeg",
    date: new Date("2025-08-28"),
    type: "learningPath",
  },
  {
    title: "Curso de Bases de Datos con MySQL y MariaDB",
    src: "https://platzi.com/simonflores_10/curso/4203-course/diploma-og/og.jpeg",
    date: new Date("2025-10-11"),
    type: "course",
  },
  {
    title: "Curso de Next.js Avanzado",
    src: "https://platzi.com/simonflores_10/curso/11553-course/diploma-og/og.jpeg",
    date: new Date("2025-03-30"),
    type: "course",
  },
  {
    title: "Curso de TailwindCSS",
    src: "https://platzi.com/simonflores_10/curso/11886-course/diploma-og/og.jpeg",
    date: new Date("2025-03-05"),
    type: "course",
  },
  {
    title: "Curso de Programación Orientada a Objetos con C#",
    src: "https://platzi.com/simonflores_10/curso/8036-course/diploma-og/og.jpeg",
    date: new Date("2025-02-27"),
    type: "course",
  },
  {
    title: "Curso de Introducción a la Nube con Azure",
    src: "https://platzi.com/simonflores_10/curso/2200-course/diploma-og/og.jpeg",
    date: new Date("2025-02-01"),
    type: "course",
  },
  {
    title: "Curso de Figma: Técnicas Avanzadas de Diseño",
    src: "https://platzi.com/simonflores_10/curso/7998-course/diploma-og/og.jpeg",
    date: new Date("2024-12-18"),
    type: "course",
  },
  {
    title: "Curso de Figma",
    src: "https://platzi.com/simonflores_10/curso/10992-course/diploma-og/og.jpeg",
    date: new Date("2024-12-13"),
    type: "course",
  },
  {
    title: "Curso de Inglés Básico A2: Conectores y Artículos",
    src: "https://platzi.com/simonflores_10/curso/2396-course/diploma-og/og.jpeg",
    date: new Date("2024-11-20"),
    type: "course",
  },
  {
    title: "Curso de React.js con TypeScript",
    src: "https://platzi.com/simonflores_10/curso/5481-course/diploma-og/og.jpeg",
    date: new Date("2024-11-07"),
    type: "course",
  },
  {
    title: "Curso de Figma: Prototipado e Interfaces",
    src: "https://platzi.com/simonflores_10/curso/4038-course/diploma-og/og.jpeg",
    date: new Date("2024-11-02"),
    type: "course",
  },
  {
    title: "Curso de React.js: Patrones de Render y Composición",
    src: "https://platzi.com/simonflores_10/curso/2457-course/diploma-og/og.jpeg",
    date: new Date("2024-09-30"),
    type: "course",
  },
  {
    title: "Curso de Next.js: Optimización y Manejo de Grandes Datasets",
    src: "https://platzi.com/simonflores_10/curso/2427-course/diploma-og/og.jpeg",
    date: new Date("2024-09-28"),
    type: "course",
  },
  {
    title: "Curso de Next.js: Seguridad Web con OWASP",
    src: "https://platzi.com/simonflores_10/curso/2429-course/diploma-og/og.jpeg",
    date: new Date("2024-09-24"),
    type: "course",
  },
  {
    title:
      "Curso de Next.js: Internacionalización de Aplicaciones Web con i18n",
    src: "https://platzi.com/simonflores_10/curso/2364-course/diploma-og/og.jpeg",
    date: new Date("2024-09-23"),
    type: "course",
  },
  {
    title: "Curso de Introducción a Java",
    src: "https://platzi.com/simonflores_10/curso/1631-course/diploma-og/og.jpeg",
    date: new Date("2024-07-06"),
    type: "course",
  },
  {
    title: "Curso de React.js con Vite.js y TailwindCSS",
    src: "https://platzi.com/simonflores_10/curso/7396-course/diploma-og/og.jpeg",
    date: new Date("2024-05-03"),
    type: "course",
  },
  {
    title: "Curso de Asincronismo con JavaScript",
    src: "https://platzi.com/simonflores_10/curso/3175-course/diploma-og/og.jpeg",
    date: new Date("2024-04-28"),
    type: "course",
  },
  {
    title: "Curso de Fundamentos de Diseño de Interfaces UX/UI",
    src: "https://platzi.com/simonflores_10/curso/5184-course/diploma-og/og.jpeg",
    date: new Date("2024-04-02"),
    type: "course",
  },
  {
    title: "Curso de Clean Code y Buenas Prácticas con JavaScript",
    src: "https://platzi.com/simonflores_10/curso/6240-course/diploma-og/og.jpeg",
    date: new Date("2023-12-06"),
    type: "course",
  },
  {
    title: "Curso de Manipulación de Arrays en JavaScript",
    src: "https://platzi.com/simonflores_10/curso/2461-course/diploma-og/og.jpeg",
    date: new Date("2023-11-30"),
    type: "course",
  },
  {
    title: "Curso de JavaScript Desde Cero",
    src: "https://platzi.com/simonflores_10/curso/8617-course/diploma-og/og.jpeg",
    date: new Date("2023-11-03"),
    type: "course",
  },
  {
    title: "Curso de Configuración de Entorno de Desarrollo en Linux",
    src: "https://platzi.com/simonflores_10/curso/2383-course/diploma-og/og.jpeg",
    date: new Date("2023-11-10"),
    type: "course",
  },
  {
    title: "Curso Básico de Programación Orientada a Objetos con JavaScript",
    src: "https://platzi.com/simonflores_10/curso/2332-course/diploma-og/og.jpeg",
    date: new Date("2023-11-09"),
    type: "course",
  },
  {
    title: "Curso de NPM: Gestión de Paquetes y Dependencias en JavaScript",
    src: "https://platzi.com/simonflores_10/curso/3578-course/diploma-og/og.jpeg",
    date: new Date("2023-10-29"),
    type: "course",
  },
  {
    title: "Curso Práctico de JavaScript",
    src: "https://platzi.com/simonflores_10/curso/3271-course/diploma-og/og.jpeg",
    date: new Date("2023-10-27"),
    type: "course",
  },
  {
    title: "Curso Práctico de Frontend Developer",
    src: "https://platzi.com/simonflores_10/curso/2477-course/diploma-og/og.jpeg",
    date: new Date("2023-10-25"),
    type: "course",
  },
  {
    title: "Curso Profesional de Git y GitHub",
    src: "https://platzi.com/simonflores_10/curso/1557-course/diploma-og/og.jpeg",
    date: new Date("2023-10-19"),
    type: "course",
  },
  {
    title: "Curso de ECMAScript: Historia y Versiones de JavaScript",
    src: "https://platzi.com/simonflores_10/curso/3504-course/diploma-og/og.jpeg",
    date: new Date("2023-10-12"),
    type: "course",
  },
  {
    title: "Curso de Inglés Básico A2: Preguntas y Respuestas Comunes",
    src: "https://platzi.com/simonflores_10/curso/4988-course/diploma-og/og.jpeg",
    date: new Date("2023-07-07"),
    type: "course",
  },
  {
    title: "Curso de Inglés Práctico sobre Elementos de Trabajo",
    src: "https://platzi.com/simonflores_10/curso/3996-course/diploma-og/og.jpeg",
    date: new Date("2023-06-29"),
    type: "course",
  },
  {
    title: "Curso de JavaScript Engine (V8) y el Navegador",
    src: "https://platzi.com/simonflores_10/curso/1798-course/diploma-og/og.jpeg",
    date: new Date("2023-04-30"),
    type: "course",
  },
  {
    title: "Curso Básico de JavaScript",
    src: "https://platzi.com/simonflores_10/curso/1814-course/diploma-og/og.jpeg",
    date: new Date("2023-04-30"),
    type: "course",
  },
  {
    title: "Curso de C++ Básico",
    src: "https://platzi.com/simonflores_10/curso/2372-course/diploma-og/og.jpeg",
    date: new Date("2023-04-26"),
    type: "course",
  },
  {
    title: "Curso de Inglés Básico para Principiantes - (2022)",
    src: "https://platzi.com/simonflores_10/curso/3093-course/diploma-og/og.jpeg",
    date: new Date("2023-04-26"),
    type: "course",
  },
  {
    title: "Curso de Inglés Práctico para Descripciones Personales (2020)",
    src: "https://platzi.com/simonflores_10/curso/2005-course/diploma-og/og.jpeg",
    date: new Date("2023-04-26"),
    type: "course",
  },
  {
    title: "Curso de Expresiones Regulares",
    src: "https://platzi.com/simonflores_10/curso/1301-course/diploma-og/og.jpeg",
    date: new Date("2023-04-25"),
    type: "course",
  },
  {
    title: "Curso de Buenas Prácticas y Código Limpio en C#",
    src: "https://platzi.com/simonflores_10/curso/4788-course/diploma-og/og.jpeg",
    date: new Date("2023-04-20"),
    type: "course",
  },
  {
    title: "Curso de Historia de la Programación: Lenguajes y Paradigmas",
    src: "https://platzi.com/simonflores_10/curso/2211-course/diploma-og/og.jpeg",
    date: new Date("2023-04-20"),
    type: "course",
  },
  {
    title: "Fundamentos de Ingeniería de Software",
    src: "https://platzi.com/simonflores_10/curso/1098-course/diploma-og/og.jpeg",
    date: new Date("2023-04-18"),
    type: "course",
  },
  {
    title:
      "Curso de Historia de la Innovación y el Emprendimiento con Diana Uribe",
    src: "https://platzi.com/simonflores_10/curso/2329-course/diploma-og/og.jpeg",
    date: new Date("2023-04-13"),
    type: "course",
  },
  {
    title: "Curso de Configuración de Entorno de Desarrollo en Windows",
    src: "https://platzi.com/simonflores_10/curso/6900-course/diploma-og/og.jpeg",
    date: new Date("2023-04-12"),
    type: "course",
  },
  {
    title: "Curso Básico de Programación con C#",
    src: "https://platzi.com/simonflores_10/curso/3086-course/diploma-og/og.jpeg",
    date: new Date("2023-04-11"),
    type: "course",
  },
  {
    title: "Curso de Funciones en C",
    src: "https://platzi.com/simonflores_10/curso/1968-course/diploma-og/og.jpeg",
    date: new Date("2023-04-09"),
    type: "course",
  },
  {
    title: "Curso de Control de Flujo en C",
    src: "https://platzi.com/simonflores_10/curso/1957-course/diploma-og/og.jpeg",
    date: new Date("2023-04-09"),
    type: "course",
  },
  {
    title: "Curso de Introducción a C",
    src: "https://platzi.com/simonflores_10/curso/1936-course/diploma-og/og.jpeg",
    date: new Date("2023-04-07"),
    type: "course",
  },
  {
    title: "Curso de Python: Comprehensions, Funciones y Manejo de Errores",
    src: "https://platzi.com/simonflores_10/curso/4260-course/diploma-og/og.jpeg",
    date: new Date("2023-04-02"),
    type: "course",
  },
  {
    title: "Curso de Fundamentos de Python",
    src: "https://platzi.com/simonflores_10/curso/4227-course/diploma-og/og.jpeg",
    date: new Date("2023-03-13"),
    type: "course",
  },
  {
    title: "Curso de Fundamentos de Pensamiento Lógico",
    src: "https://platzi.com/simonflores_10/ruta/8860-ruta/diploma-og/og.jpeg",
    date: new Date("2023-02-28"),
    type: "learningPath",
  },
  {
    title: "Curso de Lenguaje y Notación Matemática",
    src: "https://platzi.com/simonflores_10/curso/2884-course/diploma-og/og.jpeg",
    date: new Date("2023-03-01"),
    type: "course",
  },
  {
    title: "Curso de Fundamentos de Matemáticas para Física",
    src: "https://platzi.com/simonflores_10/curso/1447-course/diploma-og/og.jpeg",
    date: new Date("2023-02-28"),
    type: "course",
  },
  {
    title: "Curso de Pensamiento Lógico: Lenguajes de Programación",
    src: "https://platzi.com/simonflores_10/curso/3223-course/diploma-og/og.jpeg",
    date: new Date("2023-02-28"),
    type: "course",
  },
  {
    title:
      "Curso de Ética y Manejo de Datos para Data Science e Inteligencia Artificial",
    src: "https://platzi.com/simonflores_10/curso/3156-course/diploma-og/og.jpeg",
    date: new Date("2023-02-28"),
    type: "course",
  },
  {
    title: "Curso de Álgebra",
    src: "https://platzi.com/simonflores_10/curso/1449-course/diploma-og/og.jpeg",
    date: new Date("2022-11-11"),
    type: "course",
  },
  {
    title:
      "Curso de Introducción a Excel para Principiantes: Fundamentos y Formato de Hojas de Cálculo",
    src: "https://platzi.com/simonflores_10/curso/3639-course/diploma-og/og.jpeg",
    date: new Date("2022-10-25"),
    type: "course",
  },
  {
    title: "Curso de Análisis de Negocios para Ciencia de Datos",
    src: "https://platzi.com/simonflores_10/curso/2069-course/diploma-og/og.jpeg",
    date: new Date("2022-07-30"),
    type: "course",
  },
  {
    title: "Curso Básico de Python",
    src: "https://platzi.com/simonflores_10/curso/1937-course/diploma-og/og.jpeg",
    date: new Date("2022-07-29"),
    type: "course",
  },
  {
    title: "Audiotaller de Estrategias para Aprender Portugués",
    src: "https://platzi.com/simonflores_10/curso/2334-course/diploma-og/og.jpeg",
    date: new Date("2022-07-29"),
    type: "course",
  },
  {
    title: "Curso de Excel Básico",
    src: "https://platzi.com/simonflores_10/curso/1925-course/diploma-og/og.jpeg",
    date: new Date("2022-07-27"),
    type: "course",
  },
  {
    title:
      "Guía para Empezar una Carrera en Data Science e Inteligencia Artificial",
    src: "https://platzi.com/simonflores_10/curso/2807-course/diploma-og/og.jpeg",
    date: new Date("2022-07-26"),
    type: "course",
  },
  {
    title: "Curso de Fundamentos de Matemáticas",
    src: "https://platzi.com/simonflores_10/curso/1393-course/diploma-og/og.jpeg",
    date: new Date("2022-07-26"),
    type: "course",
  },
  {
    title:
      "Curso de Inglés Básico A1: Conversaciones Cortas y Habituales (2020)",
    src: "https://platzi.com/simonflores_10/curso/1945-course/diploma-og/og.jpeg",
    date: new Date("2022-07-22"),
    type: "course",
  },
  {
    title: "Curso de Introducción a la Terminal y Línea de Comandos",
    src: "https://platzi.com/simonflores_10/curso/2292-course/diploma-og/og.jpeg",
    date: new Date("2022-07-22"),
    type: "course",
  },
  {
    title: "Curso de Frontend Developer",
    src: "https://platzi.com/simonflores_10/curso/2467-course/diploma-og/og.jpeg",
    date: new Date("2022-07-22"),
    type: "course",
  },
  {
    title:
      "Curso de Prework: Configuración de Entorno de Desarrollo en Windows",
    src: "https://platzi.com/simonflores_10/curso/2042-course/diploma-og/og.jpeg",
    date: new Date("2022-07-18"),
    type: "course",
  },
  {
    title:
      "Curso de Pensamiento Lógico: Manejo de Datos, Estructuras y Funciones",
    src: "https://platzi.com/simonflores_10/curso/3222-course/diploma-og/og.jpeg",
    date: new Date("2022-07-16"),
    type: "course",
  },
  {
    title:
      "Curso de Introducción a la Web: Historia y Funcionamiento de Internet",
    src: "https://platzi.com/simonflores_10/curso/2053-course/diploma-og/og.jpeg",
    date: new Date("2022-07-16"),
    type: "course",
  },
  {
    title: "Curso de Pensamiento Lógico: Algoritmos y Diagramas de Flujo",
    src: "https://platzi.com/simonflores_10/curso/3221-course/diploma-og/og.jpeg",
    date: new Date("2022-07-15"),
    type: "course",
  },
  {
    title: "Curso Básico de Computadores e Informática",
    src: "https://platzi.com/simonflores_10/curso/2793-course/diploma-og/og.jpeg",
    date: new Date("2022-07-14"),
    type: "course",
  },
  {
    title: "Curso Básico de Programación",
    src: "https://platzi.com/simonflores_10/curso/1050-course/diploma-og/og.jpeg",
    date: new Date("2022-06-27"),
    type: "course",
  },
];

const getTags = (title: string) => {
  const tags = [];

  const rules = [
    { keywords: ["Next.js", "next"], tag: "nextjs" },
    { keywords: ["React"], tag: "react" },
    { keywords: ["TypeScript"], tag: "typescript" },
    { keywords: ["JavaScript", "ECMAScript"], tag: "javascript" },
    { keywords: ["C#"], tag: "csharp" },
    { keywords: ["Java"], tag: "java" },
    { keywords: ["Python"], tag: "python" },
    { keywords: ["C++"], tag: "cpp" },
    { keywords: ["C"], tag: "c" },
    { keywords: ["Tailwind"], tag: "tailwind" },
    { keywords: ["Figma"], tag: "figma" },
    { keywords: ["Azure"], tag: "azure" },
    { keywords: ["MySQL", "MariaDB", "Bases de Datos"], tag: "database" },
    { keywords: ["Git"], tag: "git" },
    { keywords: ["Linux"], tag: "linux" },
    { keywords: ["Excel"], tag: "excel" },
    { keywords: ["Inglés"], tag: "english" },
    { keywords: ["UX/UI"], tag: "design" },
    { keywords: ["Frontend"], tag: "frontend" },
    { keywords: ["Programación"], tag: "programming" },
  ];

  rules.forEach((rule) => {
    if (rule.keywords.some((keyword) => title.includes(keyword))) {
      tags.push(rule.tag);
    }
  });

  // Tags generales
  tags.push("software");

  if (
    tags.includes("react") ||
    tags.includes("nextjs") ||
    tags.includes("frontend")
  ) {
    tags.push("web");
  }

  if (
    tags.includes("javascript") ||
    tags.includes("typescript") ||
    tags.includes("csharp") ||
    tags.includes("java") ||
    tags.includes("python")
  ) {
    tags.push("programming");
  }

  return [...new Set(tags)].slice(0, 5);
};

export const certificatesWithTags: (ICertificate & { tags: string[] })[] =
  certificates.map((certificate) => ({
    ...certificate,
    tags: getTags(certificate.title),
  }));
