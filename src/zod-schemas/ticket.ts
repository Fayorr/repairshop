import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { tickets } from '@/db/schema';
import { z } from 'zod';

export const insertTicketSchema = createInsertSchema(tickets, {
  id: z.union([z.number(), z.literal('New')]),
  title: (schema) => schema.title.min(1, 'Title is required'),
  description: (schema) => schema.description.optional(),
  tech: (schema) => schema.tech.email('Invalid email address'),
});

export const selectTicketSchema = createSelectSchema(tickets);

// Use explicit type casting to avoid drizzle-zod type inference issues
export type InsertTicketSchemaType = z.infer<typeof insertTicketSchema>;
export type SelectTicketSchemaType = z.infer<typeof selectTicketSchema>;
