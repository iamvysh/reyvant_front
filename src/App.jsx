import { Routes,Route } from "react-router-dom"
import Landing from "./Pages/Landing"
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";


function App() {

  return (
    <>
     <Routes>

      
      

<Route path="/" element ={<Landing/>}/>
<Route path="/product/:id" element={<Product/>}/>
<Route path="/cart" element={<Cart/>}/>



</Routes>
      
    </>
  )
}

export default App
