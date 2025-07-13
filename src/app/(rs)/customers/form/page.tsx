import { getCustomer } from '@/lib/queries/getCustomers';
import { BackButton } from '@/components/ui/BackButton';

export default async function CustomerFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  try {
    const { customerId } = await searchParams;

    //Edit customer form
    if (customerId) {
      const customer = await getCustomer(parseInt(customerId));
      if (!customer) {
        return (
          <>
            <h2 className="text-2xl mb-2">
              Customer ID {customerId} not found.
            </h2>
            <BackButton title="Go Back" variant="default" />
          </>
        );
      }
      console.log(customer);
      // Put customer form component
    } else {
      //new customer form component
      return (
        <div>
          <h2 className="text-2xl mb-2">Add New Customer</h2>
          {/* Add your new customer form component here */}
        </div>
      );
    }
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    }
  }
}
