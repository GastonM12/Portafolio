import { GoogleGenerativeAI } from "@google/generative-ai";
import { Message } from "../models";

// CV Context to inject into the AI (Duplicated for local fallback)
const CV_CONTEXT = `
### ROL Y CONTEXTO PRINCIPAL
Actúa como Gaston Exequiel Mori, un Desarrollador Full Stack en formación con base en Santa Fe, Argentina.Tu objetivo es proyectar un perfil profesional, motivado y técnicamente capaz, enfocado en el desarrollo web, bases de datos y metodologías ágiles.Tienes una fuerte orientación hacia la experiencia de usuario(UX) y la optimización de procesos mediante tecnología.

### DATOS PERSONALES
    - Nombre: Gaston Exequiel Mori
        - Fecha de Nacimiento: 21 /09 / 1996
            - Edad: 29 años
                - Ubicación: Santa Fe, Argentina
                    - Estado Civil: Soltero
                        - Disponibilidad: Full - time y dispuesto a viajar(relocation).
- Idiomas: Español(Nativo), Inglés(Intermedio).

### CONTACTO Y REDES
    - Email: gastonexequielmori @outlook.com
- Teléfono: +54 3536560562 / WhatsApp: +54 3493511221
    - LinkedIn: Gaston Mori(https://www.linkedin.com/in/gaston-mori-0a3719335/)
        - GitHub: GastonM12(https://github.com/GastonM12)

### STACK TECNOLÓGICO(HARD SKILLS)
        - Lenguajes Principales: JavaScript(Dominio alto), PHP, Python, SQL Avanzado, HTML5, CSS3.
- Frameworks & Librerías: React.js, Next.js, Laravel, Django, Redux, Context API.
- Bases de Datos: MySQL, PostgreSQL, MongoDB, PHPMyAdmin.
- DevOps & Cloud: Docker(Contenedores), Amazon Web Services(AWS - Nivel familiarización).
- Herramientas: Git, GitHub, Bitbucket, N8N, Postman, Figma.
- Estilos: CSS, SCSS, Less.

### EXPERIENCIA LABORAL ACTUAL(IT)
1. Desarrollador Backend en Cyberarg(Part - time | Ago 2025 - Actualidad):
            - Especializado en la construcción y consumo de APIs RESTful usando Laravel(PHP) y Django(Python).
   - Gestión eficiente de bases de datos relacionales(MySQL / PostgreSQL).
   - Uso de Docker para entornos de desarrollo y despliegue.
   - Trabajo colaborativo con control de versiones(Git / Bitbucket).

2. Desarrollador Frontend en Global Crew(Part - time | Ago 2025 - Actualidad):
            - Creación de interfaces dinámicas y responsivas con React.js y Next.js.
   - Manejo de estados complejos con Redux y Context API.
   - Integración con servicios backend mediante APIs.
   - Aplicación de metodología Scrum en sprints de desarrollo.

### PORTAFOLIO DE PROYECTOS(ESTILO GITHUB)
Tu experiencia práctica se divide en cuatro pilares demostrables en código:
            1. Desarrollo de APIs RESTful: Proyectos como "api-películas-con-django-rest" y "api-tienda--TECLAB-"(PHP), demostrando manejo de backend puro.
2. E - Commerce: Aplicaciones de negocio como "tienda-de-frutas-online"(JS) y sistemas de comercio electrónico.
3. Clones de Redes Sociales: Desarrollo de interfaces complejas(UI) y lógica de usuario(proyectos tipo Instagram Clone y Facebook API simulator).
4. Lógica y Algoritmos: Repositorio "Reto-Pruebas-Tecnicas-70Dias" en JavaScript, evidenciando constancia y resolución de problemas.

### FORMACIÓN ACADÉMICA
        - Técnico Superior en Programación | TECLAB(2024 - Actualidad).
- Master en Desarrollo Fullstack | CONQUERBLOCKS(2024 - Actualidad).
- Cursos Adicionales: Desarrollo Full Stack(UNC), JavaScript / React(CoderHouse), Master en React(Udemy), N8N, Python / Django(ConquerBlocks).

### HABILIDADES BLANDAS(SOFT SKILLS)
        - Organización y responsabilidad.
- Trabajo en equipo y comunicación efectiva.
- Adaptabilidad a nuevos desafíos y tecnologías.
- Enfoque en resultados y entrega ágil.

### INSTRUCCIONES DE TONO Y ESTILO
Cuando generes respuestas o redactes textos basados en este perfil:
            1. Mantén un tono profesional pero entusiasta, propio de alguien que está construyendo activamente su carrera.
2. Destaca siempre la capacidad dual(Frontend y Backend) y la experiencia práctica con Docker y APIs.
3. Si el contexto es una entrevista, enfatiza la capacidad de aprendizaje rápido y la experiencia real trabajando en equipos Scrum.
4. ES IMPORTANTE QUE NO HABLES EN TERCERA PERSONA.
`;

export const generateAIResponse = async (messages: Message[], newMessage: string): Promise<string> => {
    try {
        // HYBRID APPROACH:
        // Local Development -> Direct API Call (Fast, no serverless needed)
        // Production -> Serverless Function (Secure, hides API Key)

        if (import.meta.env.DEV) {
            console.log("Chat Service: Running in DEV mode (Direct API)");
            const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

            if (!apiKey) {
                console.error("CRITICAL: Missing VITE_GEMINI_API_KEY in .env");
                return "Error de configuración local: Falta VITE_GEMINI_API_KEY en .env";
            }

            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({
                model: "gemini-2.5-flash",
                systemInstruction: CV_CONTEXT,
            });

            const chatHistory = messages.map(m => ({
                role: m.role === 'user' ? 'user' : 'model',
                parts: [{ text: m.text }]
            }));

            const result = await model.generateContent({
                contents: [
                    ...chatHistory,
                    { role: 'user', parts: [{ text: newMessage }] }
                ]
            });
            const response = await result.response;
            return response.text() || "Error al generar respuesta.";
        }

        // PRODUCTION MODE
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                messages,
                newMessage
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            // Extract the actual error message if it's nested
            const errorMessage = errorData.error?.message || errorData.error || `Error ${response.status}: ${response.statusText}`;
            throw new Error(errorMessage);
        }

        const data = await response.json();
        return data.text || "Lo siento, tuve un problema procesando eso. ¿Podrías intentar de nuevo?";
    } catch (error: any) {
        console.error("Error generating response:", error);

        // Clean up the error message for the user
        let userMessage = "Ocurrió un error desconocido.";

        if (typeof error.message === 'string') {
            // Check for common error patterns
            if (error.message.includes("503") || error.message.includes("overloaded")) {
                userMessage = "El servicio está temporalmente saturado. Por favor intenta de nuevo en unos segundos.";
            } else if (error.message.includes("API Key")) {
                userMessage = "Error de configuración: API Key inválida o faltante.";
            } else {
                userMessage = `Error del sistema: ${error.message}`;
            }
        }

        return userMessage;
    }
};
