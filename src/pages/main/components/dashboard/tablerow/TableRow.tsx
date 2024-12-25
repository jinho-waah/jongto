interface TableRowProps {
  row: any;
  fields: string[];
  highlightField?: string;
}

export const TableRow = ({ row, fields, highlightField }: TableRowProps) => {
  return (
    <tr className="border-b hover:bg-gray-50">
      {fields.map((field, index) => (
        <td
          key={index}
          className={`${
            field === highlightField
              ? row[field]?.includes("+")
                ? "text-red-600"
                : "text-green-600"
              : ""
          }`}
        >
          {row[field]}
        </td>
      ))}
    </tr>
  );
};
