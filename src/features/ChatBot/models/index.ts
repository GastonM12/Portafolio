export type Role = 'user' | 'assistant' | 'model';

export interface Message {
    id: string;
    role: Role;
    text: string;
}

export interface ChatState {
    isOpen: boolean;
    messages: Message[];
    input: string;
    isLoading: boolean;
}
