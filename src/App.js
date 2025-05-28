import './App.scss';
import Header from './Component/pages/Header/header'
import Footer from './Component/pages/Footer/Footer'
import AppRoutes from './Routes/index'
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <AppRoutes />
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
