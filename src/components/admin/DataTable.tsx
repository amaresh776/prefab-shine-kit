import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface Column<T> {
  key: keyof T;
  header: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  className?: string;
}

export function DataTable<T extends Record<string, any>>({ 
  data, 
  columns, 
  className 
}: DataTableProps<T>) {
  const antdColumns: ColumnsType<T> = columns.map((column) => ({
    title: column.header,
    dataIndex: column.key as string,
    key: column.key as string,
    render: column.render 
      ? (value: any, record: T) => column.render!(value, record)
      : undefined,
  }));

  return (
    <Table<T>
      columns={antdColumns}
      dataSource={data}
      className={className}
      pagination={{ pageSize: 10 }}
      rowKey={(record, index) => index?.toString() || "0"}
    />
  );
}
