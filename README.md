# DevBoard 🖥️

A developer productivity dashboard built with **React + Vite**, **Recharts**, and **Lucide React** that aggregates GitHub activity, task management, and coding stats into a single sleek interface.

## ✨ Features

- **Overview** — commit activity area chart, recent commits feed, repo status cards
- **Git Activity** — weekly PR/issue/review bar chart, language distribution pie chart
- **Task Board** — interactive tasks with priority tags, status cycling (todo → in-progress → done), progress bar
- **Dev Stats** — skill radar chart, skill progress bars, GitHub-style contribution heatmap

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite |
| Charts | Recharts |
| Icons | Lucide React |
| Styling | Custom CSS + CSS Variables |
| Fonts | Space Mono + DM Sans |

## 🚀 Getting Started

```bash
git clone https://github.com/[your-username]/devboard.git
cd devboard
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## 📁 Project Structure

```
src/
├── components/
│   ├── Sidebar.jsx       # Navigation sidebar
│   └── Sidebar.css
├── pages/
│   ├── Overview.jsx      # Main dashboard
│   ├── Activity.jsx      # Git activity charts
│   ├── Tasks.jsx         # Interactive task board
│   └── Stats.jsx         # Dev stats & heatmap
├── data/
│   └── mockData.js       # Mock data
├── App.jsx
└── index.css
```

## 🔮 Roadmap

- [ ] GitHub OAuth + real API data
- [ ] Dark/light theme toggle
- [ ] Drag-and-drop tasks
- [ ] Export stats as PDF

## 📄 License

MIT © [Your Name]
