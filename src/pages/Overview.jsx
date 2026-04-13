import { GitCommit, Star, CheckCircle, Zap, TrendingUp, Clock } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { commitData, recentCommits, repos } from '../data/mockData'
import './Overview.css'

const commitTypeColor = { feat: 'blue', fix: 'red', refactor: 'purple', chore: 'yellow', docs: 'green' }

const StatCard = ({ icon: Icon, label, value, sub, color }) => (
  <div className="card stat-card fade-up">
    <div className="stat-icon" style={{ background: `${color}18`, color }}>
      <Icon size={18} />
    </div>
    <div className="stat-body">
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
      {sub && <span className="stat-sub">{sub}</span>}
    </div>
  </div>
)

export default function Overview() {
  return (
    <div className="overview fade-up">
      <div className="page-header">
        <h1>// overview</h1>
        <p>Your developer activity at a glance</p>
      </div>

      <div className="grid-4" style={{ marginBottom: 24 }}>
        <StatCard icon={GitCommit} label="Total Commits" value="41" sub="↑ 12% this week" color="#3b82f6" />
        <StatCard icon={Star} label="Total Stars" value="98" sub="across 4 repos" color="#f59e0b" />
        <StatCard icon={CheckCircle} label="Tasks Done" value="2/8" sub="6 remaining" color="#10b981" />
        <StatCard icon={Zap} label="Streak" value="7 days" sub="keep it up 🔥" color="#8b5cf6" />
      </div>

      <div className="grid-2" style={{ marginBottom: 24 }}>
        <div className="card">
          <div className="card-header">
            <TrendingUp size={16} />
            <span>Commits This Week</span>
          </div>
          <ResponsiveContainer width="100%" height={180}>
            <AreaChart data={commitData}>
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#e8843a" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#e8843a" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="day" tick={{ fill: '#7a7570', fontSize: 11, fontFamily: 'Space Mono' }} axisLine={false} tickLine={false} />
              <YAxis hide />
              <Tooltip
                contentStyle={{ background: '#2e2e2e', border: '1px solid #3a3a3a', borderRadius: 8, color: '#eeebe6', fontFamily: 'Space Mono', fontSize: 12 }}
                cursor={{ stroke: '#e8843a', strokeWidth: 1, strokeDasharray: '4 4' }}
              />
              <Area type="monotone" dataKey="commits" stroke="#e8843a" strokeWidth={2} fill="url(#grad)" dot={{ fill: '#e8843a', r: 4 }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <div className="card-header">
            <Clock size={16} />
            <span>Recent Commits</span>
          </div>
          <div className="commit-list">
            {recentCommits.slice(0, 5).map(c => (
              <div key={c.id} className="commit-item">
                <code className="commit-hash">#{c.id.slice(0, 6)}</code>
                <span className="commit-msg">{c.message}</span>
                <span className={`tag tag-${commitTypeColor[c.type] || 'blue'}`}>{c.type}</span>
                <span className="commit-time">{c.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <GitCommit size={16} />
          <span>Repositories</span>
        </div>
        <div className="repo-grid">
          {repos.map(r => (
            <div key={r.name} className="repo-card">
              <div className="repo-top">
                <span className="repo-name">/{r.name}</span>
                <span className={`tag tag-${r.status === 'active' ? 'green' : r.status === 'stable' ? 'blue' : 'yellow'}`}>{r.status}</span>
              </div>
              <div className="repo-meta">
                <span>⭐ {r.stars}</span>
                <span>🍴 {r.forks}</span>
                <span className="repo-lang">{r.lang}</span>
                <span className="repo-time">{r.updated}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
