import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Overview from './pages/Overview'
import Activity from './pages/Activity'
import Tasks from './pages/Tasks'
import Stats from './pages/Stats'
import './index.css'

export default function App() {
  const [activePage, setActivePage] = useState('overview')

  const pages = {
    overview: <Overview />,
    activity: <Activity />,
    tasks: <Tasks />,
    stats: <Stats />,
  }

  return (
    <div className="app">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <main className="main-content">
        {pages[activePage]}
      </main>
    </div>
  )
}
