import Link from 'next/link';

const links = [
  { href: '/', label: 'Dashboard' },
  { href: '/assets', label: 'Assets' },
  { href: '/requests', label: 'Requests' },
  { href: '/approvals', label: 'Approvals' },
  { href: '/returns', label: 'Returns' },
  { href: '/reports', label: 'Reports' },
];

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">M</div>
        <div>
          <strong>Medical Asset</strong>
          <div className="muted">Register</div>
        </div>
      </div>

      <nav className="nav">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className={link.href === '/' ? 'active' : ''}>
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
