```typescript
import { Message } from "../models";

export const generateAIResponse = async (messages: Message[], newMessage: string): Promise<string> => {
    try {
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
            throw new Error(errorData.error || `Error ${ response.status }: ${ response.statusText } `);
        }

        const data = await response.json();
        return data.text || "Lo siento, tuve un problema procesando eso. ¿Podrías intentar de nuevo?";
    } catch (error: any) {
        console.error("Error generating response:", error);
        return `Error del sistema: ${ error.message || "Ocurrió un error desconocido." } `;
    }
};
```
