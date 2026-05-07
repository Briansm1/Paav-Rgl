"use client";

import React, { useState } from 'react';
import { aiFaqAssistant } from '@/ai/flows/ai-faq-assistant';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const AiAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: '¡Hola! Soy el asistente virtual de Pilotos - ases al volante. ¿En qué puedo ayudarte hoy con respecto a nuestros cursos de conducción?' }
  ]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const result = await aiFaqAssistant({ question: userMessage });
      setMessages(prev => [...prev, { role: 'assistant', content: result.answer }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Lo siento, ha ocurrido un error. Por favor intenta de nuevo.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {!isOpen && (
        <Button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full shadow-2xl bg-primary hover:bg-primary/90 flex items-center justify-center animate-bounce hover:animate-none"
        >
          <MessageSquare className="w-8 h-8 text-white" />
        </Button>
      )}

      {isOpen && (
        <Card className="w-80 md:w-96 shadow-2xl border-none overflow-hidden animate-in zoom-in duration-200 origin-bottom-right">
          <CardHeader className="bg-primary p-4 flex flex-row items-center justify-between text-white">
            <div className="flex items-center gap-2">
              <Bot className="w-6 h-6" />
              <CardTitle className="text-lg">Asistente Pilotos</CardTitle>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full">
              <X className="w-5 h-5" />
            </button>
          </CardHeader>
          
          <CardContent className="p-0 bg-background">
            <ScrollArea className="h-[400px] p-4">
              <div className="space-y-4">
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex gap-2 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${m.role === 'user' ? 'bg-accent' : 'bg-primary/10'}`}>
                        {m.role === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-primary" />}
                      </div>
                      <div className={`p-3 rounded-2xl text-sm ${
                        m.role === 'user' 
                          ? 'bg-accent text-white rounded-tr-none' 
                          : 'bg-muted text-foreground rounded-tl-none'
                      }`}>
                        {m.content}
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="flex gap-2 items-center text-muted-foreground bg-muted p-3 rounded-2xl rounded-tl-none">
                      <Loader2 className="w-4 h-4 animate-spin text-primary" />
                      <span className="text-xs italic">Escribiendo...</span>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </CardContent>

          <CardFooter className="p-4 border-t bg-background">
            <form onSubmit={handleSubmit} className="flex w-full gap-2">
              <Input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Haz una pregunta..." 
                className="flex-grow rounded-full h-10 px-4 focus-visible:ring-primary"
              />
              <Button type="submit" disabled={isLoading} className="rounded-full w-10 h-10 p-0 bg-primary hover:bg-primary/90">
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};