type DataTableProps = {
  columns: string[];
  rows: Array<Record<string, string | number | React.ReactNode>>;
};

export function DataTable({ columns, rows }: DataTableProps) {
  return (
    <div className="table-wrap panel">
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={`${column}-${index}`}>{row[column] ?? '-'}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
