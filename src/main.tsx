import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.less'
import { setHtmlFontSize } from '../vite-plugin-rpx2rem'

setHtmlFontSize(750)

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
