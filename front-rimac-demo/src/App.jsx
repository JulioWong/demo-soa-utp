import React from 'react';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import DetailPage from './pages/DetailPage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => (
    <Router>
        <Switch>
          <Route exact path="/" element={<MainPage />} /> 
          <Route exact path="/detalle/:insuranceId" element={<DetailPage />} /> 
          <Route path="*" element={<NotFoundPage />} />
        </Switch>
    </Router>
)

export default App