import Header from "./components/Header";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
   <Router>
    <Header/>
    <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        
        <Route path="/home" element={<Home/>}/>
        <Route path="/product/:id" element={<ProductDetail/>}/>
        <Route path="/cart" element={<Cart/>}/>
    </Routes>
   </Router>
    </div>
  );
}

export default App;
  