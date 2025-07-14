'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
// import { Button } from '@/components/ui/button';
import {
  insertTicketSchema,
  InsertTicketSchemaType,
  SelectTicketSchemaType,
} from '@/zod-schemas/ticket';
import { SelectCustomerSchemaType } from '@/zod-schemas/customers';

type TicketFormProps = {
  customer: SelectCustomerSchemaType;
  ticket?: SelectTicketSchemaType;
};

export default function TicketForm({ customer, ticket }: TicketFormProps) {
  const defaultValues: InsertTicketSchemaType = {
    id: ticket?.id ?? 'New',
    title: ticket?.title ?? '',
    description: ticket?.description ?? '',
    tech: ticket?.tech ?? 'new-ticket@example.com',
    customerId: ticket?.customerId ?? customer.id,
    completed: ticket?.completed ?? false,
  };
  const form = useForm<InsertTicketSchemaType>({
    mode: 'onBlur',
    defaultValues,
    resolver: zodResolver(insertTicketSchema),
  });
  async function submitForm(data: InsertTicketSchemaType) {
    console.log(data);
  }
  return (
    <div className="flex flex-col gap-1 sm:px-8">
      <div>
        <h2 className="text-2xl font-bold">
          {ticket?.id ? 'Edit' : 'New'} Ticket{' '}
          {ticket?.id ? `# ${ticket.id}` : 'Form'}
        </h2>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitForm)}
          className="flex flex-col sm:flex-row gap-4 sm:gap-8"
        >
          <p>{JSON.stringify(form.getValues())}</p>
        </form>
      </Form>
    </div>
  );
}
