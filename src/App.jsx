import { BrowserRouter , Routes ,Route } from "react-router-dom";
import Home from "./Components/Home";
import Admin from "./Components/Admin";

const App=()=>{
  const display=(
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/admin" element={<Admin />}/>
      </Routes>
      
      </BrowserRouter>
        
    </>
  )
  return display;
}
export default App