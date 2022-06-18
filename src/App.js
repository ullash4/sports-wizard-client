import './App.css';
import Footer from './Components/SharedPages/Footer/Footer';
import Header from './Components/SharedPages/Header/Header';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AnimatedRoutes from './Components/Routes/AnimatedRoutes';




function App() {
  
  return (
    <div>
      <Header></Header>
      <ToastContainer></ToastContainer>
      <AnimatedRoutes />
      <Footer></Footer>
    </div>
  );
}

export default App;
