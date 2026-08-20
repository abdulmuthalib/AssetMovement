import { PageShell } from '@/components/page-shell';
import { requestRows } from '@/lib/mock-data';

export default function RequestsPage() {
  return (
    <PageShell
      title="Asset Requests"
      subtitle="Review member and staff equipment requests and track each request lifecycle from submission to return."
      actions={
        <>
          <button className="secondary-btn">Filter</button>
          <button className="primary-btn">New Request</button>
        </>
      }
    >
      <div className="panel">
        <div className="section-header">
          <h2>Request List</h2>
          <button className="ghost-btn">Export PDF</button>
        </div>
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Requester</th>
                <th>Asset</th>
                <th>Qty</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {requestRows.map((row) => (
                <tr key={`${row.requester}-${row.asset}`}>
                  <td>{row.requester}</td>
                  <td>{row.asset}</td>
                  <td>{row.quantity}</td>
                  <td>{row.date}</td>
                  <td><span className={`badge ${row.status.toLowerCase()}`}>{row.status}</span></td>
                  <td className="action-row">
                    <button className="ghost-btn">Review</button>
                    <button className="ghost-btn">Assign</button>
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
