export type Role = 'member' | 'staff' | 'admin';

export const stats = [
  { label: 'Total Assets', value: '248', trend: '+12%', tone: 'trend-up' },
  { label: 'Active Assignments', value: '64', trend: '+8%', tone: 'trend-up' },
  { label: 'Pending Approvals', value: '17', trend: '-3%', tone: 'trend-down' },
  { label: 'Caution Deposits', value: 'LKR 840k', trend: '+18%', tone: 'trend-up' },
];

export const assetRows = [
  { name: 'Wheelchair', type: 'Mobility', qty: 18, status: 'Available', deposit: 'LKR 4,500', serial: 'WH-2041' },
  { name: 'Oxygen Concentrator', type: 'Respiratory', qty: 9, status: 'In Use', deposit: 'LKR 12,000', serial: 'OX-1158' },
  { name: 'Digital BP Monitor', type: 'Diagnostic', qty: 26, status: 'Available', deposit: 'LKR 2,000', serial: 'BP-8892' },
  { name: 'Hospital Bed', type: 'Mobility Support', qty: 5, status: 'Maintenance', deposit: 'LKR 18,000', serial: 'HB-4410' },
];

export const requestRows = [
  { requester: 'Nimal Perera', asset: 'Wheelchair', quantity: 2, date: '2026-08-11', status: 'Pending' },
  { requester: 'Rashmi Silva', asset: 'Oxygen Concentrator', quantity: 1, date: '2026-08-09', status: 'Approved' },
  { requester: 'Anura Jayasuriya', asset: 'BP Monitor', quantity: 3, date: '2026-08-07', status: 'Returned' },
  { requester: 'Sajini Fernando', asset: 'Hospital Bed', quantity: 1, date: '2026-08-05', status: 'Rejected' },
];

export const returnRows = [
  { member: 'Dinesh Cooray', asset: 'Wheelchair', date: '2026-08-12', status: 'Pending Acceptance' },
  { member: 'Mala Bandara', asset: 'BP Monitor', date: '2026-08-15', status: 'Accepted' },
  { member: 'Ruwan Madushan', asset: 'Oxygen Unit', date: '2026-08-16', status: 'Charge Applied' },
];

export const activityRows = [
  { action: 'Request approved', user: 'Rashmi Silva', time: '2 hours ago' },
  { action: 'Equipment returned', user: 'Anura Jayasuriya', time: '4 hours ago' },
  { action: 'Damage inspection completed', user: 'Admin Team', time: 'Today' },
  { action: 'New asset added', user: 'Inventory Admin', time: 'Yesterday' },
];

export const reportRows = [
  { report: 'Asset Movement Report', owner: 'Operations', lastRun: '2026-08-17', format: 'PDF' },
  { report: 'Financial Summary', owner: 'Finance', lastRun: '2026-08-16', format: 'CSV' },
  { report: 'Utilization Overview', owner: 'Leadership', lastRun: '2026-08-15', format: 'Excel' },
];

export const roleOptions: { id: Role; label: string }[] = [
  { id: 'member', label: 'Member' },
  { id: 'staff', label: 'Staff' },
  { id: 'admin', label: 'Admin' },
];
