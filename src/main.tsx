import React from 'react'
import ReactDOM from 'react-dom/client'

// import App from './App'

import './index.css'
import MovieById from './pages/MovieById'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <MovieById/>
  </React.StrictMode>,
)
