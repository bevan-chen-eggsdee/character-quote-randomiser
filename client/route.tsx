import {
  BrowserRouter as Router,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

//import different components

import App from './components/App'
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import GenerateQuoteButton from './components/GenerateQuoteButton'
import DisplayQuotes from './components/DisplayQuotes'
import { Options } from './components/Options'

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<GenerateQuoteButton />} />
    <Route path="quote" element={<DisplayQuotes />} />
    <Route path="qoute/options" element={<Options />} />
  </Route>,
)

const router = createBrowserRouter(routes)

export default router
