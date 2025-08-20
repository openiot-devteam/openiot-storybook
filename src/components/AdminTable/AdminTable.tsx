import React, { memo, ReactNode } from "react";
import { flexRender, Table } from "@tanstack/react-table";

type TableProps<T> = {
  table: Table<T>;
  className?: string;
};

function AdminTableComponent<T>({ table, className }: TableProps<T>) {
  // w-full (width: 100%) 사용 시 columnHelper 의 size가 보장되지 않음
  return (
    <table className={`admin-table ${className || ""}`}>
      <thead className="table-head">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                className="table-th"
                key={header.id}
                style={{ width: header.column.getSize() }}
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr className="table-tr" key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td
                className="table-td"
                key={cell.id}
                style={{ width: cell.column.getSize() }}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// 제네릭 유지 헬퍼
const typedMemo: <T>(
  c: (props: TableProps<T>) => ReactNode
) => (props: TableProps<T>) => ReactNode = memo;

export default typedMemo(AdminTableComponent);
