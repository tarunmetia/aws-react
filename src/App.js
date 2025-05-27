import './App.scss';
import Header from './Component/pages/Header/header'
import Home from './Component/pages/Main/Home'
import AppRoutes from './Routes/index'
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
