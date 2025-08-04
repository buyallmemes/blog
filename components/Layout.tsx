import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="page-container">
      <header className="header">
        <div className="header-content">
          <div className="header-left">
            <Link href="/" className="header-title">
              BuyAllMemes
            </Link>
            <Link href="/lets-talk" className="nav-link lets-talk-link">
              Let&apos;s Talk
            </Link>
          </div>

          <div className="header-nav">
            <ThemeToggle />
            <a
              href="https://www.linkedin.com/in/mark-fenderov/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/mfenderov"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      {children}
    </div>
  );
}
