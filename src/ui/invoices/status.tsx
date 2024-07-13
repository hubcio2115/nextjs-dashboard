import { CheckIcon, ClockIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

interface InvoiceStatusProps {
  status: string;
}

export default function InvoiceStatus({ status }: InvoiceStatusProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-2 py-1 text-xs",
        {
          "bg-gray-100 text-gray-500": status === "pending",
          "bg-green-500 text-white": status === "paid",
        },
      )}
    >
      {(() => {
        switch (status) {
          case "pending":
            return (
              <>
                Pending
                <ClockIcon className="ml-1 w-4 text-gray-500" />
              </>
            );
          case "paid":
            return (
              <>
                Paid
                <CheckIcon className="ml-1 w-4 text-white" />
              </>
            );
          default:
            return null;
        }
      })()}
    </span>
  );
}
