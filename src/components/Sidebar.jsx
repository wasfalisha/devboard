import { LayoutDashboard, GitCommit, CheckSquare, BarChart2, Terminal, Zap } from 'lucide-react'
import './Sidebar.css'

const navItems = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'activity', label: 'Git Activity', icon: GitCommit },
  { id: 'tasks', label: 'Tasks', icon: CheckSquare },
  { id: 'stats', label: 'Stats', icon: BarChart2 },
]

export default function Sidebar({ activePage, setActivePage }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <Terminal size={18} className="logo-icon" />
        <span>DevBoard</span>
        <span className="logo-version">v1.0</span>
      </div>

      <div className="sidebar-user">
        <div className="avatar">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
          </svg>
          <span className="online-dot pulse" />
        </div>
        <div className="user-info">
          <span className="user-name">wasif ali shah</span>
          <span className="user-role">Frontend Dev</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        <p className="nav-label">WORKSPACE</p>
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            className={`nav-item ${activePage === id ? 'active' : ''}`}
            onClick={() => setActivePage(id)}
          >
            <Icon size={16} />
            <span>{label}</span>
            {activePage === id && <span className="nav-dot" />}
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <Zap size={12} className="footer-icon" />
        <span>Built with React + Vite</span>
      </div>
    </aside>
  )
}
