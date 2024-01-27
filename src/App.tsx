import { ToastContainer } from "react-toastify";
import Header from "./components/Header"
import AllRoutes from "./routes/AllRoutes"
import "react-toastify/dist/ReactToastify.css";

function App() {


  return (
    <div>
      <ToastContainer>
      </ToastContainer>
      <Header></Header>
      <AllRoutes></AllRoutes>
     
    </div>
  )
}

export default App
