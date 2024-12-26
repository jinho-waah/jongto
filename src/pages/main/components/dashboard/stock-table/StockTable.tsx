import { useNavigate } from "react-router-dom";
import { Table } from "../table/Table";
import { TABLE_FIELDS } from "@/constants";
import { StockTableProps } from "../types";
import { formatNumber } from "@/utils/formatNumber/formatNubmer";

export const StockTable = ({ data, fields }: StockTableProps) => {
  const navigate = useNavigate();

  const goToStockDetails = (ticker: string) => {
    navigate(`/${ticker}`);
  };

  const headers = fields.map((field) => TABLE_FIELDS[field] || field);

  return (
    <Table headers={headers}>
      {data.map((row, index) => (
        <tr
          key={index}
          onClick={() => goToStockDetails(row.mksc_shrn_iscd)}
          className="border-b hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700 cursor-pointer"
        >
          {fields.map((field) => {
            let content = row[field];

            // 특정 필드에 숫자 포맷팅 적용
            if (
              field === "stck_prpr" ||
              field === "prdy_vrss" ||
              field === "acml_vol"
            ) {
              content = formatNumber(content);
            } else if (field === "prdy_ctrt") {
              content = `${formatNumber(content)}%`;
            }

            return (
              <td
                key={field}
                className="p-2 text-center text-gray-800 dark:text-gray-100"
              >
                {content}
              </td>
            );
          })}
        </tr>
      ))}
    </Table>
  );
};
