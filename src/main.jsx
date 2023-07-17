import React from 'react'
import ReactDOM from 'react-dom'
import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Homepage/HomePage'
import Scene from './pages/Scene/Scene'
import Error from './pages/Error/Error'
import theme2 from './styles/nextUiTheme';


ReactDOM.render(
  <React.StrictMode>
    <NextUIProvider theme={theme2}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/scene" element={<Scene />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </NextUIProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
