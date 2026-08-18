import { PageShell } from '@/app/components/page-shell';
import { reportRows } from '@/lib/mock-data';

export default function ReportsPage() {
  return (
    <PageShell
      title="Reports"
      subtitle="Track movement, utilization, and financial summaries for a data-driven operations view."
      actions={
        <>
          <button className="secondary-btn">Schedule Report</button>
          <button className="primary-btn">Create Report</button>
        </>
      }
    >
      <div className="panel">
        <div className="section-header">
          <h2>Saved Reports</h2>
          <button className="ghost-btn">Export All</button>
        </div>
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Report</th>
                <th>Owner</th>
                <th>Last Run</th>
                <th>Format</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {reportRows.map((row) => (
                <tr key={row.report}>
                  <td>{row.report}</td>
                  <td>{row.owner}</td>
                  <td>{row.lastRun}</td>
                  <td>{row.format}</td>
                  <td className="action-row">
                    <button className="ghost-btn">View</button>
                    <button className="ghost-btn">Download</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageShell>
  );
}
