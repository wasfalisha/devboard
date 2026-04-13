import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer, AreaChart, Area, XAxis, Tooltip } from 'recharts'
import { commitData } from '../data/mockData'
import { Award, Code2, Flame, Target } from 'lucide-react'

const skillData = [
  { skill: 'React', value: 85 },
  { skill: 'TypeScript', value: 72 },
  { skill: 'CSS/UI', value: 90 },
  { skill: 'Next.js', value: 68 },
  { skill: 'Testing', value: 50 },
  { skill: 'DevOps', value: 45 },
]

const heatmapData = Array.from({ length: 52 }, (_, w) =>
  Array.from({ length: 7 }, (_, d) => ({
    week: w, day: d,
    count: Math.random() > 0.6 ? Math.floor(Math.random() * 8) : 0
  }))
).flat()

const getHeatColor = (count) => {
  if (count === 0) return '#2e2e2e'
  if (count <= 2) return '#3d2210'
  if (count <= 4) return '#a85520'
  if (count <= 6) return '#e8843a'
  return '#f0a060'
}

export default function Stats() {
  const totalContribs = heatmapData.reduce((s, d) => s + d.count, 0)

  return (
    <div className="fade-up">
      <div className="page-header">
        <h1>// dev_stats</h1>
        <p>Your coding performance and skill profile</p>
      </div>

      <div className="grid-4" style={{ marginBottom: 24 }}>
        {[
          { icon: Flame, label: 'Current Streak', value: '7 days', color: '#f59e0b' },
          { icon: Code2, label: 'Lines of Code', value: '12,430', color: '#3b82f6' },
          { icon: Target, label: 'Goals Met', value: '4 / 5', color: '#10b981' },
          { icon: Award, label: 'Top Language', value: 'TypeScript', color: '#8b5cf6' },
        ].map(({ icon: Icon, label, value, color }) => (
          <div className="card" key={label} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ background: `${color}18`, color, padding: 10, borderRadius: 10, display: 'flex', flexShrink: 0 }}>
              <Icon size={18} />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 18, fontWeight: 700 }}>{value}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)' }}>{label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid-2" style={{ marginBottom: 24 }}>
        <div className="card">
          <div style={{ fontSize: 13, color: 'var(--muted)', fontFamily: 'var(--mono)', marginBottom: 16 }}>Skill Radar</div>
          <ResponsiveContainer width="100%" height={240}>
            <RadarChart data={skillData}>
              <PolarGrid stroke="#3a3a3a" />
              <PolarAngleAxis dataKey="skill" tick={{ fill: '#7a7570', fontSize: 11, fontFamily: 'Space Mono' }} />
              <Radar dataKey="value" stroke="#e8843a" fill="#e8843a" fillOpacity={0.2} strokeWidth={2} dot={{ fill: '#e8843a', r: 4 }} />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <div style={{ fontSize: 13, color: 'var(--muted)', fontFamily: 'var(--mono)', marginBottom: 16 }}>Skill Levels</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {skillData.map(s => (
              <div key={s.skill}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 5 }}>
                  <span style={{ fontFamily: 'var(--mono)', color: 'var(--text)' }}>{s.skill}</span>
                  <span style={{ fontFamily: 'var(--mono)', color: 'var(--accent)' }}>{s.value}%</span>
                </div>
                <div style={{ background: 'var(--surface2)', borderRadius: 4, height: 6 }}>
                  <div style={{ width: `${s.value}%`, height: '100%', background: `linear-gradient(90deg, #e8843a, #f0a060)`, borderRadius: 4, transition: 'width 0.6s ease' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <span style={{ fontSize: 13, color: 'var(--muted)', fontFamily: 'var(--mono)' }}>Contribution Heatmap</span>
          <span style={{ fontSize: 12, fontFamily: 'var(--mono)', color: 'var(--accent)' }}>{totalContribs} contributions</span>
        </div>
        <div style={{ display: 'flex', gap: 3, flexWrap: 'wrap', overflowX: 'auto' }}>
          {Array.from({ length: 52 }, (_, w) => (
            <div key={w} style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {Array.from({ length: 7 }, (_, d) => {
                const entry = heatmapData.find(h => h.week === w && h.day === d)
                return (
                  <div key={d} title={`${entry?.count || 0} contributions`}
                    style={{ width: 11, height: 11, borderRadius: 2, background: getHeatColor(entry?.count || 0), transition: 'background 0.2s', cursor: 'default' }} />
                )
              })}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 12, fontSize: 11, fontFamily: 'var(--mono)', color: 'var(--muted)' }}>
          <span>Less</span>
          {['#2e2e2e', '#3d2210', '#a85520', '#e8843a', '#f0a060'].map(c => (
            <div key={c} style={{ width: 11, height: 11, borderRadius: 2, background: c }} />
          ))}
          <span>More</span>
        </div>
      </div>
    </div>
  )
}
