import { KRoutes } from 'kuririn-react-router'
import PageIndex from '@/pages/index/index'
import PageDetail1 from '@/pages/detail1/index'

function App() {
  return (
    <KRoutes
      pages={[
        { path: '/', component: PageIndex },
        { path: '/detail1', component: PageDetail1 },
      ]}
    />
  )
}

export default App
