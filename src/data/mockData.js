export const commitData = [
  { day: 'Mon', commits: 4 },
  { day: 'Tue', commits: 7 },
  { day: 'Wed', commits: 2 },
  { day: 'Thu', commits: 9 },
  { day: 'Fri', commits: 5 },
  { day: 'Sat', commits: 11 },
  { day: 'Sun', commits: 3 },
]

export const languageData = [
  { name: 'TypeScript', value: 42, color: '#e8843a' },
  { name: 'JavaScript', value: 28, color: '#d4a847' },
  { name: 'CSS', value: 18, color: '#9d7fea' },
  { name: 'HTML', value: 12, color: '#6db87a' },
]

export const weeklyActivity = [
  { week: 'W1', prs: 2, issues: 5, reviews: 3 },
  { week: 'W2', prs: 4, issues: 3, reviews: 6 },
  { week: 'W3', prs: 1, issues: 7, reviews: 2 },
  { week: 'W4', prs: 5, issues: 2, reviews: 8 },
  { week: 'W5', prs: 3, issues: 4, reviews: 4 },
  { week: 'W6', prs: 6, issues: 6, reviews: 5 },
]

export const recentCommits = [
  { id: 'a3f9c12', message: 'feat: add dark mode toggle to navbar', repo: 'devboard', time: '2h ago', type: 'feat' },
  { id: 'b8e2d45', message: 'fix: resolve mobile layout overflow issue', repo: 'portfolio', time: '5h ago', type: 'fix' },
  { id: 'c1a7f89', message: 'refactor: extract reusable Card component', repo: 'devboard', time: '1d ago', type: 'refactor' },
  { id: 'd5c3e21', message: 'chore: update dependencies to latest', repo: 'blog', time: '1d ago', type: 'chore' },
  { id: 'e9b4a67', message: 'feat: integrate GitHub REST API endpoints', repo: 'devboard', time: '2d ago', type: 'feat' },
  { id: 'f2d8c90', message: 'docs: add comprehensive README setup guide', repo: 'devboard', time: '3d ago', type: 'docs' },
]

export const tasks = [
  { id: 1, title: 'Implement authentication with JWT', priority: 'high', status: 'in-progress', tag: 'Backend', due: 'Apr 15' },
  { id: 2, title: 'Build responsive mobile navigation', priority: 'high', status: 'todo', tag: 'Frontend', due: 'Apr 16' },
  { id: 3, title: 'Write unit tests for API utils', priority: 'medium', status: 'todo', tag: 'Testing', due: 'Apr 18' },
  { id: 4, title: 'Design onboarding flow screens', priority: 'medium', status: 'in-progress', tag: 'Design', due: 'Apr 19' },
  { id: 5, title: 'Optimise bundle size and lazy loading', priority: 'low', status: 'todo', tag: 'Performance', due: 'Apr 22' },
  { id: 6, title: 'Set up CI/CD pipeline on GitHub Actions', priority: 'high', status: 'done', tag: 'DevOps', due: 'Apr 10' },
  { id: 7, title: 'Add Recharts data visualisation components', priority: 'medium', status: 'done', tag: 'Frontend', due: 'Apr 11' },
  { id: 8, title: 'Create reusable component library', priority: 'low', status: 'todo', tag: 'Frontend', due: 'Apr 25' },
]

export const repos = [
  { name: 'devboard', stars: 24, forks: 6, lang: 'TypeScript', updated: '2h ago', status: 'active' },
  { name: 'portfolio-v3', stars: 18, forks: 3, lang: 'JavaScript', updated: '3d ago', status: 'active' },
  { name: 'react-hooks-lib', stars: 47, forks: 12, lang: 'TypeScript', updated: '1w ago', status: 'stable' },
  { name: 'blog-cms', stars: 9, forks: 2, lang: 'JavaScript', updated: '2w ago', status: 'inactive' },
]
