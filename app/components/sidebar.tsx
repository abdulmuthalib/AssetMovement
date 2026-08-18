'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Dashboard' },
  { href: '/assets', label: 'Assets' },
  { href: '/requests', label: 'Requests' },
  { href: '/approvals', label: 'Approvals' },
  { href: '/returns', label: 'Returns' },
  { href: '/reports', label: 'Reports' },
];

export function Sidebar() {
  const pathname = usePathname();

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
        {links.map((link) => {
          const isActive = pathname === link.href || (pathname?.startsWith(link.href) && link.href !== '/');
          
          return (
            <Link 
              key={link.href} 
              href={link.href as any}
              className={isActive ? 'active' : ''}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
