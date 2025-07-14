import { createSelectSchema, createInsertSchema } from 'drizzle-zod';
import { customers } from '@/db/schema';
import { z } from 'zod';

export const insertCustomerSchema = createInsertSchema(customers, {
  firstName: (schema) => schema.min(1, 'First name is required'),
  lastName: (schema) => schema.min(1, 'Last name is required'),
  email: (schema) => schema.email('Invalid email address'),
  phone: (schema) =>
    schema.regex(
      /^\d{3}-\d{3}-\d{4}$/,
      'Invalid Phone number format. Use XXX-XXX-XXXX',
    ),
  address1: (schema) => schema.min(1, 'Address is required'),
  city: (schema) => schema.min(1, 'City is required'),
  state: (schema) => schema.length(2, 'State must be exactly 2 characters'),
  zip: (schema) =>
    schema.regex(
      /^\d{5}(-\d{4})?$/,
      'Invalid Zip Code. Use 5 digits or 5 digits followed by a hyphen and 4 digits',
    ),
});

export const customerSelectSchema = createSelectSchema(customers);


export type InsertCustomerSchemaType = z.infer<typeof insertCustomerSchema>;
export type SelectCustomerSchemaType = z.infer<typeof customerSelectSchema>;

// Optional: If you need input/output types separately
// export type InsertCustomerInput = z.input<typeof insertCustomerSchema>;
// export type InsertCustomerOutput = z.output<typeof insertCustomerSchema>;
