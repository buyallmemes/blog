import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="page-container">
      <header className="header">
        <div className="header-content">
          <Link href="/" className="header-title">
            BuyAllMemes
          </Link>
          
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
              href="https://github.com/buyallmemes" 
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
  )
}