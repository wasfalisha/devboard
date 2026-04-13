import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts'
import { weeklyActivity, languageData, recentCommits } from '../data/mockData'
import { GitPullRequest, GitMerge, AlertCircle } from 'lucide-react'

const commitTypeColor = { feat: 'blue', fix: 'red', refactor: 'purple', chore: 'yellow', docs: 'green' }

export default function Activity() {
  return (
    <div className="fade-up">
      <div className="page-header">
        <h1>// git_activity</h1>
        <p>Commits, pull requests, and code reviews</p>
      </div>

      <div className="grid-3" style={{ marginBottom: 24 }}>
        {[
          { icon: GitPullRequest, label: 'Pull Requests', value: '21', color: '#3b82f6' },
          { icon: GitMerge, label: 'Merged PRs', value: '17', color: '#10b981' },
          { icon: AlertCircle, label: 'Open Issues', value: '9', color: '#f59e0b' },
        ].map(({ icon: Icon, label, value, color }) => (
          <div className="card" key={label} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ background: `${color}18`, color, padding: 10, borderRadius: 10, display: 'flex' }}>
              <Icon size={18} />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 24, fontWeight: 700 }}>{value}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)' }}>{label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid-2" style={{ marginBottom: 24 }}>
        <div className="card">
          <div style={{ fontSize: 13, color: 'var(--muted)', fontFamily: 'var(--mono)', marginBottom: 16 }}>Weekly Activity Breakdown</div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={weeklyActivity} barCategoryGap="30%">
              <XAxis dataKey="week" tick={{ fill: '#7a7570', fontSize: 11, fontFamily: 'Space Mono' }} axisLine={false} tickLine={false} />
              <YAxis hide />
              <Tooltip contentStyle={{ background: '#2e2e2e', border: '1px solid #3a3a3a', borderRadius: 8, color: '#eeebe6', fontFamily: 'Space Mono', fontSize: 12 }} />
              <Bar dataKey="prs" fill="#e8843a" radius={[4,4,0,0]} name="PRs" />
              <Bar dataKey="issues" fill="#d4a847" radius={[4,4,0,0]} name="Issues" />
              <Bar dataKey="reviews" fill="#6db87a" radius={[4,4,0,0]} name="Reviews" />
            </BarChart>
          </ResponsiveContainer>
          <div style={{ display: 'flex', gap: 16, marginTop: 8, fontSize: 11, fontFamily: 'var(--mono)' }}>
            <span style={{ color: '#e8843a' }}>■ PRs</span>
            <span style={{ color: '#d4a847' }}>■ Issues</span>
            <span style={{ color: '#6db87a' }}>■ Reviews</span>
          </div>
        </div>

        <div className="card">
          <div style={{ fontSize: 13, color: 'var(--muted)', fontFamily: 'var(--mono)', marginBottom: 16 }}>Language Distribution</div>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={languageData} dataKey="value" cx="50%" cy="50%" outerRadius={80} innerRadius={45} paddingAngle={3}>
                {languageData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ background: '#2e2e2e', border: '1px solid #3a3a3a', borderRadius: 8, color: '#eeebe6', fontFamily: 'Space Mono', fontSize: 12 }} />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 4 }}>
            {languageData.map(l => (
              <span key={l.name} style={{ fontSize: 11, fontFamily: 'var(--mono)', color: l.color }}>
                ■ {l.name} {l.value}%
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="card">
        <div style={{ fontSize: 13, color: 'var(--muted)', fontFamily: 'var(--mono)', marginBottom: 16 }}>All Recent Commits</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {recentCommits.map(c => (
            <div key={c.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', background: 'var(--surface2)', borderRadius: 8, fontSize: 13 }}>
              <code style={{ fontFamily: 'var(--mono)', color: 'var(--accent2)', fontSize: 11, minWidth: 60 }}>#{c.id.slice(0, 7)}</code>
              <span style={{ flex: 1, color: 'var(--text)' }}>{c.message}</span>
              <span style={{ color: 'var(--muted)', fontSize: 11, fontFamily: 'var(--mono)' }}>{c.repo}</span>
              <span className={`tag tag-${commitTypeColor[c.type] || 'blue'}`}>{c.type}</span>
              <span style={{ color: 'var(--muted)', fontSize: 11, fontFamily: 'var(--mono)', minWidth: 40 }}>{c.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
