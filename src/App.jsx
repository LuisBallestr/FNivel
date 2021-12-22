import { Login } from "./views/login";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import OrderList from "./views/order-list";

function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/order-list" element={<OrderList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
