import { PageShell } from '@/app/components/page-shell';
import { assetRows } from '@/lib/mock-data';

export default function AssetsPage() {
  return (
    <PageShell
      title="Asset Master"
      subtitle="Control equipment inventory, status, quantities, and caution deposits across all locations."
      actions={
        <>
          <button className="secondary-btn">Export CSV</button>
          <button className="primary-btn">Add Asset</button>
        </>
      }
    >
      <div className="panel">
        <div className="section-header">
          <h2>Equipment Inventory</h2>
          <button className="ghost-btn">Filters</button>
        </div>
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Asset</th>
                <th>Type</th>
                <th>Serial</th>
                <th>Qty</th>
                <th>Status</th>
                <th>Deposit</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {assetRows.map((row) => (
                <tr key={row.serial}>
                  <td>{row.name}</td>
                  <td>{row.type}</td>
                  <td>{row.serial}</td>
                  <td>{row.qty}</td>
                  <td><span className={`badge ${row.status === 'Available' ? 'approved' : row.status === 'In Use' ? 'pending' : 'returned'}`}>{row.status}</span></td>
                  <td>{row.deposit}</td>
                  <td className="action-row">
                    <button className="ghost-btn">Edit</button>
                    <button className="ghost-btn">View</button>
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
