'use server';
/**
 * @fileOverview An AI assistant flow to answer frequently asked questions about a driving school.
 *
 * - aiFaqAssistant - A function that handles answering user questions.
 * - AiFaqAssistantInput - The input type for the aiFaqAssistant function.
 * - AiFaqAssistantOutput - The return type for the aiFaqAssistant function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AiFaqAssistantInputSchema = z.object({
  question: z.string().describe('The user\'s question about the driving school.'),
});
export type AiFaqAssistantInput = z.infer<typeof AiFaqAssistantInputSchema>;

const AiFaqAssistantOutputSchema = z.object({
  answer: z.string().describe('The AI assistant\'s answer to the user\'s question.'),
});
export type AiFaqAssistantOutput = z.infer<typeof AiFaqAssistantOutputSchema>;

const prompt = ai.definePrompt({
  name: 'aiFaqAssistantPrompt',
  input: { schema: AiFaqAssistantInputSchema },
  output: { schema: AiFaqAssistantOutputSchema },
  prompt: `Eres un asistente virtual amigable y útil para la academia de conducción "Pilotos - ases al volante". Tu objetivo es responder preguntas frecuentes sobre nuestros servicios, horarios, requisitos de inscripción y cualquier otra información relevante para potenciales estudiantes.

     Mantén tus respuestas claras, concisas y orientadas a ayudar al usuario a tomar una decisión informada. Si no tienes la información específica para una pregunta, puedes sugerir al usuario que se ponga en contacto directamente con la academia.

     Pregunta del usuario: {{{question}}}`,
});

const aiFaqAssistantFlow = ai.defineFlow(
  {
    name: 'aiFaqAssistantFlow',
    inputSchema: AiFaqAssistantInputSchema,
    outputSchema: AiFaqAssistantOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);

export async function aiFaqAssistant(input: AiFaqAssistantInput): Promise<AiFaqAssistantOutput> {
  return aiFaqAssistantFlow(input);
}