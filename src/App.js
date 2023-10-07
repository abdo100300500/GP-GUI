import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminGui from "./Components/admin/adminGui";
import UserGui from "./Components/user/userGui";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserGui />} />
        <Route path="/admin" element={<AdminGui />} />
      </Routes>
      {/* <AdminGui /> */}
    </>
  );
}

export default App;
