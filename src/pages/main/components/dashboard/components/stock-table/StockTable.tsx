import { useNavigate } from "react-router-dom";
import { Table } from "../table/Table";
import { TABLE_FIELDS } from "@/constants";

interface StockTableProps {
  data: any[];
  fields: string[];
  highlightField?: string;
}

export const StockTable = ({
  data,
  fields,
  highlightField,
}: StockTableProps) => {
  const navigate = useNavigate();

  const goToStockDetails = (ticker: string) => {
    navigate(`/${ticker}`);
  };

  const headers = [
    "순위",
    ...fields.map((field) => TABLE_FIELDS[field] || field),
  ];

  return (
    <Table headers={headers}>
      {data.map((row, index) => (
        <tr
          key={index}
          onClick={() => goToStockDetails(row.code)}
          className="border-b hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700 cursor-pointer"
        >
          <td className="w-6 p-2 text-center font-semibold text-gray-600 dark:text-gray-300">
            {index + 1}
          </td>

          {fields.map((field) => (
            <td
              key={field}
              className={`p-2 text-center ${
                field === highlightField
                  ? row[field]?.includes("-")
                    ? "text-red-600"
                    : "text-green-600"
                  : "text-gray-800 dark:text-gray-100"
              }`}
            >
              {row[field]}
            </td>
          ))}
        </tr>
      ))}
    </Table>
  );
};
