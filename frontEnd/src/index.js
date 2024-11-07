import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { router } from './containers/routes/Route'
import { RouterProvider } from 'react-router-dom'
import theme from './theme'
import { ThemeProvider } from '@mui/material/styles'
import GlobalStyle from './components/GlobalStyle'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle>
        <RouterProvider router={router} />
      </GlobalStyle>
    </ThemeProvider>
  </React.StrictMode>
)

reportWebVitals()
