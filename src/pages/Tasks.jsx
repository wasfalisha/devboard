import { useState } from 'react'
import { tasks as initialTasks } from '../data/mockData'
import { CheckCircle2, Circle, Clock, AlertTriangle } from 'lucide-react'
import './Tasks.css'

const priorityColor = { high: 'red', medium: 'yellow', low: 'green' }
const statusIcon = {
  done: <CheckCircle2 size={16} color="#10b981" />,
  'in-progress': <Clock size={16} color="#3b82f6" />,
  todo: <Circle size={16} color="#64748b" />,
}

export default function Tasks() {
  const [tasks, setTasks] = useState(initialTasks)
  const [filter, setFilter] = useState('all')

  const toggle = (id) => {
    setTasks(prev => prev.map(t => {
      if (t.id !== id) return t
      const next = t.status === 'done' ? 'todo' : t.status === 'todo' ? 'in-progress' : 'done'
      return { ...t, status: next }
    }))
  }

  const counts = {
    all: tasks.length,
    todo: tasks.filter(t => t.status === 'todo').length,
    'in-progress': tasks.filter(t => t.status === 'in-progress').length,
    done: tasks.filter(t => t.status === 'done').length,
  }

  const visible = filter === 'all' ? tasks : tasks.filter(t => t.status === filter)
  const doneCount = tasks.filter(t => t.status === 'done').length
  const progress = Math.round((doneCount / tasks.length) * 100)

  return (
    <div className="fade-up">
      <div className="page-header">
        <h1>// task_board</h1>
        <p>Track your development tasks — click a task to cycle its status</p>
      </div>

      <div className="tasks-progress-bar card" style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--muted)' }}>Overall Progress</span>
          <span style={{ fontFamily: 'var(--mono)', fontSize: 20, fontWeight: 700, color: 'var(--accent)' }}>{progress}%</span>
        </div>
        <div style={{ background: 'var(--surface2)', borderRadius: 8, height: 8, overflow: 'hidden' }}>
          <div style={{ width: `${progress}%`, height: '100%', background: 'linear-gradient(90deg, #e8843a, #f0a060)', borderRadius: 8, transition: 'width 0.4s ease' }} />
        </div>
        <div style={{ display: 'flex', gap: 20, marginTop: 12, fontSize: 12, fontFamily: 'var(--mono)' }}>
          <span style={{ color: 'var(--muted)' }}>✅ {counts.done} done</span>
          <span style={{ color: 'var(--accent)' }}>⏳ {counts['in-progress']} in progress</span>
          <span style={{ color: 'var(--muted)' }}>○ {counts.todo} todo</span>
        </div>
      </div>

      <div className="filter-tabs" style={{ marginBottom: 20 }}>
        {['all', 'todo', 'in-progress', 'done'].map(f => (
          <button key={f} className={`filter-btn ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>
            {f} <span className="filter-count">{counts[f]}</span>
          </button>
        ))}
      </div>

      <div className="task-list">
        {visible.map(task => (
          <div key={task.id} className={`task-item ${task.status}`} onClick={() => toggle(task.id)}>
            <div className="task-status-icon">{statusIcon[task.status]}</div>
            <div className="task-body">
              <span className={`task-title ${task.status === 'done' ? 'done-text' : ''}`}>{task.title}</span>
              <div className="task-meta">
                <span className={`tag tag-${priorityColor[task.priority]}`}>{task.priority}</span>
                <span className="task-tag">{task.tag}</span>
                <span className="task-due"><Clock size={10} /> {task.due}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
