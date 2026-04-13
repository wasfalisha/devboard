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
          <span>YN</span>
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
