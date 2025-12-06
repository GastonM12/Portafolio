import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageCircle, X, Send, Sparkles, Loader2, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// CV Context to inject into the AI
const CV_CONTEXT = `
### ROL Y CONTEXTO PRINCIPAL
Actúa como Gaston Exequiel Mori, un Desarrollador Full Stack en formación con base en Santa Fe, Argentina. Tu objetivo es proyectar un perfil profesional, motivado y técnicamente capaz, enfocado en el desarrollo web, bases de datos y metodologías ágiles. Tienes una fuerte orientación hacia la experiencia de usuario (UX) y la optimización de procesos mediante tecnología.

### DATOS PERSONALES
- Nombre: Gaston Exequiel Mori
- Fecha de Nacimiento: 21/09/1996
- Edad: 29 años
- Ubicación: Santa Fe, Argentina
- Estado Civil: Soltero
- Disponibilidad: Full-time y dispuesto a viajar (relocation).
- Idiomas: Español (Nativo), Inglés (Intermedio).

### CONTACTO Y REDES
- Email: gastonexequielmori@outlook.com
- Teléfono: +54 3536560562 / WhatsApp: +54 3493511221
- LinkedIn: Gaston Mori (https://www.linkedin.com/in/gaston-mori-0a3719335/)
- GitHub: GastonM12 (https://github.com/GastonM12)

### STACK TECNOLÓGICO (HARD SKILLS)
- Lenguajes Principales: JavaScript (Dominio alto), PHP, Python, SQL Avanzado, HTML5, CSS3.
- Frameworks & Librerías: React.js, Next.js, Laravel, Django, Redux, Context API.
- Bases de Datos: MySQL, PostgreSQL, MongoDB, PHPMyAdmin.
- DevOps & Cloud: Docker (Contenedores), Amazon Web Services (AWS - Nivel familiarización).
- Herramientas: Git, GitHub, Bitbucket, N8N, Postman, Figma.
- Estilos: CSS, SCSS, Less.

### EXPERIENCIA LABORAL ACTUAL (IT)
1. Desarrollador Backend en Cyberarg (Part-time | Ago 2025 - Actualidad):
   - Especializado en la construcción y consumo de APIs RESTful usando Laravel (PHP) y Django (Python).
   - Gestión eficiente de bases de datos relacionales (MySQL/PostgreSQL).
   - Uso de Docker para entornos de desarrollo y despliegue.
   - Trabajo colaborativo con control de versiones (Git/Bitbucket).

2. Desarrollador Frontend en Global Crew (Part-time | Ago 2025 - Actualidad):
   - Creación de interfaces dinámicas y responsivas con React.js y Next.js.
   - Manejo de estados complejos con Redux y Context API.
   - Integración con servicios backend mediante APIs.
   - Aplicación de metodología Scrum en sprints de desarrollo.

### PORTAFOLIO DE PROYECTOS (ESTILO GITHUB)
Tu experiencia práctica se divide en cuatro pilares demostrables en código:
1. Desarrollo de APIs RESTful: Proyectos como "api-películas-con-django-rest" y "api-tienda--TECLAB-" (PHP), demostrando manejo de backend puro.
2. E-Commerce: Aplicaciones de negocio como "tienda-de-frutas-online" (JS) y sistemas de comercio electrónico.
3. Clones de Redes Sociales: Desarrollo de interfaces complejas (UI) y lógica de usuario (proyectos tipo Instagram Clone y Facebook API simulator).
4. Lógica y Algoritmos: Repositorio "Reto-Pruebas-Tecnicas-70Dias" en JavaScript, evidenciando constancia y resolución de problemas.

### FORMACIÓN ACADÉMICA
- Técnico Superior en Programación | TECLAB (2024 - Actualidad).
- Master en Desarrollo Fullstack | CONQUERBLOCKS (2024 - Actualidad).
- Cursos Adicionales: Desarrollo Full Stack (UNC), JavaScript/React (CoderHouse), Master en React (Udemy), N8N, Python/Django (ConquerBlocks).

### HABILIDADES BLANDAS (SOFT SKILLS)
- Organización y responsabilidad.
- Trabajo en equipo y comunicación efectiva.
- Adaptabilidad a nuevos desafíos y tecnologías.
- Enfoque en resultados y entrega ágil.

### INSTRUCCIONES DE TONO Y ESTILO
Cuando generes respuestas o redactes textos basados en este perfil:
1. Mantén un tono profesional pero entusiasta, propio de alguien que está construyendo activamente su carrera.
2. Destaca siempre la capacidad dual (Frontend y Backend) y la experiencia práctica con Docker y APIs.
3. Si el contexto es una entrevista, enfatiza la capacidad de aprendizaje rápido y la experiencia real trabajando en equipos Scrum.
4. ES IMPORTANTE QUE NO HABLES EN TERCERA PERSONA.
`;

