import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalFonts } from '@goodreads-v2/component-library'
import './index.css'
import configureStore from './store'
import Routes from './routes'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalFonts />
      <Routes store={configureStore()}></Routes>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
