interface TableProps {
  headers: string[];
  children: React.ReactNode;
}

export const Table = ({ headers, children }: TableProps) => {
  return (
    <table className="w-full text-sm border-collapse table-fixed">
      <thead className="bg-gray-100 dark:bg-gray-800 dark:text-gray-100 border-b dark:border-gray-700">
        <tr>
          {headers.map((header, index) => (
            <th
              key={index}
              className="p-2 text-center text-gray-700 dark:text-gray-200"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody className="p-2 text-center text-gray-900 dark:text-gray-300">
        {children}
      </tbody>
    </table>
  );
};