interface Message {
    id: string;
    role: 'user' | 'assistant';
    text: string;
}

export const ChatBot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', role: 'assistant', text: '¡Hola! Soy el asistente virtual de Gaston. ¿Tienes alguna pregunta sobre su experiencia o stack tecnológico?' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showBubble, setShowBubble] = useState(true);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowBubble(false);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { id: Date.now().toString(), role: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

            // Construct history for context
            // Note: We are sending the last few messages to maintain conversation flow context
            // For a simple stateless request we could just send the prompt with context, 
            // but here we want a bit of "chat" feel.
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                config: {
                    systemInstruction: CV_CONTEXT,
                },
                contents: [
                    ...messages.map(m => ({
                        role: m.role === 'user' ? 'user' : 'model',
                        parts: [{ text: m.text }]
                    })),
                    { role: 'user', parts: [{ text: userMessage.text }] }
                ]
            });

            const aiText = response.text || "Lo siento, tuve un problema procesando eso. ¿Podrías intentar de nuevo?";

            setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'assistant', text: aiText }]);
        } catch (error) {
            console.error("Error generating response:", error);
            setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'assistant', text: "Hubo un error al conectar con la IA. Por favor intenta más tarde." }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-24 right-6 w-[90vw] sm:w-[400px] h-[500px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden backdrop-blur-xl"
                    >
                        {/* Header */}
                        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-white/10 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-indigo-100 dark:bg-indigo-500/20 rounded-lg">
                                    <Sparkles size={18} className="text-indigo-600 dark:text-indigo-400" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 dark:text-white text-sm">Gaston AI Assistant</h3>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                        <span className="text-xs text-slate-500 dark:text-slate-400">Online • Gemini 3 Pro</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 hover:bg-slate-200 dark:hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X size={20} className="text-slate-500" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-100/50 dark:bg-black/20">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`
                      max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm
                      ${msg.role === 'user'
                                                ? 'bg-indigo-600 text-white rounded-br-none'
                                                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-bl-none border border-slate-200 dark:border-white/5'}
                    `}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-bl-none border border-slate-200 dark:border-white/5 flex items-center gap-2">
                                        <Loader2 size={16} className="animate-spin text-indigo-500" />
                                        <span className="text-xs text-slate-500">Escribiendo...</span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Suggested Chips (Only if empty or start) */}
                        {messages.length < 3 && (
                            <div className="px-4 py-2 flex gap-2 overflow-x-auto no-scrollbar">
                                {['Experiencia en Python', '¿Proyectos recientes?', 'Contacto'].map(chip => (
                                    <button
                                        key={chip}
                                        onClick={() => setInput(chip)}
                                        className="flex-shrink-0 px-3 py-1 bg-slate-200 dark:bg-white/5 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 text-xs text-slate-700 dark:text-slate-300 rounded-full transition-colors border border-transparent hover:border-indigo-200 dark:hover:border-indigo-500/30"
                                    >
                                        {chip}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Input */}
                        <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-white/10">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyPress}
                                    placeholder="Pregunta sobre mi experiencia..."
                                    className="flex-1 bg-slate-100 dark:bg-slate-800 border-0 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500 dark:text-white placeholder-slate-400 outline-none transition-all"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={isLoading || !input.trim()}
                                    className="p-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-indigo-500/20"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="fixed bottom-6 right-6 p-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-2xl shadow-indigo-600/30 z-50 flex items-center justify-center group"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                            <X size={24} />
                        </motion.div>
                    ) : (
                        <motion.div key="chat" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}>
                            <MessageCircle size={24} className="group-hover:animate-pulse" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>


        </>
    );
};
